import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext {
    user: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    userName: string; // Adicione esta linha
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>(''); // Adicione esta linha

    const storage = getAllLocalStorage();

    useEffect(() => {
        if (storage) {
            const { login, userName } = JSON.parse(storage); // Atualize para incluir userName
            setIsLoggedIn(login);
            setUserName(userName); // Adicione esta linha
        }
    }, []);

    const user = 'nathally';

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, userName }}>
            {children}
        </AppContext.Provider>
    );
};
