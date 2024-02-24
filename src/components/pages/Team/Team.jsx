import React, { Component } from 'react'
import styles from "./Team.module.css";
import people from './images/people.jpg'
import arrow from './images/arrow.svg'
import circle from './images/circle.svg'
import short from './images/short.svg'
import list from './images/list.svg'
import leafone from './images/leafone.svg'
import leaftwo from './images/leaftwo.svg'
import leafthtee from './images/leafthtee.svg'
import line from './images/line.svg'
import men from './images/men.svg'
import livello from './images/livello.svg'
import groupel from './images/groupel.svg'
import stroke from './images/stroke.svg'
import specialist from './images/specialist.jpg'
import children from './images/children.jpg'
import hart from './images/hart.jpg'
import one from './images/one.svg'
import two from './images/two.svg'
import three from './images/three.svg'
import four from './images/four.svg'
import anastasia from './images/anastasia.svg'
import boy from './images/boy.svg'
import choose from './images/choose.svg'
import ShopNow from '../Home/Hero/ShopNow.jsx'
import air from './images/air.svg'
import stroketwo from './images/stroketwo.svg'
import motherly from './images/motherly.svg'
import west from './images/west.svg'
import vector from './images/vector.svg'
import wand from './images/wand.svg'
import field from './images/field.jpg'


export default class Team extends Component {
  render() {
    return (
    
      <div >
        <div className={styles.team}>
          <div className={styles.hiThere}>
          <img src={people} alt="people" />
          <div className={styles.hiThereText}>
            <h2>Hi there!</h2>
            <p className={styles.Up}>just some information about</p>
            <img src={circle} alt="circle" />
            <img src={arrow} alt="arrow" />
            <img src={short} alt="short" />
            <h2 className={styles.one}>Who we are.</h2>
            <h2 className={styles.two}>Our vision.</h2>
            <h2 className={styles.three}>Our mission.</h2>
            <p>Created by Anastasia, a mom with a passion for progress, sustainability and ethics. Treehouse is not just about timeless and whimsical style but it also serves a deeper purpose, one focused on doing better for our planet, our society and our children.</p>
            <p>We are passionate about empowering parents to make informed clothing choices for their families. We believe that a collective move towards more sustainable practices is the only way to shift the landscape of traditional fashion.</p>
          </div>
        </div>
        <div className={styles.list}>
          <div>
          <img src={leafone} alt="leaf one" />
          <img src={leaftwo} alt="leaf two" />
          <img src={line} alt="line" />
          <img src={men} alt="men" />
          <img src={livello} alt="livello" />
          <img src={groupel} alt="group el" />
          </div>
            <img src={list} alt="list" />
        </div>

        <div className={styles.vision}>
          <div>
          <p className={styles.Up}> sustainability and respect</p>
          <h2>Our vision</h2>
          <p className={styles.Up}>Our promise to you is transparency and progress, not perfection</p>
          </div>
          <div className={styles.visionText}>
            <p>Treehouse envisions a world where conscious living and responsible practices are the norm, supported by a community that prioritizes intentional design. </p>
            <p>Through simple gender-neutral capsule collections of only essential items and a transparent supply chain, we create long lasting pieces that stand the test of time and live to be enjoyed by siblings and friends.</p>
            <img src={leafthtee} alt="leaf three" />
          </div>
        </div>

        <div className={styles.video}>
          <div className={styles.videoText}>
          <p>Inquiry Before Creation: Crafting Conscious Clothing</p>
          <p><img src={stroke} width={16} alt="stroke" />Take a look</p>
          </div>
          <iframe width="1234" height="540" src="https://www.youtube.com/embed/27TsnPIkiew?autoplay=1" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className={styles.mission}>
          <div className={styles.missionFC}>
            <h3>sustainable values</h3>
            <h2>Our mission.</h2>
            <h3>JOIN US ON THIS journey towards ethical practices, sustainable fashion, and happy kids!</h3>
            <p>Our mission is to revolutionize kids fashion by creating the change we wish to see in the world. We believe clothing should be above all, kind.</p>
            <img src={specialist} alt="specialist" />
          </div>
          <div className={styles.missionSC}>
            <div className={styles.absolut}>
              <img src={hart} alt="hart" />
              <img src={boy} alt="boy" />
              </div>
            <img src={children} alt="children" />
            <h3>We're committed to 4 key principles:</h3>
            <ul>
              <li><img height="18" src={one} alt="one" />Certified sustainable materials </li>
              <li><img height="18" src={two} alt="two" />Fair and safe working conditions for everyone involved in our supply chain</li>
              <li><img height="18" src={three} alt="three" />Minimizing our environmental footprint  </li>
              <li><img height="18" src={four} alt="four" />Continuous assessment and improvement on all of the above.</li>
              <img src={anastasia} alt="anastasia" />
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.chat}>
        <div className={styles.chatText}>
        <h2>Let’s chat</h2>
        <h3>if you don't know where to start, we’re here to help you on your journey</h3>
        <p>Whether it’s a question about different types of fabric and their properties or the best way to wash your garment, we’re here to support you every step of the way.</p>
        <p className={styles.chatTextp}>We’re excited to share our knowledge and answer any and all questions!</p>
        <ShopNow />
        </div>
        <div className={styles.chatImg}><img src={choose} alt="choose" /></div>
      </div>
      <div className={styles.about}>
        <div>
        <img src={air} alt="air" />
        <img src={vector} alt="vector" />
        </div>
        <h2>Press about us</h2>
        <p>“At TreeHouse we’re trying to bring our community on the journey with us, sharing the decisions we are making with our customers (and why), consulting with our base and working together toward the next goal.”</p>
        <a href="">READ MORE<img src={stroketwo} alt="stroke two" /></a>
        <div className={styles.company}>
          <img src={motherly} alt="motherly" />
          <img src={west} alt="west" />
        </div>
      </div>

      <div className={styles.together}>
        <div>
          <img src={wand} alt="wand" />
          <h3>Let's create a meaningful change together</h3>
          <p>don't hesitate to say hello</p>
          <a href="info@mygreenkid.com">info@mygreenkid.com</a>
        </div>
        <div>
          <img src={field} alt="field" />
        </div>

      </div>
      
    </div>

    )
  }
}
