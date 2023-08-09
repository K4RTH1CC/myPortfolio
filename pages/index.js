import TopNavLayout from "@/layouts/TopNavLayout";
import TypingAnimation from "@/layouts/TypingAnim";
import ImgCarousel from "@/layouts/ImageCarousel";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <TopNavLayout />

      <div id="main" className="bg-slate-400 w-screen h-screen">
        <div id="HOME" className="pl-4 pt-20 sm:pl-60">
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
              {
                src:"/book-recommender.png",
                label: "Book Recommender",
                desc: "This is a Book Recommender system made using Collaborative Filtering of User Reviews and flask front end, It also uses the GeoLocator API in python to display the places that this book is popular.",
                link: "https://github.com/K4RTH1CC/book-recommender-collaborative-filtering-flaskUI",
              },
              {
                src:"/kafka-replica.png",
                label:"Kafka Replica with Flask",
                desc:"This is a replica of kafka made with 3 brokers, a zookeeper and variable amount of consumers and producers. Made with flask, socket programming and request handling.",
                link:"https://github.com/K4RTH1CC/Kafka-replica-flask",
              },
              {
                src:"/NFL-mariadb-connect.png",
                label:"NFL CRUD application with Flask",
                desc:"An NFL database made in mariadb and connected to a flask application to Handle CRUD operations.",
                link:"https://github.com/K4RTH1CC/NFL-sql-mini-project-flask",
              },
              {
                src:"/portfolio-code.png",
                label:"This Website",
                desc:"This is my Website made using NextJS and TailwindCSS",
                link:"https://github.com/K4RTH1CC/myPortfolio",
              }
            ]}
          />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="bg-slate-400 w-screen h-screen">
          <span className="text-m ml-6 text-black m-auto"> Hey this part is still a work in progress due to me not knowing what to write about myself but I will fill it eventually</span>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
