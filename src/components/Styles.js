import styled from "styled-components";

const ToolbarContainer = styled.div`
  .toolbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(95, 30, 7);
    height: 56px;
  }

  .toolbar__navigation {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
  }

  .spacer {
    flex: 1;
  }

  .toolbar__logo a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 0.8rem;
  }
  .toolbar__navigation-items ul {
    list-style-type: none;
    display: flex;
  }
  .toolbar__navigation-items li {
    padding: 0.6rem;
  }
  .toolbar__navigation-items a {
    color: white;
    text-decoration: none;
    transition: all 0.4s linear;

    &:hover {
      color: #fa923f;
    }
    &:active {
      color: #fa923f;
    }
  }

  @media screen and (max-width: 500px) {
    .hide-link {
      display: none;
    }
  }
`;
const TogglebuttonContainer = styled.div`
  .toggle-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
  }

  .toggle-button:focus {
    outline: none;
  }

  .toggle-button__line {
    width: 30px;
    height: 2.5px;
    background: azure;
  }

  @media screen and (min-width: 600px) {
    #togglebtn {
      display: none;
    }
  }
`;
const SidebarContainer = styled.div`
  .side-drawer {
    height: 100%;
    background: azure;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 500px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.7s ease-out;
  }
  .side-drawer ul {
    height: 43%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .side-drawer ul li {
    transition: all 0.6s linear;
    padding: 0.3rem;
    margin: 0.5rem 0;

    &:hover {
      background: lightblue;
      border-radius: 2px;
      margin-left: 0.5rem;
      letter-spacing: 0.2rem;
    }
  }

  .side-drawer ul li a {
    text-decoration: none;
    font-size: 1.4rem;
    &:active {
      color: blue;
    }
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    background: transparent;
    border: transparent;
    -webkit-transition: all 0.6s linear;
    transition: all 0.6s linear;
    color: #221c1c;
    cursor: pointer;
    outline: none;
  }
  .close-btn:hover {
    color: coral;
  }

  .side-drawer.open {
    transform: translateX(0);
  }
`;

const BackdropContainer = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    z-index: 100;
  }
`;

export {
  ToolbarContainer,
  TogglebuttonContainer,
  SidebarContainer,
  BackdropContainer,
};
