
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
import ApexChart from "./chart";
var formstyle = { marginLeft: "auto", marginRight: "auto" };
var Xm = [];
var Xl = [];
var Xr = [];
var Xloop = [];
class Bisection1 extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  myFunc() {
    
    const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
    var equation = document.getElementById("equation").value;
    var inputl = document.getElementById("numberl").value;
    var inputr = document.getElementById("numberr").value;
    if (equation !== "" && inputl !== "" && inputr !== "") {
        
      const root = inputr;
      const Rootof = inputl;
      var xl = root;
      var xr = Rootof;
      var xm = (xl + xr) / 2;
      var countloop = 0;
      var x;
      do {
        xm = (xl + xr) / 2;
        x=xm;
        var fXm = eval(equation);
        x=xr;
        var fXr = eval(equation);

        if (fXm*fXr > 0) {
          xr = xm;
        } else {
          xl = xm;
        }
        x=xm;
      }while (Math.abs(eval(equation)) >= 0.000001)
        Xm.push(xm);
        Xl.push(xl);
        Xr.push(xr);
        Xloop.push(countloop++);
      showchart.render(
        <div>
          <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
        </div>
      );

      Xm = [];
      Xl = [];
      Xr = [];
      Xloop = [];
    } else {
      document.getElementById("showans").innerHTML = "";
      document.getElementById("showsolt").innerHTML =
        "กรุณาป้อนข้อมูลให้ถูกต้อง";
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>
            <Form style={{ padding: "20px" }}>
              <fieldset>
                <Form.Group className="mb-3">
                <h3>Bisection Method</h3>
                <br></br>
                  <div style={{ display: "flex", width: "100%", margin: "0 auto", }}>
                    <Form.Control id="equation" type="text" placeholder="Equation" style={{width:"20%",margin:"0 auto"}}/>
                    <Form.Control id="numberl" type="number" step="1" placeholder="InputL"style={{width:"20%",margin:"0 auto"}}/>
                    <Form.Control id="numberr" type="number" step="1" placeholder="InputR"style={{width:"20%",margin:"0 auto"}}/>
                  </div>
                </Form.Group>
                <div id="showans" className="ansStyles"></div>
                <button type="button" class="btn btn-outline-primary" onClick={this.myFunc} >
                  Calculate
                </button>
              </fieldset>
            </Form>
          
          <div>
            <div id="showsolt" class="tablestyle">
              <table class="tablestyle"></table>
            </div>
          </div>
        </div>
        
        <div id="showchart">
        <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
        </div>
      </div>
    );
  }
}

export default Bisection1;