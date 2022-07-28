export const setToken = (token: string | undefined) => {
  token ? localStorage.setItem('authTekurt', token) : localStorage.clear();
};