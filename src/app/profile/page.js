'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePage() {


    const session = useSession();
    const [userName, setUserName] = useState('')
    const { status } = session;

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
        }
    }, [session, status])

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefult();
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName }),
        });
    }

    if (status === 'loading') {
        return (
            <div className="text-center">
                <h1>Loading...</h1>
            </div>
        );
    }
    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    const userImage = session.data.user.image;

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Profile</h1>
            <div className="max-w-md mx-auto border">
                <div className="flex gap-2 items-center">
                    <div>
                        <div className="p-2 rounded-lg relative">
                            <Image className="rounded-lg w-full h-full mb-1" src={userImage} width={80} height={80} alt={'avatar'} />
                            <button type="button">Edit</button>
                        </div>
                    </div>
                    <form onSubmit={handleProfileInfoUpdate} className="grow">
                        <input type="text" placeholder="First and last name" value={userName} onChange={(ev) => setUserName(ev.target.value)} />
                        <input type="text" disabled={true} value={session.data.user.email} />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

// TODO: 3:06 profile editing page