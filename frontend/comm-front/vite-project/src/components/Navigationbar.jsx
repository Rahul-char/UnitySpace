import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  background: ${props => props.theme === 'dark' ? '#000000' : props.scrolled ? '#000000' : '#ffffff'};
  box-shadow: ${props => !props.scrolled && props.theme !== 'dark' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => {
    if (props.theme === 'dark') return '#ffffff';
    return props.scrolled ? '#ffffff' : '#000000';
  }};
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: ${props => props.theme === 'dark' ? 'bold' : 'normal'};
  
  &.signin {
    background: transparent;
    border: 2px solid ${props => {
      if (props.theme === 'dark') return '#ffffff';
      return props.scrolled ? '#ffffff' : '#000000';
    }};
    color: ${props => {
      if (props.theme === 'dark') return '#ffffff';
      return props.scrolled ? '#ffffff' : '#000000';
    }};
    
    &:hover {
      background: ${props => {
        if (props.theme === 'dark') return '#ffffff';
        return props.scrolled ? '#ffffff' : '#000000';
      }};
      color: ${props => {
        if (props.theme === 'dark') return '#000000';
        return props.scrolled ? '#000000' : '#ffffff';
      }};
    }
  }
  
  &.register {
    background: transparent;
    border: 2px solid ${props => {
      if (props.theme === 'dark') return '#ffffff';
      return props.scrolled ? '#ffffff' : '#000000';
    }};
    color: ${props => {
      if (props.theme === 'dark') return '#ffffff';
      return props.scrolled ? '#ffffff' : '#000000';
    }};
    
    &:hover {
      background: ${props => {
        if (props.theme === 'dark') return '#ffffff';
        return props.scrolled ? '#ffffff' : '#000000';
      }};
      color: ${props => {
        if (props.theme === 'dark') return '#000000';
        return props.scrolled ? '#000000' : '#ffffff';
      }};
    }
  }
`;

const Navigationbar = ({ theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Nav scrolled={scrolled} theme={theme}>
      <Logo scrolled={scrolled} theme={theme} onClick={handleLogoClick}>UnitySpace</Logo>
      <ButtonGroup>
        <Button className="signin" scrolled={scrolled} theme={theme} onClick={handleSignIn}>Sign In</Button>
        <Button className="register" scrolled={scrolled} theme={theme} onClick={handleRegister}>Register</Button>
      </ButtonGroup>
    </Nav>
  );
};

export default Navigationbar;