import React, { Component } from 'react';

class IndexPage extends Component {
    props: any = this.props;
    render() {
        return (
            <div>
                This is test in Commponent {this.props.match.params.id}
            </div>
        );
    }
}

export default IndexPage;