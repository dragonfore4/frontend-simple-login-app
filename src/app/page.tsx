"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
   const [result, setResult] = useState('');
   const login = async () => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ username, password })
     });
     const data = await res.json();
     setResult(res.ok ? data.message : data.error);
   };

   return (

     <div>
        <h1>{process.env.NEXT_PUBLIC_BACKEND_URL}</h1>
       <input className="border-2" value={username} onChange={e => setUsername(e.target.value)} />
         <br />
       <input className="border-2" value={password} onChange={e => setpassword(e.target.value)} />
       <button onClick={login}>Login</button>
       <div>{result}</div>
     </div>
   );

}
