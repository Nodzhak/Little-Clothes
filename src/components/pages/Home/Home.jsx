import React, { Component } from 'react'
import Hero from './Hero/Hero';
import Meet from './Meet/Meet';
import OurCare from './OurCare/OurCare';
import Collection from './Collection/Collection';
import Akcio from './Akcio/Akcio';
import Slider from './Slider/Slider';
import Trust from './Trust/Trust';

export default class Home extends Component {
  render() {
    return (
      <div>
           <Hero />
           <Meet />
           <OurCare />
           <Collection />
           <Akcio />
           <Slider />
           <Trust />
      </div>
    )
  }
}
