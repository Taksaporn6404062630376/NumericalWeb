import {React,Component} from "react";
import { Button, Form } from "react-bootstrap";
import * as ReactDOM from "react-dom";

class Home extends Component{
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
                <h3>home</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            input number
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

export default Home;

// import * as ReactDOM from "react-dom";
// import ApexChart from "./chart";

// var Xm=[];
// var Xl=[];
// var Xr=[];
// var Xloop=[];

// class Bisection extends Component{
    
//     constructor(){
//         super();
//         console.log("constructor called");

//     }
//     componentDidMount(){
//         console.log("componentDidMount called");
//     }
    
//     getValue(){
//         const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
//         // const [Keepvalue,setKeepvalue] = useState([]);
//         // var equation = document.getElementById("equation").value;
//         // var xl = document.getElementById("InputL").value;
//         // var xr = document.getElementById("InputR").value;
//         // // var TempArray =[];
//         // if(xl !== "" && equation !== "" && xr !== ""){

//         //     var Equation = equation;
//         //     var L=xl;
//         //     var R=xr;
//         //     var x;
//         //     var m= (Number(L)+Number(R))/2;
//         //     var mold;

//         //     x=m;
//         //     var fXm = eval(equation);
//         //     x=R;
//         //     var fXr = eval(equation);

//         //     if(Number(fXm)*Number(fXr) >0){
//         //         R=m;
//         //     }
//         //     else{
//         //         L=m;
//         //     }
//         //     do{
//         //         m= (Number(L)+Number(R))/2;

//         //         x=m;
//         //         var fXm = eval(equation);
//         //         x=R;
//         //         var fXr = eval(equation);

//         //         if(Number(fXm) *Number(fXr)>0){
//         //             R=m;
//         //         }
//         //         if(Number(fXm) *Number(fXr)<0){
//         //             L=m;
//         //         }
//         //         mold = m;

//         //         x=m;
//         //     }while(Math.abs(eval(equation)) >0.0000001 );

//         //     document.getElementById("Showm").innerHTML=m;
//         //     document.getElementById("ShowM").innerHTML=m;

//         // }
//     var equation = document.getElementById("equation").value;
//     var inputnum = document.getElementById("number").value;
//     var inputroot = document.getElementById("rootofnumber").value;
//     if (inputnum !== "" && inputroot !== "") {
//       const Rootof = inputnum;
//       const root = inputroot;
//       var xl = 0;
//       var xr = Rootof;
//       var xm = (xl + xr) / 2;
//       var countloop = 0;
//       while (Math.abs(Math.pow(xm, root) - Rootof) >= 0.000001) {
//         Xm.push(xm);
//         Xl.push(xl);
//         Xr.push(xr);
//         Xloop.push(countloop++);
//         xm = (xl + xr) / 2;
        
//         if (Math.pow(xm, root) - Rootof > 0) {
//           xr = xm;
//         } else {
//           xl = xm;
//         }
//       }
//     //   trloop += "</tr">;
//     //   trXl += "</tr">;
//     //   trXr += "</tr">;
//     //   trXm += "</tr">;
//     //   trCheck += "</tr">;
//     //   returnsol += trloop+ trXl+ trXm+ trCheck+ trSet+ "</table></div>";
//     //   returnans += "root" + root + "of" + Rootof+ "=" +xm;
//     //   document.getElementById("chart").innerHTML = returnsol;
//     //   document.getElementById("chart").innerHTML = returnans;

//       showchart.render(
//         <div>
//           <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
//         </div>
//       );
//       // document.getElementById("chart").innerHTML = "";
//       Xm = [];
//       Xl = [];
//       Xr = [];
//       Xloop = [];
//     } else {
//       document.getElementById("showans").innerHTML = "";
//       document.getElementById("showsolt").innerHTML =
//         "กรุณาป้อนข้อมูลให้ถูกต้อง";
//     }

//     }
    
//     render(){
        
//     console.log("render");
//     return (
//       <div>
//         <div>
//           <div>
//             <Form style={{ padding: "20px" }}>
//               <fieldset>
//                 <Form.Group className="mb-3">

//                   <div
//                     style={{
//                       display: "flex", width: "100%", margin: "0 auto",
//                     }}
//                   >
//                     <Form.Control id="equation" type="text" placeholder="Equation" style={{width:"20%",margin:"0 auto"}}/>
//                     <Form.Control id="number" type="number" step="1" placeholder="Number"style={{width:"20%",margin:"0 auto"}}/>
//                     <Form.Control id="rootofnumber" type="number" step="1" placeholder="Root of number"style={{width:"20%",margin:"0 auto"}}/>
//                   </div>
//                 </Form.Group>
//                 <div id="showans" className="ansStyles"></div>
//                 <button type="button" onClick={this.myFunc}
//                 >
//                   Submit form
//                 </button>
//               </fieldset>
//             </Form>
//           </div>
//           <div>
//             <div id="showsolt" class="tablestyle">
//               <table class="tablestyle"></table>
//             </div>
//           </div>
//         </div>
//         <div id="showchart">
//         <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
//         </div>
//       </div>
//     );
//     //     console.log("render called")
//     //     return(
//     //         <div>
//     //             <h3>Bisection Method</h3>
//     //             <br></br>
//     //             <Form>
//     //                 <Form.Group className="mb-3">
//     //                     <div>
//     //                         <Form.Group classname="mb-3" >
//     //                             <Form.Label >Equation: </Form.Label>
//     //                             <Form.Control id="equation" type="text" placeholder="input Equation" style={{width:"20%",margin:"0 auto"}}></Form.Control>
//     //                             <Form.Label >XL: </Form.Label>
//     //                             <Form.Control id="InputL" type="number" placeholder="input L" style={{width:"20%",margin:"0 auto"}}></Form.Control>
//     //                             <Form.Label >XR: </Form.Label>
//     //                             <Form.Control id="InputR" type="number" placeholder="input R" style={{width:"20%",margin:"0 auto"}}></Form.Control>
//     //                         </Form.Group>
                            
//     //                     </div>
//     //                     <br></br>
//     //                     <Button onClick={this.getValue}>
//     //                         Calculate
//     //                     </Button>
//     //                 </Form.Group>
//     //             </Form>
                // {/* <table class='table' style={{border: "1px solid black", textAlign: "center", justifyContent: "center"}}>
                //     <thead class="table-dark">
                //         <tr>
                //             <th style={{border: "1px solid black"}}>
                //                 Iteration
                //             </th>
                //             <th style={{border: "1px solid black"}}>
                //                 XM
                //             </th>
                //             <th style={{border: "1px solid black"}}>
                //                 ERROR
                //             </th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         {
                //             Keepvalue.length >0 && Keepvalue.map((item,index)=>{
                //                 return <tr key={index}>
                //                     <td style={{border: "1px solid black"}}>{index}</td>
                //                     <td style={{border: "1px solid black"}}>{item[0]}</td>
                //                     <td style={{border: "1px solid black"}}>{index[0]}</td>
                //                 </tr>
                //             })
                //         }
                //     </tbody>
                // </table> */}

//     //             {/* <div id="showslot" class="tablestyle">
//     //                 <table class="tablestyle"></table>
//     //             </div> */}
//     //             <div id="showchart">
//     //                 <ApexChart data={{xm:Xm, xl:Xl, xr:Xr, xloop:Xloop}}/>
//     //             </div>

//     //             <div>
//     //                 <h>ans= </h>
//     //                 <h style={{color:'green'}} id="Showm"> </h>
//     //             </div>
//     //             <div id="showx"></div>
//     //             <br></br>
                
//     //         </div>

//     //     )
//     }

// }

// export default Bisection;
