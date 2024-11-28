export function getJWT() {
    return localStorage.getItem('bank_jwt');
  }
  
  export function setJWT(value) {
    return localStorage.setItem('bank_jwt', value);
  }
  
  export function removeJWT() {
    return localStorage.removeItem('bank_jwt');
  }
  
  export const setSession = async (session) => {
    try {
      if (!session?.token) {
        removeJWT();
        return;
      }
  
      const { token } = session;
      setJWT(token);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const clearSession = () => {
    removeJWT();
  };