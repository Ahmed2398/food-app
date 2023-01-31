import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { images } from '../../constants';
import {motion} from 'framer-motion'
import './Footer.scss'
export const Footer = () => {
  return (
      <>
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
           <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='head-text'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
                <img src={images.logo}/>
              </h6>
              <p>
              We make everything by hand with the best possible ingredients.
              </p>
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: '#A82D49' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold text-white' href='https://ahmed98-portfolio.netlify.app/'>
          Ahmed Ashraf.com
        </a>
      </div>
              </MDBFooter>
              </motion.div>
    </>
  )
}
export default Footer
