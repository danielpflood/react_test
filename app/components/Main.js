var React = require('react');
var ReactDOM = require('react-dom');

class Main extends React.Component {  
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<Main name="test name"/>, document.getElementById('app'))