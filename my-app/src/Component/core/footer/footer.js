import React from 'react'
import { Nav } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';


const footer = () => {
    return (



        <MDBFooter style={{ backgroundColor: '#FF0000' }} className='text-center text-lg-start '>
            <section className='d-flex justify-content-center  p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Rejoignez-moi sur les réseaux sociaux :</span>
                </div>

                <div>

                    <a href='https://www.linkedin.com/in/jerome-esnault-dev/' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/jeromeEsnault' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </section>

            <section >
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>




                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ' text={'light'}>
                            <h6 className='text-uppercase fw-bold mb-4'>Liens utiles</h6>

                            <Nav defaultActiveKey="#presentation" className="flex-column ">
                                <Nav.Link href="#presentation" className='text-white' >Présentation</Nav.Link>
                                <Nav.Link href="#competence" className='text-white'>Compétences</Nav.Link>
                                <Nav.Link href="#projets" className='text-white'>Projets</Nav.Link>
                            </Nav>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> 3 rue du Docteur Leroy
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                esnaultjerome72@gmail.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> 06 47 80 05 91
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: '#0c0b0bc' }}>
                2023 - Création de Jérôme ESNAULT
            </div>
        </MDBFooter>

    );
}





export default footer;