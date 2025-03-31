import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
        {
            /*this is just a sample data*/
        }
        <div className='flex gap-4 items-center my-4 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
<i className='ri-map-pin-fill ' ></i>
            </h2>
            <h4 className='font-medium'>
                24b,Kapoor's cafe,Bhopal
            </h4>
        </div>
    </div>
  )
}

export default LocationSearchPanel