import React from 'react';
import Title from './title';
import Description from './description';

class Content extends React.Component {
    render() {
        return (
            <div className = "content">
                <Title />
                <Description />
            </div>
        )
    }
}

export default Content;