import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreState } from '../context/Context';
import TempLoder from './TempLoder';


const Edit = () => {
  const {state: {skin_code}} = StoreState();
  const navigate = useNavigate()

    
  return (
    <div className='container__fluid edit'>
      <div className="row">
        <div className="col">
          <button className='main_red_button' onClick={()=>navigate('/editor')}>Editor</button>
        </div>
        <div className="col temp__loading">
          <TempLoder skin_code={skin_code}  />
        </div>
      </div>
    </div>
  )
}

export default Edit