import React from 'react'

const About = ({ scrollToSection }) => {
  return (
    <>

      <div className='about' >
        <div className='img-container'>
          <div className="img"></div>
        </div>
        <div className="about-container px-2 h-75">
          <h1 className='border-bottom border-primary text-primary  py-2'>About Me</h1>
          <div className='type-write'>
            <h4 className='my-3'>Hello, I'm Ricky</h4>
          </div>
          <p className='text-capitalize'>My journey into web development began with a curiosity about how websites function behind the scenes. Starting with basic layouts using HTML and CSS, I soon advanced to building interactive interfaces with JavaScript and React. As I progressed, I expanded my skills into backend development with Node.js, Express, and MongoDB, allowing me to create full-stack applications from scratch. I’m passionate about writing clean, maintainable code, crafting responsive designs, and delivering smooth user experiences. My goal is to build meaningful digital products that are not only functional but also intuitive and impactful.</p>
          <table>
            <tbody>
              <tr>
                <th>Name: </th>
                <td>G. Ricky Moses</td>
              </tr>
              <tr>
                <th>Address: </th>
                <td>Dindigul, Tamil Nadu</td>
              </tr>
              <tr>
                <th>Age: </th>
                <td>21 Years Old</td>
              </tr>
              <tr>
                <th>Phone No: </th>
                <td>+91 9384956809</td>
              </tr>
              <tr>
                <th>Email: </th>
                <td className='link-primary' style={{ cursor: "pointer" }} onClick={() => scrollToSection('contact')}>rickymoses08122003@gmail.com</td></tr>
              <tr>
                <th>Github Link: </th>
                <td><a className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href="https://github.com/Ricky-Moses" target='_blank'>Link</a></td>
              </tr>
              <tr>
                <th>Behance Link: </th>
                <td><a className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href="https://www.behance.net/portfolio/editor?tracking_source=upload" target='_blank'>Link</a></td>
              </tr>
            </tbody>
          </table>
          <button type='button' className='btn btn-outline-primary' onClick={() => scrollToSection('contact')}>Contact Me</button>
        </div>
      </div>

    </>
  )
}

export default About