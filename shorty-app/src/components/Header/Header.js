import React from 'react'
import WorkingLogo from '../../Assets/working-logo'
import ShortenLogo from '../../Assets/shorten'

function Header (){
    return (
        <div className="header-container">
            <div className="header-left">
                    <h1 className="header-h1">More than just shorter links</h1>
                        <p className="header-p">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <div>
                        <button className="button header-btn">Get Started!</button>
                    </div>
            </div>
            <div className="header-right">
                <div>
                  <WorkingLogo />   
                </div>
            </div>   
            {/* <ShortenLogo />  */}
        </div>
    )
}
export default Header;