import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { GiPositionMarker } from 'react-icons/gi'
import { getAges, displayNum } from '../../utils/utils'
export default function Employee({ employee }) {
  return (
    <div className='border-2 font-itim rounded-xl border-black mx-12 my-12 hover:shadow-2xl cursor-pointer hover:bg-[#ACFFFC] hover:duration-700'>
      <div className='flex ml-3 mt-2'>
        <div>
          <div className='rounded-[50%] border-2 cursor-pointer overflow-hidden w-56 h-56 flex justify-center items-center bg-white'>
            <img src='' alt='imageuser' />
          </div>
        </div>

        <div className='mx-3 flex-col gap-6'>
          <div className='mt-2'>{employee.userID.name}</div>
          <div className='flex -ml-1.5 mt-5'>
            <GiPositionMarker size={20} />
            <div className='-mt-1 font-bold text-3xl'>{employee.userID.address}</div>
          </div>
          <div className='mt-5 flex'>
            <div className='w-[16vh] text-ellipsis overflow-hidden whitespace-nowrap'>
              年齢 : {getAges(employee.dateOB)}
            </div>
            <div className='w-[40vh] mr-[4vh] text-ellipsis overflow-hidden whitespace-nowrap'>
              実験 : {employee.experience}
            </div>
            <div className='text-ellipsis overflow-hidden whitespace-nowrap'>
              給料（円） : {displayNum(employee.salary)}
            </div>
          </div>

          <div className='mt-5 mb-12 line-clamp-2'>{employee.description}</div>
        </div>
      </div>
    </div>
  )
}
