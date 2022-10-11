import Head from "next/head"

export default function Layout({ title, children }) {
  const pageTitle = `${title} | Supabase`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <main>{children}</main>
    </>
  );
}
