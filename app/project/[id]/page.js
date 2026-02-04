"use client"

import { useEffect,useState } from "react";

export default function Project({params}){

 const [keys,setKeys] = useState([]);
 const [newKey,setNewKey] = useState("");

 async function load(){
  const res = await fetch(`/api/key/${params.id}`);
  setKeys(await res.json());
 }

 async function createKey(){

  await fetch(`/api/key/${params.id}`,{
   method:"POST",
   body: JSON.stringify({key:newKey})
  });

  load();
 }

 useEffect(()=>{ load(); },[])

 return(
  <main className="min-h-screen bg-zinc-900 text-white p-10">

   <h1 className="text-green-400 text-2xl mb-4">
    Projeto
   </h1>

   <div className="mb-5">
    <input
     className="p-2 bg-zinc-700 rounded mr-2"
     placeholder="Nova Key"
     onChange={e=>setNewKey(e.target.value)}
    />

    <button
     onClick={createKey}
     className="bg-green-500 p-2 rounded"
    >
     Criar Key
    </button>
   </div>

   <table className="w-full bg-zinc-800">
    <thead>
     <tr>
      <th>Key</th>
      <th>Usada</th>
      <th>Device</th>
     </tr>
    </thead>

    <tbody>
     {keys.map(k=>(
      <tr key={k.id}>
       <td>{k.key}</td>
       <td>{k.used ? "Sim":"Não"}</td>
       <td>{k.device}</td>
      </tr>
     ))}
    </tbody>
   </table>

  </main>
 )
}
