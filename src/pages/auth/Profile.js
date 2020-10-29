import React, { useState } from "react"
import Navi from '../../components/navi/Navi'
import { CardHeader, Row } from 'reactstrap'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
        return (
                <>
                 <div style={{marginBottom:"80px"}}>
                <Row>
                    <Navi />
                </Row>
            </div>
            <div style={{width:"300px", marginLeft:"370px", height:"200px"}}>
              <Card >
                <CardHeader><h2 className="text-center mb-4">Profile</h2>  </CardHeader>
                    <Card.Body>
                      {error && <Alert variant="danger">{error}</Alert>}
                      
                      <strong>Email:</strong> {currentUser && currentUser.email}
                      <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                      </Link>
                    </Card.Body>
                  </Card>
                  <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </div>
            </div>
                  
                </>
        )
            }
            