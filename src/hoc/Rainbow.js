import React from 'react'

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'green', 'orange', 'yellow'];
  const randomColour  = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + '-text';

  return (props) => {
    return (
      <div className={className}>
        {/* the props passed here is for each component props */}
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow;