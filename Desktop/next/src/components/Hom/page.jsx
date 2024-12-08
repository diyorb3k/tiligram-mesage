import Link from "next/link";

const Hom = () => {
  return (
    <div>
      <nav className="flex justify-between my-10">
        <ul>
          <h1>Logo</h1>
        </ul>
        <ul className="flex w-[300px] justify-between">
          <Link href="/">
            <li>Hom</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
          <Link href="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Hom;
