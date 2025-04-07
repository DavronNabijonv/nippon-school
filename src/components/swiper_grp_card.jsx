import React from 'react'
import Text from './txt'
import Btn from './btn'
import '../App.css';

export default function Swiper_kurslar_cards( {kurs_dav, kurs_img, kurs_title, kurs_txt}) {
  return (
    <div className='kurs-card' >
        <img src={kurs_img} loading='lazy' className='' id='kurs-card-img' alt="kurs turi image" />
        <div id='card-grp' className=" flex flex-col  justify-between ">
            <div className='title-grp flex justify-between items-start '>
                <Text txt={kurs_title} id_name='kurs-title' />
                <Text txt={kurs_dav} id_name='kurs-dav' />
            </div>
            <Text txt={kurs_txt} t_color='text-gray-500' id_name='kurs-txt' />
            <div className='btn-grp flex justify-between items-center  '>
                <Btn txt='royhat' id_name='kurs-btn' />
                <Text txt='pul' id_name='kurs-pul' />
            </div>
        </div>
    </div>
  )
}
