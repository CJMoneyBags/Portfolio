
export function saveItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };


  export function loadItem(key, defaultVal) {
    try {
      if (key in localStorage)
        return JSON.parse(localStorage.getItem(key));
    }
    catch (e) {
    }

    return defaultVal;
  };


  export function deleteItem(key) {
    localStorage.removeItem(key);
  };
