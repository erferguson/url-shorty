import React from 'react'
import WorkingLogo from '../../Assets/working-logo'
import ShortenLogo from '../../Assets/shorten'

function Header (){
    return (
        <div>
            <div>
                <div>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button>Get Started!</button>
                </div>
            </div>
            <h3>Header</h3>
            <WorkingLogo />
            <ShortenLogo /> 
        </div>
    )
}
export default Header;