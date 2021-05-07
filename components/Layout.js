import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "@/components/Showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div className="font-poppins">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />

      {router.pathname == "/" && <Showcase />}
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
