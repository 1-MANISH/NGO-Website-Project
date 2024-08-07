import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sneha Gupta</h3>
                            <span>NGO , India</span>
                        </div>
                    </div>
                    <p> <strong>Volunteer</strong> Join our team of dedicated volunteers and make a difference in your community. Whether you have a few hours a week or can commit to a long-term project, we have opportunities for you to get involved.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span> NGO, USA</span>
                        </div>
                    </div>
                    <p><strong>Partner With Us</strong> We are always looking for partners who share our vision. Whether you are a business, organization, or individual, there are many ways to collaborate with us and amplify our impact.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Surabhi Chan</h3>
                            <span>NGO, India</span>
                        </div>
                    </div>
                    <p> <strong>Donate</strong> Your donations make our work possible. Every contribution, big or small, helps us continue to provide essential services and support to those in need. Donate today and be a part of the change.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>NGO, USA</span>
                        </div>
                    </div>
                    <p> <strong>Events</strong> Stay informed about our upcoming events and how you can participate. From fundraising drives to community workshops, our events are a great way to get involved and support our mission.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
