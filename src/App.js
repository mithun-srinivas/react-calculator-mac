import './App.css';
import * as math from 'mathjs'
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
import React, {useState} from 'react';



function App() {

  const [text, setText] = useState('0')
  const [result, setresult] = useState('0')

  const addText = (val) => {
    setText((text) => ([...text, val + '']))
  }

  const clearText = () => {
    setText('0')
    setresult('0')
  }

  const getResult = (value) => {
    const input = text.join('');
    setresult(math.evaluate(input))
    setText('0')
  }

  return (
    <div className="App">
      <div className='calculator-wrapper'>
        < Input text={text} result={result}/>
        <div className='button-wrapper'>
          < Button symbol={`7`} func={addText}/>
          < Button symbol={`8`} func={addText}/>
          < Button symbol={`9`} func={addText}/>
          < Button symbol={`+`} color={`#FF9F09`}  func={addText}/>
        </div>

        <div className='button-wrapper'>
          < Button symbol={`4`} func={addText}/>
          < Button symbol={`5`} func={addText}/>
          < Button symbol={`6`} func={addText}/>
          < Button symbol={`-`} color={`#FF9F09`}  func={addText}/>
        </div>

        <div className='button-wrapper'>
          < Button symbol={`1`} func={addText}/>
          < Button symbol={`2`} func={addText}/>
          < Button symbol={`3`} func={addText}/>
          < Button symbol={`*`} color={`#FF9F09`}  func={addText}/>
        </div>

        <div className='button-wrapper'>
          < Button symbol={`.`}  func={addText}/>
          < Button symbol={`0`}  func={addText}/>
          < Button symbol={`/`}  func={addText}/>
          < Button symbol={`=`} color={`#FF9F09`} func={getResult}/>
        </div>

        <div className='button-wrapper'>
          <ClearButton func={clearText}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
