import mlog from '../../assets/mlogo2.png'
import {Link} from 'react-scroll'
import contimg from '../../assets/contact.png'
import './Navbar.css'
import { useState } from 'react'
import brgrm from '../../assets/menu.png'
const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);

  return (
    
    <nav className="bar">
      <Link activeClass='none' to="intro" spy={true} smooth={true} offset={-100}  duration={400}  onClick={()=>setShowMenu(false)} > <img src={mlog} alt="logo" className="imag" /></Link>
     
      <div className="menu">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100}  duration={400} className="list-item">Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-79}  duration={300} className="list-item">About</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-74}  duration={250} className="list-item">Projects</Link>
        {/* <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-73}  duration={200} className="list-item" >Clients</Link> */}
      </div>
      <button className="cont" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }} >
      <img src={contimg} className='imag2' alt="Cont" />
          Quick-Contact
        </button>
        <img src={brgrm} alt="Menu" className='mobMenu'onClick={()=>{setShowMenu(!showMenu)}} />
        <div className="navmenu" style={{display :showMenu ? 'flex':'none'} } >
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100}  duration={400} className="listitem" onClick={()=>setShowMenu(false)} >Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-79}  duration={300} className="listitem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-74}  duration={250} className="listitem"onClick={()=>setShowMenu(false)}>Projects</Link>
        {/* <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-73}  duration={200} className="listitem" onClick={()=>setShowMenu(false)}>Clients</Link> */}
        <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-80}  duration={300} className="listitem" onClick={()=>setShowMenu(false)}>Contacts</Link>
      </div>
    </nav>
  )
}

export default Navbar