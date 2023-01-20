import React from 'react'
import { StoreState } from '../context/Context'
import InputLoder from './InputLoder';
import TempLoder from './TempLoder';


const Editor = () => {
  const {state:{skin_code, input_fields}} = StoreState()


  return (
    <div className="editor">
      <div className="row">
        <div className="col">
            <InputLoder input_fields={input_fields} />
        </div>
        <div className="col col-1">
            <TempLoder skin_code={skin_code} />
        </div>
      </div>
    </div>
  )
}

export default Editor