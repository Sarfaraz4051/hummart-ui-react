///for String 
export const getLocalStorageString = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const setLocalStorageString = (key, str) => {
  localStorage.setItem(key, JSON.stringify(str));
};

//for array 
export const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorageData = (key, tasks) => {
  localStorage.setItem(key, JSON.stringify([...tasks]));
};

//for object
export const setLocalStorageUserData = (key, users_data) => {
  localStorage.setItem(key, JSON.stringify(users_data));
};

export const getLocalStorageUserData = (key) => {
  const data = localStorage.getItem(key);
  return data === null ? null : JSON.parse(data);
};
