import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();
      if (res.ok && user) {
        return user;
      }
      return null;
    },
  }),
];

export const authOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.api_token = user.token;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
