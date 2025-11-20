import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "../lib/auth";

export default function Profile() {
  const router = useRouter();
  useEffect(() => {
    const s = getSession();
    if (!s) router.replace("/login");
  }, [router]);

  return <div className="p-8">Área autenticada — bem-vindo!</div>;
}
