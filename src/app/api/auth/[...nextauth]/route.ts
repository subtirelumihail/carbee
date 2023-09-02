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
      // [BUG]: Currently getServerSession is not working in the new Edge Runtime.
      // https://github.com/nextauthjs/next-auth/issues/7732#issuecomment-1577104038
      // [SOLUTION]: Because we cannot get the token from the user session and pass
      // it to the api service we add it to the next auth jwt payload in order to use
      // it in our middleware
      if (user) {
        token.api_token = user.token;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
