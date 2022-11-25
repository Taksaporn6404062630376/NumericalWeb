import {React,Component} from "react";
import { Button, Form } from "react-bootstrap";
import * as ReactDOM from "react-dom";

class Inverse extends Component{
    constructor(){
        super();
        console.log("constructor called");

    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue(){
        var Number = document.getElementById("number").value;
        var Root = document.getElementById("rootof").value;
        console.log(Number);
        console.log(Root);
        document.getElementById("shownumber").innerHTML=Number;
        document.getElementById("showrootof").innerHTML=Root;
    }
    createinputMatrix=()=>{
        var Size = document.getElementById("Matsize").value;
        var MatString=' ';
        for (var i=0; i<Size;i++){
            for(var j=0; j<Size;j++){
                MatString+="<input id='input"+i+j+"' type='number' step='1' placeholder='Number' style='width:8%;margin:0 auto;'/>"

            }MatString+="<br>";
        }
        console.log(MatString);
        document.getElementById("Matricsinput").innerHTML=MatString;

    }
    render(){
        console.log("render called")
        return(
            <div>
                <br></br>
                <h3>Matrix Inverse</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            Input Matrix size
                        </Form.Label>
                        <div>
                            {/* <Form.Control id="number" type="number" step="1" placeholder="Number" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                            <Form.Control id="rootof" type="number" step="1" placeholder="Number" style={{width:"20%",margin:"0 auto"}}></Form.Control> */}
                            <Form.Control id="Matsize" type="number" step="1" placeholder="Number" style={{width:"10%",margin:"0 auto"}} onChange={this.createinputMatrix}></Form.Control>
                        </div>
                        
                    </Form.Group>
                </Form>
                <div id="Matricsinput"></div>
                <div id="shownumber"></div>
                <div id="showrootof"></div>
                <br></br>
                <Button onClick={(this.getValue)}>
                    Submit
                </Button>
            </div>
        )
    }

}

export default Inverse;