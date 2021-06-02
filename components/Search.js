import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/meetups/search?term=${term}`);
    setTerm("");
  };

  return (
    <div className="h-9 mt-4 md:mt-0">
      <form onSubmit={handleSubmit}>
        <input
          className=" p-1 border-solid border-2 border-gray-500 rounded"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Meetups"
        />
      </form>
    </div>
  );
}
