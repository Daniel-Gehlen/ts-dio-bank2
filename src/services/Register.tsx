// register.tsx
export const register = async (name: string, email: string, password: string): Promise<boolean> => {
  try {
      // Simulação de chamada de API para o registro do usuário
      const response = await fetch('https://sua-api.com/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
      });

      // Verifica se a resposta foi bem-sucedida (status code 2xx)
      if (response.ok) {
          // Implemente a lógica adicional aqui, se necessário
          return true; // Registro bem-sucedido
      } else {
          // Trata erros na resposta da API
          console.error(`Erro na chamada de API: ${response.status}`);
          return false; // Registro falhou
      }
  } catch (error) {
      // Trata erros de rede ou outros erros
      console.error('Erro durante a chamada de API:', error);
      return false; // Registro falhou
  }
};
