// components/DeleteWithMovingCursor.tsx
"use client";

import { useEffect, useState } from "react";

type Mode = "backspace" | "delete";

type Props = {
  text?: string;
  stepMs?: number; // vitesse entre 2 suppressions
  pauseEndMs?: number; // pause quand tout est effacé
  loop?: boolean; // relancer en boucle
  mode?: Mode; // 'backspace' (droite->gauche) ou 'delete' (gauche->droite)
};

export default function DeleteWithMovingCursor({
  text = "Meilleure solution",
  stepMs = 90,
  pauseEndMs = 800,
  loop = true,
  mode = "delete",
}: Props) {
  const [i, setI] = useState(0); // nombre de lettres supprimées

  useEffect(() => {
    if (i < text.length) {
      const t = setTimeout(() => setI(i + 1), stepMs);
      return () => clearTimeout(t);
    } else if (loop) {
      const t = setTimeout(() => setI(0), pauseEndMs);
      return () => clearTimeout(t);
    }
  }, [i, text.length, stepMs, pauseEndMs, loop]);

  // Rendus selon le mode
  const BackspaceRender = () => {
    // efface depuis la droite : on garde la gauche
    const remaining = text.slice(0, text.length - i);

    return (
      <span
        className="inline-flex items-center font-mono"
        style={{ width: `${text.length}ch` }} // largeur fixe pour éviter les sauts
      >
        <span>{remaining}</span>
        {/* Curseur placé immédiatement après le texte restant (il se déplace vers la gauche) */}
        <img
          src="/images/cursor.svg"
          alt=""
          className="h-10 align-middle relative -top-[3px]"
        />
      </span>
    );
  };

  const DeleteRender = () => {
    // efface depuis la gauche : on avance le curseur vers la droite
    const removed = text.slice(0, i);
    const remaining = text.slice(i);

    return (
      <span
        className="inline-flex items-center font-mono"
        style={{ width: `${text.length}ch` }} // largeur fixe
      >
        {/* Espace occupé par les lettres supprimées (invisible mais prend la place) */}
        <span className="invisible">{removed}</span>

        {/* Curseur qui suit exactement la frontière */}
        <img
          src="/images/cursor.svg"
          alt=""
          className="h-10 align-middle relative -top-[3px]"
        />

        {/* Texte restant à droite du curseur */}
        <span>{remaining}</span>
      </span>
    );
  };

  return (
    <button className="text-[#B5B9C1] font-medium text-2xl flex items-center gap-2">
      {mode === "backspace" ? <BackspaceRender /> : <DeleteRender />}
    </button>
  );
}
