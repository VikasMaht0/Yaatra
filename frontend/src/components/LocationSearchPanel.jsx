import React from 'react'

const LocationSearchPanel = ( props)=> {
    
  // sample array for location
  const locations = [
        "247 ,kaulagarh ,dehradun",
        "gadhi cantt,dehradun",
        "10A,Ballupur ,dehradun",
        "SGRR public school Bindal,dehradun",
  ]



  return (
    <div>
      {/* this is just a sample data */}
      {
        locations.map((address,index)=>{
          return<div onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} key={index} className='flex gap-4 border-2  px-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2'>
          <h2 className='bg-[#eee] h-9 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
           <h4 className='font-medium'>{address}</h4>
        </div>
        })
      }

      {/* <div className='flex gap-4 border-2  px-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2'>
        <h2 className='bg-[#eee] h-9 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
         <h4 className='font-medium'>247,Kaulagarh , near New Culture Academy,Dehradun</h4>
      </div>
      <div className='flex gap-4 border-2 px-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2'>
        <h2 className='bg-[#eee] h-9 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
         <h4 className='font-medium'>247,Kaulagarh , near New Culture Academy,Dehradun</h4>
      </div>
      <div className='flex gap-4 border-2 px-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2'>
        <h2 className='bg-[#eee] h-9 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
         <h4 className='font-medium'>247,Kaulagarh , near New Culture Academy,Dehradun</h4>
      </div>
      <div className='flex gap-4 border-2 px-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2'>
        <h2 className='bg-[#eee] h-9 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
         <h4 className='font-medium'>247,Kaulagarh , near New Culture Academy,Dehradun</h4>
      </div> */}
      
    </div>
  )
}

export default LocationSearchPanel
