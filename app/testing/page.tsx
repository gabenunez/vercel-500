import LogJson from "@/components/logJson";

async function fetchJsonData() {
  const exampleData = {
    false: false,
    true: true,
  };

  const data = JSON.stringify(exampleData);

  return data;
}

export default async function Home() {
  const data = await fetchJsonData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogJson json={data} />
    </main>
  );
}
