import { useEffect, useState } from "react";
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import bg3 from "./images/bg3.jpg";
import bg4 from "./images/bg4.jpg";
import bg6 from "./images/bg6.jpg";


function BackgroundSlideshow(){

    const [currentImageIndex, setCurrentIndex] = useState(0);
    const backgroundImageList = [bg1,bg2,bg3,bg4,bg6];
    const time = 5000;

    // const cacheImages = async (backgroundImageList)=>{
    //   const promises  = await backgroundImageList.map((src)=>{
    //     return new Promise (function (resolve,reject){
    //         const img = new Image();
    //         img.src = src;
    //         img.onload =resolve();
    //         img.onerror = reject();

    //     });
    //   });
    //   await Promise.all(promises);

    // }

    useEffect(()=>{
        const slideShowInterval = setInterval(()=>{
                setCurrentIndex((currentImageIndex)=>currentImageIndex = (currentImageIndex+1)%backgroundImageList.length)
              console.log(backgroundImageList[currentImageIndex])
        },time);

        // cacheImages(backgroundImageList);
        return ()=>clearInterval(slideShowInterval);
    },[backgroundImageList]);

    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImageList[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      };


      return (
      <div style={backgroundImageStyle}></div>
      );
}

export default BackgroundSlideshow;
