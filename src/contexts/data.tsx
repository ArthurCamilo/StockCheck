import React, { createContext, useState, useEffect, useContext } from 'react';
import Movement from '../models/movement';
import Product from '../models/product';
import Supplier from '../models/supplier';
import Notification from '../models/notifications';

interface DataContextProps {
    products: Product[];
    product: Product | null;
    handleProductEdit: Function;
    handleProductDelete: Function;
    editProduct: Function;
    movements: Movement[];
    movement: Movement | null;
    handleMovementEdit: Function;
    handleMovementDelete: Function;
    editMovement: Function;
    suppliers: Supplier[];
    supplier: Supplier | null;
    handleSupplierEdit: Function;
    handleSupplierDelete: Function;
    editSupplier: Function;
    returnToList: Function;
    deleteNotification: Function;
    notifications: Notification[];
}

const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC = ({children}) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null>(null);
   
    const [movements, setMovements] = useState<Movement[]>([]);
    const [movement, setMovement] = useState<Movement | null>(null);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [supplier, setSupplier] = useState<Supplier | null>(null);

    const [notifications, setNotifications] = useState<Notification[]>([]);

    async function loadStoragedData() {
        const productsStorage = localStorage.getItem('@STOCKCHECKData:products');
        const movementsStorage = localStorage.getItem('@STOCKCHECKData:movements');
        const suppliersStorage = localStorage.getItem('@STOCKCHECKData:suppliers');
        const notificationsStorage = localStorage.getItem('@STOCKCHECKData:notifications');
        if (productsStorage && movementsStorage && suppliersStorage && notificationsStorage) {
            setProducts(JSON.parse(productsStorage));
            setMovements(JSON.parse(movementsStorage));
            setSuppliers(JSON.parse(suppliersStorage));
            setNotifications(JSON.parse(notificationsStorage));
        }
    }

    useEffect(() => {
        loadStoragedData();
    }, [])

    function setData(products: Product[], movements: Movement[], suppliers: Supplier[], notifications: Notification[]) {
        localStorage.setItem('@STOCKCHECKData:products', JSON.stringify(products));
        localStorage.setItem('@STOCKCHECKData:movements', JSON.stringify(movements));
        localStorage.setItem('@STOCKCHECKData:suppliers', JSON.stringify(suppliers));
        localStorage.setItem('@STOCKCHECKData:notifications', JSON.stringify(notifications));
        loadStoragedData();
    }
    
    function handleProductEdit(editedProduct: Product) {
        let productsCopy = products.slice(); 
        let index = productsCopy.indexOf(product ?? {} as Product);
        if (index  !== -1) {
            productsCopy[index] = editedProduct;
        } else {
            productsCopy.unshift(editedProduct);
        }
        setProducts(productsCopy);
        setProduct(null);

        setData(productsCopy, movements, suppliers, notifications);
    }

    function handleProductDelete() {
        let productsCopy = products.slice(); 
        let index = productsCopy.indexOf(product ?? {} as Product);
        productsCopy.splice(index, 1);
        setProducts(productsCopy);
        setProduct(null);
        
        setData(productsCopy, movements, suppliers, notifications);
    }

    function deleteNotification(notification: Notification) {
        let notificationsCopy = notifications.slice(); 
        let index = notificationsCopy.indexOf(notification ?? {} as Notification);
        notificationsCopy.splice(index, 1);
        setNotifications(notificationsCopy);
        setData(products, movements, suppliers, notificationsCopy);
    }

    function editProduct(product: Product | null) {
        if (product === null) {
            setProduct({ ID: 0, Name: '', Quantity: 0, Value: 0, MinQuantity: 0, MaxQuantity: 0 });
        } else {
            setProduct(product);
        }
    }

    function handleMovementEdit(editedMovement: Movement) {
        let movementsCopy = movements.slice(); 
        let index = movementsCopy.indexOf(movement ?? {} as Movement);
        let product = products.find(prod => prod.Name === editedMovement.Product) ?? {} as Product;
        if (index  !== -1) {
            let previousQty = movementsCopy[index].Quantity;
            let currentQty = editedMovement.Quantity;
            let productSum = previousQty - currentQty;
            if (editedMovement.Type == 'Entrada') {
                product.Quantity += productSum;
            } else {
                product.Quantity -= productSum;
            }
            handleProductEdit(product);
            movementsCopy[index] = editedMovement;
        } else {
            if (editedMovement.Type == 'Entrada') {
                product.Quantity += editedMovement.Quantity;
            } else {
                product.Quantity -= editedMovement.Quantity;
            }
            movementsCopy.unshift(editedMovement);
        }

        let notificationsCopy = notifications.slice();

        if (product.MinQuantity != null && product.Quantity < product.MinQuantity) {
            notificationsCopy.unshift({ Product: product.ID, Msg: `O produto ${product.Name} está abaixo do estoque mínimo`, Type: 'Min' });
        }

        if (product.MaxQuantity != null && product.Quantity > product.MaxQuantity) {
            notificationsCopy.unshift({ Product: product.ID, Msg: `O produto ${product.Name} está acima do estoque máximo`, Type: 'Max' });
        }

        setMovements(movementsCopy);
        setMovement(null);
        setData(products, movementsCopy, suppliers, notificationsCopy);
    }

    function handleMovementDelete() {
        let movementsCopy = movements.slice(); 
        let index = movementsCopy.indexOf(movement ?? {} as Movement);
        movementsCopy.splice(index, 1);
        setMovements(movementsCopy);
        setMovement(null);

        setData(products, movementsCopy, suppliers, notifications);
    }

    function editMovement(movement: Movement | null) {
        if (movement === null) {
            setMovement({ Date: new Date(), Quantity: 0, Product: '', Supplier: '', Type: 'Entrada' });
        } else {
            setMovement(movement);
        }
    }
    
    function handleSupplierEdit(editedSupplier: Supplier) {
        let suppliersCopy = suppliers.slice(); 
        let index = suppliersCopy.indexOf(supplier ?? {} as Supplier);
        if (index  !== -1) {
            suppliersCopy[index] = editedSupplier;
        } else {
            suppliersCopy.unshift(editedSupplier);
        }
        setSuppliers(suppliersCopy);
        setSupplier(null);
   
        setData(products, movements, suppliersCopy, notifications);
    }

    function handleSupplierDelete() {
        let suppliersCopy = suppliers.slice(); 
        let index = suppliersCopy.indexOf(supplier ?? {} as Supplier);
        suppliersCopy.splice(index, 1);
        setSuppliers(suppliersCopy);
        setSupplier(null);
      
        setData(products, movements, suppliersCopy, notifications);
    }

    function editSupplier(supplier: Supplier | null) {
        if (supplier === null) {
            setSupplier({ ID: null, Email: '', Neighborhood: '', Name: '', Phone: '', Cellphone: '', Address: '', CEP: null, City: '', CompanyID: null, CompanyName: '', Number: null, PersonType: '', State: '', Street: '' });
        } else {
            setSupplier(supplier);
        }
    }

    function returnToList() {
        setSupplier(null);
        setProduct(null);
        setMovement(null);
    }
   
    return (
        <DataContext.Provider value={{ 
                products, product, handleProductEdit, handleProductDelete, editProduct,
                movements, movement, handleMovementEdit, handleMovementDelete, editMovement,
                suppliers, supplier, handleSupplierEdit, handleSupplierDelete, editSupplier,
                returnToList, notifications, deleteNotification
            }}>
            {children}
        </DataContext.Provider>
    );
};

export function useData() {
    const context = useContext(DataContext);
    return context;
}