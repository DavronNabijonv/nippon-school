import React from 'react'
import Text from '../components/txt'

export default function For_section() {
  return (
    <div className='section-qismi'>
        <Text txt='nega-nippon' id_name='nega-nippon' />
        <div className="container">
            <div className="for-grid w-full ">
                <div className='for-card'>
                    <Text txt='nega-nippon1-title' id_name='for-card-title' />
                    <Text txt='nega-nippon1-txt' id_name='for-card-txt' />
                </div>
                <div className='for-card'>
                    <Text txt='nega-nippon2-title' id_name='for-card-title' />
                    <Text txt='nega-nippon2-txt' id_name='for-card-txt' />
                </div>
                <div className='for-card'>
                    <Text txt='nega-nippon3-title' id_name='for-card-title' />
                    <Text txt='nega-nippon3-txt' id_name='for-card-txt' />
                </div>
                <div className='for-card'>
                    <Text txt='nega-nippon4-txt' id_name='for-card-txt' />
                </div>
                <div className='for-card'>
                    <Text txt='nega-nippon5-title' id_name='for-card-title' />
                    <Text txt='nega-nippon5-txt' id_name='for-card-txt' />
                </div>
                <div className='for-card'>
                    <Text txt='nega-nippon6-txt' id_name='for-card-txt' />
                </div>
            </div>
        </div>
    </div>
  )
}
