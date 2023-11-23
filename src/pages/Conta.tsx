// Conta.tsx
import { api } from '../api';
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CardInfo from '../components/CardInfo';
import { AppContext } from '../components/AppContext';

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, userName } = useContext(AppContext);

  const [userData, setUserData] = useState<null | UserData>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ajuste aqui para garantir que a resposta seja do tipo UserData
        const data: any = await api;
        setUserData(data as UserData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Trate o erro de maneira apropriada, por exemplo, redirecione para a página de login
        navigate('/');
      }
    };

    if (!isLoggedIn) {
      navigate('/');
    } else {
      fetchData();
    }
  }, [isLoggedIn, navigate]);

  const formattedDate = userData
    ? `${userData.email} / ${userData.name}`
    : '';

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem-vinda ${userName ? userName : userData.name}`}
              content={formattedDate}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
