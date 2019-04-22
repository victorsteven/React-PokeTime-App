import React from 'react';
import Rainbow from '../hoc/Rainbow';
const About = (props) => {
  console.log(props)
  return (
    <div className="container">
      <h4 className="center">
        About
      </h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore cupiditate molestias similique at, repellendus itaque dolorem corporis officiis obcaecati, laborum temporibus magni adipisci delectus qui, autem exercitationem hic tempora?</p>
    </div>
  )
}

export default Rainbow(About);