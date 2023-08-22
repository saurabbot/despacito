import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from "next-auth";
import * as bcrypt from 'bcrypt'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            }, authorize: async (credentials, req) => {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                })
                const passwordMatches = await bcrypt.compare(credentials.password, user.password)
                console.log(passwordMatches, credentials, 'ewew')
                if (!passwordMatches) {
                    throw new Error('Incorrect password please try again')
                }
                if (!user.emailVerified) {
                    throw new Error('Email isnt Verified')
                }
                return user
            },
        })

    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: 'login',
        signOut: 'auth/signout'
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.username = token.username
                session.user.email = token.email
                session.user.image = token.picture
            }

            return session
        },
        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            })

            if (!dbUser) {
                if (user) {
                    token.id = user?.id
                }
                return token
            }

            return {
                id: dbUser.id,
                username: dbUser.username,
                email: dbUser.email,
                picture: dbUser.image,
            }
        },
    },
});