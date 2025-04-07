import React from 'react'
import '../App.jsx';
import Kurs_swiper from '../swipers/kurs_swiper.jsx';
import Text from '../components/txt.jsx';

export default function News() {
  return (
    <div className='news '>
        <div className="conatiner px-[20px] ">
            <div className="news-title w-full flex justify-center ">
                <Text txt='yangiliklar' id_name='news' />
            </div>
            <div className="news-swipper">
                <Kurs_swiper/>
            </div>
        </div>
    </div>
  )
}
