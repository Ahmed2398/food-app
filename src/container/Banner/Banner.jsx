import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { useEffect } from 'react';
import { AiOutlineArrowRight, AiOutlineSave, AiOutlineCamera, AiFillRocket } from 'react-icons/ai';
import { BsCart4, BsGlobe } from 'react-icons/bs';
import './Banner.scss';
const Banner = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const query = '*[_type == "banners"]';
        client.fetch(query).then((data) => setBanners(data))
    }, []);
  return (
    <>
      <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
          <div className='banner-bg'>
          <MDBContainer>
          {banners.map((banner, index) => (
          <MDBRow   key={banner.title + index}>
            <MDBCol md='6'>
            <h3 className="head-text" >{banner.title}</h3>
            <p className="p-text" style={{ marginTop: 10 }}>{banner.description}</p>
                <MDBBtn className='button-one'>Order Now <BsCart4/> </MDBBtn>
                <MDBBtn  className='button-out' color='dark' >Learn More <AiOutlineArrowRight/></MDBBtn>
            </MDBCol>
        </MDBRow>
          ))}
                    
          </MDBContainer>
          </div>
            <section className='counter'>
          <MDBContainer>
          <MDBRow>
                      <MDBCol md="3 d-flex justify-content-center">
                          <div>
                          <AiOutlineSave className="text-white icon-counter" />
                        <p className='mb-0'>
                        <span className="text-white number-counter">1872+</span>
                      </p>
                      <h2 className="text-white text-counter">Savings</h2>
                          </div>
                      
                      </MDBCol>
                      <MDBCol md="3 d-flex justify-content-center">
                          <div>
                          <AiOutlineCamera className="text-white icon-counter" />
                        <p className='mb-0'>
                        <span className="text-white number-counter">5786+</span>
                      </p>
                      <h2 className="text-white text-counter">PHOTOS</h2>
                          </div>
                      
                      </MDBCol>
                      <MDBCol md="3 d-flex justify-content-center">
                          <div>
                          <AiFillRocket className="text-white icon-counter" />
                        <p className='mb-0'>
                        <span className="text-white number-counter">1440+</span>
                      </p>
                      <h2 className="text-white text-counter">ROCKETS</h2>
                          </div>
                      
                      </MDBCol>
                      <MDBCol md="3 d-flex justify-content-center">
                          <div>
                          <BsGlobe className="text-white icon-counter" />
                        <p className='mb-0'>
                        <span className="text-white number-counter">7110+</span>
                      </p>
                      <h2 className="text-white text-counter">GLOBES</h2>
                          </div>
                      
                      </MDBCol>
                      
                  </MDBRow> 
              </MDBContainer>
        </section>
        </motion.div>
    </>
  )
}

export default Banner