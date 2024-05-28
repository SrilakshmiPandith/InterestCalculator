import { useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Result from './components/Result.jsx';
import { InpContext } from "./store/input-context.jsx";
import { calculateInterest } from "./interest";

let initial = {
  investment: 500,
  roi : 1,
  tp : 1,
}
function App() {
  const [invType, setInvType] = useState("SIP");
  const [updated, setUpdated] = useState(false);
  
  const inpCtx = useContext(InpContext);
  
  function handleInvType(type){
    setInvType(type);
  }

  function handleUpdate(ctx){
    setUpdated((e) => (!e));
    initial = ctx;
  }
  
  const ctxValue = {
    ...initial,
    type : invType,
    changeOfInp : updated,
    updateInvType: handleInvType, 
    inputUpdate : handleInvType
  }

  let res=calculateInterest(ctxValue.type,ctxValue.investment,ctxValue.roi,ctxValue.tp);

  return (
    <InpContext.Provider value={ctxValue}>
      <Header />
      <div id="container">
        <Input invType = {invType} updateInvType={handleInvType} onUpdate={handleUpdate} />
        <Result res = {res}/>
      </div>
    </InpContext.Provider>
  );
}

export default App;
