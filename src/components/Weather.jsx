import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faWind } from '@fortawesome/free-solid-svg-icons'
const Weather = ({city, date, temperature, desc, feelsLike, visibility, windSpeed }) => {
    return (
        <div className="bg-[#FAFAFA] px-10 py-3 rounded-xl mb-10">
            <div className='flex justify-between items-center text-[#161616]'>
                <h1 className='text-xl'>{city}</h1>
                <h1 className='text-xl'>{date}</h1>
            </div>

            <div className="temperature flex flex-col sm:flex-row  justify-center items-center mt-[5rem] pl-[2rem] mb-10">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-9xl text-[#696969]'>{temperature}°</h1>
                    <p className='text-3xl text-[#696969] font-normal relative right-6 mb-4'>{desc}</p>

                    <div className="flex justify-between gap-3 items-center relative right-6">
                        <p className='text-[#696969] font-normal'>FeelsLike</p>
                        <span className='font-light text-[#696969] text-lg'>{feelsLike} °</span>
                    </div>
                </div>
                <div className="flex  flex-col  sm:gap-3 relative right-6 justify-center items-center text-[#696969]">
                    <div className='flex items-start  justify-between gap-3'>
                        <FontAwesomeIcon className='text-lg' icon={faEye} />
                        <span className='font-light'> {visibility} km</span>
                    </div>
                    <div className='flex items center justify-between gap-3'>
                        <FontAwesomeIcon className='text-lg' icon={faWind} />
                        <span className=' font-light'>{windSpeed} kmph</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Weather