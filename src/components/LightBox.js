import React,{useState} from 'react'
import Img1 from '../images/image-product-1-thumbnail.jpg'
import Img2 from '../images/image-product-2-thumbnail.jpg'
import Img3 from '../images/image-product-3-thumbnail.jpg'
import Img4 from '../images/image-product-4-thumbnail.jpg'
import Img5 from '../images/image-product-1.jpg'
import Img6 from '../images/image-product-2.jpg'
import Img7 from '../images/image-product-3.jpg'
import Img8 from '../images/image-product-4.jpg'

export const LightBox = (props) => { 
  const [offLight, setOffLight] = useState('flex')
   const clickOverLay = () =>{
    if (offLight === "flex"){
    setOffLight('none')
    props.setSlider('flex')
    }else{
    setOffLight('flex')
    }
   }
    const [image, setImage] = useState(Img5)
    const [indi, setIndi] = useState({})
    const [size, setSize] = useState({})
    const [sizee, setSizee] = useState({})
    const [opa, setOpa] = useState('0.3')
    const [opaa, setOpaa] = useState('1')
    const [opaaa, setOpaaa] = useState('1')
    const [opaaaa, setOpaaaa] = useState('1')
    const changepic1 = () =>{
        setImage(Img5)
        setSize({width:'350px',height:'350px'})
        setSizee({marginTop:"111%"})
        setIndi( {width:'293%', margin:'155px 0 0 -337px'})
        setOpa('0.3')
        setOpaa('1')
        setOpaaa('1')
        setOpaaaa('1')
    }
    const changepic2 = () =>{
        setImage(Img6)
        setSize({width:'350px',height:'350px'})
        setSizee({marginTop:"111%"})
        setIndi( {width:'293%', margin:'155px 0 0 -337px'})
          setOpa('1')
          setOpaa('0.3')
          setOpaaa('1')
          setOpaaaa('1')
    }
    const changepic3 = () =>{
        setImage(Img7)
        setSize({width:'350px',height:'350px'})
        setSizee({marginTop:"111%"})
        setIndi( {width:'293%', margin:'155px 0 0 -337px'})
        setOpa('1')
        setOpaa('1')
        setOpaaa('0.3')
        setOpaaaa('1')

    }
    const changepic4 = () =>{
        setImage(Img8)
        setSizee({marginTop:"111%"})
        setSize({width:'350px',height:'350px'})
        setIndi( {width:'293%', margin:'155px 0 0 -337px'})
        setOpaaa('1')
        setOpaa('1')
        setOpaaa('1')
        setOpaaaa('0.3')

    }
    const handleprev = () =>{
      var arr = [Img5,Img6,Img7,Img8]
      setImage( arr[Math.floor(Math.random() * arr.length)])
    }
    const handlenext = () =>{
      var arr = [Img5,Img6,Img7,Img8]
      setImage( arr[Math.floor(Math.random() * arr.length)])
    }
    return (<>
    <div style={{display:offLight}}>
            <div id="carouselExampleIndicators" className="carousel slide mainslider" data-bs-ride="carousel" style={{display:props.slider,zIndex:"999"}}>
        <div id="overlay" onClick={clickOverLay}></div>

  <div className="carousel-inner d-flex">
    <div className= "carousel-item active" >
      <img src={image} className="slideImg d-block" style={size} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img6} className="d-block w-10" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img7} className="d-block w-10" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img8} className="d-block w-10" alt="..."/>
    </div>
  </div>
  <div className="allimge d-flex" style={sizee}>
               <div className="Image1 mx-2">
                   <img src={Img1} style={{opacity:opa}} onClick={changepic1} className="Img1" alt="" />
               </div>
               <div className="Image2 mx-2">
                   <img src={Img2} style={{opacity:opaa}} onClick={changepic2} className="Img2" alt="" />
               </div>
               <div className="Image3 mx-2">
                   <img src={Img3} style={{opacity:opaaa}} onClick={changepic3} className="Img3" alt="" />
               </div>
               <div className="Image4 mx-2">
                   <img src={Img4} style={{opacity:opaaaa}} onClick={changepic4} className="Img4" alt="" />
               </div>
               </div>
  <div className="indicator" style={indi}>
    <button onClick={handleprev}  className="previous round">&#8249;</button>
<button onClick={handlenext}  className="next round">&#8250;</button>
  </div>
</div>
</div>


  </>  )
}
