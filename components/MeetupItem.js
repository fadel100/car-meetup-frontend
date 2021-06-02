import Link from "next/link";
import Image from "next/image";

export default function MeetupItem({ mtp }) {
  return (
    <div className="flex flex-col text-center sm:text-left sm:flex-row justify-between items-center my-5 p-3 shadow-md">
      <div className="flex flex-col sm:flex-row items-center md:gap-6 xl:gap-10">
        <div className=" m-2">
          <Image
            src={
              mtp.image
                ? mtp.image.formats.thumbnail.url
                : "/images/meetup-default.png"
            }
            width={170}
            height={100}
          />
        </div>

        <div className="mb-5 sm:mb-0">
          <span>
            {new Date(mtp.date).toLocaleDateString("en-US")} at {mtp.time}
          </span>
          <h3 className="font-medium text-xl">{mtp.name}</h3>
        </div>
      </div>

      <div className="inline-block bg-red-600 text-white py-3 px-5 cursor-pointer rounded hover:opacity-80">
        <Link href={`/meetups/${mtp.slug}`}>Details</Link>
      </div>
    </div>
  );
}
