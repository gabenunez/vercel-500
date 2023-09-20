export default function Heading({ title }: { title: string }) {
  return <h1>{title || "No title provided"}</h1>;
}
