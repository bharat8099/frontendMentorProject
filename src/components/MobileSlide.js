import React,{useState} from 'react'
import Img5 from '../images/image-product-1.jpg'
import Img6 from '../images/image-product-2.jpg'
import Img7 from '../images/image-product-3.jpg'
import Img8 from '../images/image-product-4.jpg'
export const MobileSlide = () => {
const [image, setImage] = useState(Img5)

    const handleprev = () =>{
        var arr = [Img5,Img6,Img7,Img8]
        setImage( arr[Math.floor(Math.random() * arr.length)])
      }
      const handlenext = () =>{
        var arr = [Img5,Img6,Img7,Img8]
        setImage( arr[Math.floor(Math.random() * arr.length)])
      }
    return (
        <div>
 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-inner d-flex d-lg-none">
<div className= "carousel-item active" >
<img src={image} className="slideImg d-block" alt="..." style={{width:"100%"}}/>
</div>

</div>
</div>

<div className="indicatora">
<button onClick={handleprev}  className="previous round">&#8249;</button>
<button onClick={handlenext}  className="next round">&#8250;</button>
</div>
        </div>
    )
}
