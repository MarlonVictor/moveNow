import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = { 
    providers: [
        Providers.GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
        })
    ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)