"use client"

import { React, useState } from 'react';
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInPorgress, setLoginInProgress] = useState(false)


    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true)

        await signIn('credentials', { email, password, callbackUrl: '/' })

        setLoginInProgress(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Login
            </h1>
            <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    disabled={loginInPorgress}
                    name='email'
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    disabled={loginInPorgress}
                    name='password'
                />
                <button disabled={loginInPorgress} type="submit">
                    Login
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button type='button' onClick={() => signIn('google', { callbackUrl: '/' })} className="flex gap-4 justify-center">
                    <Image
                        src={'/google.png'}
                        alt={''}
                        width={24}
                        height={24}
                    />
                    Login with-gppgle
                </button>
            </form>
        </section>
    );
}