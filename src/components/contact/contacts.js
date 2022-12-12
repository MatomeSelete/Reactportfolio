import React from 'react'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './contactsstyle.css'


const ContactPage = () => {
    return ( 
        <>

            <div className='contactpage'>
                <h2 className='contactme'>Contact Me </h2>

                <div className="textForm">

                    <div className="text">
                        <h3>Get in touch</h3>
                        <br />

                        <h4 className='email'>Email: seletematome3@gmail.com</h4>
                        <br />
                        <h4 className='phone'>Phone: (+27) 76-946-9953</h4>
                        <br />
            
                    </div>

                     <div className="forms">

                        <div className="form">

                            <Form action="https://formsubmit.co/seletematome3@gmail.com" method="POST">
                                <div className='nameEmail'>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <input style={{ height: '50px', width: '100%', color: 'white' }} className='formname' type="text" name="name" required placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <input style={{ height: '50px', width: '100%', color: 'white' }} className='formemail' type="email" name="email" required placeholder="Email" />
                                    </Form.Group>
                                </div>
                                <>
                                    <FloatingLabel controlId="floatingTextarea2" >
                                        <textarea
                                            name='message'
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '200px', width: '100%', color: 'white' }}
                                            className='formtext'
                                        />

                                    </FloatingLabel>
                                    <Button className='submitbtn' type="submit">{' '}
                                        Submit
                                    </Button>
                                </>
                            </Form>

                        </div> 


                    </div>
                </div>
            </div>
        </>
    )


  };
  
  export default ContactPage;




//   echo "# Reactportfolio" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/MatomeSelete/Reactportfolio.git
// git push -u origin main
