import React from 'react'

import fbook from '../images/icon-facebook.svg'
import twit from '../images/icon-twitter.svg'
import pin from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'

function Fbook(){
    return <img src={fbook} alt="Facebook logo" />
}

function Twit(){
    return <img src={twit} alt="Twitter logo" />
}

function Pin(){
    return <img src={pin} alt="Pinterst logo" />
}

function Insta(){
    return <img src={insta} alt="Instagram logo" />
}

export { Fbook, Twit, Pin, Insta }