import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pickup, setPickup] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen,setPanelOpen] = useState(false)
const panelRef = useRef(null)

  const submitHandler = (e) => {  
    e.preventDefault()
  }
  useGSAP(function){
    gsap.to('')
  }
  return (
    <div className='h-screen relative '>
<div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='flex flex-col absolute bottom-0 w-full p-5' >
             <div className='h-[30%] p-5 bg-white relative' > <h4 className='text-2xl font-semibold '>
              Find a trip
              </h4>
              <form onSubmit={(e)=>{
                submitHandler(e)
              }}>
<div className="line absolute h-16  w-1 top-[45%] left-5 bg-gray-700 rounded-full" ></div>
              <input
              onClick={
                setPanelOpen(true)
              }
              value={pickup}
onChange={(e)=>{
  setPickup(e.target.value)
}}
className='bg-[#eee] px-12 py-12 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'  />
                <input
                 onClick={
                  setPanelOpen(true)
                }
                   value={destination}
                   onChange={(e)=>{
                     setDestination(e.target.value)
                   }}
                    className='bg-[#eee] px-12 py-12 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination'  />
              </form></div>
              <div className=' bg-red-500 h-0'>

              </div>
            </div>
    </div>
  )
}

export default Home