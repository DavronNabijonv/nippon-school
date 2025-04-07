import React from 'react'
import Text from '../components/txt'
import Btn from '../components/btn'
import '../App.css';

export default function Home_section() {
  return (
    <div className='home-section' >
        <div className="container flex flex-col justify-start items-start gap-[30px] ">
            <div className=' home-title-txt w-full' >
                <Text txt='gapirish' t_color='text-gray-500' id_name='home-title' />
                <Text txt='imkoniyat' id_name='home-txt' />
            </div>
            <div className='before-grp'>
                <div className="before">
                    <Text txt='4_oy' t_color='text-gray-500' id_name='before' />
                </div>
                <div className="before">
                    <Text txt='daraja' t_color='text-gray-500' id_name='before' />
                </div>
            </div>
            <div id='home-btn-grp' className='flex flex-col gap-[15px] '>
                <Btn txt="bepul-btn" t_color='text-white' id_name='bepul-btn' />
                <Text txt='bepul-txt' id_name='bepul-txt' />
            </div>
        </div>
    </div>
  )
}
