import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AllRoutes } from "./route/AllRoutes"
import { useEffect } from 'react';
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

  return (
  <>
    <Header/>
    <AllRoutes/>  
    <Footer/> 
  </>
  )
}

export default App
