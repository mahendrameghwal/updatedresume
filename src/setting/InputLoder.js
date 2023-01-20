import React, { useEffect, useState } from 'react';
import { StoreState } from '../context/Context';

const InputLoder = (props) => {
  const {dispatch} = StoreState()
  const {input_fields} = props;
  const [heading, setHeadings] = useState('')
  const obj = {};
  
  useEffect(()=>{
    input_fields.forEach((i)=>{
      setHeadings(Object.keys(i))
    }) 
  },[])
  
  const handleChange = ({ target: { value, name } }) => {
    obj[name] = value;
    dispatch({type: 'SET_INPUT_DATA', payload: obj})
  }

  return (
    <div className="input__loader">
      <div className="row">
        <h4>Please Fill Your Resume</h4>
      {
        heading ? 
        heading.map((inp, i)=>{
          return (
            <div className="col" key={i}>
              <input type="text" 
                placeholder={inp} 
                onChange={handleChange}
                name={inp}
              />
            </div>
          )
        })
      : '' }
      </div>
    </div>
  )


 
}

export default InputLoder