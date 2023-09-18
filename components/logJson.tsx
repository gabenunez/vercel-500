"use client";

export default function LogJson({ json }: { json: string }) {
  console.log(json);
  console.log(JSON.parse(json));
  return <p>{json}</p>;
}
