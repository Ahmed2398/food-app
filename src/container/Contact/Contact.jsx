import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Contact.scss';
import { motion } from 'framer-motion';
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTextArea } from 'mdb-react-ui-kit';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
     <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >

          {!isFormSubmitted ? (
              <section className='contact'>
                   <h5 className="head-text text-cener ">Hurry up! Subscribe our newsletter
and get 25% Off</h5>
                  <MDBContainer>
                      <MDBRow>
                      <MDBCol md="6">
                      <MDBInput label='Name' type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} className='my-3' />
            </MDBCol>
                      <MDBCol md="6">
                      <MDBInput label='Email' type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} className='my-3' />
            </MDBCol>
         
                      <MDBCol md="12">
                      <MDBTextArea
             label='Message'
              placeholder="Your Message"
              value={message}
              name="message"
                      onChange={handleChangeInput}
                          className='my-3'
                          rows={4}
            />
            </MDBCol>
           
         
        
                      <MDBCol md="12">
                      <MDBBtn type="button" className="button-out my-3" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}
          </MDBBtn>
          </MDBCol>
        
          </MDBRow>
                  </MDBContainer>
                  </section>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
              )}
              </motion.div>
    </>
  );
};

export default Contact
