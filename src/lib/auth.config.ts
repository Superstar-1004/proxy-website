import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Edge-compatible NextAuth config — no Prisma, bcrypt, or database imports.
 * Used by middleware. Server-only providers (Credentials) live in auth.ts.
 */
export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login/',
    newUser: '/dashboard/',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id as string;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
} satisfies NextAuthConfig;
