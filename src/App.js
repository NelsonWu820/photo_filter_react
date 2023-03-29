import Header from "./components/Header";
import Input from "./components/Input";
import Pictures from "./components/Pictures";

function App() {
  var tagsHolder = []
  const callRender = ({tagsArray}) => {
    tagsHolder = [...tagsArray];
  } 
  return (
    <div className="App">
      <Header/>
      <Input render={callRender}/>
      <Pictures tags={tagsHolder}/>
    </div>
  );
}

export default App;
