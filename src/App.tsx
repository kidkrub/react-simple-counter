import React, { Component } from 'react';
import ButtonBar from './components/ButtonBar'
import Display from './components/Display'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faSync, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faSync, faMinus)

interface State {
  count: number
}
class App extends Component<{},State> {
  state = {
    count: 0
  }
  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  resetCount = () => {
    this.setState(() => ({ count: 0 }));
  };
  render() {
    return (
      <div className="container">
        <header style={{textAlign:"center"}}>Simple Counter</header>
        <div className="border border-secondary rounded">
          <Display count={this.state.count}/>
          <ButtonBar
            addFunc={this.incrementCount}
            resetFunc={this.resetCount}
            removeFunc={this.decrementCount}
          />
        </div>
      </div>
    );
  }
}

export default App;
