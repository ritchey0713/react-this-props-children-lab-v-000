import React,{ Component } from 'react'

export default class Invitation extends Component{
  render(){
    return(
      <div className="Invitation">
        <h1>You've been invited!</h1>
        <div className="invitationDetails">{this.props.children}
        </div>
      </div>
    )
  }
}
