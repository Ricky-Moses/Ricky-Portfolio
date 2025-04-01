import React from 'react'

const Home = ({ scrollToSection }) => {


  return (
    <>

      <div style={{ height: '100vh' }} className='home d-flex align-items-center'>
        <div className="blue-ball">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <main className='col-lg-8 p-2 d-flex flex-column align-items-start justify-content-sm-between'>
          <h2>HI THERE!</h2>
          <h1  className='fw-bold'>I'M <span className='text-primary '>RICKY MOSES</span></h1>
          <h6 className='py-2 px-4 text-white bg-primary'>I'M WEB DESIGNER</h6>
          <p className='fw-bold'>Hey there! I'm Ricky Moses, a web developer who loves turning ideas into beautiful, functional websites. With expertise in HTML, CSS, JavaScript, and React, I create responsive, high-performance web experiences. Check out my projects or reach out—let’s build something great!</p>
          <button className='btn btn-primary' onClick={() => scrollToSection('about')}>
            MORE ABOUT ME
          </button>
        </main>

      </div>

    </>
  )
}

export default Home