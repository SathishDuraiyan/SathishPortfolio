import { useState } from "react";
import { Menu } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[70px] text-white bg-[#111111] sticky">
      <div className="px-6 md:px-28 py-6 flex flex-row w-full justify-between items-center">
        <h2 className="text-2xl font-semibold">Sathish Duraiyan</h2>
        
        <div className="hidden md:flex flex-row gap-5">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact Me</a>
        </div>
        

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 bg-[#111111] py-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact Me</a>
          <a href="https://drive.google.com/file/d/1PdzzBn9nrEdiSV3WO0Ny-J9lCHrSVcID/view?usp=sharing" target="_blank"className="text-white p-3 bg-[#222222] hover:bg-white hover:text-black duration-500 transition-all ease-in-out  max-w-fit rounded-md">
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;