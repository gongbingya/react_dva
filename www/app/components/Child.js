import React from 'react';

export default class Child extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>我是子组件Child</h2>
            </div>
        );
    }
}
