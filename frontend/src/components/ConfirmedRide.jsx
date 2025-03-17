import React from 'react'

function ConfirmedRide(props) {
  return (
    <div>
        <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={()=>{
        props.setVehiclePanelOpen(false)
      }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>  </h5>
      <h2 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h2>
      
      <div className='flex flex-col gap-2 justify-between items-center' >
      <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      
      <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11A </h3>
            <p className='text-sm -mt-1 text-gray-600'>Sainik Basti ,Kaulagarh ,Dehradun</p>
          </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'> <i class="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11A </h3>
            <p className='text-sm -mt-1 text-gray-600'>Sainik Basti ,Kaulagarh ,Dehradun</p>
          </div>
          </div>
          <div className='flex items-center gap-5 p-3 '> <i class="text-lg ri-currency-line"></i>
          <div>
            <h3 className='text-lg font-medium'>$199.10</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
          </div>
          </div>
      </div>
      <button onClick={()=>{
        props.setVehicleFound(true)
        props.setConfirmedRidePanel(false)
      }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmedRide
