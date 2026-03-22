import Image from "next/image";
import SocialMedia from "./../SocialMedia/SocialMedia";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { changeThemeFunc } from "@/app/features/theme";
import { BsMoon, BsSun } from "react-icons/bs";
import MobileMenu from "./Mobile";
import DeskTopMenu from "./DesktopMenu";
import Link from "next/link";

const Header = () => {

  const { theme } = useAppSelector((state) => state.colorTheme);
  const dispatch = useAppDispatch();

  const changeTheme = (event) => {
    event.preventDefault();
    dispatch(changeThemeFunc(!theme));
  };
  return (
    <div>
      <div
        id="header-title"
        className="flex flex-col md:flex-row justify-center p-4 items-center"
      >
        <div className="flex justify-between pr-2 items-center gap-4 md:w-1/2 w-full flex-row">

          {/* start lable darck mode  whit table*/}
          <div
            className="text-4xl transition ease-in-out delay-1000"
            onClick={(event) => changeTheme(event)}
          >
            {theme ? <BsMoon /> : <BsSun />}
          </div>
          {/* end lable darck mode */}


          <div className="hidden">
            <p className="font-semibold ">021-96646</p>
            <button className="btn btn-outline ">
              دانلود کاتالوگ
            </button>
          </div>


          <div id="social">
            <SocialMedia />
          </div>
        </div>

        <div className="hidden md:flex flex-row justify-center gap-4  items-center  md:border-l-4  pl-4">
          <p className="md:text-2xl text-xl font-semibold">رینگ مستری</p>

          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/assets/image/logo/RingMastery.png"
              alt="LogoRingMastery"
              className={`rounded  animate-bounce ${theme ? "" : ""}`}
            />
          </Link>
          {/*animate-bounce*/}
        </div>
      </div>

      <div
        id="navbarMenu"
        className="flex flex-row justify-around px-12 md:p-0"
      >
        <div className="navbar">

          <div className="hidden w-full  md:flex justify-center">
            <DeskTopMenu />
          </div>


          <div className="flex md:hidden">
            <MobileMenu />
          </div>
        </div>



        <div className="flex flex-row justify-center items-center md:border-l-4 md:border-warning pl-4 md:hidden">
          <p className="text-2xl font-semibold px-2">رینگ مستری</p>
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/assets/image/logo/RingMastery.png"
              alt="LogoRingMastery"
              className="rounded animate-bounce"
            />
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Header;
