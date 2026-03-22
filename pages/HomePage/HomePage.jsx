// import CarouselBanner from "@/components/carousel";
import CarouselBanner from "../../components/Carousel";
import ProductShow from "@/components/Product";
import MemberBox from "@/components/MemberBox";
import Search from "@/components/Search/SearchBoxForHome";

const HomePage = () => {
  return (
    <div id="HomePage" className="flex flex-col gap-4">
      {/*start Title HomePage */}
      <div className="flex flex-col w-full z-0 ">
        <div className="grid md:py-4 p-1 card bg-slate-900 rounded-box place-items-center">
          <h2 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-4xl text-center text-xl md:p-4 p-2  font-black "> نرم‌افزارهای استاندارد سازی و ارسال به سامانه مودیان را از ما بخواهید </h2>
        </div>
        
      </div>
      {/* end Title HomePage */}

      {/*  start carousel item*/}
      <div id="carouselBanner" className="max-w-full md:h-96">
        <CarouselBanner />
      </div>
        {/*  end carousel item*/}

        {/*start Show product*/}
        <div className="flex flex-col border-orange-50">
            <div className="divider dividerProduct md:py-8"> <h1 className="text-2xl md:text-6xl  text-shadow shadow-orange-400"> محصولات </h1> </div>
            <div className="grid card bg-base-400 rounded-box place-items-center">
                <ProductShow/>
            </div>
        </div>
        {/*  end Show product */}


        {/* start Member in Aringmastery */}
        <div className="flex flex-col border-orange-50">
            <div className="divider dividerProduct md:py-8"> <h1 className="text-2xl md:text-6xl text-shadow shadow-orange-400 rounded-xl"> عضو خانواده رینگ مستری شوید </h1> </div>
           
                <MemberBox/>
            
        </div>

        {/* end Member in Aringmastery */}


        {/*start Search in Aringmastery*/}
        <div className="flex flex-col border-orange-50 mt-4">
            <div className="divider dividerProduct md:py-8"> <h1 className="text-2xl md:text-4xl text-shadow shadow-orange-400">   جستجو کنید  </h1> </div>
            <div className="grid card bg-base-400 rounded-box place-items-center" id="goSearch"> 
                <Search/>
            </div>
        </div>
        {/*  end Search in Aringmastery */}
    </div>
  );
};

export default HomePage;
