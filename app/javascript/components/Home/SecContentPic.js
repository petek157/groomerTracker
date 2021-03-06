import React, { Component } from 'react';
import MyImage from '../../../assets/images/peter.jpg'
import styled from 'styled-components'

const Section = styled.section`
    min-height: 300px;
    display: flex;
`

const Pic = styled.div`
    padding: 15px;

    img {
        max-height: 250px;
    }
`

const Content = styled.div`
    padding: 15px;
    color: green;
    text-align: left;
    font-size 2em;
`

class SecContentPic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Section className="contentPic">
                <Content className="content-left">
                    Use the app to track the current location of the groomer and its recent history. That way you will have the best chance of having great smooth trails.
                </Content>
                <Pic className="pic-right">
                    <img src={MyImage} alt="Peter" />
                </Pic>
            </Section>
         );
    }
}
 
export default SecContentPic;