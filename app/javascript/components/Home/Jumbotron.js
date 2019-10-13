import React, { Component } from 'react';
import styled from 'styled-components'

const Jumbo = styled.div`
    background-color: red;
    min-height: 400px;
`

const Info = styled.div`
    color: white;
    padding: 100px 0;
    text-align: center;
    font-size 3em;
`

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Jumbo id="jumbotron">
                <Info className="">Jumbo<br />and Other</Info>
            </Jumbo>
         );
    }
}
 
export default Jumbotron;