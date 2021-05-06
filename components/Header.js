import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-white h-auto md:h-14  px-7 shadow-md">
      <div className="text-red-600 text-xl uppercase mt-5 md:mt-0">
        <Link href="/">
          <a className="text-red-500 hover:text-black md:mr-5">car meetups</a>
        </Link>
      </div>

      <nav>
        <ul className="flex flex-col md:flex-row text-center md:text-left  items-center justify-center list-none mt-5 md:mt-0 ">
          <li>
            <Link href="/meetups">
              <a className="text-black md:mr-5">meetups</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
