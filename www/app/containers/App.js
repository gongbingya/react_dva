import React from 'react';
import Child from "../components/Child.js";
import { connect } from "dva";
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>我是App -- {this.props.v}</h1>
                    <button onClick={()=>{this.props.dispatch({"type":"counter/add","num":100})}}>+</button>
                    <button onClick={()=>{ this.props.dispatch({"type":"counter/addServer"})}}>addServer</button>
                <Child></Child>
            </div>
        );
    }
}
export default connect(
    ({counter})=>({"v":counter.v})
)(App);