import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';

const Home = () => {
  const [pickup, setPickup] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen,setPanelOpen] = useState(false)
const vehiclePanelRef = useRef(null)
const panelRef = useRef(null)
const panelCloseRef = useRef(null)

  const submitHandler = (e) => {  
    e.preventDefault()
  }
  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])

  return (
    <div className='h-screen relative overflow-hidden'>
    <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    <div className='h-screen w-screen'>
        {/* image for temporary use  */}
       <img className = 'h-full w-full object-cover'src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
    </div>
    <div className=' flex flex-col  justify-end h-screen absolute top-0 w-full ' >
    <div className='h-[30%] p-6 bg-white relative' >
    <h5 ref={panelCloseRef} onClick={()=>{
      setPanelOpen(false)
    }} className='absolute opacity-0 right-6 top-3 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
    <h4 className='text-3xl font-semibold'>Find a trip</h4>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <div className="line absolute h-16 w-1 top-1/2 top-[45%] left-10 bg-gray-900 rounded-full "></div>
        <input
         onClick={()=>{
          setPanelOpen
        }}
         type="text" placeholder='Add a Pickup Location' value={pickup} onChange={(e) => setPickup(e.target.value)} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'/>
        <input
        onClick={()=>{
          setPanelOpen
        }}
        type="text"  placeholder='Add a Destination' value={destination} onChange={(e) => setDestination(e.target.value)} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'/>
      </form>
    </div>
    <div ref={panelRef} className=' bg-white h-0'>
<LocationSearchPanel/>
    </div>
</div>
<div className='fixed w-full z-10 bottom-0 bg-white px-3 py-6'>
  <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
  <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
 
  <div className=' w-1/2'>
    <h4 className='font-medium text-base'> UberGo <span><i classname='ri-user-3-fill' ></i>4</span></h4>
      <h5 className='font-medium text-sm'>2 min away</h5>
      <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
  </div>
  <h2 className='text-2xl font-semibold'>r193.20</h2>
  </div>
  <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
 
  <div className='ml-2 w-1/2'>
    <h4 className='font-medium text-base'> Uber<span><i classname='ri-user-3-fill' ></i>4</span></h4>
      <h5 className='font-medium text-sm'>2 min away</h5>
      <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
  </div>
  <h2 className='text-2xl font-semibold'>r193.20</h2>
  </div>
  <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
 
  <div className=' w-1/2'>
    <h4 className='font-medium text-base'> Moto <span><i classname='ri-user-3-fill' ></i>4</span></h4>
      <h5 className='font-medium text-sm'>2 min away</h5>
      <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
  </div>
  <h2 className='text-2xl font-semibold'>r193.20</h2>
  </div>
</div>
    </div>
   
    )
}

export default Home