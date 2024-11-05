'use client';
import { useState, useEffect } from 'react';

interface Jogador {
  id: number;
  nome: string;
}

export default function Home() {
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [nome, setNome] = useState('');

  useEffect(() => {
    fetchJogadores();
  }, []);

  const fetchJogadores = async () => {
    const res = await fetch('http://localhost:3000/jogadores');
    const data = await res.json();

    setJogadores(data);
  };


  const addJogador = async () => {
    if (!nome) return;
    const res = await fetch('http://localhost:3000/jogador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome }),
    });

    if (res.ok) {
      fetchJogadores();
      setNome('');
    }
  };




  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Jogadores de Xadrez</h1>
      <div className="mb-6">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Nome do jogador"
        />
        <button
          onClick={addJogador}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>
      <ul className="list-disc pl-5">
        {jogadores.map((jogador) => (
          <li key={jogador.id} className="mb-2">
            {jogador.nome}
          </li>
        ))}
      </ul>
    </main>
  );
}