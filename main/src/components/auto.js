import React from 'react';
import Card from './pricing/pricingAutoCard';
import { pricing } from './pricing/pricingList';

class Auto extends React.Component {
    constructor() {
        super();
        this.state = {
            pricing: pricing
        }
    }
    render() {
        const { pricing } = this.state;

        return (
            <div>
                <h1>Auto</h1>
                <div className="autoCardList">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

export default Auto;