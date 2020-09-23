
interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function login(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ahsidaçzoaskopdjas',
        user: {
          name: 'Arthur',
          email: 'arthurpaiva98@gmail.com'
        }
      });
    }, 2000);
  });
}