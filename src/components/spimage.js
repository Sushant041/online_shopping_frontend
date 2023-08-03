import React, { useState } from 'react'

const SpImage  = ({imgs = [{ url:"" }]}) => {
  
  const [mainImg, setMainImg] = useState(imgs[0])

  return (
    <div className='spimg'>
      <div>
        {
          imgs.map((curElm, index) => {
            return(
              <figure key={index}>
                <img src={curElm.url} alt={curElm.filename} className='spimg1' key={curElm.id} onClick={() =>{ setMainImg(curElm)}} />
              </figure>
            )
          })
        }
      </div>
      <div>
        <img src={mainImg.url} className='spimg2' alt={mainImg.filename} />
      </div>
    </div>
  )
}

export default SpImage
