// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
function App() {
  let name = "jeonho";
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;
  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>{name}</h2>
      <b style={style.bold_text}>
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
