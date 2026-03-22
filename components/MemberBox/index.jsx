import Image from "@/public/assets/image/tax4.jpg";

const SearchBox = () => {
    return (
        <div className="hero h-96 rounded-xl mt-4" style={{ backgroundImage: `url(${Image.src})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl">تا آخرین قدم همراه شما هستیم</h1>
                    <p className="mb-5">
                    جهت دریافت هرگونه خدمات و خرید محصولات، آموزش و مشاور مالی و مالیاتی نرم افزارهای استاندارد سازی و... فرم مقابل را تکیمل نموده تا ما با شما تماس بگیریم

                    </p>
                    <button className="btn btn-outline md:text-xl"> فرم درخواست </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;