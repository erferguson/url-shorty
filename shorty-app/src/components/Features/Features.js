import React from 'react'
import SupervisorLogo from '../../Assets/supervisor'
import TeamBuilderLogo from '../../Assets/teamBuilder'
import CalculatorLogo from '../../Assets/calculator'
import KarmaLogo from '../../Assets/karma'

function Features (){
    return (
    <div>
        <header className="feature-header" >
            <h1 className="feature-h1">
            Reliable, efficient delivery <br />
            <span className='feature-h1-span'>Powered by Technology</span>
            </h1>
            <p className="feature-p">Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful</p>
        </header>
    
    <div class="feature-container">
    <div class="feature-box box-cyan box-push">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <SupervisorLogo />
    </div>

    <div class="feature-box box-purple">
        <h2>Team Builder</h2>
        <p>Scans our talent network to create the optimal team for your project</p>
        <TeamBuilderLogo />
    </div>

    <div class="feature-box box-blue box-push">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <CalculatorLogo /> 
        </div>

    <div class="feature-box box-yellow">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <KarmaLogo />
    </div>
    </div>
</div>
    )
}

export default Features;