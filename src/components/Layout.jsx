import Head from "next/head";

const Layout = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={`VIDEO GAMES - ${keywords}`}></meta>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
