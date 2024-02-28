import Contact from "./assets/Contact"
import Hello from "./assets/hello"
import Counter  from "./assets/Counter";

function App() {
  const helloData = [
    { name: 'Tanakorn', message: 'Hi there' },
    { name: 'Nham', message: 'Hello...'}
  ]

  return ( 
    <div className="App">
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Slowhandc1ap@gmail.com" phone="0123456789" />
    </div>
  );
}

export default App
