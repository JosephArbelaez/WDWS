import React from 'react';
import Auto from './auto';
import Custom from './custom';

const initialState = {
    method: 'auto'
}
class Pricing extends React.Component {

    constructor() {
        super();
        this.state = initialState;
    }

    onMethodClick = () => {
        if (this.state.method === 'auto') {
            this.setState({method: 'custom'})
        }
        if (this.state.method === 'custom') {
            this.setState({method: 'auto'})
        }
    } 
    render() {
        const {method} = this.state;

        return (
            <div className="pricing">
                <h1 className="pricingHeader">Pricing</h1>
                <p className = "pricingSubheader">Choose your Method</p>      
                <button onClick={this.onMethodClick}>click me!</button>
                {
                    method === 'custom' ? 
                    (
                        <Custom />
                    ) : 
                    (
                        <Auto />
                    )
                }
            </div>
        )
    }
}

export default Pricing;