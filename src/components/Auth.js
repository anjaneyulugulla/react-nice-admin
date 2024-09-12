export const isAuthenticated = () => {
    const jsonString = localStorage.getItem('authToken');
    const parsedData = JSON.parse(jsonString);
    return !!parsedData.token;
//return !!localStorage.getItem('authToken');
};
  
export const authLogin = (token,data,ttl) => {
// Save token to localStorage
    const now = new Date();
    const item = {
        token: token,
        name:data.name,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem('authToken', JSON.stringify(item));
};
  
export const authLogout = () => {
// Remove token from localStorage
localStorage.removeItem('authToken');
};
  