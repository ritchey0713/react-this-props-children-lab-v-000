import React,{ Component } from 'react'

export default class ThemedDecorations extends Component{
  render(){
    const inviteChild = React.Children.map(this.props.children, child=>{
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div>{inviteChild}
      </div>
    )
  }
}
