import React from "react";
import styled from "styled-components"

const Ajastin = () => {
  return (

    <Container>
      <Information>
    <div>
      <h2>Ajastin View</h2>
      
    </div>
    </Information>
    </Container>
  )
}

export default Ajastin;




const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    
  `
  const Information = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    

    h2{
        font-weight: 600;
        font-size: 2.5rem;
        color:rgb(148, 142, 89);
    }
    p{
        font-weight: 600;
        font-size: 1.5rem;
        color:rgb(148, 142, 89);
    }
`