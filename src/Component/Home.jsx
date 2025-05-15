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
          <h1 className='fw-bold'>I'M <span className='text-primary '>RICKY MOSES</span></h1>
          <h6 className='py-2 px-4 text-white bg-primary'>I'M WEB DESIGNER</h6>
          <p className='fw-bold'>I’m a passionate Full Stack Web Developer who enjoys turning ideas into dynamic, user-focused web applications. With hands-on experience in frontend technologies like React and UI design, combined with backend development using Node.js, Express, and MongoDB, I build responsive, high-performance solutions from end to end.</p>
          <button className='btn btn-primary' onClick={() => scrollToSection('about')}>
            MORE ABOUT ME
          </button>
        </main>

      </div>

    </>
  )
}

export default Home