// import {React,Component} from "react";
// import { Button } from "react-bootstrap";
// import Form from "react-bootstrap/Form";



// const mainDiv = {
//     display:"flex",
//     width:"100%",
//     margin:"0 auto"
// }

// const Div = {
//     width:"100%",
//     margin:"0 auto"
// }

// class Newton extends Component{
//     constructor(){
//         super();
//     }
//     getValue(){
//         var equation = document.getElementById("equation").value;
//         var x = document.getElementById("InputX").value;
//         var Equation=equation;
//         var X0=x;
//         x=X0;
//         var fx0 = eval(equation);
//         var X1=Number(X0)-(Number(fx0)/(2*Number(X0)));
        
      
//       do { 
        
//         x=X1;
//         var fx1 = eval(equation);
//         var X2=Number(X1)-(Number(fx1)/(2*Number(X1)));
//         var es = Math.abs( (Number(X2)-Number(X1)) / Number(X2));
        
//         X1=X2;
//         }while((Number(es)*100) > 0.000001);
        
//         document.getElementById("Showm").innerHTML=X2;
//         document.getElementById("ShowM").innerHTML=X2;
//         x=X2;
//         var Cheak = eval(equation);
//         if(Cheak<0.000001){
//             Cheak=0;
//         }
//         document.getElementById("ShowE").innerHTML=Equation;
//         document.getElementById("ShowC").innerHTML=Cheak;

       
//     }
//     render(){
//         return(
//             <div>
//                <div style={mainDiv}>
//                    <div  style={Div} >
//                         <h1> Newton Raphson Method </h1>
//                         <br></br>   
//                             <div>
//                                 <Form.Control id="equation" type="text" placeholder="input equation" style={{width:"20%",margin:"0 auto"}}></Form.Control>
//                                 <br></br>
//                                 <Form.Control id="InputX" type="number" placeholder="input X" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                
//                             </div>
//                             <br></br>
//                             <Button onClick={this.getValue}  style={{width:"10%",margin:"0 auto"}} >
//                                     done
//                             </Button>
                            

//                         <br></br><br></br><br></br>
//                         <div style={{width:"40%",margin:"0 auto",background:'#F0FFF0'}}>
//                             <h>ans = </h>
//                             <h style={{color:'green'}} id="Showm">  </h>
//                         </div>
//                         <br></br><br></br><br></br>

//                         <div style={{width:"40%",margin:"0 auto",background:'#FFFFE0',textAlign:"center"}}>
//                             <h4>check answer </h4>
//                             <div style={{width:"70%",margin:"0 auto",textAlign:"left"}}>
//                                 <h>f(x) = </h>
//                                 <h id="ShowE"></h><br></br>
//                                 <h>if x = </h>
//                                 <h id="ShowM"></h><br></br>
//                                 <h>ans = </h>
//                                 <h id="ShowC"></h>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
            
//         );
//     }
// }
// export default Newton;


import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate,derivative } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";


const Newtonraphson =()=>{
    const print = () =>{
    console.log(data)
    setValueIter(data.map((x)=>x.iteration));
    setValueXl(data.map((x)=>x.Xo));
    setValueXm(data.map((x)=>x.Xn));
    return(
        <Container>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th width="10%">Iteration</th>
                        <th width="30%">XOld</th>
                        <th width="30%">XNew</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index)=>{
                        return  (
                        <tr key={index}>
                            <td>{element.iteration}</td>
                            <td>{element.Xo}</td>
                            <td>{element.Xn}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
            <Line
            data={state}
            options={{
            title:{
                display:true
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

const Calnewton = (xo) => {
    var xo,xn,fn,fd,ea,scope,dx;
    var iter = 0;
    var MAX = 100;
    const e = 0.000001;
    var obj={};

    do
    {
        scope = {
            x:xo,
        }
        fn = evaluate(Equation, scope)
        console.log(fn)

        fd = derivative('2x^3-2x-5','x').evaluate({x: xo})
        console.log(fd)
        if (fd== 0){
            break;
        }else{
          dx = -fn/fd  
        }
        console.log(dx)
        
        xn = xo+dx
        console.log(xn)

        iter ++;
        ea = error(xo, xn);
        obj = {
            iteration:iter,
            Xo:xo,
            Xn:xn
            
        }
        data.push(obj)
        xo = xn;
        console.log(xn)
        console.log(ea);
        document.getElementById("c").innerHTML=ea.toFixed(7);
    }while(ea>e && iter<MAX)
    document.getElementById("xx").innerHTML=xn.toFixed(7);
}


const data =[];
const [valueIter, setValueIter] = useState([]);
const [valueXl, setValueXl] = useState([]);
const [valueXm, setValueXm] = useState([]);
const state = {
    labels: valueIter,
    datasets: [
      {
        label: 'XOld',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
        data: valueXl
      },
      {
        label: 'XNew',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        data: valueXm
      }
    ]
}


const [Data,setData] = useState([])
const [html, setHtml] = useState(null);
const [Equation,setEquation] = useState("2x^3-2x-5")
const [X,setX] = useState(0)

const inputEquation = (event) =>{
    console.log(event.target.value)
    setEquation(event.target.value)
}

const inputX = (event) =>{
    console.log(event.target.value)
    setX(event.target.value)
}

const calculateRoot = () =>{
    const xlnum = parseFloat(X)
    Calnewton(xlnum);
    setData((Data)=>[...Data,data])
   
    setHtml(print());

    console.log(valueIter)
    console.log(valueXl)
}

return (
        <Container>
            <Form >
            <br></br>
                <h3>Newton-Raphson Method</h3>
                <br></br>
                <Form.Group className="mb-3">
                <Form.Label>Input f(x)</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <Form.Label>Input X</Form.Label>
                    <input type="number" id="X" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
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
           
        </Container>
       
)
}
export default Newtonraphson