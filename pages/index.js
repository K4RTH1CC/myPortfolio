import TopNavLayout from "@/layouts/TopNavLayout";
import TypingAnimation from "@/layouts/TypingAnim";
import ImgCarousel from "@/layouts/ImageCarousel";
import { Fragment } from "react";

function HomePage(){
    return <Fragment>
        <TopNavLayout />
        
        <div id="main" className="bg-slate-400 w-screen h-screen">
            <div id="HOME" className="pt-20 pl-60">
                <br /><br /><br />
                <span className="text-m ml-6 text-black">Hello, my name is</span>
                <br />
                <span className="text-6xl ml-6 mt-12 font-bebas">Karthik Nair.</span>
                <br /><br />
                <span className="text-6xl ml-6 mt-12 font-bebas text-gray-700">Welcome to my</span>
                <TypingAnimation words={['Website', 'Portfolio', 'Project Archive','Blog']} />
                <br /><br />
            </div>
            <div className="bg-slate-400"><ImgCarousel 
                props = {[{
                    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
                    label: 'Image-1',
                    desc: 'This is image 1 description',
                    },
                    {
                    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                    label: 'Image-2',
                    desc: 'This is image 2 description',
                    },
                    {
                    url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
                    label: 'Image-3',
                    desc: 'This is image 3 description',
                    },

                    {
                    url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
                    label: 'Image-4',
                    desc: 'This is image 4 description',
                    },
                    {
                    url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
                    label: 'Image-5',
                    desc: 'This is image 5 description',
                    }]}
            /></div>
            
        </div>
    </Fragment>
   
}

export default HomePage;