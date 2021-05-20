import Layout from "@/components/Layout";
import MeetupItem from "@/components/MeetupItem";
import { API_URL } from "@/config/index";

export default function MeetupsPage({ meetups }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold"> Meetups</h1>
      {meetups.length === 0 && <h3>No meetups to show</h3>}

      {meetups.map((mtp) => (
        <MeetupItem key={mtp.id} mtp={mtp} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/meetups?_sort=date:ASC`);
  const meetups = await res.json();

  return {
    props: { meetups: meetups },
    revalidate: 1,
  };
}
