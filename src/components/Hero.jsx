import React from 'react'

const Hero = (props) => {

    const name='my';
  return (
    <section className='bg-indigo-700 py-20 mb-4'>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl"
          >
            Welcome to {name} Job Portal {props.yes}
          </h1>
          <p className="my-4 text-2xl text-white">
            Find the best job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero