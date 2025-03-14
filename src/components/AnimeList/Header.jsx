import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="p-4 text-2xl text-white font-bold capitalize">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="p-4 text-white text-sm">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
