import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
    props.setWaitingForDriver(false)}}>
       <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
       <div className='flex items-center justify-between'>
       <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
       
       <div className='text-right'>
              <h2 className='text-lg font-medium'>Sarthak</h2>
       <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP09</h4>
       <p className='text-sm tex-gray-600'>Maruti Suzuki Alto</p>
       </div>
       </div>
<div className='flex gap-2 justify-between flex-col items-center'> 
   <div className='w-full mt-5'>
       <div className='flex items-center gap-5 p-3 border-b-2'>
           <i className='ri-map-pin-user-fill'></i>
      <div>
       <h3 className='text-lg font-medium'>562/11-A</h3>
<p className='text-sm -mt-1'>Kankariya,Bhopal</p>
       </div> </div>
       <div className='flex items-center gap-5 p-3 border-b-2'><i className='text-lg ri-map-pin-2-fill'></i>
      <div>
       <h3 className='text-lg font-medium'>562/11-A</h3>
<p className='text-sm -mt-1'>Kankariya,Bhopal</p>
       </div></div>
       <div className='flex items-center gap-5 p-3 '><i className='ri-currency-line'></i>
      <div>
       <h3 className='text-lg font-medium'>$193.20</h3>
<p className='text-sm -mt-1'>Cash ,cash</p>
       </div></div>
       </div>
      <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
       </div> 
       </div>
  )
}

export default WaitingForDriver