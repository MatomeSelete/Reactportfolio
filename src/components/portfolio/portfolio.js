import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Screenshot from '../images/Screenshot.png'

import './portfoliostyle.css' 


function PortfolioPage()  {
    return (
        <div className='bodyportolio'>
            <div className='portfolio'>
                <div className='head'>
                    <h2 className='portfoliopg'>Portfolio</h2>

                </div>
                <div className='portfoliobody'>
                    <div className='cards'>
                        <Card style={{ width: '90%', height: '100%' }}>
                        <Card.Title style={{ color: 'white' }}> <span style={{color: 'blue'}} >Kon</span><span style={{color: 'gold'}} >trak</span></Card.Title>
                            <Card.Img style={{ width: '100%', height: "90%" }} variant="top" src={Screenshot} />
                            <Card.Body style={{backgroundColor: 'black'}}>  
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    More Details
                                </button>
                            </Card.Body>
                        </Card>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Kontrak</h1>
                                    </div>
                                    <div class="modal-body">
                                    Kontrak is an app that serves as a bridge between people seeking services from contractors,
                                    and contractors looking to supply on that demand. The app will help contractors to advertise
                                    their work, and service seekers to find contractors by submitting their requirements,
                                    comparing prices and reading reviews about previous services. Service seekers can also
                                    track the job as it gets done.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
  };
  

export default PortfolioPage;