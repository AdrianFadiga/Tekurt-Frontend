export const setToken = (token: string | undefined) => {
  if (token) localStorage.setItem('authTekurt', token);
  localStorage.clear();
};