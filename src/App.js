// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import ProductPage from './components/Product_page';
import { LightBox } from './components/LightBox';
import { MobileNav } from './components/MobileNav';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500)
  }
  const removeClassList  = () =>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) =>{
    removeClassList()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "sucess");
    }else{
      setMode('light')
    }
  }
  const [slider, setSlider] = useState('none')
  const openComponent = ()=>{
      if(slider === 'none')
      setSlider("flex")
      // alert("OK ")
  }
  return (
    <>
  <Navbar mode={mode}  toggleMode={toggleMode}/>
  <MobileNav/>
<LightBox slider={slider} setSlider={setSlider}/>
<ProductPage mode={mode} slider={slider} openComponent={openComponent} />

    </>
  );
}

export default App;
