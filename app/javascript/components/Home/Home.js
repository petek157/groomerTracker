import React, {Component} from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            testInfo: [
                {id: 1, name: 'Peter', sled: 'Ski-Doo'},
                {id: 1, name: 'Tom', sled: 'Crctic-Cat'},
                {id: 1, name: 'Jenelle', sled: 'Yamaha'}
            ]
         }
    }
    render() { 
        return ( 
            <div>This si the home component!</div>
         );
    }
}
 
export default Home;