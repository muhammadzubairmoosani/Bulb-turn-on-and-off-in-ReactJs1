import React from 'react';
import './App.css';

const list = [
  {
    id: 1,
    first: 'Zubair',
    last: 'Rasheed',
    age: 25,
  },
  {
    id: 2,
    first: 'Umair',
    last: 'Rasheed',
    age: 35,
  },
  {
    id: 3,
    first: 'Abdullah',
    last: 'Yousuf',
    age: 18,
  },
  {
    id: 4,
    first: 'Samad',
    last: 'Rais',
    age: 55,
  }
]
function searchKey(key) {
  return function (list) {
    console.log(list)
    console.log(key)
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      key: '',
    }
  }
  setValue(event) {
    this.setState({ key: event.target.value });
  }
  onDismiss(id) {
    this.setState({ list: this.state.list.filter(item => item.id !== id) });
  }
  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={event => this.setValue(event)}
            value={this.state.key}
          />
        </form>
        {this.state.list.filter(item => item.first.toLowerCase().includes(this.state.key.toLowerCase()))
          .map(item =>
            <div key={item.id}>
              <h1>{item.first}</h1>
              <h1>{item.last}</h1>
              <h2>{item.age}</h2>
              <span><button onClick={() => this.onDismiss(item.id)}>Dismiss</button></span>
            </div>
          )}
      </div>
    );
  }
}
export default App;