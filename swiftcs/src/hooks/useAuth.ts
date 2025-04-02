'use client'

import axios from "axios";
import { useEffect, useState } from "react"

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [permissions, setPermissions] = useState<string[]>([]);

    useEffect(() => {
            const fetchData = async () => {
               try {
                const res = await axios.get('/api/auth/checkPermissions');
                setUser(res.data.user);
                setPermissions(res.data.permission);
               } catch (error) {
                    console.log("User Not Found");
               }
            }

            fetchData();
    }, []);
    return {user, permissions};
}

