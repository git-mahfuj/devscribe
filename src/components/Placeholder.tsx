"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Placeholders() {
  const placeholders = [
    "What's Monorepo?",
    "How do I use useEffect?",
    "How does async/await work?",
    "How does middleware work in Express?",
    "SQL vs NoSQL — which fits this use case?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
