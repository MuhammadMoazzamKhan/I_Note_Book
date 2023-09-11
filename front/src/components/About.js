import { styled } from '@mui/material/styles';
import { Button, Container, Box } from '@mui/material';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import {VscGithub} from "react-icons/vsc"
import {FaLinkedinIn} from "react-icons/fa"
import { Link } from 'react-router-dom';



const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: "100%",
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 0),
}));



const About = () => {
  return (
    <Container>
      <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
        <h1>
          Contact Us
        </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8020528049633!2d67.06896117425084!3d24.97284854075327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340c1eb6e6c17%3A0x1ea06f83e26240c2!2sGeo%20Mobile%20Mall!5e0!3m2!1sen!2s!4v1694164815078!5m2!1sen!2s" width="80%" height="200" style={{ border: 0 }} className='mx-5' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <Box action='https://formspree.io/f/mdorzjgv' method='POST' component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            type='text'
            id="username"
            label="Full Name"
            name="username"
            autoComplete='off'
            autoFocus
            color='primary'
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type='email'
            label="Email Address"
            name="email"
            autoComplete='off'
            color='primary'
          />
          <Form.Control
            style={{ backgroundColor: "transparent"}}
            autoComplete='off'
            required
            id='message'
            name='message'
            as="textarea"
            rows={3}
            placeholder='Enter your message.'
            />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color='primary'
            sx={{ mt: 3, mb: 2 }}
          >
           Send
          </Button>
        </Box>
        <div>
        <Link  target='_blank' to="https://github.com/MuhammadMoazzamKhan/"><VscGithub className='mx-2'color='black' size={40} /></Link>
        <Link  target='_blank' to="www.linkedin.com/in/muhammad-moazzam-khan-494845279"><FaLinkedinIn color='#0039a6' className='mx-2' size={40} /></Link>
        
        </div>
        
      </StyledContent>
    </Container >
  )
}

export default About