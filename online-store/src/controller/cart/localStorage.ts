export function loadLocalStorage <T> (key: string): T | [] {
  const cart = localStorage.getItem(key);
  if (cart !== null) {
    try {
      return JSON.parse(cart);
    } catch {
      return [];
    }
  }
  return [];
}

export function saveLocalStorange <T> (key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function deleteLocalStorange (key: string): void {
  localStorage.removeItem(key);
}
