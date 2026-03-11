import React from 'react'
import './Details.css'
import { useNavigate } from 'react-router-dom'


function Details() {
    const detailsOfLoan = {
        Personal: "Our Personal Loans are meticulously crafted to provide you with ultimate financial flexibility during life's most critical moments. Whether you are planning a grand wedding, managing urgent medical expenses, or consolidating higher-interest debts, this loan offers a swift and collateral-free solution to meet your needs. With competitive interest rates starting at a low 6.0%, we prioritize a seamless experience featuring minimal documentation and rapid processing. Enjoy the freedom of flexible repayment tenures without the burden of pledging assets. Our transparent process ensures no hidden charges, empowering you to achieve your immediate personal milestones with total confidence and financial ease.",
        Home: "Fulfill your lifelong dream of homeownership with our comprehensive and affordable Home Loan solutions. We provide long-term financial support with flexible repayment tenures extending up to thirty years, ensuring your monthly budget remains comfortable. With interest rates starting at 7.5%, our loans cover the purchase of new apartments, plot construction, or major home renovations. We offer expert guidance throughout the legal and technical property documentation process. Benefit from significant tax advantages under current regulations while building equity in your future. Our streamlined approval process is designed to turn your housing aspirations into reality with minimal stress and maximum transparency.",
        Vehicle: "Drive home your dream vehicle today with our hassle-free and budget-friendly Vehicle Loans. Whether you are eyeing a brand-new car or a certified pre-owned motorcycle, we offer financing that covers up to 90% of the on-road price at a 5.5% interest rate. Our application process is lightning-fast, requiring basic documentation to get you on the road as quickly as possible. We offer flexible EMI structures that align with your monthly income, along with the option for easy part-payments. Experience a journey from the showroom to your garage that is characterized by low processing fees and zero hidden costs.",
        Education: "Invest in your academic future without the burden of immediate financial constraints through our student-centric Education Loans. Tailored for higher studies in both domestic and international institutions, these loans feature a highly competitive 4.8% interest rate. We cover a broad spectrum of costs, including tuition fees, accommodation, and travel expenses. A key advantage is our generous moratorium period, allowing you to focus entirely on your studies before starting principal repayments after graduation. Empower your career path with our support, which includes special rate concessions for female students and simplified documentation for admissions into top-tier global universities."
    }

    const Navigate = useNavigate()

    return (
        <div id='details'>
            <div id="cardContainer">
                <div id="personal" className="loan-card">
                    <div className="overlay">
                        <h2>Personal Loan</h2>
                        <h4>Interest Rate : 6% </h4>
                        <p>{detailsOfLoan.Personal}</p>
                    </div>
                </div>

                <div id="home" className="loan-card">
                    <div className="overlay">
                        <h2>Home Loan</h2>
                        <h4>Interest Rate : 7.5% </h4>
                        <p>{detailsOfLoan.Home}</p>
                    </div>
                </div>

                <div id="vehicle" className="loan-card">
                    <div className="overlay">
                        <h2>Vehicle Loan</h2>
                        <h4>Interest Rate : 5.5% </h4>
                        <p>{detailsOfLoan.Vehicle}</p>
                    </div>
                </div>
        <div id="education" className="loan-card">
                    <div className="overlay">
                        <h2>Education Loan</h2>
                        <h4>Interest Rate : 4.8% </h4>
                        <p>{detailsOfLoan.Education}</p>
                    </div>
                </div>
            </div>

            <button id='btn' onClick={()=>Navigate('/applyloan')}>Let's Apply</button>
        </div>
    )
}

export default Details
