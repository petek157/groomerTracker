import React, {Component} from 'react'
import SecContentPic from './SecContentPic.js'

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
            <SecContentPic/>
         );
    }
}
 
export default Home;