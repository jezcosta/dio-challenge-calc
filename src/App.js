
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'x': (a, b) => a * b,
  '/': (a, b) => {
    if (b === 0) {
      return 0
    }
    return a / b;
  }
};

const App = () => {
  const initialNumber = '0'
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [firstNumber, setFirstNumber] = useState(initialNumber);
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber(initialNumber)
    setFirstNumber(initialNumber)
    setOperation('')
  };

  const handleBackspace = () => {
    if(currentNumber === initialNumber || currentNumber.length === 1) {
      return setCurrentNumber(initialNumber)
    }
    setCurrentNumber((old) => old.slice(0, -1))
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === initialNumber ? '' : prev}${num}`)
  }

  const handleOperation = (operation) => {
    if(firstNumber === initialNumber){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(initialNumber)
      setOperation(operation)
      return
    }

    if (!operations.hasOwnProperty(operation)) {
      return
    }
  
    const result = operations[operation](Number(firstNumber), Number(currentNumber));

    setCurrentNumber(String(result))
    setFirstNumber(initialNumber)
    setOperation('')
  }

  const handleEquals = () => {
    if(firstNumber !== initialNumber && operation !== '' && currentNumber !== initialNumber){
      handleOperation(operation)
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={() => handleOperation('x')} highlight/>
          <Button label="/" onClick={() => handleOperation('/')} highlight/>
          <Button label="c" onClick={handleOnClear} highlight/>
          <Button label="<" onClick={handleBackspace} highlight/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperation('-')} highlight/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperation('+')} highlight/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals} highlight/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
