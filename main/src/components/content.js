import React from 'react';
import Title from './title';
import Description from './description';
import Pricing from './pricing/pricing';

class Content extends React.Component {
    render() {
        return (
            <div className = "content">
                <Title />
                <Description />
                <Pricing />
            </div>
        )
    }
}

export default Content;