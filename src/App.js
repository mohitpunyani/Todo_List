import React, { Component } from 'react';
import Plan from './Plan';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
class App extends Component{
  state = {
    items : [],
    text: ""
  }
  handlechange = e =>{
    this.setState({text: e.target.value})
  }

  handleAdd= e =>{
    if(this.state.text!==" "){
      const items = [...this.state.items,this.state.text];
      this.setState({items :items,text:""})
    }
  }
  
  handleDelete = id =>{ 
    // console.log(deleted)
    const old_items= [...this.state.items]
    console.log("olditems", old_items)
    const items=old_items.filter((element,i)=>{
      return i!==id;
    })
    console.log("new-items",items)
    this.setState({items:items})
  }
  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow-lg">
            <h2 className="text-center text-white">Today's plan</h2>
            <div className='row'>
              <div className='col-sm-9'>
              <input  type="text"  className="form-control py-1" 
              placeholder="Write plan here" value={this.state.text} onChange=
              {this.handlechange} />
              </div>
              <div className='col-2'>
              <button type="button" onClick={this.handleAdd} className="btn btn-success px-5">Add</button>
                </div>
              </div>
              <div className='container-fluid'>
              {/* <div className='row text-white bg-red m-5'> */}
              <ul className='row list-unstyled m-5'>
              {
                this.state.items.map((value, i) => {
                  return (
                    <Plan key={i} id={i} value={value}
                      sendData={this.handleDelete}
                    />
    
                )})
              }
              {/* {console.log(this.state.items)} */}
              </ul>
              {/* </div> */}
              </div>

          </div>
        </div>
      </div>

      )
}
}
export default App;
