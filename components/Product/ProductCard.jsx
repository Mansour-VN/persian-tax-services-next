import Image from "next/image";

const CardProduct = ({src, textTitle, description}) =>{
    return (
        <div className="card bg-base-300 shadow-l w-80 max-h-96 ">
            <figure className="px-10 pt-10">
                {/*<img src={src} alt="Shoes" className="rounded-xl" />*/}
                <Image src={src}
                        width={250}
                       height={250}
                       alt="imageProduct"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-orange-400">{textTitle}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-outline md:text-xl">مشاهده</button>
                </div>
            </div>
        </div>
    )
}

export default  CardProduct;