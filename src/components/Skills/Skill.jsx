
import './Skill.css'
import UID from '../../assets/ui-design.png';
import WBD from '../../assets/website-design.png';
import APD from '../../assets/app-design.png';

const Skill = () => {
  return (
    <div>
        <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc"> I am Skilled into this skills and ready to do more in it </span>
      
        <div className="skillBars">
            <img src={WBD}  className="skillbarimg" alt="" />
            <div className="skillbartext">
                <h2>Web-Site Design</h2>
                <p>I am Passionate about Web-Development </p>      
            </div>
        </div>

        <div className="skillBars">
            <img src={UID} className="skillbarimg" alt="" />
            <div className="skillbartext">
                <h2>Back-end Development</h2>
                <p>I know NODEJS and EJS along with Express </p>      
            </div>
        </div>
        <div className="skillBars">
            <img  src={APD}  className="skillbarimg" alt="" />
            <div className="skillbartext">
                <h2>DSA</h2>
                <p>I have solved 450+ DSA problem across different platforms</p>      
            </div>
        </div>
        </section>
    </div>
  )
}

export default Skill