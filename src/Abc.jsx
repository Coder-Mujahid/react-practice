

import React, { useEffect, useState } from 'react'

export default function Abc() {

    const [minuite, setMunite] = useState(0)
    const [hours, setHours] = useState(0)
    const [secound, setSecound] = useState(0)
    const timer = () => {
        const currentDate = new Date();
        let localMunite = 60 - currentDate.getMinutes();
        let localSecound = 60 - currentDate.getSeconds();
        let localHours = 23 - currentDate.getHours();
        setMunite(localMunite)
        setHours(localHours)
        setSecound(localSecound)
    }
    useEffect(() => {
        setInterval(function () { timer() }, 1000);
    }, [])




    return (
        <div className=' bg-gray-50 sm:py-20 py-10 bg-[url("https://res.cloudinary.com/dav9mftpk/image/upload/v1701500534/Dicount_d7vkkv.svg")] bg-cover
        
        '>
            <div className='container lg:grid grid-cols-2 gap-10 items-center'>
                <div className=''>
                    <h2 className='sm:text-6xl text-4xl leading-[1.2] text-gray-200'><span className='text-[#fff] leading-[1.2] font-semibold'>Victory Day Get 45% </span><br /> Discount All Products</h2>
                    <p className='text-xl my-2 text-gray-200'>All Readymade Products 45% Off for Limited Time </p>
                    <div>
                        <div className="time_countdown text-[#000] p-3 text-center sm:text-5xl text-3xl font-semibold rounded flex items-center gap-5 -ml-4 sm:my-3" >
                            <p className="time_countdown w-24 bg-slate-100 p-2 rounded">{hours < 10 ? `0${hours}` : hours == 24 ? `00` : hours}</p>
                            <span className="text-gray-100">:</span>
                            <p className="time_countdown w-24 bg-slate-100 p-2 rounded">{minuite < 10 ? `0${minuite}` : minuite == 60 ? `00` : minuite}</p>
                            <span className="text-gray-100">:</span>
                            <p className="time_countdown w-24 bg-slate-100 p-2 rounded">{secound < 10 ? `0${secound} ` : secound == 60 ? `00` : secound}</p>
                        </div>
                    </div>
                    <button className='bg-blue-500 hover:bg-gray-700 py-3 text-gray-200 my-3 px-6 rounded-[50px] font-semibold'>Get Started</button>
                    <p className='font-semibold text-gray-200'>USE COUPON: VICTORY45</p>
                </div>
                <div>
                    <h2 className='md:text-[350px] inline text-[200px] text-[#fff] relative' >45<span className='md:text-[150px] text-[60px]'>%</span>
                        <span className='md:text-[50px] text-[30px] absolute right-0 top-0'>Off</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}