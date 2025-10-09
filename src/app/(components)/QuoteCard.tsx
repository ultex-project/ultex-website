// src/app/(components)/QuoteCard.tsx
"use client";

export default function QuoteCard({ text }: { text: string }) {
  return (
    <p
      className="bg-[#FCEBAD] text-justify text-[20px] md:text-[22px] text-[#303236]"
      // Stabilo jaune type Bootstrap (#fff3cd ~ bg-warning-subtle)
      style={{
        padding: "0 .15em",
      }}
    >
      {" "}
      <img
        src={"/images/cursor.svg"}
        className={"inline-block h-10 relative top-[-9px] left-[-7px]"}
      />
      {text}
      <img
        src={"/images/cursor.svg"}
        className={"inline-block rotate-180 h-10 relative top-[9px] left-[0px]"}
      />
    </p>
  );
}
