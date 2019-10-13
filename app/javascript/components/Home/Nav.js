import React, { Component } from 'react';
import styled from 'styled-components'

const NAV = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 15px;
    left: 15px;
    right: 15px;
    background-color: green;

    @media(min-width: 768px) {
        background: mediumseagreen;
        color: papayawhip;
    }
`

const NavBar = styled.div`
    text-align: center;
`

const Links = styled(NavBar)`
    flex: 1;
`

const Logo = styled(NavBar)`
    flex: 1;
`

const User = styled(NavBar)`
    flex: 1;
`

const UL = styled.ul`
    li {
        display: inline;
    }
`

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <NAV id="nav">
                <Links>
                    <UL>
                        <li>Get the app</li>
                    </UL>
                </Links>
                <Logo>
                    Logo
                </Logo>
                <User>
                    <UL>
                        <li>Log in</li>
                    </UL>
                </User>
                
            </NAV>
         );
    }
}
 
export default Nav;