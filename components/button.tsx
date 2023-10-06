"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

export default function Button() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const setTheme = (theme: string) => setCookie("theme", theme);

  function handleClick() {
    setTheme("dark mode of course");
    setIsPopoverOpen(true);

    if (location) {
      location.reload();
    }
  }

  return (
    <button onClick={handleClick}>
      Set cookie {isPopoverOpen ? "Open" : "Closed"}
    </button>
  );
}
