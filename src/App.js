import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('')

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        datetime
      })
    }).then(res => {
      res.json().then(json => {
        setName("");
        setDatetime("");
        setDescription("");
        console.log("result", json);
      })
    })
  }

  return (
    <main>
      <h1>$0<span>00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <div><input type="text" placeholder='+200 new TV' value={name} onChange={ev => setName(ev.target.value)}/></div>
          <div><input type="datetime-local" value = {datetime} onChange={ev => setDatetime(ev.target.value)}/></div>
        </div>
        <div className='description'><input type="text" placeholder='Description' value = {description} onChange={ev => setDescription(ev.target.value)}/></div>
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
