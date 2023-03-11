import { api } from "../pages/index";

export function Hello() {
  const hello = api.hello.useQuery({ name: "React Query" });
  console.log(hello);
  const { data, status, isSuccess, isError, error } = hello;

  return (
    <>
      <h3>Data Object</h3>
      <ul>
        <li>
          <code>hello.data</code>: <b>{JSON.stringify(data)}</b>
        </li>
        <li>
          <code>hello.data?.text</code>: <b>{JSON.stringify(data?.text)}</b>
        </li>
      </ul>

      <h3>Status Values</h3>
      <ul>
        <li>
          <code>hello.status</code>: <b>{JSON.stringify(hello.status)}</b>
        </li>
        <li>
          <code>hello.isSuccess</code>: <b>{JSON.stringify(hello.isSuccess)}</b>
        </li>
        <li>
          <code>hello.isError</code>: <b>{JSON.stringify(hello.isError)}</b>
        </li>
        <li>
          <code>hello.error</code>: <b>{JSON.stringify(hello.error)}</b>
        </li>
      </ul>
    </>
  );
}
