// login.test.tsx
import { login } from "./login";

describe('login', () => {
    const mockEmail = 'harmonia251251@gmail.com';
    const mockPassword = 'senha_valida';

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    });

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com', mockPassword);
        expect(response).toBeFalsy();
    });

    it('Deve exibir um erro caso o email ou a senha sejam inválidos', async () => {
        const response = await login(mockEmail, 'senha_incorreta');
        expect(response).toBeFalsy();
    });
});
