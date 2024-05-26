import React from 'react'

const TrendinCard = () => {
  return (
    <div className=" card lg:card-side sm:h-auto lg:h-[250px] rounded-none  bg-base-100 shadow-lg ">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
  <p className="font-semibold pr-3">Business and Travel- <span>July 2 2024</span></p>
        <p className="text-md font-bold">Your most unhappy customer are your Gratest Sourse of Learning </p>
        <p className="">Your most unhappy customers are your greatest source of learning. Embrace their feedback </p>
        <div className="flex  avatar ">
    <div className=" w-12 h-12 rounded-full">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
    <div>
        <h2 className='font-semibold pr-3'>Sergy Campabel</h2>
        <p>CEO & Founder</p>
    </div>
  </div>
      </div>
</div>
  )
}

export default TrendinCard