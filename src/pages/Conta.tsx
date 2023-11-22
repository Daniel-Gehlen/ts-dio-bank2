import { api } from '../api'; // Adicione esta linha no início do arquivo
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom'; // Adicione esta linha
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
    const navigate = useNavigate(); // Adicione esta linha
    const { isLoggedIn, userName } = useContext(AppContext);

    const [userData, setUserData] = useState<null | UserData>();

    !isLoggedIn && navigate('/');

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api;
            setUserData(data);
        };

        getData();
    }, []);

    const actualData = new Date();

    if (userData && id !== userData.id) {
        navigate('/');
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {userData === undefined || userData === null ? (
                    <Center>
                        <Spinner size="xl" color="white" />
                    </Center>
                ) : (
                    <>
                        <CardInfo
                            mainContent={`Bem-vinda ${userName ? userName : userData?.name}`}
                            content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
                        />
                        <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
                    </>
                )}
            </SimpleGrid>
        </Center>
    );
};

export default Conta;
