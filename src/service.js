export const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorageData = (key, tasks) => {
  localStorage.setItem(key, JSON.stringify([...tasks]));
};

export const setLocalStorageUserData = (key, users_data) => {
  localStorage.setItem(key, JSON.stringify(users_data));
};

export const getLocalStorageUserData = (key) => {
  const data = localStorage.getItem(key);
  return data === null ? null : JSON.parse(data);
};
