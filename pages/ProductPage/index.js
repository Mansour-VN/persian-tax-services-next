import {ProductS} from "./../../public/Content/dumyy";
import ProductCard from "../../components/Product/ProductCard";



const ProductPage = () =>{

    return (
        <div className=" min-h-screen md:grid md:grid-cols-4 flex flex-col items-center md:container md:mx-auto justify-center gap-4 mt-8">
            {ProductS.map((p, )=>{
                return(
                    <ProductCard textTitle={p.title} src={p.image} key={p.id}/>
                )
            })}
        </div>
    )
}

export  default ProductPage;