// UserInfo.tsx
import { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { AppContext } from "../components/AppContext";

const UserInfo = () => {
    const { user } = useContext(AppContext);

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações do Usuário
            </Text>
            <Text fontSize='xl'>
                Nome: {user}
            </Text>
            {/* Adicione mais informações do usuário aqui */}
        </>
    );
};

export default UserInfo;
