export const isAuthenticated = () => {
// Check if the user is authenticated (token exists in localStorage)
return !!localStorage.getItem('authToken');
};
  
export const authLogin = (token,ttl) => {
// Save token to localStorage
    const now = new Date();
    const item = {
        token: token,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem('authToken', JSON.stringify(item));
};
  
export const authLogout = () => {
// Remove token from localStorage
localStorage.removeItem('authToken');
};
  