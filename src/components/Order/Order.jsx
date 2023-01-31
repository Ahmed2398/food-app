import React, { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBTextArea
} from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { TbMessageShare } from 'react-icons/tb';
import './Order.scss';
import { useEffect } from 'react';

const Order = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const query = '*[_type == "foods"]';
        client.fetch(query).then((data) => setFoods(data));
    },[])

    const [basicModal, setBasicModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', address:'' ,message: '', foodselect:[] });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    const [loading, setLoading] = useState(false);

    const { username, email,mobile, address, message, foodselect } = formData;

    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);
    
        const order = {
          _type: 'order',
            name: formData.username,
            email: formData.email,
            mobile: formData.mobile,
            address:formData.address,
            message: formData.message,
            foodselect:formData.foodselect
        };
    
        client.create(order)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
          .catch((err) => console.log(err));
      };
  
    const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
      <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
      <MDBBtn className='button-one' onClick={toggleShow}>Order Now</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className=' head-text-modal text-center'>Make Your Order Now!</MDBModalTitle>
              <MDBBtn  className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                      </MDBModalHeader>
                    
                      <MDBModalBody>
                      
                          {!isFormSubmitted ? (
                              
                                <div className="order-form">
                                  <MDBInput className='my-3' label='Your Name' placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                                  <MDBInput label='Email' className='my-3' type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />

                                  <MDBInput label='Address' className='my-3' type="text" placeholder="Your Address" name="address" value={address} onChange={handleChangeInput} />
                                  <MDBInput label='Mobile'className='my-3' type="text" placeholder="Your Mobile" name="mobile" value={mobile} onChange={handleChangeInput} />

                                  <MDBTextArea label='Message' className='my-3' placeholder="Your Message"
                                      value={message} name="message" onChange={handleChangeInput} />
                                  
                                  <select className='' name="name" id="select" required="required">
                                  {foods.map((food, index) => (

                        <option  key={food.title + index}  type="array" value={foodselect} name="foodselect" onChange={handleChangeInput}> {food.title} </option>
                       
                        ))}  
                      </select>
    


                                  <MDBBtn type="button" className=" button-one" onClick={handleSubmit}>
                                      <span className='ml-4' style={{fontSize:25}}><TbMessageShare/></span>
                                      {!loading ? 'Send Message' : 'Sending...'}
          </MDBBtn>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} 
            </MDBModalBody>

                     
                    
          </MDBModalContent>
        </MDBModalDialog>
          </MDBModal>
          </motion.div>
    </>

  )
}

export default Order