import qs from "qs";
import { API_URL } from "@/config/index";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import MeetupItem from "@/components/MeetupItem";

export default function SearchPage({ meetups }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <Link href="/meetups">
        <a className="text-blue-700 hover:text-black"> Go Back</a>
      </Link>
      <h1 className="text-3xl font-bold">
        {" "}
        Search Results for {router.query.term}
      </h1>
      {meetups.length === 0 && <h3>No meetups to show</h3>}

      {meetups.map((mtp) => (
        <MeetupItem key={mtp.id} mtp={mtp} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { carBrand_contains: term },
        { description_contains: term },
        { city_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/meetups?${query}`);
  const meetups = await res.json();
  return {
    props: { meetups },
  };
}
