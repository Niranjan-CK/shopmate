import {   useState } from "react"
import { useFetch } from "../hooks/useFetch"
export const ProductList=()=>{
    const [ url , setUrl ] = useState("http://localhost:8000/products")
    const {data : products , loading , error} = useFetch(url)
    return(
        <section>
            <h2>Product </h2>
            <span>
            <button onClick={()=> setUrl("http://localhost:8000/products?in_stock=true")}>In stock</button>
            <button onClick={()=> setUrl("http://localhost:8000/products")}>ALL</button>
            </span>
            { loading && <p>Loading ...</p>}
            { error && <p>{error}</p>}
            {
               products && products.map((item)=>(
                
                <div className="card" key={item.id}>
                    <span>{item.id }</span>
                    <h3 >{item.name}</h3>
                    <div className="pice">

                        <span>{item.price}</span>
                        <span>{item.in_stock ? "In stock" : "Out of stock"}</span>
                    </div>
                </div>
                    
                ))
            }
        </section>
    )
}