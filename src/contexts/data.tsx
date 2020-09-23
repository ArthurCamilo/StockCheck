import React, { createContext, useState, useEffect, useContext } from 'react';
import Movement from '../models/movement';
import Product from '../models/product';
import Supplier from '../models/supplier';

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
}

const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC = ({children}) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null>(null);
   
    const [movements, setMovements] = useState<Movement[]>([]);
    const [movement, setMovement] = useState<Movement | null>(null);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [supplier, setSupplier] = useState<Supplier | null>(null);

    useEffect(() => {
        async function loadStoragedData() {
            const productsStorage = localStorage.getItem('@STOCKCHECKData:products');
            const movementsStorage = localStorage.getItem('@STOCKCHECKData:movements');
            const suppliersStorage = localStorage.getItem('@STOCKCHECKData:suppliers');
            if (productsStorage && movementsStorage && suppliersStorage) {
                setProducts(JSON.parse(productsStorage));
                setMovements(JSON.parse(movementsStorage));
                setSuppliers(JSON.parse(suppliersStorage));
            }
        }
        loadStoragedData();
    }, [])

    function setData(products: Product[], movements: Movement[], suppliers: Supplier[]) {
        localStorage.setItem('@STOCKCHECKData:products', JSON.stringify(products));
        localStorage.setItem('@STOCKCHECKData:movements', JSON.stringify(movements));
        localStorage.setItem('@STOCKCHECKData:suppliers', JSON.stringify(suppliers));
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

        setData(productsCopy, movements, suppliers);
    }

    function handleProductDelete() {
        let productsCopy = products.slice(); 
        let index = productsCopy.indexOf(product ?? {} as Product);
        productsCopy.splice(index, 1);
        setProducts(productsCopy);
        setProduct(null);
        
        setData(productsCopy, movements, suppliers);
    }

    function editProduct(product: Product | null) {
        if (product === null) {
            setProduct({ ID: 0, Name: '', Quantity: 0, Value: 0 });
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
        setMovements(movementsCopy);
        setMovement(null);
        setData(products, movementsCopy, suppliers);
    }

    function handleMovementDelete() {
        let movementsCopy = movements.slice(); 
        let index = movementsCopy.indexOf(movement ?? {} as Movement);
        movementsCopy.splice(index, 1);
        setMovements(movementsCopy);
        setMovement(null);

        setData(products, movementsCopy, suppliers);
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
   
        setData(products, movements, suppliersCopy);
    }

    function handleSupplierDelete() {
        let suppliersCopy = suppliers.slice(); 
        let index = suppliersCopy.indexOf(supplier ?? {} as Supplier);
        suppliersCopy.splice(index, 1);
        setSuppliers(suppliersCopy);
        setSupplier(null);
      
        setData(products, movements, suppliersCopy);
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
                returnToList
            }}>
            {children}
        </DataContext.Provider>
    );
};

export function useData() {
    const context = useContext(DataContext);
    return context;
}