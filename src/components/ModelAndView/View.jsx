import React from 'react'

export default class View extends React.Component {
  render() {
    return(
      <div class="container">
        <p>{this.props.children.name}? what {this.props.children.Person.name}? a... right!</p>
        <h3 clas="panel-headding"> {this.props.children.Person.sayHi()}</h3>
      </div>
    )
  }
}