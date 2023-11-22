// In storage.tsx

interface IDIoBank {
    login: boolean;
    user?: string; // Make the user property optional
}

const dioBank = {
    login: false,
};

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank');
};

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
};
