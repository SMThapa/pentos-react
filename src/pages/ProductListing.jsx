import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductListing = () => {

    const url = import.meta.env.VITE_API_BASEURL;
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([])
    const location = useLocation()
    const pageTitle = location.state?.type || 'all products'      
    useEffect(()=>{
        async function getProducts(){
            try{
                const res = await axios.get(`${url}/products/api.php`)
                setProducts(res.data) 
                setNewProducts(pageTitle == 'all products' ? res.data : res.data.filter(obj=>obj.category.toLowerCase() == pageTitle))                               
                console.log(pageTitle == 'all products' ? res.data : res.data.filter(obj=>obj.category.toLowerCase() == pageTitle))

            }catch(err){
                console.log(err)
            }
        }

        if(products.length == 0){
            getProducts()
        }else{
            setNewProducts(products.filter(obj=>obj.category.toLowerCase() == pageTitle))
            console.log(products.filter(obj=>obj.category.toLowerCase() == pageTitle));
        }
    }, [pageTitle])    

  return (
        <section>
        <div className="page-products page-width">
            <div className="title">{pageTitle}</div>
            <div className="product-contents">

                {
                    newProducts?.map((item, index)=>(
                        <Link to={`/product-single/${item.model_number}`} key={index}>
                            <div className="product-card">
                                <img src={item?.images[0]} alt="img" />
                                <div className="card-title">{item.name}</div>
                                <div className="card-tag">{item.category}</div>
                                <div className="card-description" dangerouslySetInnerHTML={{__html: item.description}} />                                
                                
                            </div>
                        </Link>
                    ))
                }                
            </div>
        </div>
    </section>
  )
}
