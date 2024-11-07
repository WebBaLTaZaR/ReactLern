import "./App.css";

function App() {
  return (
    <div className="appJs">
      <Message sms="Привет! Как дела?" />
      <Message sms="Привет! Хорошо, у тебя как?" />
      <Message sms="Привет! Хорошо, и да, я установил панель разработчика для Реакта!" />
    </div>
  );
}

export default App;
function Message({ sms }) {
  return (
    <div>
      <h1> Сообщение: {sms} </h1>
    </div>
  );
}
