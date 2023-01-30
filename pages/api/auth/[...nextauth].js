import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.ADMIN_ID,
      clientSecret: process.env.ADMIN_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)