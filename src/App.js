import './App.css';
import Tables from "./Tables";
import Header from "./Header";
import useWindowDimensions from "./window";
import Form from "./Form";
import {useState} from "react";

const App = () => {
    const [tableSelected, setTableSelected] = useState("");
    const [formStage, setFormStage] = useState(0);
    const {height, width} = useWindowDimensions();

    return (
        <div className="App" style={{height: height, width: width}}>
            <Header/>
            <Tables tableSelected={tableSelected} handleTableSelection={setTableSelected} formStage={formStage}/>
            <Form tableSelected={tableSelected} formStage={formStage} handleStageSelected={setFormStage}/>
        </div>
    );
}

export default App;
