import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Buttons/Buttons';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave a review">
          <Button
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></Button>
        </Section>

        <Section title="Statistics"></Section>
      </div>
    );
  }
}

export default App;
