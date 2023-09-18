"use client";

export default function LogJson({ json }) {
  console.log(json);
  console.log(JSON.parse(json));
}
