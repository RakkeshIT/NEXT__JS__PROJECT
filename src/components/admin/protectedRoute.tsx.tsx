'use client'
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Children, useEffect } from "react";



export const ProtectedRout = ({children: requiredPermissions}: {children:any; requiredPermissions: string[]}) => {
    const {user, permissions} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!user || !permissions.some((perm: any) => requiredPermissions.includes(perm))){
            router.push('/')
        }
    }, []);
    
    return (
        <>
            {Children}
        </>
    )
}