/** @format */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import logoGif from "../images/login-logo.gif";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={logoGif} alt="github user" />
        <h2>Defunkt user's repositories</h2>
        <div className="btn" onClick={loginWithRedirect}>
          login/ sign up
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: black;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    width: 70%;
    margin: 0 auto;
    cursor: pointer;
    user-select: none;
  }
  h2 {
    margin-bottom: 2.5rem;
    cursor: pointer;
    user-select: none;
  }
`;
export default Login;
