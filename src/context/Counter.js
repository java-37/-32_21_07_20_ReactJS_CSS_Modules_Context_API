import React from 'react';
import {CounterContainerContext} from './CounterContainer';
export default props => {
    return (
        <CounterContainerContext.Consumer>
            {
                context => {
                    return (
                        <div style={{textAlign:'center'}}>
                            <h2>{context.cnt}</h2>
                            <button onClick={context.sub}>-</button>
                            <button onClick={context.add}>+</button>
                        </div>
                    );
                }
            }
        </CounterContainerContext.Consumer>
        
    );
}