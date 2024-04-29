import Image from "next/image";
import { cookies } from "next/headers";
import Button from "../components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button />
      <h1>ENV1: {process.env.env1 || "none"}</h1>
      <h1>ENV2: {process.env.env2 || "none"}</h1>
      <h1>ENV3: {process.env.env3 || "none"}</h1>
    </main>
  );
}
