import React,{Component} from 'react';
import Wrapper from './Wrapper';

export const CounterContainerContext = React.createContext();

export default class extends Component{
    state = {
        count:0
    }

    addCount = () => {
        this.setState({count:this.state.count + 1});
    }

    subCount = () => {
        this.setState({count:this.state.count - 1});
    }

    render(){
        return (
            <div style={{width:'400px',margin:'0 auto', padding:'15px'}}>
                <h2>Count: {this.state.count}</h2>
                <hr />
                <CounterContainerContext.Provider
                    value={{
                        add:this.addCount,
                        sub:this.subCount,
                        cnt:this.state.count
                    }}
                >
                    <Wrapper />
                </CounterContainerContext.Provider>
            </div>
        );
    }
}