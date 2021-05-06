import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="font-poppins">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className="container  mx-auto my-14 px-7">{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "car meetups | Find your dream car meetup",
  description: "Find the latest car meetups events",
  keywords: "cars, meetups, sports",
};
