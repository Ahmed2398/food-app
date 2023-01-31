import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React,{useState, useEffect} from 'react'
import { urlFor, client } from '../../client.js';
import './Questions.scss';
import { motion } from 'framer-motion';
import {AiOutlinePushpin} from 'react-icons/ai'
const Questions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const query = '*[_type == "questions" ]';
        client.fetch(query).then((data) => setQuestions(data));
        
    }, []);
  return (
      <>
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
          <section className='faq'>
          <MDBContainer>
              <h1 className="head-text text-center">Questions</h1>
             
                  <MDBRow >
                  {questions.map((question, index) => (
                <MDBCol key={question.title + index} md="6">
                    <h3 className='head-text'>
                    <AiOutlinePushpin/>{question.title}
                          </h3>
                          <p className='p-text'>{question.description }</p>
                      </MDBCol>
                      ))}
              </MDBRow>
              
             
              </MDBContainer>
          </section>
          
         </motion.div>
          
             
      </>
  )
}

export default Questions