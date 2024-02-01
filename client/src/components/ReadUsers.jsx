import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap'
import axios from 'axios'

const ReadUsers = () => {
    const getAllUsersUrl = 'http://localhost:8080/v1/user/all'
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get(`${getAllUsersUrl}`)
        setUsers(res.data);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const RenderedUsers = users.map((user) => {
        return (
            <>
                <Row className='justify-content-center'>
                    <Col>
                        <Card.Body>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </Card.Body>
                    </Col>
                </Row>
            </>
          )
    })
 

  return (
        <>
            <Container fluid>
            <h3 className='text-center m-2 font-bold text-2xl'>Users</h3>
                <Row className='justify-content-md-center'>
                    {RenderedUsers}
                </Row>
            </Container>
        </>
       )
}

export default ReadUsers