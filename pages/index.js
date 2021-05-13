import Link from "next/link";
import Layout from "@/components/Layout";
import MeetupItem from "@/components/MeetupItem";
import { API_URL } from "@/config/index";

export default function HomePage({ meetups }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Upcoming Meetups</h1>
      {meetups.length === 0 && <h3>No meetups to show</h3>}

      {meetups.map((mtp) => (
        <MeetupItem key={mtp.id} mtp={mtp} />
      ))}

      {meetups.length > 0 && (
        <Link href="/meetups">
          <a className="text-sm bg-black text-white rounded py-1 px-4 mx-5 cursor-pointer hover:opacity-70">
            View All meetups
          </a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/meetups`);
  const meetups = await res.json();

  return {
    props: { meetups: meetups.slice(0, 3) },
    revalidate: 1,
  };
}
