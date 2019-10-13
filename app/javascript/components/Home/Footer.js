import React, { Component } from 'react';
import styled from 'styled-components'

const Section = styled.section`
    height: 100px;
    background-color: blue;
    display: flex;
    justify-content: space-around;
`

const FooterDiv = styled.div`
    width: 25%;
    padding-top: 10px;
`

const Left = styled(FooterDiv)`
    color: white;
    width: 25%;
`

const Center = styled(FooterDiv)`
    color: yellow;
`

const Right = styled(FooterDiv)`
    color: pink;
`

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Section id="footer">
                <Left>
                    Left
                </Left>
                <Center>
                    Center
                </Center>
                <Right>
                    Right
                </Right>
            </Section>
         );
    }
}
 
export default Footer;