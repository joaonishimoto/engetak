import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";

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
        const user = await prisma.user.findFirst({
          where: { email: credentials.email }
        });
        
        if (!user) {
          return null;
        }
        
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (isPasswordCorrect) {
          return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      /* if (account) {
        token.accessToken = account.access_token
      } */
      return token;
    },
    async session({ session, token }) {
    
    /* session.accessToken = token.accessToken */

    return session
    }
  }
};
