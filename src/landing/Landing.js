import React, { Component } from 'react';
import Header from './Header';
import {UserDashboard, UserForm} from '../users';

class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: 1
        };
    }

    changeView = (view) => {
        this.setState({view});
    }

    render(){
        return(
            <div>
                <Header changeView={this.changeView}/>
                {(() => {
                    switch(this.state.view){
                        case 1: 
                            return <UserDashboard/>;
                        case 2:
                            return <UserForm/>;
                        default:
                            return null;                      
                    }
                })()}
            </div>
        )
    }

}

export default Landing;