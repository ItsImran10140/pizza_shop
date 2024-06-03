"use client"

import { React, useState } from 'react';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import Image from "next/image";


export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);


    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true)
        setError(false);
        setUserCreated(false);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            setUserCreated(true);
        }
        else {
            setError(true);
        }
        setCreatingUser(false);
        setEmail('');
        setPassword('')

    }


    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Registor
            </h1>
            {userCreated && (
                <div className='my-4 text-center'>
                    User Created. <br />
                    Now you can{' '}
                    <Link className='underline' href={'/login'}>Login</Link>
                </div>
            )
            }
            {
                error && (
                    <div className='my-4 text-center'>
                        Error. <br />
                        Please try again later.
                    </div>
                )
            }
            <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    disabled={creatingUser}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    disabled={creatingUser}
                />
                <button disabled={creatingUser} type="submit">
                    Registor
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button onClick={() => signIn('google', { callbackUrl: '/' })} className="flex gap-4 justify-center">
                    <Image
                        src={'/google.png'}
                        alt={''}
                        width={24}
                        height={24}
                    />
                    Login with-gppgle
                </button>
                <div className='text-center my-4 text-gray-500'>
                    Existing account ?{' '} <Link className='underline' href={'/login'}> Login here </Link>
                </div>
            </form>
        </section >
    );
}