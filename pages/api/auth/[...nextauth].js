import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.Admin_ID,
      clientSecret: process.env.Admin_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)