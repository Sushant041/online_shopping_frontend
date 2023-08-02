import { useProductContext } from "./context/productcontext";
import Product from "./product";


const FeatureProduct = () => {

    const { isLoading, featureProducts } = useProductContext();

    if(isLoading){
        return <div style={{textAlign: "center"}}>
          {/* <div className="lds-ellipsis isloading"><div></div><div></div><div></div><div></div></div> */}
          <h3>Loading.......</h3>
          </div>
    }

  return (
    <div className="featureprd">
     <div style={{marginLeft: "6%"}}>Check Now!</div>
     <h2 style={{marginLeft: "6%"}}>Our Feature Services</h2>
     <div className="fprdct">
      

        {
            featureProducts.map((curElem) => {
                return <div className="fcard" key={curElem.id}><Product key={curElem.id} {...curElem} /> </div>;
            }) 
        }
    
     </div>
    </div>
  )
}


export default FeatureProduct
