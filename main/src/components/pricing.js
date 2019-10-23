import React from 'react';

class Pricing extends React.Component {
    render() {
        return (
            <div className="description">
                <h1 className="descriptionHeader">What Do We Do?</h1>
                <div className="descriptionContent">
                    <img 
                        className="descriptionImage" 
                        src="https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                    </img>
                    <div className = "descriptionText">
                        <p className="descriptionParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet mi congue, viverra lectus ut, auctor ante. Quisque vel scelerisque dui. Cras sollicitudin elementum dapibus. Sed sollicitudin volutpat lacus sit amet porttitor. Duis nulla erat, luctus id lectus a, egestas finibus turpis. Vestibulum ac lectus a turpis porta interdum. Cras at facilisis arcu. Vestibulum et quam ut felis interdum pulvinar. Curabitur sed dictum diam. Vestibulum varius dolor sit amet enim consequat, ut molestie sem pharetra.
                        </p>
                        <p className="descriptionParagraph">
                            Nullam pretium lacus sit amet euismod condimentum. Phasellus posuere, mauris sed molestie imperdiet, augue massa aliquam ipsum, et hendrerit lorem orci sed est. Integer est dolor, commodo eu facilisis a, ullamcorper eget urna. Maecenas iaculis eu quam nec fermentum. Maecenas dictum lectus eget lorem posuere, ac mollis nisi faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis non enim facilisis, hendrerit velit varius, rutrum nisl. Duis justo purus, semper non ante id, ornare dignissim risus. Nullam sed iaculis nulla. Fusce et nunc semper, tincidunt felis at, pretium tortor. Mauris non ultrices quam. Proin felis tellus, semper ullamcorper tortor a, pellentesque porttitor quam. Mauris pretium purus ut aliquam ultricies.
                        </p>
                    </div>
                </div>        
            </div>
        )
    }
}

export default Pricing;