"use client"

import { useState } from "react";

export default function Home(){

 const [name,setName] = useState("");
 const [project,setProject] = useState(null);

 async function createProject(){

  const res = await fetch("/api/project",{
   method:"POST",
   body: JSON.stringify({name})
  });

  const data = await res.json();
  setProject(data.id);
 }

 return(
  <main className="min-h-screen bg-zinc-900 text-white flex justify-center items-center">

   <div className="bg-zinc-800 p-8 rounded-xl w-96">

    <h1 className="text-2xl text-green-400 mb-4">
     Dashboard
    </h1>

    <input
     className="w-full p-2 bg-zinc-700 rounded mb-3"
     placeholder="Nome do Projeto"
     onChange={e=>setName(e.target.value)}
    />

    <button
     onClick={createProject}
     className="w-full bg-green-500 p-2 rounded"
    >
     Criar Projeto
    </button>

    {project && (
     <a href={`/project/${project}`} className="text-green-400 block mt-4">
      Abrir Projeto
     </a>
    )}

   </div>

  </main>
 )
}
