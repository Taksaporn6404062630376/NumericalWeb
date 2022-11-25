// import { useState } from "react"
// import { Button, Container, Form, Table } from "react-bootstrap";
// import { evaluate } from 'mathjs'
// import { Line } from "react-chartjs-2";


// const Secant =()=>{
//     const print = () =>{
//         console.log(data)
//         setValueIter(data.map((x)=>x.iteration));
//         setValueXl(data.map((x)=>x.Xo));
//         setValueXm(data.map((x)=>x.Xn));
//         return(
//             <Container>
//                 <Table striped bordered hover variant="primary">
//                     <thead>
//                         <tr>
//                             <th width="10%">Iteration</th>
//                             <th width="30%">XOld</th>
//                             <th width="30%">XNew</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((element, index)=>{
//                             return  (
//                             <tr key={index}>
//                                 <td>{element.iteration}</td>
//                                 <td>{element.Xo}</td>
//                                 <td>{element.Xn}</td>
//                             </tr>)
//                         })}
//                     </tbody>
//                 </Table>
//                 <Line
//                 data={state}
//                 options={{
//                 title:{
//                     display:true
//                     },
//                 legend:{
//                 display:true,
//                 position:'right'
//                 }
//                 }}
//                 />
//             </Container>
           
//         );
//     }

//     const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

//     const Calsecant = (x1) => {
//         var x0=0.0;
//         var x1,x2,xm,ea,scope,c;
//         var fxo,fxn
//         var iter = 0;
//         var MAX = 100;
//         const e = 0.000001;
//         var obj={};
       
//         do
//         {

//             scope = {
//                 x:x0,
//             }
//             fxo = evaluate(Equation, scope)

//             scope = {
//                 x:x1,
//             }
//             fxn = evaluate(Equation, scope)
//             x2 = (x1- (fxn*(x0-x1)) / (fxo-fxn));

//             c = fxo * fxn;
//             if(c==0){
//                 break;
//             }else{
//                 ea = error(x1, x2);
//                 obj = {
//                     iteration:iter,
//                     Xo:x1,
//                     Xn:x2
//             }
//             }
//             x0 = x1;
//             x1 = x2;

//             xm = ((-x1) / ((fxo - fxn)/(x0-x1)));
            
//             iter ++;
            
//             data.push(obj)
//             console.log(x2)
//             console.log(ea);
//             document.getElementById("c").innerHTML=ea.toFixed(7);
//         }while(ea>e && iter<MAX)
//         document.getElementById("xx").innerHTML=x2.toFixed(7);
//     }


//     const data =[];
//     const [valueIter, setValueIter] = useState([]);
//     const [valueXl, setValueXl] = useState([]);
//     const [valueXm, setValueXm] = useState([]);
//     const state = {
//         labels: valueIter,
//         datasets: [
//           {
//             label: 'XOld',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: 'red',
//             borderColor: 'red',
//             borderWidth: 2,
//             data: valueXl
//           },
//           {
//             label: 'XNew',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: 'blue',
//             borderColor: 'blue',
//             borderWidth: 2,
//             data: valueXm
//           }
//         ]
//     }
   
   
//     const [Data,setData] = useState([])
//     const [html, setHtml] = useState(null);
//     const [Equation,setEquation] = useState("x^2-7 ")
//     const [X,setX] = useState(0)

//     const inputEquation = (event) =>{
//         console.log(event.target.value)
//         setEquation(event.target.value)
//     }

//     const inputX = (event) =>{
//         console.log(event.target.value)
//         setX(event.target.value)
//     }

//     const calculateRoot = () =>{
//         const xlnum = parseFloat(X)
//         Calsecant(xlnum);
//         setData((Data)=>[...Data,data])
       
//         setHtml(print());

//         console.log(valueIter)
//         console.log(valueXl)
//     }
    
//     return (
//             <Container>
//                 <Form >
//                 <br></br>
//                     <h3>Secant Method</h3>
//                     <br></br>
//                     <Form.Group className="mb-3">
//                     <Form.Label>Input f(x)</Form.Label>
//                         <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                         <Form.Label>Input X</Form.Label>
//                         <input type="number" id="X" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                     </Form.Group>
//                     <Button variant="primary" onClick={calculateRoot}>
//                         Calculate
//                     </Button>
//                 </Form>
//                 <br></br>
//                 <h5 style={{color:"blue"}}>Answer = <h id="xx"></h></h5>
//                 <h5 style={{color:"blue"}}>Check error ≈ <h id="c"></h> </h5>
                
//                 <br></br>
//                 <Container>
//                 {html}
//                 </Container>
               
//             </Container>
           
//     )
// }

// export default Secant


import { useState } from "react";
import { evaluate } from "mathjs";
import {Form,Button,Table,Container} from "react-bootstrap";
import {Line} from "react-chartjs-2"

const Secant =()=>{
    const[Equation,setEquation] = useState("x^2-7 ")
    const[X,setX] = useState([])
    const[html,setHtml] = useState(null)

    const inputEquation=(event)=>{
        setEquation(event.target.value)
    }
    const inputX=(event)=>{
        setX(event.target.value)
    }

    const Calsecant=(x1)=>{
        var x0=0.0;
        var x1,x2,ea,scope;
        var fxo,fxn,c
        var iter = 0;
        var MAX = 100;
        const e = 0.000001;
        var obj={}
        do
        {
            scope = {
                x:x0,
            }
            fxo = evaluate(Equation, scope)

            scope = {
                x:x1,
            }
            fxn = evaluate(Equation, scope)
            x2 = (x1- (fxn*(x0-x1)) / (fxo-fxn));

            c = fxo * fxn;
            if(c===0){
                break;
            }else{
                ea = Math.abs((x2-x1)/x2)*100
                obj={
                    Iteration:iter,
                    Xo:x1,
                    Xn:x2
                }
            }
            x0 = x1;
            x1 = x2;
        
            iter ++;
            
            data.push(obj)
            console.log(x2)
            console.log(ea);
            document.getElementById("err").innerHTML=ea.toFixed(7);
        }while(ea>e && iter<MAX)
        document.getElementById("ans").innerHTML=x2.toFixed(7);
    }

    const calculateRoot=()=>{
        let xnum = parseFloat(X)
        Calsecant(xnum)
        setHtml(print());
    }

    const data=[]
    const [valueIter,setValueIter]= useState([])
    const [valueXo,setValueXo] = useState([])
    const [valueXn,setValueXn]= useState([])
    const print=()=>{
        console.log(data)
        setValueIter(data.map((x)=>x.Iteration))
        setValueXo(data.map((x)=>x.Xo))
        setValueXn(data.map((x)=>x.Xn))
        return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Iteration</th>
                        <th>Xold</th>
                        <th>Xnew</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.Iteration}</td>
                                <td>{element.Xo}</td>
                                <td>{element.Xn}</td>
                            </tr>
                        )
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
            data: valueXo
          },
          {
            label: 'XNew',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXn
          }
        ]
    }
    

    return(
        <Container>
            <Form>
                <h3>Secant</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Equation</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%",margin:"0 auto"}} className="form-control"></input>
                    <Form.Label>Input X</Form.Label>
                    <input type="number" id="X" onChange={inputX} style={{width:"20%",margin:"0 auto"}} className="form-control"></input>
                    <Button onClick={calculateRoot}>Calculate</Button>
                </Form.Group>
            </Form>
            <br></br>
            <h3>Answer= <h id="ans"></h></h3>
            <h3>Check error= <h id="err"></h></h3>
            <Container>{html}</Container>

        </Container>
    )
}
export default Secant