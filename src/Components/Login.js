import React from "react";
import ActiveContext from "../context/activeContext";
import UserContext from "../context/UserContext";
import { FormControl, Form, Button, Card } from "react-bootstrap";
import { useContext, useRef } from "react";

const Login = () => {
    const userName = useRef(null);
    const userPass = useRef(null);
  
    const { allUsers } = useContext(UserContext);
    const { activeUser, setActiveUser } = useContext(ActiveContext);
  
    const userLogin = (event) => {
      event.preventDefault();
      const username = userName.current.value;
      const password = userPass.current.value;
  
      const returnedUsers = allUsers.filter((allUser) => username === allUser.Username);
      if (returnedUsers.length === 1) {
        setActiveUser(returnedUsers[0]);
      }
      
    };
  
    const buttonLogin = (event) => {
      const userId = event.target.value;
      const returnedUsers = allUsers.filter((allUser) => parseInt(userId) === allUser.id);
      if (returnedUsers.length === 1) {
        setActiveUser(returnedUsers[0]);
      }
    };
  
    return (
      <>
        <div>
          <Card style={{ width: "50vw", padding: "1rem" }} className="home-card">
            <h3>Login</h3>
            <Form action="/" method="get">
              <div className="form-group">
              <FormControl
                type="text"
                id="username"
                placeholder="Username"
                ref={userName}
              />
              </div>
              <div className="form-group">
              <FormControl
                type="password"
                id="password"
                placeholder="Password"
                ref={userPass}
              />
              </div>
              <div className="form-group">
              <Button className="login-btn" type="submit" onClick={userLogin}>
                Login
              </Button>
              </div>
            </Form>
          </Card>
          
        </div>
      </>
    );
  };
  
  export default Login;