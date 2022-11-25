// import {React,Component} from "react";
// import { Button, Form } from "react-bootstrap";
// import * as ReactDOM from "react-dom";

// class falsepo extends Component{
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
//                 <h3>Cramer rule Method</h3>
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

// export default falsepo;

import { React, Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import * as math from 'mathjs'

class cramer extends Component {
  constructor() {
    super()
    console.log('constructor called')
  }
  componentDidMount() {
    console.log('componentDidMount called')
  }
  getValue() {
    const Det = document.getElementById('showdet')
    Det.innerHTML = ''

    const Answer = document.getElementById('showanswer')
    Answer.innerHTML = ''

    const Matricsinput = document.getElementById('Matricsinput')
    let matrix = []
    let matanswer = []

    let row = []
    Matricsinput.childNodes.forEach((child) => {
      if (child.id && child.id.includes('input')) {
        const v = child.value
        if (v == '') {
          matrix = []
          matanswer = []
          console.log(matanswer)
        }

        if (child.id.includes('inputans')) {
          matanswer.push(parseFloat(v))
        } else {
          row.push(parseFloat(v))
        }
      } 
      else if (child.nodeName == 'BR') {
        matrix.push(row)
        row = []
      }
    })
    
    //Check input
    if (matrix || matanswer == []) {
        // document.getElementById('nodet').innerHTML = 
      Det.innerHTML = "<h4><Font color=red>Please input all value</h4>"
    }

    const det = math.det(matrix)
    // document.getElementById('showdet').innerHTML = det
    Det.innerHTML = '<h4>Determinant = ' + det + '</h4>'

    if (det == 0) {
      Answer.innerHTML = "<h4>Cannot apply Cramer's rule to this matrix</h4>"
    }

    let ans = []
    for (let i = 0; i < matrix.length; i++) {
      let temp = matrix.map((row) => [...row])
      for (let j = 0; j < matrix.length; j++) {
        temp[j][i] = matanswer[j]
      }

      let tempAns = math.det(temp) / det
      ans.push(tempAns)
    }
    console.log(ans)
    // for (let i = 0; i < matrix.length; i++) {
    //     Answer.innerHTML = '<h4>X<sub> = ' + ans[i] + '</h4>'
    //   }
    // document.getElementById('showanswer').innerHTML = ans


    const AnswerTable = document.createElement('table')
    AnswerTable.setAttribute('style', 'width: 40%')
    AnswerTable.setAttribute('align', 'center')
    const AnswerTableBody = document.createElement('tbody')
    const AnswerTableHeader = document.createElement('tr')

    for (let i = 0; i < matrix.length; i++) {
      const AnswerTableHeaderData = document.createElement('tr')
      AnswerTableHeaderData.innerHTML = '<h4>X <sub>' + (i + 1) + '</sub>' +' = '+ans[i].toPrecision(7) +'</h4>'
      AnswerTableHeaderData.setAttribute('align', 'left')
      AnswerTableHeader.appendChild(AnswerTableHeaderData)

    }

    AnswerTableBody.appendChild(AnswerTableHeader)
    AnswerTable.appendChild(AnswerTableBody)

    Answer.appendChild(AnswerTable)
  }

  createinputMatrix = () => {
    var Size = document.getElementById('Matsize').value
    var MatString = ' '
    for (var i = 0; i < Size; i++) {
      for (var j = 0; j < Size; j++) {
        MatString +=
          "<input id='input" +i +'-' +j +
          "' type='number' step='1' placeholder='Number' style='width:6%;margin:0 auto;'/>"
      }
      MatString +=
        "<input id='inputans" +i +'-' +j + "' type='number' step='1' placeholder='Ans' style='width:6%;margin:0 auto;'/><br>"
    }
    console.log(MatString)
    document.getElementById('Matricsinput').innerHTML = MatString
  }


  render() {
    console.log('render called')
    return (
      <div>
        <br></br>
        <h3>Cramer's rule Method</h3>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Input Matrix size</Form.Label>
            <div>
              <Form.Control
                id='Matsize'
                type='number'
                step='1'
                placeholder='Number'
                style={{ width: '10%', margin: '0 auto' }}
                onChange={this.createinputMatrix}
              ></Form.Control>
              
            </div>
          </Form.Group>
        </Form>
        <div id='Matricsinput'></div>
        <br></br>
        <Button onClick={this.getValue}>Calculate</Button>
        <br></br>
        <br></br>
        <div id='showdet'></div>
        {/* <div id='nodet'></div> */}
        <div style={{background:'lightSkyblue',width:"30%",margin:"0 auto"}} id='showanswer'></div>
        
      </div>
    )
  }
}

export default cramer
// import { create, all } from 'mathjs'
// import { Button, Container, Form, Table } from "react-bootstrap";
// import React, {useState} from 'react'


// function Cramer() {
//   const [size, setsize] = useState('')
//   const [matrix, setmatrix] = useState('')
//   const config = { }
//   const math = create(all, config)

//   const submit = e =>{
//     e.preventDefault()
//     genarate()
//   }

//   const cal = e =>{
//     e.preventDefault()
//     let calmatrix = []
//     let tempb = []

//     //setmatrix a&b
//     for(let i=0 ; i<size ; i++){
//       calmatrix[i] = []
//       tempb.push(Number(document.getElementById('rowb'+i).value))
     
//       for(let j=0 ; j<size ; j++){
       
//         calmatrix[i].push(Number(document.getElementById('column'+i+'row'+j).value))
//       }
//     }

//     //calculator
//     let detref = math.det(calmatrix)

//     let det = []
//     let temparr = calmatrix.map(a=>a.slice()) //line of deep clone array
//     //.map like for loop 
//     //slice delete value in array return array after delete 
//     for(let i=0 ; i<size ; i++){
//       calmatrix = temparr.map(a=>a.slice()) 
//       for(let j=0 ; j<size ; j++){
        
//         calmatrix[j][i] = tempb[j]
//       }
//       det[i] = math.det(calmatrix)/detref
//       //console.log(calmatrix)
//     }

//     //output on page
//     let tempans = []
//     for(let i=0 ; i<det.length ; i++){
//       tempans.push(<div>x{i+1}={det[i].toFixed(2)}</div>)
//     }
//     //console.log(math.det(calmatrix))
//     //console.log(calmatrix)
//     setmatrix({a:matrix.a,b:matrix.b,c:tempans})
//   }

//   //create input value matrix
//   function genarate(){
//       let array = [] //array for create input feilds matrixa
//       let arrayb = [] //array for create input feilds matrixb       
//       let tempb = [] //template input feild for matrix b
//       for(let i=0 ; i<size ; i++){
//         array[i] = [] //render jsx arr
//         tempb.push(
//           <input
//           id={"rowb"+i}
//           />
//         )
//         let temp = [] //template input feild for matrix a
//         for(let j=0 ; j<size ; j++){
//           let id = "column"+i+"row"+j
//           temp.push(
//           <input
//           id={id}
//           />
//           )  
//         }
//         array[i].push(<div class='matrix a'>{temp}</div>)
        
//       }
//       arrayb.push(<div class='matrix b'>{tempb}</div>)

//       //setmatrix hook
//       setmatrix({a:array,b:arrayb})
//   }

//   return (
//             <Container>

//                 <div className='cramerrule'>
//                     <br></br>
//                 <h3>CramerRule</h3>
//                 <Form.Group className="mb-3">
                    
                    
//                     <Form.Label>Input Matrix's size</Form.Label><br></br>
//                     <input name="size" type="size" value={size} onChange={event => setsize(event.target.value)} style={{width:"20%", margin:"0 auto"}}></input>
                    

                    
//                  </Form.Group>
                    
//                 <Button variant="primary" onClick={submit}>
//                     Create
//                 </Button>
//                 <br/><br/>
//                 <div class='matrix f'>
//                     <div class='matrixw'>
//                     {
//                         matrix.a 
//                     }
//                     </div>
//                     <div class='matrixw'>
//                     {
//                         matrix.b
//                     }
//                     </div>
//                 </div><br/>
//                 {/* <button onClick={cal}>Calculate</button><br/><br/> */}
//                 <Button variant="primary" onClick={cal}>
//                     Calculate
//                 </Button>
//                 <br></br>
//                 <div>
//                     {
//                         matrix.c
//                     }
//                 </div>
//                 </div>
//             </Container>
//   )
// }

// export default Cramer

// import { create, all } from 'mathjs'
// import React, {useState} from 'react'


// function CramerRule() {
//   const [size, setsize] = useState('')
//   const [matrix, setmatrix] = useState('')
//   const config = { }
//   const math = create(all, config)

//   const submit = e =>{
//     e.preventDefault()
//     genarate()
//   }

//   const cal = e =>{
//     e.preventDefault()
//     let calmatrix = []
//     let tempb = []

//     //setmatrix a&b
//     for(let i=0 ; i<size ; i++){
//       calmatrix[i] = []
//       tempb.push(Number(document.getElementById('rowb'+i).value))
//       //console.log(Number(document.getElementById('rowb'+i).value))
//       for(let j=0 ; j<size ; j++){
//         //console.log(Number(document.getElementById('column'+j+'row'+j).value))
//         calmatrix[i].push(Number(document.getElementById('column'+i+'row'+j).value))
//       }
//     }

//     //calculator
//     let detref = math.det(calmatrix)

//     let det = []
//     let temparr = calmatrix.map(a=>a.slice()) //line of deep clone array
//     //.map like for loop 
//     //slice delete value in array return array after delete 
//     for(let i=0 ; i<size ; i++){
//       calmatrix = temparr.map(a=>a.slice()) 
//       for(let j=0 ; j<size ; j++){
        
//         calmatrix[j][i] = tempb[j]
//       }
//       det[i] = math.det(calmatrix)/detref
//       //console.log(calmatrix)
//     }

//     //output on page
//     let tempans = []
//     for(let i=0 ; i<det.length ; i++){
//       tempans.push(<div>x{i+1}={det[i].toFixed(2)}</div>)
//     }
//     //console.log(math.det(calmatrix))
//     //console.log(calmatrix)
//     setmatrix({a:matrix.a,b:matrix.b,c:tempans})
//   }

//   //create input value matrix
//   function genarate(){
//       let array = [] //array for create input feilds matrixa
//       let arrayb = [] //array for create input feilds matrixb       
//       let tempb = [] //template input feild for matrix b
//       for(let i=0 ; i<size ; i++){
//         array[i] = [] //render jsx arr
//         tempb.push(
//           <input
//           id={"rowb"+i}
//           />
//         )
//         let temp = [] //template input feild for matrix a
//         for(let j=0 ; j<size ; j++){
//           let id = "column"+i+"row"+j
//           temp.push(
//           <input
//           id={id}
//           />
//           )  
//         }
//         array[i].push(<div class='matrix a'>{temp}</div>)
        
//       }
//       arrayb.push(<div class='matrix b'>{tempb}</div>)

//       //setmatrix hook
//       setmatrix({a:array,b:arrayb})
//   }

//   return (
//     <div className='cramerrule'>
//       <h1>CramerRule</h1>
//       <form>
//         <label for="size">Enter size is here {'->'}</label>
//         <input 
//         name="size" 
//         type="size" 
//         onChange={event => setsize(event.target.value)} 
//         value={size} /><br/><br/>
//         <button onClick={submit}>create</button><br/><br/>
//       </form><br/><br/>
//       <div class='matrix f'>
//         <div class='matrixw'>
//         {
//           matrix.a 
//         }
//         </div>
//         <div class='matrixw'>
//         {
//           matrix.b
//         }
//         </div>
//       </div><br/>
//       <button onClick={cal}>Cal</button><br/><br/>
//       <div>
//         {
//           matrix.c
//         }
//       </div>
//     </div>
//   )
// }

// export default CramerRule