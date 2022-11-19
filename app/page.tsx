import Revalidator from "./revalidator";

export default function Page() {
  return (
    <>
      <div>Home</div>
      <div>Generated at {new Date().toISOString()}</div>
      <Revalidator />
    </>
  );
}
