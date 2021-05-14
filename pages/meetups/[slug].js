import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function MeetupPage({ mtp }) {
  const deleteMeetup = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className="relative pt-10">
        <div className="absolute right-7 top-0 flex ">
          <Link href={`/events/edit/${mtp.id}`}>
            <a>
              <FaPencilAlt className="inline-block" /> Edit Meetup
            </a>
          </Link>
          <a href="#" className="ml-5 text-red-500" onClick={deleteMeetup}>
            <FaTimes className="inline-block " /> Delete Meetup
          </a>
        </div>

        <span>
          {mtp.date} at {mtp.time}
        </span>
        <h1 className="text-xl font-bold my-3">{mtp.name}</h1>
        {mtp.image && (
          <div className="mb-5">
            <Image src={mtp.image} width={960} height={600} />
          </div>
        )}

        <h3 className="text-lg font-semibold">Brand:</h3>
        <p className="my-2">{mtp.carBrand}</p>
        <h3 className="text-lg font-semibold">Description:</h3>
        <p className="my-2">{mtp.description}</p>
        <h3 className="text-lg font-semibold">City: {mtp.city}</h3>
        <p className="my-2">{mtp.address}</p>

        <Link href="/meetups">
          <a className="block mt-10 text-blue-700 hover:text-black">
            {"<"} Go Back
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/meetups`);
  const meetups = await res.json();

  const paths = meetups.map((mtp) => ({
    params: { slug: mtp.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/meetups/${slug}`);
  const meetups = await res.json();

  return {
    props: {
      mtp: meetups[0],
    },
    revalidate: 1,
  };
}
