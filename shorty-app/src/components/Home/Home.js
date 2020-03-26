import React from 'react'

import Welcome from "../welcome";
import Header from '../Header/Header';
import Body from '../Body/Body'

function Home (){
    return (
        <div>
          <h2>Home</h2> 
          <Welcome /> 
          <Header />
          <Body />
        </div>
    )
}

export default Home;