import React from 'react'
import '../App.css';
import Text from '../components/txt';

// styde icon images
import icon1 from '../assets/chat.png';
import icon2 from '../assets/rocket.png';
import icon3 from '../assets/money.png';
import icon4 from '../assets/travel.png';
import icon5 from '../assets/target.png';
import icon6 from '../assets/key.png';

export default function Styde_center() {
  return (
    <div className='styde-center '>
        <div className="container flex flex-col items-center gap-[20px] ">
            <div className='styde-title'>
                <Text txt='siz-uchun' id_name='styde-title' />
            </div>

            <div className='styde-grp'>

                <div className="styde-card flex flex-col justify-center items-center ">
                    <div className='styde-card-img flex flex-col  justify-center items-center rounded-[100%] bg-white '>
                        <img src={icon1} loading='lazy' className='card-image' alt="styde center icon image" />
                    </div>
                    <Text t_color='text-gray-700' txt='uchun1' id_name='styde-txt' />
                </div>

                <div className="styde-card flex flex-col justify-center items-center">
                    <div className='styde-card-img flex flex-col justify-center items-center rounded-[100%] bg-white '>
                        <img src={icon2} loading='lazy' className='card-image' alt="styde center icon image" />
                    </div>
                    <Text txt='uchun2' id_name='styde-txt' t_color='text-gray-700' />
                </div>

                <div className="styde-card flex flex-col justify-center items-center">
                    <div className='styde-card-img flex flex-col justify-center items-center rounded-[100%] bg-white '>
                        <img src={icon3} loading='lazy' className='card-image' alt="styde center icon image" />
                    </div>
                    <Text txt='uchun3' id_name='styde-txt' t_color='text-gray-700' />
                </div>

                <div className="styde-card flex flex-col justify-center items-center">
                    <div className='styde-card-img flex flex-col justify-center items-center rounded-[100%] bg-white '>
                        <img src={icon4} loading='lazy' className='card-image' alt="styde center icon image" />
                    </div>
                    <Text txt='uchun4' id_name='styde-txt' t_color='text-gray-700' />
                </div>

                <div className="styde-card flex flex-col justify-center items-center">
                    <div className='styde-card-img flex flex-col justify-center items-center rounded-[100%] bg-white '>
                        <img src={icon5} loading='lazy' className='card-image' alt="styde center icon image" />
                    </div>
                    <Text txt='uchun5' id_name='styde-txt' t_color='text-gray-700' />
                </div>

                <div className="styde-card flex flex-col justify-center items-center">
                    <div className='styde-card-img flex flex-col justify-center items-center rounded-[100%] bg-white '>
                        <img src={icon6} loading='lazy' className='card-image' alt="styde center icon image" />
                    </div>
                    <Text txt='uchun6' id_name='styde-txt' t_color='text-gray-700' />
                </div>


            </div>

        </div>
    </div>
  )
}
