import TopNavLayout from "@/layouts/TopNavLayout";
import TypingAnimation from "@/layouts/TypingAnim";
import { Fragment } from "react";


function HomePage(){
    return <Fragment>
        <TopNavLayout />
        
        <div id="main" className="bg-slate-400 w-screen h-screen">
            <div id="HOME" className="pt-40 pl-60">
                <br /><br /><br />
                <span className="text-m ml-6 text-black">Hello, my name is</span>
                <br />
                <span className="text-6xl ml-6 mt-12 font-bebas">Karthik Nair.</span>
                <br /><br />
                <span className="text-6xl ml-6 mt-12 font-bebas text-gray-700">Welcome to my</span>
                <TypingAnimation words={['Website', 'Portfolio', 'Project Archive','Blog']} />

            </div>
        </div>
    </Fragment>
   
}

export default HomePage;