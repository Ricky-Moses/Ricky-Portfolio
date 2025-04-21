import React, { useState } from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { MdAttachEmail } from 'react-icons/md'

const contactLink = [
  {name: 'Email', label: 'rickymoses08122003@gmail.com', link: 'rickymoses08122003@gmail.com', icon: <MdAttachEmail /> },
  {name: 'Phone', label: '+91 9384956809', link: '', icon: <FaPhoneVolume />  },
  {name: 'Address', label: 'Dindigul, Tamil Nadu', link: '', icon: <FaLocationCrosshairs />  },
]

const Contact = () => {

  const [copied, setCopied] = useState(null)

  const handleCopy = (text)=>{
    navigator.clipboard.writeText(text)
    .then(()=>{
      setCopied(text)
      setTimeout(()=> setCopied(null), 2000)
    })
    .catch(err => console.error("Error copying: ", err));
  }

  return (
    <>
    
      <div className='contact d-flex align-items-center flex-column flex-lg-row p-5 gap-5'>
        <div className="card border-primary text-primary">
          <h6 className='card-header'>Contact</h6>
          <h1 className="card-title ps-3 py-2">Get In Touch</h1>
          <ul className="card-body d-flex flex-column gap-5">
            {contactLink.map(({name, label, link, icon})=>(
              <li className="icon-detail d-flex align-items-center gap-2 border-primary border-bottom pb-3" key={name}>
              <div className='icon'>{icon}</div>
              {name === 'Address' ? (
                <a href={link} target='_blank' rel='noopener noreferrer'>{label}</a>
              ) : (
                <span
                  onClick={()=> handleCopy(label)}
                  style={{cursor: 'pointer', color: copied === label ? '#20c997' : 'inherit', maxWidth: '100%', wordBreak: 'break-word' }}
                  title={copied === label ? "Copied" : "Click to Copy"}
                >
                  {label} {copied === label && "✔"}
                </span>
              )}
            </li>
            ))}
          </ul>
        </div>
        <div className="card bg-danger p-1">
          <div className="card-header text-white">Send Message</div>
          <form>
            <div className="form-floating my-2">
              <input type="text" className='form-control' placeholder="User Name" id="floatingName" />
              <label htmlFor="floatingName">User Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className='form-control' placeholder="name@email.com" id="floatingEmail" />
              <label htmlFor="floatingEmail">Email Address</label>
            </div>
            <div className="form-floating my-2">
              <textarea type="email" className='form-control' placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Comment</label>
            </div>
            <div class="">
              <button type="submit" className="btn bg-white fw-bold text-danger my-2"><a className='text-danger' href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactLink[0].link}&su=Hello&body=I want to get in touch with you`} target='_blank' rel='noopener noreferrer'>Send 📩</a></button>
            </div>
          </form>
        </div>
      </div>
    
    </>
  )
}

export default Contact