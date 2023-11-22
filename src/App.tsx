// App.tsx
import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter, Navigate } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {
  const userData = getAllLocalStorage();

  return (
      <BrowserRouter>
          <AppContextProvider>
              <ChakraProvider>
                  <Layout>
                      {userData ? (
                          <MainRoutes />
                      ) : (
                          <Navigate to="/" />
                      )}
                  </Layout>
              </ChakraProvider>
          </AppContextProvider>
      </BrowserRouter>
  );
}

export default App;
