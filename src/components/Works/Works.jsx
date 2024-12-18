import React from 'react'
import './Works.css'
import portfoli from '../../assets/visual_qr.jpg'
import portfolio2 from '../../assets/portfolio_2.jpg'
import portfolio3 from '../../assets/portfolio_3.jpg'
import portfolio4 from '../../assets/portfolio_4.jpg'
import portfolio5 from '../../assets/portfolio_5.jpg'
import portfolio6 from '../../assets/portfolio_6.jpg'



 
const Works = () => {
  return (
    <section id="works">
        <h2 className='worksTitle'>Port-Folio</h2>
        <span className="worksDesc">I just like to put the good effort in the right thing a the right time</span>
        <div className="workImg">
            <a target='_blank' href="https://gitrahul22.github.io/QRcode_generator/"><img src={portfoli} alt="" className="worksImgs" /></a>
            <img src={portfolio2} alt="" className="worksImgs" />
            <img src={portfolio3} alt="" className="worksImgs" />
            <img src={portfolio4} alt="" className="worksImgs" />
            <img src={portfolio5} alt="" className="worksImgs" />
            <img src={portfolio6} alt="" className="worksImgs" />  
        </div>
        <a  target='_blank' href="https://github.com/gitrahul22/"> <button className='wrkbtn'> See More </button></a>
    </section>
  )
}

export default Works 