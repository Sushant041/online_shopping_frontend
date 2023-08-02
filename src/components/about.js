import { useProductContext } from './context/productcontext'
import { Link } from "react-router-dom";


function About() {

  const { name } = useProductContext();


  return (
   <>
   <h4>{name}</h4>
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
      </>
  )
}

export default About