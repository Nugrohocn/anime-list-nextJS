import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-sm text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-800 transition-all shadow-lg"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
