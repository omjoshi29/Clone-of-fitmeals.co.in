import React, { useEffect, useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const [tag, setTag] = useState("who Says Eating Healthy Food Is Boring?")
  const [para, setPara] = useState("")
 
  const length = slides.length;

  useEffect(() => {
      setTimeout(() =>{
      if(current === length-1){
        current=1;
        setCurrent(current)
        
      }
      
       if(current === 1){
          setTag("Meal Plan Subscription")
         setPara("We have got different meal plan to cater to your specific requirement be it weight loss, staying healthy or building muscles")
          
        }
        else if(current === 2){
          setTag("Get a Custimised Diet plan")
          setPara("Consultant our nutrition and get diet plan for you")
          
        }else{
          setTag("Fitmeal app is now live")
        }
        setCurrent(current+1)

      }, 5000)
     
  })
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
console.log(current)

  if(!Array.isArray(slides) || slides.length <= 0){
    return null ;
  }



  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
       {SliderData.map((elem, index) => {

         return (
           <figure>
              <div className={index === current ? 'slide active' : 'slide'} key = {index}>
             {index === current && (<img src={elem.image} alt="Food img" className='image'/> )}
             <div className='wrapper'>
             <p className='tagMe'>{tag}</p>
             <p className='paraMe'>{para}</p>
            </div> 
              
           </div>
           </figure>
          
         )
         
     })}

    </section>
  )
}

export default ImageSlider

