import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { IoIosContacts, IoIosPerson } from 'react-icons/io'
import { RiMindMap } from 'react-icons/ri'
import { SiTorproject } from 'react-icons/si'

const Header = ({scrollToSection, activeSection}) => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>

            <header className="header">
                <div className="logo" onClick={handleToggle}>
                    <p>{toggle ? '\u24C2\uFE0F' : '\u00AE\uFE0F'}</p>
                </div>
                <nav className={`menus ${toggle ? 'active' : ''}`}>
                    <ul>
                        <li className={ activeSection === 'home' ? 'active' : '' } onClick={()=> scrollToSection('home')}><FaHome /></li>
                        <li className={ activeSection === 'about' ? 'active' : '' } onClick={()=> scrollToSection('about')}><IoIosPerson /></li>
                        <li className={ activeSection === 'skill' ? 'active' : '' } onClick={()=> scrollToSection('skill')}><RiMindMap /></li>
                        <li className={ activeSection === 'project' ? 'active' : '' } onClick={()=> scrollToSection('project')}><SiTorproject /></li>
                        <li className={ activeSection === 'contact' ? 'active' : '' } onClick={()=> scrollToSection('contact')}><IoIosContacts /></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header