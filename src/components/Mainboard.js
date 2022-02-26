import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './Mainboard.css'

const Mainboard = ({pins}) => {
  return (
    <Wrapper>
        <Container className="mainboard-container">
            {pins.map((pin, index) => {
                let {urls} = pin;
                return <Pin key={index} urls={urls} />
            })}
            
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 15px;
`

const Container = styled.div`
    height: 100%;
    background-color: white;
    margin: 0 auto;
    
`