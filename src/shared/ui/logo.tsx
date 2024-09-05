import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="main-transition font-title text-2xl tracking-tighter text-primary duration-500 ease-out has-hover:hover:rotate-180"
    >
      NB
    </Link>
  );
}
