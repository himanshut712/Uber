import React from 'react'

const ConfirmRide = (props) => {
  return ( <div>
     <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
     props.setVehiclePanel(false)}}>
        <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
<div className='flex gap-2 justify-between flex-col items-center'>
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />     
    <div className='w-full'>
        <div className='flex items-center gap-5'>
            <i className='ri-map-pin-user-fill'></i>
       <div>
        <h3 className='text-lg font-medium'>562/11-A</h3>
<p className='text-sm -mt-1'>Kankariya,Bhopal</p>
        </div> </div>
        <div><i className='text-lg ri-map-pin-2-fill'></i>
       <div>
        <h3 className='text-lg font-medium'>562/11-A</h3>
<p className='text-sm -mt-1'>Kankariya,Bhopal</p>
        </div></div>
        <div><i className='ri-currency-line'></i>
       <div>
        <h3 className='text-lg font-medium'>$193.20</h3>
<p className='text-sm -mt-1'>Cash ,cash</p>
        </div></div>
        </div>
       <button className='w-full bg-green-600 text-white font-semibold p-2'></button>
        </div> 
        </div>
  )
}

export default ConfirmRide