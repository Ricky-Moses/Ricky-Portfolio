import React from 'react'

const About = ({scrollToSection}) => {
  return (
    <>
    
      <div className='about' >
        <div className='img-container'>
          <div className="img"></div>
        </div>
        <div className="about-container px-2 h-75">
          <h1 className='border-bottom border-primary text-primary  py-2'>About Me</h1>
          <h4 className='my-3'>Hello, I'm Ricky</h4>
          <p className='text-capitalize'>My journey into web development started with a curiosity to understand how websites work. From experimenting with HTML and CSS to building interactive applications with JavaScript and React, I’ve continuously challenged myself to learn and improve. Along the way, I’ve developed a strong passion for clean code, responsive design, and user experience. My goal is to create seamless digital experiences that make a difference.</p>
          <table>
            <tbody>
              <tr><th>Name: </th><td>G. Ricky Moses</td></tr>
              <tr><th>Address: </th><td>Dindigul, Tamil Nadu</td></tr>
              <tr><th>Age: </th><td>21 Years Old</td></tr>
              <tr><th>Phone No: </th><td>+91 9384956809</td></tr>
              <tr><th>Email: </th><td>rickymoses08122003@gmail.com</td></tr>
              <tr><th>Github Link: </th><td><a href="https://github.com/Ricky-Moses" target='_blank'>Link</a></td></tr>
            </tbody>
          </table>
          <button type='button' className='btn btn-outline-primary' onClick={()=> scrollToSection('contact')}>Contact Me</button>
        </div>
      </div>
    
    </>
  )
}

export default About