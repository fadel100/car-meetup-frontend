import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 mb-10 text-center">
      <p className="my-1">Copyright &copy; car meetups 2021</p>
      <p className="my-1">
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
