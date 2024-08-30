import { useMemo, useState } from 'react';
import { pow } from '../../helpers/pow';
function Counter() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter => counter + 1);
  }

  // const resPow = pow();
  const resPow = useMemo(() => {
    pow();
  }, [])

  // dung memo thi component box khong bi render lai, nen su dung React.memo() khi component su dung nhieu logic
  return (
    <>
      <div>Ket qua: {counter}</div>
      <button onClick={handleCounter}>Counter</button>
      <div>{resPow}</div>
    </>
  );
}

export default Counter;