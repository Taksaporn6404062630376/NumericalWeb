import { useState } from "react";
import {evaluate} from "mathjs";
import { Container,Form,Button,Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";
const Taksaporn=()=>{
    const[X,setX] = useState(0)
    const[Equation,setEquation] = useState("x^4")
    const[html,setHtml] = useState(null)

    const inputX=(event)=>{
        setX(event.target.value)
    }
    const inputEquation=(event) =>{
        setEquation(event.target.value)
    }
    const Calonepoint=(xo)=>{
        var xo,xn,scope
        var iter=0
        var max = 6
        var obj={}

        do{
            scope={
                x:xo
            }
            xn=evaluate(Equation,scope)
            iter++
            obj={
                Iteration:iter,
                Xo:xo,
                Xn:xn
            }
            xo++
            data.push(obj)
        }while(max>iter)
        // document.getElementById("printans").innerHTML=xo
        // document.getElementById("printeq").innerHTML=xn
    }

    const calculateRoot=()=>{
        var xnum = parseFloat(X)
        Calonepoint(xnum)
        setHtml(print())
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
                <Table striped bordered variant="primary">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">X</th>
                            <th width="30%">X^4</th>
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
                <div style={{width:"80%",height:"50%",margin:"0 auto"}}>
                    <Line
                data={state}
                options={{
                title:{display:true},
                }}
                />
                </div>
                
            </Container>
            
        );
    }
    const state = {
        labels: valueXo,
        datasets: [
          {
            label: 'X',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXo
          },
          {
            label: 'X^4',
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
            <h3>Taksaporn</h3>
                <Form.Group className="mb-3">
                    <Form.Label>X</Form.Label>
                    <input type="number" id="x" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Form.Label>Equation</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Button onClick={calculateRoot}>Button</Button>
                </Form.Group>
                <h id="printans"></h>
                <br></br>
                <h id="printeq"></h>
            </Form>
            <Container>{html}</Container>
        </Container>
    )


}
export default Taksaporn