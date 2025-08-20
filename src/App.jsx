import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AllRoutes } from "./route/AllRoutes"
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {  

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07, // More smoothing
      smoothWheel: true,
      infinite: false, // Disable infinite scrolling
    });

    // Add event listeners if needed
    lenis.on('scroll', (e) => {      
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);


  const [showBtn, setShowBtn] = useState(false);
  const [scrollPercent, setScrollPercent] = useState('0');
  useEffect(() => {
    const calcScrollValue = () => {
      const position = document.documentElement.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;            
      const clientHeight = document.documentElement.clientHeight;
      // console.log(position, calcHeight, clientHeight );

      const scrollValue = Math.round((position * 100) / calcHeight);      
      setScrollPercent(scrollValue)

      if(clientHeight/2 > position){
        setShowBtn(false)
      }else{
        setShowBtn(true)
      }
    };

    window.addEventListener("scroll", calcScrollValue);
    
    calcScrollValue();
    
    return () => window.removeEventListener("scroll", calcScrollValue);
  }, []);

  return (
  <>
    <Header/>
      <AllRoutes/>  
      <div className={`scrollToTop ${showBtn ? 'btn-up' : ''}`} 
        onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' }) } 
        style={{background: `conic-gradient(#5AEF90 ${scrollPercent}%, #000 ${scrollPercent}%)`}}
      >
        <span>
          <img src="/right.png" alt="" />
        </span>
      </div>
    <Footer/> 
  </>
  )
}

export default App
