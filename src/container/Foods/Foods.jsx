import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Order } from '../../components';
import './Foods.scss'
export const Foods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const query = '*[_type == "foods"]';
        client.fetch(query).then((data) => setFoods(data));
    },[])
  return (
    <>
      <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
          <section className='Foods'>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                          <h3 className=" head-text text-center">Explore Our Foods</h3>
                          <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                  </MDBCol>
                  </MDBRow>

                 
                      
                 
                  <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                  {foods.map((food, index) => (
      <MDBCol key={food.title + index}  >
        <MDBCard className='h-100'>
          <MDBCardImage
            src={urlFor(food.imgUrl)}
            alt={food.title}
            position='top'
          />
          <MDBCardBody>
                <MDBCardTitle className='head-text'>{food.title}</MDBCardTitle>
                <MDBCardText className='p-text'>{food.description}</MDBCardText>
                                  <div className='d-flex justify-content-space-evenly'>
                                      <span className='current-price'>${food.price}</span>
                                      <del className='old-price'>${ food.old}</del>
                                  </div>
                                <Order/>
                                    
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
   ))}
                      </MDBRow>
                    
                      
              </MDBContainer>
        </section>
        </motion.div>
    </>
  )
}

export default Foods
