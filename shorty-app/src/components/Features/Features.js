import React from 'react'

function Features (){
    return (
    <div>
        <header>
        <h1>
        Reliable, efficient delivery
        <span>Powered by Technology</span>
        </h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful</p>
    </header>
    
    <div class="container">
    <div class="box box-cyan box-push">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        {/* <img src="images/icon-supervisor.svg" alt="Magnifying Glass"> */}
    </div>

    <div class="box box-red">
        <h2>Team Builder</h2>
        <p>Scans our talent network to create the optimal team for your project</p>
        {/* <img src="images/icon-team-builder.svg" alt="Small House"> */}
    </div>

    <div class="box box-blue box-push">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        {/* <img src="images/icon-calculator.svg" alt="Calculator"> */}
        </div>

    <div class="box box-yellow">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        {/* <img src="images/icon-karma.svg" alt="Light Bulb"> */}
    </div>
    </div>
</div>
    )
}

export default Features;