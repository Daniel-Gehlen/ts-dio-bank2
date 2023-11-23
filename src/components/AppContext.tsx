import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext {
    user: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    userName: string; 
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        const storageData = getAllLocalStorage();

        if (storageData) {
            const { login, userName } = JSON.parse(storageData);
            setIsLoggedIn(login);
            setUserName(userName);
        }
    }, []); 

    const user = 'nathally';

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, userName }}>
            {children}
        </AppContext.Provider>
    );
};
