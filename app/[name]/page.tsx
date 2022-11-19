import Revalidator from "../revalidator";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
      <div>{params.name}</div>
      <div>Generated at {new Date().toISOString()}</div>
      <Revalidator />
    </>
  );
}

export function generateStaticParams() {
  return [{ name: "dynamic" }];
}
