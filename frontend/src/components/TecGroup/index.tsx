import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
function TecGroup() {
  return (
    <div className="w-full h-full flex items-center text-5xl gap-5 ">
      <FaHtml5 />
      <FaCss3Alt />
      <IoLogoJavascript />
      <BiLogoTypescript className="text-6xl" />
      <FaReact />
      <SiRedux />
      <BiLogoTailwindCss />
      <RiNextjsLine />
      <TbBrandVite />
    </div>
  );
}

export default TecGroup;