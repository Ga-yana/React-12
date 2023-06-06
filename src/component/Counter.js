import React, { useState } from 'react'

function Counter() {
    const [count, setCount]= useState("")
  return (
    <>
    <div className='flex flex-col pt-64 gap-y-4'>
    <h1 className='text-4xl font-semibold'>Counter Value</h1>
    <div className='text-4xl font-semibold'>{count}</div>
    <div className='flex flex-row gap-x-4 justify-center'>
    <button className='text-2xl border-white border-2 border-gray-800 rounded p-2 bg-cyan-200 hover:bg-gray-300' onClick={()=> setCount(0)}>Reset Counter</button>
    <button className='text-2xl border-white border-2 border-gray-800 rounded p-2 bg-cyan-200 hover:bg-gray-300' onClick={()=> setCount(count+1)}>Increase Counter</button>
    <button className='text-2xl border-white border-2 border-gray-800 rounded p-2 bg-cyan-200 hover:bg-gray-300' onClick={()=> setCount(count-1)}> Decrease Counter</button>
    </div>
    </div>
    </>
  )
}

export default Counter