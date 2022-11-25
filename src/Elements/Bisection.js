// import React,{ useState } from "react"
// import { Button, Container, Form, Table } from "react-bootstrap";
// import { evaluate, parse, parseDependencies } from 'mathjs'


// const Bisection =()=>{
   
//     const[Keepvalue, setKeepvalue] = useState([]);
//     const Calbisection = (XL, XR, equation) => {
//         var xm,xold,ea;
//         var iter = 0;
//         var MAX = 100;
//         const e = 0.000001;
//         var TempArray = [];
//         function fx(x){
//             let fun = parse(equation)
//             return fun.evaluate({ X:(x)})
//         }
//         const xl = parseFloat(XL)
//         const xr = parseFloat(XR)
//         // if(xl != "" && xr != ""){
//             while(ea>e && iter<MAX){
//                 xm=(xr+xl)/2;
//                 if(fx(xm)*fx(xr)<0){
//                     xold=xl
//                     xl=xm
//                 }
//                 if(fx(xm)*fx(xr)>0){
//                     xold=xr
//                     xr=xm
//                 }
//                 MAX = Math.abs((xm-xold)/xm)*100
//                 iter++;
//                 let count = [xm.toFixed(7), MAX.toFixed(6)]
//                 TempArray.push(count);
//             }
//         // }
        
//         setKeepvalue(TempArray)
//         console.log(TempArray)
//     }
//     const calculateRoot = (event) =>{
//         let xl = event.target.XL.value
//         let xr = event.target.XR.value
//         const func = event.target.func.value
//         Calbisection(xl,xr,func)
        
//     }

//     return (
//             <div className="All">
//                 <Form >
//                     <h3>Bisection Method</h3>
//                     <br></br>
//                     <Form.Group className="mb-3">
//                     <Form.Label>Input f(x)</Form.Label>
//                         <input type="text" id="equation" style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                         <Form.Label>Input XL</Form.Label>
//                         <input type="number" id="XL" style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                         <Form.Label>Input XR</Form.Label>
//                         <input type="number" id="XR" style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                     </Form.Group>
//                     <Button variant="primary" onClick={calculateRoot}>
//                         Calculate
//                     </Button>
//                 </Form>
//                 <br></br>
//                 {/* <h5>Answer = {X.toPrecision(7)}</h5> */}

//                 <table class='table' style={{border: "1px solid black", textAlign: "center", justifyContent: "center"}}>
//                     <thead>
//                         <tr>
//                             <th style={{border: "1px solid black"}}>Iteration</th>
//                             <th style={{border: "1px solid black"}}>XM</th>
//                             <th style={{border: "1px solid black"}}>ERROR</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             Keepvalue.length >0 && Keepvalue.map((item,index)=>{
//                                 return <tr key={index}>
//                                     <td style={{border: "1px solid black"}}>{index}</td>
//                                     <td style={{border: "1px solid black"}}>{item[0]}</td>
//                                     <td style={{border: "1px solid black"}}>{index[0]}</td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
               
//             </div>
           
//     )
// }

// export default Bisection


import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
// import 'chart.js/auto'
import { Line } from "react-chartjs-2";


const Bisection =()=>{
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
                            <th width="30%">XM</th>
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

    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.000001;
        var obj={};
        do
        {
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

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
            document.getElementById("c").innerHTML=ea.toFixed(8);
        }while(ea>e && iter<MAX)
        document.getElementById("xx").innerHTML=xm.toFixed(7);
        
        
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
            label: 'XM',
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
        Calbisection(xlnum,xrnum);
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
                    <h3>Bisection Method</h3>
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

export default Bisection