"use client"
import { Button } from "./ui/button";
import { useSession, signIn, signOut } from "next-auth/react"

export function AuthButton() {
    return (
        <>
        <Button variant="outline" onClick={() => signIn('google')}>Sign in</Button>
        </>
    )
}