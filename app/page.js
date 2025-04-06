//import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Blog from "@/app/components/Blog";
import About from "@/app/components/About";
import Resume from "@/app/components/Resume";
import Projects from "@/app/components/project";

export default function Home(){
    return(
        <div> <Navbar/>
            <Header/>
            <About/>
            <Resume/>
            <Projects/>
            <Blog/>
            <Contact/>
            <Footer/>



    </div>
    );
}
