import React, { Component } from 'react';

const CatList = (props) => {
  console.log(props, "im a cat")
  return (
        props.cats.map((cat, index) => {
          return (

            <li key={index}>
              {cat}
            </li>
          )
        })
  )
}

export default CatList;
