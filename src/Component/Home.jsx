import React from 'react'

const Home = ({ scrollToSection }) => {


  return (
    <>

      <div style={{ height: '100vh' }} className='home container-fluid d-flex align-items-center'>
        <div className="blue-ball">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <main className='col-lg-8 p-2 d-flex flex-column align-items-start justify-content-sm-between'>
          <h2>HI THERE!</h2>
          <h1  className='fw-bold'>I'M <span className='text-primary '>RICKY MOSES</span></h1>
          <h6 className='border py-2 px-4 text-white bg-primary'>WEB DESIGNER</h6>
          <p className=''>Welcome to my portfolio! I'm a passionate web developer with expertise in HTML, CSS, JavaScript, and React. I specialize in creating responsive, user-friendly, and visually appealing websites. With a strong focus on clean code and seamless user experiences, I bring ideas to life on the web. Explore my work, and let's connect to build something amazing together!</p>
          <button className='btn btn-primary' onClick={() => scrollToSection('about')}>
            MORE ABOUT ME
          </button>
        </main>

      </div>

    </>
  )
}

export default Home