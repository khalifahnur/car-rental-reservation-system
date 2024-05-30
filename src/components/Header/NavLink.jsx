import { useAppContext } from "@/context";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const NavLink = ({ href, title, id ,showBackground }) => {
  const {user} = useAppContext();

  return id == 4 ? (
    user?.userLoggedIn == true ?(
      <button  className="block py-2 pl-3 pr-3 text-[#fff]   md:p-1 font-medium hover:bg-slate-600 border-[#000] rounded-full bg-gradient-to-br from-blue-500 via-yellow-500 to-blue-500">
        <Link href={'/settings'}><UserCircleIcon width={20} height={20} /></Link>
      </button>
    ):(<Link
      href={href}
      className="block py-2 pl-3 pr-3 text-[#fff]   md:p-1 font-medium hover:bg-slate-600 border-[#000] rounded-full bg-gradient-to-br from-blue-500 via-yellow-500 to-blue-500"
    >
      {title}
    </Link>)
    
  ) : (
    <Link
      href={href}
      className={`block py-4 px-3 border border-transparent text-[#000] ${showBackground ? " border-[#000] hover:border-t-[#fff] hover:border-b-[#fff] hover:text-white" : "text-[#000] border-[#fff] hover:border-t-[#111] hover:border-b-[#111] outline: none"} rounded md:p-0`}

    >
      {title}
    </Link>
  );
};
export default NavLink;
