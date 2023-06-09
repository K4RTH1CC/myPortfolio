import { Fragment } from "react";
import Link from "next/link";

function TopNavLayout() {
  return (
    <Fragment>
      <nav className="w-full top-0 fixed z-50 flex justify-normal">
        <div className="bg-gray-500 p-4 flex justify-start w-1/3">
          <span className="text-gray-700 font-extrabold text-4xl font-header pl-10 pr-10 pt-4 pb-4 float-left">
            KARTHIK {'<'}/{'>'}
          </span>
        </div>
        <div className="bg-gray-500 p-4 flex justify-end w-2/3">
          <Link
            href="https://drive.google.com/file/d/1bWxKaFBVH05OtUGyWRFJSYLDDLkEniQK/view?usp=share_link"
            passHref={true}
            target="_blank"
          >
            <button className="hover:bg-slate-400 text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4 border-b-4 duration-500 border-gray-700 mx-4">
              Resume
            </button>
          </Link>
          <Link
            href="https://github.com/K4RTH1CC"
            passHref={true}
            target="_blank"
          >
            <button className="hover:bg-slate-400 text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4 border-b-4 duration-500 border-gray-700 mx-4">
              GitHub
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/karthik-nair16/"
            passHref={true}
            target="_blank"
          >
            <button className="hover:bg-slate-400 text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4 border-b-4 duration-500 border-gray-700 mx-4">
              LinkedIn
            </button>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

export default TopNavLayout;
