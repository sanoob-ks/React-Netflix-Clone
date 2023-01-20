import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <div className="footerParentDiv">
        <div className="footerChildDiv">
            <div className="childTopDiv">
                <span className="qns">Questions? Call 000-800-919-1694</span>
            </div>
            <div className="childBottomDiv">
                <div className="optionsrow">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>FAQ</td>
                                <td>Help Centre</td>
                                <td>Account</td>
                                <td>Media Centre</td>
                            </tr>
                            <tr>
                                <td>Investor Relations</td>
                                <td>Jobs</td>
                                <td>Ways to Watch</td>
                                <td>Terms of Use</td>
                            </tr>
                            <tr>
                                <td>Privacy</td>
                                <td>Cookie Preferences</td>
                                <td>Corporate Information</td>
                                <td>Contact Us</td>
                            </tr>
                            <tr>
                                <td>Speed Test</td>
                                <td>Legal Notices</td>
                                <td>Only on Netflix</td>
                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="childButtonDiv">
                <div className= "button">
                    <span>English</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
