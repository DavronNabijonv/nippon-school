import React from 'react'
import '../App.css';
import Text from '../components/txt';

// image
import jlpt from '../assets/jlpt.png'

export default function Grant_100() {
  return (
    <div className='grant-100'>
        <div className="container flex flex-col gap-[20px] ">
            <div className="title flex justify-center items-center ">
                <Text txt='grant' id_name='grant-title' />
            </div>
            <div className="grant-100-grp w-full flex justify-between items-center ">
                <div className='grant-img'>
                    <img src={jlpt} loading='lazy' alt="JLPT image" className='w-full h-auto' />
                </div>
                <div className='grant-txt'>
                    <Text txt='jlpt' id_name='grant-txt' t_color='text-gray-700' />
                </div>
            </div>
        </div>
    </div>
  )
}
