import BBG from '../src/assets/BBG.jfif';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Fatima Mawaj</span> 
          <img src={BBG} alt="profile" className="bbg" width="750" height="750" align="right" />
          <br/>Learner of Website Design</span>
          <p className="introPara">I am passionate about learning web design and currently developing my skills to create visually appealing, user-friendly websites.</p>
          <p className="missionStatement">
            My mission is to create engaging and intuitive digital experiences that empower users and enhance their interaction with the web.
          </p>
          <Link><button className="btn"><img src={hire} alt="HIRE ME!" width="100px" height="100px"/></button></Link>
          <Link to="/about">
            <button className="btn">
              Go to About Me
            </button>
          </Link>
          </div>
          
     </section>
    

     </>
     }
    