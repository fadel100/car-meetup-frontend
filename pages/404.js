import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className="text-center mt-24 mb-48">
        <h1 className="text-5xl font-bold leading-10 mb-6  ">
          <FaExclamationTriangle className="inline h-auto w-auto align-bottom" />{" "}
          404
        </h1>

        <h4 className="font-semibold">Sorry, there is nothing here</h4>

        <Link href="/">
          <a className="text-blue-800 hover:text-black">Go Back Home</a>
        </Link>
      </div>
    </Layout>
  );
}
