import TopNavLayout from "@/layouts/TopNavLayout";
import TypingAnimation from "@/layouts/TypingAnim";
import ImgCarousel from "@/layouts/ImageCarousel";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <TopNavLayout />

      <div id="main" className="bg-slate-400 w-screen h-screen">
        <div id="HOME" className="pt-20 pl-60">
          <br />
          <br />
          <br />
          <span className="text-m ml-6 text-black">Hello, my name is</span>
          <br />
          <span className="text-6xl ml-6 mt-12 font-bebas">Karthik Nair.</span>
          <br />
          <br />
          <span className="text-6xl ml-6 mt-12 font-bebas text-gray-700">
            Welcome to my
          </span>
          <TypingAnimation
            words={["Website", "Portfolio", "Project Archive", "Blog"]}
          />
          <br />
          <br />
        </div>
        <div className="bg-slate-400 w-screen h-screen">
          <ImgCarousel
            props={[
              {
                src: "/ATM-simulator.png",
                label: "ATM simulator in C",
                desc: "This is one of my First projects, It is an ATM simulator written in C Programming with a single line text file to store previous data.",
                link: "https://github.com/K4RTH1CC/ATM-Simulator-In-C",
              },
            ]}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
