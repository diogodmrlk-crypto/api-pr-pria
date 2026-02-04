"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);

  async function createResource() {
    const res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="bg-zinc-800 p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold text-green-400 mb-4">
          MockKey API
        </h1>

        <input
          className="w-full p-2 rounded bg-zinc-700 mb-4"
          placeholder="Nome do Resource"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button
          onClick={createResource}
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded"
        >
          Criar
        </button>

        {result && (
          <div className="mt-4 text-green-300 break-all">
            URL:
            <br />
            {location.origin + result.url}
          </div>
        )}
      </div>
    </main>
  );
}
