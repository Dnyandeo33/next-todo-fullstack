import Link from 'next/link';

const Header = (props) => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <h1 className="text-2xl font-bold text-slate-500">Todo list </h1>
      <Link
        href={'/add'}
        className="px-4 py-2 bg-green-600 rounded-md text-slate-900 "
      >
        Add
      </Link>
    </div>
  );
};

export default Header;
