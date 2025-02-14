import { useState } from "react";
import Navbar from "./Navbar";
// import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { Textarea } from "../Components/Textarea";
import { Button } from "../Components/Button";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer";

const Contact: React.FC = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => toast.success("Message Successfully Send!!", {
    autoClose:3000,
    hideProgressBar:true,
    className:"toastify",
    position:"bottom-right"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Submit the form data to the API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key:"dab51914-704d-4c49-ad61-b5179f3639f1",
        name, email, message
      })
    })

    if (response.ok) {
      setName("")
      setEmail("")
      setMessage("")
      notify();
    } else {
      console.log("Error submitting form:", response.status);
    }

  };
  
  return (
    <div className="text-white bg-[#111111] w-full h-screen">
      <Navbar />
      <div className="md:px-40 md:py-15 h-[55%] w-full bg-[#222222] px-8 py-15 flex flex-col gap-5">
        <p className="text-5xl font-bold ">Get In Touch</p>
        <p className="text-[19px]">
          Stay in the loop ! Fill in your details to receive exclusive updates 
          <br />
          straight to your inbox. Got a quick question?{" "}
          <br></br>
          <span className="">Drop it in the Message Box!</span>
        </p>
        <a href="mailto:sathishduriyan6@gmail.com" target="_blank" className="flex flex-row items-center gap-5 text-zinc-400 hover:text-white">
          <SiGmail className="w-5 h-5" />
          <p className="">sathishduriyan6@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/sathish-duraiyan/" target="_blank" className="flex flex-row items-center gap-5 text-zinc-400 hover:text-white ">
          <FaLinkedin className="w-5 h-5" />
          <p>Sathish Duraiyan</p>
        </a>

        <a href="https://maps.app.goo.gl/Z4U848jwuHS7VJ6H6" target="_blank" className="flex flex-row items-center gap-5 text-zinc-400 hover:text-white">
          <FaLocationDot className="w-5 h-5" />
          <p>Egapuram, Salem - 637 502, Tamil Nadu, India</p>
        </a>
      </div>
      <div className="lg:mt-[-400px] lg:ml-[700px] w-full lg:w-1/2 flex flex-col justify-center items-center p-12 gap-5 rounded-2xl ">
        <div className="md:w-full w-[95%] bg-[#111111] p-8 rounded-2xl flex flex-col gap-5">
          <h2 className="font-bold text-white text-2xl">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className="w-full"
          >

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name">Name</label>
                <Input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="eg., Sathish Duraiyan"
                  className="border-2 border-[#222222]"
                  required
                  onChange={(e)=>setName(e.target.value) }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="eg., example@email.com"
                  className="border-2 border-[#222222]"
                  required
                  onChange={(e)=>setEmail(e.target.value) }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="eg., Hey, How are You?"
                  className="border-2 border-[#222222]"
                  required
                  onChange={(e)=>setMessage(e.target.value) }
                />
              </div>
              <Button
                type="submit"
                className="w-full p-2 rounded bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
              >
                Submit Form
              </Button>
            </div>
            <div>
        <ToastContainer />
      </div>
          </form>
          
        </div>
      </div>
      <div className="w-full border border-gray-700/40 mb-5 mt-[-5px]"></div>
        <Footer></Footer>
    </div>
  );
};

export default Contact;
