import Head from "next/head";
import Header from "../Header";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="sm:flex">
        <div className="col-span-1">
          <Header />
        </div>
        <main className="col-span-7 sm:w-full">{children}</main>
      </section>
    </>
  );
}
