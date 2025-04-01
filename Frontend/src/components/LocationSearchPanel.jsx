import React from 'react'

const LocationSearchPanel = (props) => {
  const locations= [
    "24B,Near Kapoor's cafe, Sheryian Coding School,Bhopal" ,
    "22C,Near Malhotra's cafe, Sheryian Coding School,Bhopal" ,
    "20B,Near Singhai's cafe, Sheryian Coding School,Bhopal" ,
    "24A,Near Sharma's cafe, Sheryian Coding School,Bhopal" ,
  ]
  return (
    <div>
      {
        locations.map(function(elem,idx){
          return  <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 items-center my-4 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
<i className='ri-map-pin-fill ' ></i>
          </h2>
          <h4 className='font-medium'>
              {elem}
          </h4>
      </div>
        })
      }
        {
            /*this is just a sample data*/
        }
       
    </div>
  )
}

export default LocationSearchPanel