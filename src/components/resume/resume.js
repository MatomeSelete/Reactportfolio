import React from 'react'
import { Container, Header, Grid, } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf'
import MatomeSelete from '../../../public/MatomeSelete.pdf'

const Resume = () => {
    return (
        <Container fluid>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header className='header' as='h1'>Résumé</Header>

                        <Document file={ MatomeSelete }> //Document has a prop file and we pass our document in this case JRResume
                            <Page pageNumber={1} />
                        </Document>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    )
}
export default Resume