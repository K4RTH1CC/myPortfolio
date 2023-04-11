import { Fragment } from "react";

function TopNavLayout(){
    return <Fragment>
        <nav className="w-full top-0">
            <div className="bg-gray-500 p-4 flex justify-around">
                <span className="text-gray-700 font-extrabold text-4xl font-header pl-10 pr-10 pt-4 pb-4">K4RTH1K</span>
                <span className="text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4">Home</span>
                <span className="text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4">Resume</span>
                <span className="text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4">GitHub</span>
                <span className="text-gray-700 font-extrabold text-xl mt-1 rounded-md bg-gray-400 pl-10 pr-10 pt-4 pb-4">LinkedIn</span>
            </div>
        </nav>
        </Fragment>
}

export default TopNavLayout;