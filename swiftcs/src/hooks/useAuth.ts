"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/auth/checkPermissions");
        setUser(res.data.user);
        setPermissions(res.data.permission);
      } catch (error) {
        console.log("User Not Found");
        setUser(null)
        setPermissions([])
      }finally{
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  return { user, permissions, loading };
};
