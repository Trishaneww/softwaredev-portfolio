import Image from "next/image";
import Hero from '@/components/Hero';
import { FloatingNav }  from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Progress from '@/components/Progress';
import Projects from '@/components/Projects';
import Approach from '@/components/Approach';
import { navItems } from "@/data";
import '../styles/global.scss';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <Hero />
        <Projects />
      </div>
      <Progress />
      <Approach />
    </main>
  );
}
