import React from 'react'
// import '../../Styles/pricing.css';

function Pricing (){
    return (
        <div className="pricing"> 
            <h1>Pricing</h1>
        <main class="container-pricing">
        <section>
            <h1>Join our community</h1>

            <h2 class="yellow-text">30-day, hassle-free money back guarantee</h2>

            <p class="light-black">
            Gain access to our full library of tutorials along with expert code
            reviews.
            </p>

            <p class="light-black">
            Perfect for any developers who are serious about honing their skills.
            </p>
        </section>
        <div class="row">
            <section class="cyan">
            <h2>Monthly Subscription</h2>

            <p class="faded"><span class="big">${29}</span> per month</p>

            <p>Full access for less than ${1} a day</p>

            <button class="button">Sign Up</button>
            </section>

            <section class="grayish-blue">
            <h2>Why Us</h2>

            <ul className="pricing-ul">
                <li>Tutorials by industry experts</li>
                <li>Peer &amp; expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
            </ul>
            </section>
      </div>
    </main>    
        </div>
    )
}

export default Pricing;