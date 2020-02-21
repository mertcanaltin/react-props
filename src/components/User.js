import React, { Component } from 'react'
import propTypes from 'prop-types'

class User extends Component {
    state = {
        isVisible : true
    }
     static defaultProps = {
        name :"Bilgi Yok",

        departman : "Bilgi Yok",
        maas : "bilgi yok"
     }
     static Gizem = {
       izingun:"cumartesi",
       calisgun:"pazar"
     }


onClickEvent = (number,e) => {
  // bin func  console.log(this);

  console.log(number);
}

   //  constructor(props){
     //    super(props)
    //   this.onClickEvent = this.onClickEvent.bind(this);
    //}

   // onClickEvent(e){
           // console.log(e.target);
            //console.log("test");
 //console.log(this);




   
      //  constructor(props){
     //   super(props);
           // this.state={
            //   isVisible : false
           // }
       // }


        render() {
        const {name,departman,maas,izingun,name2} = this.props;
        const {isVisible} = this.state;
        return (
          
 
   
  

            <div className="col-md-8 mb-4">
             <div className="card">
                 <div className= "card-header d-flex justify-content-between">
        <h4 className="d-inline" onClick= {this.onClickEvent.bind(this,34)}>{name}</h4>
        <input type="text" name="name2"onClick= {this.onClickEvent.bind(this,{name},[0])} />
        <i className="fa fa-trash" style ={{cursor:"pointer"}}></i>
             </div>
           { 
               isVisible ?
               <div className="card-body">
                 <p className="card-text">Maas : {maas}</p>
                 <p className="card-text">Departman : {departman}</p>
                <p className="card-text">İzin Günü : {izingun}</p>

                 </div> : null
           }
            </div>
            </div>
            
        )
    }
}
export default User;

