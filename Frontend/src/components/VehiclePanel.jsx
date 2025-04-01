import React from 'react'

const VehiclePanel = (props) => {
  return( 
  <div>
     <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
     props.setVehiclePanel(false)}}>
        <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
       }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
         <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
         <div className='ml-2 w-1/2'>
           <h4 className='font-medium text-base'> Uber <span><i className='ri-user-3-fill' ></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
             <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
         </div>
          <h2 className='text-2xl font-semibold'>r193.20</h2>
      </div>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
       }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
         <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
         <div className='ml-2 w-1/2'>
           <h4 className='font-medium text-base'> UberGo <span><i className='ri-user-3-fill' ></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
             <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
         </div>
          <h2 className='text-2xl font-semibold'>r193.20</h2>
      </div>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
       }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
         <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
         <div className='ml-2 w-1/2'>
           <h4 className='font-medium text-base'> Moto <span><i className='ri-user-3-fill' ></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
             <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
         </div>
          <h2 className='text-2xl font-semibold'>r193.20</h2>
      </div>
     
    </div>
  )
}

export default VehiclePanel