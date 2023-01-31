import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { BiRightArrow } from 'react-icons/bi';
import './About.scss';
export const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => setAbouts(data));
    }, []);
  return (
      <>
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
          <section className=' about-food my-5'>
              <MDBContainer>
                  {abouts.map((about, index) => (
                  <MDBRow key={about.title + index}>
                      <MDBCol md="6">
                        <img className='w-100'  src={urlFor(about.imgUrl)} alt={about.title} />
                      </MDBCol>
                      <MDBCol md="6" className='m-auto'>
                              <h3 className="head-text ">{about.title}</h3>
                              <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                              <MDBBtn  className='button-one' color='dark' >Learn More</MDBBtn>
                      </MDBCol>
                      </MDBRow>
                      ))}
              </MDBContainer>
          </section>

          <section className='my-5 watch'>
              <MDBContainer>
                  <MDBRow>
                      <MDBCol md="12">
                          <h1 className='head-text'>When a man's stomach is full it makes no <br /> difference whether he is rich or poor
                          </h1>
                          <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                          <a href='https://youtu.be/bZx8rPd-PKQ'><span><BiRightArrow/></span> Whatch Now</a>
                      </MDBCol>
                  </MDBRow>
              </MDBContainer>
              </section>
              </motion.div>
      </>
  )
}
export default About