function save<T>(key: string, value: T): void {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('Ошибка при сохранении в localStorage:', error);
	}
}

function get<T>(key: string): T | null {
	try {
		const item = localStorage.getItem(key);
		return item ? (JSON.parse(item) as T) : null;
	} catch (error) {
		console.error('Ошибка при чтении из localStorage:', error);
		return null;
	}
}

function remove(key: string): void {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error('Ошибка при удалении из localStorage:', error);
	}
}

export default { save, get, remove };