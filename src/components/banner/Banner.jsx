import React from 'react';

export default class Banner extends React.Component{
  iframe = () => {
    return {
      __html: this.props.iframe
    }
  }

  render = () => {
    console.log(this.iframe());
    return (
      <div>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    );
  }
}