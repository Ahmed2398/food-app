import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem,       MDBNavbarLink, MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';
const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
    <MDBNavbar expand='lg' light bgColor='light' className='navbar-static-top'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
                <img
              src={images.logo}
              height='100'
              alt=''
              loading='lazy'
            />
                </MDBNavbarBrand>
                
            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
                
        <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='ml-auto mb-2 mb-lg-0'>
                {['Home', 'About Us', 'Foods', 'Reviews', 'FAQ'].map((item) => (                 
                    <MDBNavbarItem>
                            
                        <MDBNavbarLink active aria-current='page' key={`link-${item}`} href={`#${item}`}>
                            {item}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                ))}
            </MDBNavbarNav>
            <MDBBtn className='button-one'>01147288161</MDBBtn>
        </MDBCollapse>
        </MDBContainer>
            </MDBNavbar>
            </motion.div>
)
}

export default Navbar