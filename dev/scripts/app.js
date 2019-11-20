import React from 'react';
import ReactDOM from 'react-dom';
import CompanyLogo from './CompanyLogo';
import HeroDisplay from './HeroDisplay';

class App extends React.Component {

  render() {
    return (
      <div>
          <header>
            <CompanyLogo />
            <HeroDisplay />
          </header>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

