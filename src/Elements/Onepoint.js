import { useState } from "react";
import {evaluate} from "mathjs";
import { Container,Form,Button,Table } from "react-bootstrap";
import {Line} from "react-chartjs-2";
const Onepoint=()=>{

    const[Data,setData] = useState([])
    const[Equation,setEquation] = useState("(1/2)*(25/x+x)")
    const[X,setX] = useState(0)
    const[html,setHtml] = useState(null)

    const inputEquation=(event) =>{
        setEquation(event.target.value)
    }
    const inputX=(event)=>{
        setX(event.target.value)
    }
    const Calonepoint=(xo)=>{
        var xo,xn,ea,scope
        var iter=0
        var max = 100
        var e=0.000001
        var obj={}

        do{
            scope={
                x:xo
            }
            xn=evaluate(Equation,scope)
            iter++
            ea=Math.abs((xn-xo)/xn)*100;
            obj={
                Iteration:iter,
                Xo:xo,
                Xn:xn
            }
            data.push(obj)
            xo=xn
            document.getElementById("printer").innerHTML=ea
        }while(ea>e && max>iter)
        document.getElementById("printans").innerHTML=xn
    }
    const calculateRoot=()=>{
        let xnum = parseFloat(X)
        Calonepoint(xnum)
        setHtml(print());
        setData((Data)=>[...Data,data])
    }
    
    const data=[]
    const [valueIter,setValueIter] = useState([])
    const [valueXo,setValueXo] = useState([])
    const [valueXn,setValueXn] = useState([])
    const print=()=>{
        console.log(data)
        setValueIter(data.map((x)=>x.Iteration))
        setValueXo(data.map((x)=>x.Xo))
        setValueXn(data.map((x)=>x.Xn))
        return(
            <Container>
                <Table striped bordered hover variant="primary">
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
                <div style={{width:'800px',height:'800px'}}></div>
                <Line
                data={state}
                options={{
                    title:{display:true},
                    legend:{display:true,position:'right'}
                }}
                />
            </Container>
        );
    }

    const state={
        labels: valueIter,
        datasets:[
            {
                label: 'Xold',
                fill: false,
                lineTension: 0.5,
                borderColor: 'red',
                backgroundColor: 'red',
                borderWidth: 2,
                data: valueXo
            },
            {
                label: 'Xnew',
                fill: false,
                lineTension: 0.5,
                borderColor: 'blue',
                backgroundColor: 'blue',
                borderWidth: 2,
                data: valueXn
            }
        ]
    }


    return(
        <Container>
            <Form>
            <h3>One point</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Input Equation</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <Form.Label>Input X</Form.Label>
                    <input type="number" id="x" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <Button onClick={calculateRoot}>Calculate</Button>
                </Form.Group>
            </Form>
            <br></br>
            <h5> Answer =<h id="printans"></h></h5>
            <h5> Check error =<h id="printer"></h></h5>
            <Container>{html}</Container>
        
        </Container>
    )


}
export default Onepoint

// import { useState } from "react"
// import { Button, Container, Form, Table } from "react-bootstrap";
// import { evaluate } from 'mathjs'
// import { Line } from "react-chartjs-2";


// const Onepoint =()=>{
//     const print = () =>{
//         console.log(data)
//         setValueIter(data.map((x)=>x.iteration));
//         setValueXo(data.map((x)=>x.Xo));
//         setValueXn(data.map((x)=>x.Xn));
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
//                 // options={{
//                 // title:{
//                 //     display:true
//                 //     },
//                 // legend:{
//                 // display:true,
//                 // position:'right'
//                 // }
//                 // }}
//                 />
//             </Container>
           
//         );
//     }

//     const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

//     const Calonepoint = (xo) => {
//         var xo,xn,ea,scope;
//         var iter = 0;
//         var MAX = 100;
//         const e = 0.000001;
//         var obj={};
//         do
//         {

//             scope = {
//                 x:xo,
//             }
//             xn = evaluate(Equation, scope)

//             iter ++;
//             ea = error(xo, xn);
//             obj = {
//                 iteration:iter,
//                 Xo:xo,
//                 Xn:xn
                
//             }
//             data.push(obj)
//             xo = xn;
//             console.log(xn)
//             console.log(ea);
//             document.getElementById("c").innerHTML=ea.toFixed(7);
//         }while(ea>e && iter<MAX)
//         document.getElementById("xx").innerHTML=xn.toFixed(7);
//     }


//     const data =[];
//     const [valueIter, setValueIter] = useState([]);
//     const [valueXo, setValueXo] = useState([]);
//     const [valueXn, setValueXn] = useState([]);
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
//             data: valueXo
//           },
//           {
//             label: 'XNew',
//             fill: true,
//             lineTension: 0.5,
//             backgroundColor: 'aqua',
//             borderColor: 'blue',
//             borderWidth: 2,
//             data: valueXn
//           }
//         ]
//     }
   
   
//     // const [Data,setData] = useState([])
//     const [html, setHtml] = useState(null);
//     const [Equation,setEquation] = useState("(1/2)*(25/x+x)")
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
//         Calonepoint(xlnum);
//         // setData((Data)=>[...Data,data])
       
//         setHtml(print());

//         console.log(valueIter)
//         console.log(valueXo)
//     }
    
//     return (
//             <Container>
//                 <Form >
//                 <br></br>
//                     <h3>One-point Iteration Method</h3>
//                     <h6 style={{color:"red"}}>"Open Method(Simple but may not converge)"</h6>
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

// export default Onepoint

