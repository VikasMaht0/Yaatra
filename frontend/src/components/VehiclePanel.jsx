import React from 'react'

function VehiclePanel(props) {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={()=>{
        props.setVehiclePanelOpen(false)
      }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>  </h5>
        <h2 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h2>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
        }} className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between'>
          <img className='h-15' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
           <h2 className='text-xl font-semibold'>$193.20</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
        }}  className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png " alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
           <h2 className='text-xl font-semibold'>$90.20</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
        }}  className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable auto rides</p>
          </div>
           <h2 className='text-xl font-semibold'>$100.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
