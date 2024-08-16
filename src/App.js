import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$0<span>00</span></h1>
      <form action="">
        <div className='basic'>
          <div><input type="text" placeholder='+200 new TV'/></div>
          <div><input type="datetime-local" /></div>
        </div>
        <div className='description'><input type="text" placeholder='Description'/></div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">transaction.name</div>
            <div className="description">transaction.description</div>
          </div>
          <div className="right">
            <div
              className="price red"
            >
              transaction.price
            </div>
            <div className="datetime">transaction.datetime</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
