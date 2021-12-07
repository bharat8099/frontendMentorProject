import React,{useState} from 'react'
import Img1 from '../images/image-product-1-thumbnail.jpg'
import Img2 from '../images/image-product-2-thumbnail.jpg'
import Img3 from '../images/image-product-3-thumbnail.jpg'
import Img4 from '../images/image-product-4-thumbnail.jpg'
import Img5 from '../images/image-product-1.jpg'
import Img6 from '../images/image-product-2.jpg'
import Img7 from '../images/image-product-3.jpg'
import Img8 from '../images/image-product-4.jpg'
import { MobileSlide } from './MobileSlide'

const ProductPage = (props) => {
    let pointer ={
        cursor:"pointer"
    }
    let navLinka ={
        color: props.mode === 'dark' ? 'white' : 'black'
        }
        console.log(props.slider)
const [num, setNum] = useState(0)
const handelplus = () =>{
    setNum(num+1)
}
const handelMinus = () =>{
    if(num ===0){}else{setNum(num-1)}
}
const addCart = () =>{
    alert("Your Item Added")
}
var forSize ={
    width:'350px',
    height:'350px',
    borderRadius:'14px',
}


const [image, setImage] = useState(Img5)
const [size, setSize] = useState()
const [opa, setOpa] = useState('0.3')
const [opaa, setOpaa] = useState('1')
const [opaaa, setOpaaa] = useState('1')
const [opaaaa, setOpaaaa] = useState('1')
const [Bor1, setBor1] = useState('2')
const [Bor2, setBor2] = useState('0')
const [Bor3, setBor3] = useState('0')
const [Bor4, setBor4] = useState('0')

const changepic1 = () =>{
    setImage(Img5)
    setSize(forSize)
    setOpa('0.3')
    setOpaa('1')
    setOpaaa('1')
    setBor1('2')
    setBor2('0')
    setBor3('0')
    setBor4('0')
}
const changepic2 = () =>{
    setImage(Img6)
    setSize(forSize)
      setOpa('1')
      setOpaa('0.3')
      setOpaaa('1')
      setOpaaaa('1')
      setBor1('0')
    setBor2('2')
    setBor3('0')
    setBor4('0')
}
const changepic3 = () =>{
    setImage(Img7)
    setSize(forSize)
    setOpa('1')
    setOpaa('1')
    setOpaaa('0.3')
    setOpaaaa('1')
    setBor1('0')
    setBor2('0')
    setBor3('2')
    setBor4('0')

}
const changepic4 = () =>{
    setImage(Img8)
    setOpaaa('1')
    setOpaa('1')
    setOpaaa('1')
    setOpaaaa('0.3')
    setBor1('0')
    setBor2('0')
    setBor3('0')
    setBor4('2')

}

    return (
        <>
        <MobileSlide/>
        <div className="productpage container my-lg-5" style={{display: 'flex'}}>
               <div className="d-lg-flex" style={{height:"2vh"}}>

               <div className="slideimg mx-lg-5 my-lg-4">
                   <img className="mainimg" onClick={props.openComponent} style={size}  src={image} alt="" />
               </div>
               
               <div className="d-grid mx-lg-5 my-lg-4">

               <div className="shortHead my-3">
                <span>Speanke company</span>
               </div>
              
               <div   className="boldHead my-2">
                 <h1 style={navLinka}>Fall Limited Edition<br/>
                    Sneakers</h1>
               </div>
               <div  className="longHead">
                <p style={navLinka}>These low-profile neakers are your PErfect casual wear<br/>
                 companion Featuring a durable rubber outer sole.they’ll<br/>
                  with stand everything the weather can offer.</p>
               </div>
               <div className="d-flex my-2">
                   <div className="price">
                       <h2>$125.00</h2>
                   </div>
                   <div className="percent mx-5 my-2">
                       <p>50%</p>
                   </div>
                   
               </div>
                   <div className="priceCut">
                       <p>$230.00</p>
                   </div>
                    
               <div className="d-flex">
               <div className="counter d-flex">
               <span onClick={handelMinus} style={pointer} className="sign">-</span><span className="line">|</span><span className="number">{num}</span><span className="line">|</span><span onClick={handelplus} style={pointer} className="signe">+</span>
               </div>
               <div className="button">
                   <button className="addtocart" onClick={addCart}>
                   <pre>  <svg width="22" height="20" className="cartSvg" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>  Add to cart   </pre>
                   </button>
               </div>
  </div>


               {/* d-lg-none */}
          
               </div>
               </div> 
               <div className="allimg d-flex">
               <div className="Image1 mx-2" style={{border:`${Bor1}px solid hsl(26, 100%, 55%)`}}>
                   <img src={Img1} style={{opacity:opa}} onClick={changepic1} className="Img1" alt="" />
               </div>
               <div className="Image2 mx-2" style={{border:`${Bor2}px solid hsl(26, 100%, 55%)`}}>
                   <img src={Img2} style={{opacity:opaa}} onClick={changepic2} className="Img2" alt="" />
               </div>
               <div className="Image3 mx-2" style={{border:`${Bor3}px solid hsl(26, 100%, 55%)`}}>
                   <img src={Img3} style={{opacity:opaaa}} onClick={changepic3} className="Img3" alt="" />
               </div>
               <div className="Image4 mx-2" style={{border:`${Bor4}px solid hsl(26, 100%, 55%)`}}>
                   <img src={Img4} style={{opacity:opaaaa}} onClick={changepic4} className="Img4" alt="" />
               </div>
               </div>
        </div>
   </> )
}
export default ProductPage;