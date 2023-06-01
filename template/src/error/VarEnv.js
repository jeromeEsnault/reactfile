import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import TableDeVariable from '../src/Component/Varenv/varenv';
import { DataVarEnv } from '../../../my-app/src/interface/data/dataVarEnv';



function VarEnv() {


  return (

    <><Container style={{ backgroundColor: 'blueviolet', minHeight: 1000 }} className='m-100'>
      <Row xs={1} md={12} className='text-center' >
        <h1>Mes Variable D'environnement</h1>
      </Row>
      <br />
      <br />
      <Row xs={1} md={12} className="g-4">

        <div >
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom de la Variable</th>
                <th>Resultat de la Variable</th>
                <th>description de la variable</th>
              </tr>
            </thead>
            {DataVarEnv.map((data) => {
              return (
                <TableDeVariable id={data.id} variable={data.variable} description={data.description} nomdelavariable={data.nomdelavariable} />
              );
            })}
          </Table>
        </div>
      </Row>
    </Container>

    </>


  );


}
export default VarEnv;