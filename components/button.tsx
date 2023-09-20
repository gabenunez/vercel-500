"use client";

import { setCookie } from "cookies-next";

export default function Button() {
  return (
    <button onClick={() => setCookie("theme", "dark mode of course")}>
      Set cookie
    </button>
  );
}
