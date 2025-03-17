import React from 'react'

function WaitingForDriver(props) {
  return (
    <div>
    <h5 className='p-3 text-center w-[93%] absolute top-0 ' onClick={()=>{
    props.WaitingForDriver(true)
  }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>  </h5>

  <div className='flex items-center justify-between'>
  <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
   <div className='text-right'>
    <h2 className='text-lg font-medium'>Vikas</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>UK07 BW 4502</h4>
    <p className='text-gray-600 text-sm'>Maruti Suzuki Alto</p>
   </div>
  </div>
  
  <div className='flex flex-col gap-2 justify-between items-center' >
  
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
  </div>
</div>
  )
}

export default WaitingForDriver

