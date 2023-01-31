import { MDBRow,MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import { images } from '../../constants';
import './LearnBanner.scss';
import { motion } from 'framer-motion';
export const LearnBanner = () => {
  return (
      <>
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
          <section className="parallax-content2 parallax2 text-center" data-stellar-background-ratio="0.4" >
            <div className="overlay"></div>
            <MDBContainer>
                <MDBRow>
                    <div className="col-md-8">
                        <h4 className='head-text'>Baked fresh daily by bakers with passion.</h4>
                    </div>
                    
                        <div className="col-md-4">
                            <a href="#" className="btn  button-one">Learn More </a>
                      
                    </div>
                </MDBRow>
            </MDBContainer>
              </section>
              </motion.div>
      </>
  )
}

export default LearnBanner