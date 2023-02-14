import React from 'react'
import Button from 'react-bootstrap/Button';

import MatomeSelete from '../assest/MatomeSelete.pdf'


const Resume = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(MatomeSelete).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'MatomeSelete.pdf';
                alink.click();
            })
        })}

        return (
            <>
                

                <center>
                    <h1>Welcome Matome Selete's resume</h1>
                    <h3>Click on below button to download PDF file</h3>
                    <br />
                    <Button variant="secondary" onClick={onButtonClick}>
                        Download PDF
                    </Button>
                </center>



            </>

        )
    }

    export default Resume




