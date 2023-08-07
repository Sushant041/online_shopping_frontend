import { FaStar, FaStarHalfAlt }  from "react-icons/fa"
import { AiOutlineStar }  from "react-icons/ai"
 
const Star = ({ stars, reviews}) => {

    const ratingStar = Array.from( { length: 5 }, (elem, index) =>{
        var number = index + 0.5;

        return(
            <span key={index}>
                {stars >= index + 1
                ? (
                <FaStar className="sticon"/>
                )
            : stars >= number
            ? (
            <FaStarHalfAlt className="sticon"/> 
            )
            : (
            <AiOutlineStar className="sticon"/>
            )}
            </span>
        )
    } )
  return (
      <div className="strsec">
        {ratingStar} 
        <div style={{marginLeft: "2%"}}>{stars} ({reviews} customer reviews)</div>
      </div>
  )
}

export default Star
