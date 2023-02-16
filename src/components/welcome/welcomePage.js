// import React from 'react'
import Button from 'react-bootstrap/Button';
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


import './welcomeCss.css'
import welcomebg from '../../components/assest/20221127_221005.jpg'
// --openssl-legacy-provider 



function WelcomePage() {

    let navigate = useNavigate();

    function about() {
        navigate("/about.js");
    }

    function resume() {
        navigate("/resume.js");
    }
    
    return (
        <div className='welcomebody'>
             <div className='welcomepage'>
                
                <div className='welcometext'>
                    <h1 className='welcomeh1'> 
                        
                            I'm Matome <br /> I love coding <br /> I develop websites
                         </h1> 
                    <p className='welcomep'>
                         I love the process  builing developing website from start to finish. the long nights spent on learning new code, new designs and frameworks. the process of bringing a website to live from nothing sets me on fire  
                    </p>

                    <div className='buttons'>
                        <Button onClick={()=> resume()}  variant="outline-secondary">Resume</Button>
                        <Button onClick={()=>  about() } variant="outline-secondary">About</Button>
                    </div>
                </div>

                <div className='images'>

                    <img className='welcomimg' src={welcomebg}  alt="h"/>
                </div>
            </div>
        </div >
    )
  };
  

export default WelcomePage;
