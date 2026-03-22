import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp, BsSearch } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
const SocialMedia = () => {

  return (

    <div className="flex">

      <div className="flex flex-row gap-2 justify-center items-center">
        <a
          href="https://api.whatsapp.com/send?phone=989127998040&text=Hello Mansour"
          className="text-xl rounded-full bg-green-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-green-600 duration-300"
        >
          <BsWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/mansour.vn"
          className="text-xl rounded-full bg-rose-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-rose-600 duration-300
                    "
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://t.me/Mansour_VN"
          className="text-xl rounded-full bg-blue-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-600 duration-300
                    "
        >
          <RiTelegramLine />
        </a>

        <a
          href="mailto:mansour.vn86@gmail.com?subject=Boxing%20Training%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20your%20boxing%20classes.%20Could%20you%20please%20share%20details%20about%20schedule%2C%20pricing%2C%20and%20registration%3F%0A%0AThank%20you%21"
          target="_top"
          className="text-xl rounded-full bg-yellow-700 p-2 text-white
             transition ease-in-out delay-150 hover:scale-110 hover:bg-yellow-600 duration-300"
        >
          <HiOutlineMail />
        </a>

        <a
          href="tel:+989127998040"
          className="text-xl rounded-full bg-neutral-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-neutral-600 duration-300
                    "
        >
          <TbPhoneCall />
        </a>
        <a
          href="#goSearch"
          className="text-xl rounded-full bg-neutral-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-neutral-600 duration-300"
        >
          <BsSearch />
        </a>
      </div>
    </div >
  );
};

export default SocialMedia;
