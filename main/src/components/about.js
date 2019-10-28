import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1 className="aboutHeader">Who are we?</h1>
                <div className="chris">
                    <img 
                        className="chrisPic" 
                        src ="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Tony_the_Tiger_%28Kellogg%27s_Frosted_Flakes%27_mascot%29.jpg/220px-Tony_the_Tiger_%28Kellogg%27s_Frosted_Flakes%27_mascot%29.jpg">
                    </img>
                    <br />
                    <br />
                    <br />
                    <p className="chrisText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis sagittis tellus, at luctus justo. Duis a viverra sapien. Ut pretium ipsum diam. Sed malesuada lacus eget tellus accumsan fringilla ac quis neque. Mauris a mi augue. Praesent ultricies iaculis orci et volutpat. Aenean elit nisl, lacinia sit amet blandit sit amet, vehicula a tortor. Donec nec augue neque. Curabitur at turpis nec metus consectetur imperdiet. Maecenas feugiat mollis leo sit amet mattis. Nam tincidunt nulla id mi accumsan luctus.</p>
                </div>
                <div className="joe">
                    <p className="joeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis sagittis tellus, at luctus justo. Duis a viverra sapien. Ut pretium ipsum diam. Sed malesuada lacus eget tellus accumsan fringilla ac quis neque. Mauris a mi augue. Praesent ultricies iaculis orci et volutpat. Aenean elit nisl, lacinia sit amet blandit sit amet, vehicula a tortor. Donec nec augue neque. Curabitur at turpis nec metus consectetur imperdiet. Maecenas feugiat mollis leo sit amet mattis. Nam tincidunt nulla id mi accumsan luctus.</p>
                    <img 
                        className="joePic" 
                        src = "https://static.tvtropes.org/pmwiki/pub/images/trix_rabbit.png">
                    </img>
                </div>
                
            </div>
        )
    }
}

export default About;