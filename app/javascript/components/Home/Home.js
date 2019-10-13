import React, {Component} from 'react'
import Nav from './Nav.js'
import Jumbotron from './Jumbotron.js'
import SecContentPic from './SecContentPic.js'
import SecPicContent from './SecPicContent.js'
import Footer from './Footer.js'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            testInfo: [
                {id: 1, name: 'Peter', sled: 'Ski-Doo'},
                {id: 2, name: 'Tom', sled: 'Crctic-Cat'},
                {id: 3, name: 'Jenelle', sled: 'Yamaha'}
            ]
         }
    }
    render() { 
        return ( 
            <div id="page">
                <Nav />
                <Jumbotron />
                <SecContentPic />
                <SecPicContent />
                <Footer />
            </div>
         );
    }
}
 
export default Home;