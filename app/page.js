import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Priority Dispatch</h1>
        <p className="text-lg mt-4 text-center">
          Hey guys! This is Spencer, I hope you enjoy the submission I have
          made! The buttom below will route you to the Directory Page, where you
          can then see a list of users, filter, and see further details!
        </p>
        <p className="text-lg mt-4 text-center">
          Alternately, you can use the navigation menu at the top of the page.
        </p>
        <Link href="/members-page">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
            Go to Member Directory
          </button>
        </Link>
      </main>
    </>
  );
}
