import React from 'react'
import './HowPart.css'

export default function HowPart () {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 how-conent'>
                    <h2 className=" bolder  textGrey pp-headings">How Does It 
                        <span className="textBlue"> Work?</span>
                    </h2>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12 how-card-cont'>
                    <div className='how-card'>
                        <div className='how-upper'>
                            <div className='how-logo'>
                                <img src="gjp-payment.png" alt="pay" srcset="" />
                            </div>
                            <div className='how-heading'>
                            <h2 class="no-margin no-padding">Zero UpFront<br/>Fee</h2>
                            </div>
                        </div>
                        <ul>
          <li class="font-medium col l10 offset-l1 s11 offset-s1 pp-textList">
            <span class="bold">Avail the best programming course towards your upward career path</span>
          </li>
          <li class="">
            <span class="bold">Pay absolutely nothing until you get hired. </span>
          </li>
        </ul>
                    </div>
                    <div className='how-card'>
                        <div className='how-upper'>
                            <div className='how-logo'>
                                <img src="gjp-study.png" alt="pay" srcset="" />
                            </div>
                            <div className='how-heading'>
                            <h2 class="no-margin no-padding">Study with Guaranteed <br/> Job Program</h2>
                            </div>
                        </div>
                        <ul>
          <li class="font-medium col l10 offset-l1 s11 offset-s1 pp-textList">
            <span class="bold">Get equipped with the highest paying skills in demand</span>
          </li>
          <li class="font-medium col l10 offset-l1 s11 offset-s1 pp-textList">
            <span class="bold">Boost your career with the expert mentorship.</span>
          </li>
        </ul>
                    </div>
                    <div className='how-card'>
                        <div className='how-upper'>
                            <div className='how-logo'>
                                <img src="gjp-assistance.png" alt="pay" srcset="" />
                            </div>
                            <div className='how-heading'>
                            <h2 class="no-margin no-padding">Guaranteed Placement<br/>
            Assistance.</h2>                            </div>
                        </div>
                        <ul>
          <li class="font-medium col l10 offset-l1 s11 offset-s1 pp-textList">
            <span class="bold">Get interviewed by the best recruiters from the tech giants.</span>
          </li>
          <li class="font-medium col l10 offset-l1 s11 offset-s1 pp-textList">
            <span class="bold">Stay ahead of the pack by earning a lucrative salary.</span>
          </li>
        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}