import React from 'react'
import MainImg from '../images/image-product-1.jpg'

const AddTripButton = (props) => {
  return <div className="slideimg mx-5 my-4">
                   <img className="mainimg" onClick={props.addTrip} src={MainImg} alt="" />
               </div>
}

export default AddTripButton