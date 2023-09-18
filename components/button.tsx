"use client";

function setCookie() {
  window.document.cookie = "theme=darkOfCourse; path=/";
}

export default function Button() {
  return <button onClick={() => setCookie()}>Set cookie</button>;
}
