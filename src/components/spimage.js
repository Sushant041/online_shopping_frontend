import React, { useState } from 'react'



const SpImage  = ({imgs = [{ url:"" }]}) => {
  
  const [mainImg, setMainImg] = useState(imgs[0])

  return (
    <div className='spimg'>
    
      <div style={{textAlign: "center"}}>
        <img src={mainImg.url} className='spimg2' alt={mainImg.filename} />
      </div>

      <div className="row1">
     
        {
          imgs.map((curElm) => {
            return(
              <div>
            { mainImg.url === curElm.url ? "" :
                <img src={curElm.url} alt={curElm.filename}
                 className='spimg1' key={curElm.id}
                 onClick={() =>{ setMainImg(curElm)}} />
    }
              </div>
            )
          })
        }
       
      </div>
      </div>

  )
}

export default SpImage
