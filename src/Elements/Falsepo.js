// import {React,Component} from "react";
// import { Button, Form } from "react-bootstrap";

// class Falsepo extends Component{
//     constructor(){
//         super();
//         console.log("constructor called");

//     }
//     componentDidMount(){
//         console.log("componentDidMount called");
//     }
//     getValue(){
//         var Number = document.getElementById("number").value;
//         var Root = document.getElementById("rootof").value;
//         console.log(Number);
//         console.log(Root);
//         document.getElementById("shownumber").innerHTML=Number;
//         document.getElementById("showrootof").innerHTML=Root;
//     }
//     createinputMatrix=()=>{
//         var Size = document.getElementById("Matsize").value;
//         var MatString=' ';
//         for (var i=0; i<Size;i++){
//             for(var j=0; j<Size;j++){
//                 MatString+="<input id='input"+i+j+"' type='number' step='1' placeholder='Number' style='width:8%;margin:0 auto;'/>"

//             }MatString+="<input id='inputans"+i+j+"' type='number' step='1' placeholder='Ans' style='width:8%;margin:0 auto;'/><br>";
//         }
//         console.log(MatString);
//         document.getElementById("Matricsinput").innerHTML=MatString;

//     }
//     render(){
//         console.log("render called")
//         return(
//             <div>
//                 <h3>False-point Method</h3>
//                 <Form>
//                     <Form.Group className="mb-3">
//                         <Form.Label>
//                             input number
//                         </Form.Label>
//                         <div>
//                             {/* <Form.Control id="number" type="number" step="1" placeholder="Number" style={{width:"20%",margin:"0 auto"}}></Form.Control>
//                             <Form.Control id="rootof" type="number" step="1" placeholder="Number" style={{width:"20%",margin:"0 auto"}}></Form.Control> */}
//                             <Form.Control id="Matsize" type="number" step="1" placeholder="Number" style={{width:"10%",margin:"0 auto"}} onChange={this.createinputMatrix}></Form.Control>
//                         </div>
                        
//                     </Form.Group>
//                 </Form>
//                 <div id="Matricsinput"></div>
//                 <div id="shownumber"></div>
//                 <div id="showrootof"></div>
//                 <br></br>
//                 <Button onClick={(this.getValue)}>
//                     Submit
//                 </Button>
//             </div>
//         )
//     }

// }

// export default Falsepo;


import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";


const Falsepo =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
        setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="primary">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">X1</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xm}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    // text:'Bisection Method',
                    // fontSize:20
                    },
                legend:{
                display:true,
                position:'right'
                }
                }}
                />
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

    const Calfalsepo = (xl, xr) => {
        var xm,fXm,fXr,fXl,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.000001;
        var obj={};
        do
        {
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)
            scope = {
                x:xl,
            }
            fXl = evaluate(Equation, scope)
            xm=((xl*fXr)-(xr*fXl))/(fXr-fXl);
            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

            
            console.log(xm);
            iter ++;
            if (fXm*fXr > 0)
            {
                ea = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xr = xm;
                console.log(ea);
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xl = xm;
            }
            console.log(ea);
            document.getElementById("c").innerHTML=ea.toPrecision(8);
        }while(ea>e && iter<MAX)
        document.getElementById("xx").innerHTML=xm.toPrecision(7);
        
        
    }


    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    // const config = {
    //     type: 'line',
    //     data: state,
    //   };
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'XL',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXl
          },
          {
            label: 'X1',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: 2,
            data: valueXm
          },
          {
            label: 'XR',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXr
          }
        ]
    }
    // module.exports = {
    //     actions: [],
    //     config: config,
    //   };
   
   
    const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        //console.log(xlnum);
        //console.log(xrnum);
        Calfalsepo(xlnum,xrnum);
        setData((Data)=>[...Data,data])
        //console.log(data);
        //console.log(Data);
       
        setHtml(print());
       
        //setState();
        console.log(valueIter)
        console.log(valueXl)
    }
    
    return (
            <Container>
                <Form >
                    <br></br>
                    <h3>False-Position Method</h3>
                    <br></br>
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="primary" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5 style={{color:"blue"}}>Answer = <h id="xx"></h></h5>
                <h5 style={{color:"blue"}}>Check error ≈ <h id="c"></h> </h5>
                
                <br></br>
                <Container>
                {html}
                </Container>
                {/* <div style={{width:"30%",margin:"0 auto",background:"aqua",textAlign:"center"}}>
                    <h5>Check Answer</h5>
                    <h6>f(x) = {Equation}</h6>
                    <h6>if x = {X.toPrecision(7)}</h6>
                    <h6>f(x) = {C}</h6>
                </div> */}
               
            </Container>
           
    )
}

export default Falsepo