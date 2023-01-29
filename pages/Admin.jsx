import React from "react";
import { useSession, getSession, signOut } from 'next-auth/react'

const account = () => {

    const { data: session, status } = useSession({required: true});

    if (status === 'authenticated') {
        return (
            // build your dashboard here 
            <div>
                <p>Welcome {session.user.name}</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>You found a secret room...akward</p>
            </div>
            );
    }
};

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
        if (!session) {
            return {
                redirect: {
                    destination: '/'
                }
            }
        }

    return {
        props: {session},
    };
}
export default account;