// login.test.tsx
import { login } from "./login";

describe('login', () => {
    const mockEmail = 'harmonia251251@gmail.com';
    const mockPassword = 'senha_valida';

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login({ email: mockEmail, password: mockPassword });
        expect(response).toBeTruthy();
    });
    
    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login({ email: 'email@invalido.com', password: mockPassword });
        expect(response).toBeFalsy();
    });
    
    it('Deve exibir um erro caso o email ou a senha sejam inválidos', async () => {
        const response = await login({ email: mockEmail, password: 'senha_incorreta' });
        expect(response).toBeFalsy();
    });
    
});
