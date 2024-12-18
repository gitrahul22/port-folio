
import './hero.css'
import {Link} from 'react-scroll'
import Mypic from '../../assets/mepic.png'
import brf from '../../assets/hireme.png'
import bdrp from '../../assets/ptrn.png'
import './hero.css'
const Hero = () => {
  return (
    <div>
        <section id="intro">
            <div className='intro-cont'>
                <span className="hello">Hello</span>  
                <span className='intro-text'>I'm <span className="introname">Rahul</span><br/> Web Developer </span>
                <p className='intropara'>This is my port-folio built using vite-react <br/> please visit the About section for more info </p>
                <a 
  href="https://drive.google.com/file/d/1IGrsZ0ZevPfSfGLSVYDHk-83xpZ-Ufdi/view?usp=drive_link" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn cv"
>
  <img src={brf} alt="brf-case" className="brf" /> View CV
</a>

            </div>
            <img src={Mypic} className='mpc' alt="Hello" />
            <img src={bdrp}  className='mpc bd'alt="Hello" />
        </section>
    </div>
  )
}

export default Hero