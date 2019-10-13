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
    text-align: right;
    font-size 2em;
`
const Heavy = styled.span`
    font-weight: bold;
`

class PicContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Section className="contentPic">
                <Pic className="pic-left">
                    <img src={MyImage} alt="" />
                </Pic>
                <Content className="content-right">
                    <Heavy className="heavy">100%</Heavy>, yes 100% of the profits from your subscription get donated directly to the local snowmobile/atv club of the area from the subscription.
                </Content>
                
            </Section>
         );
    }
}
 
export default PicContent;