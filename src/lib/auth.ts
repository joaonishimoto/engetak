import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Defina a interface User para representar os dados do usuário
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Simule uma "database" com alguns usuários como exemplo
const database: User[] = [
  { id: '1', name: "John Doe", email: "john@example.com", password: "123456" },
  { id: '2', name: "Jane Smith", email: "jane@example.com", password: "password" },
  // Adicione mais usuários conforme necessário
];

// Função para encontrar um usuário na "database" com base no email e senha
const findUserByEmailAndPassword = async (email: string, password: string): Promise<User | null> => {
  const user = database.find((user) => user.email === email && user.password === password);
  return user || null;
};

// Configuração das opções de autenticação
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          console.log("Invalid credentials");
          return null;
        }

        // Procura pelo usuário na "database" com base no email e senha fornecidos
        const user = await findUserByEmailAndPassword(credentials.email, credentials.password);
        if (!user) {
          console.log("User not found");
          return null; // Retorna null se o usuário não for encontrado
        }

        // Retorna o objeto do usuário se a autenticação for bem-sucedida
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
/*       if (account) {
        token.githubProfile = profile as GithubProfile;
      } */
      return token;
    },
    async session({ session, token }) {
/*       if (token && token.githubProfile) {
        session.user.githubProfile = token.githubProfile as GithubProfile;
      } */
      return session;
    }
  }
};
