import { Link } from "react-router-dom";
import FeatureProduct from "./featureproducts";

function About() {



  return (
   <>
    <div className="home">
      <div className='home1'>
      <span>Welcome to <h2>Online-Shopping</h2></span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae alias, pariatur repellat molestiae </p>
      <Link to="/products">
      <button className="btn btn-success">See products</button>
      </Link>
    </div>
    <div className='home1'>
        <img src="../home.jpg" alt="" />
      </div>
      </div>
      <FeatureProduct/>
      </>
  )
}

export default About