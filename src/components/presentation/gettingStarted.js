import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import * as ActionTypes from '../../Redux/Actions/ActionTypes';
import { connect } from 'react-redux';
import  * as documentActions from '../../Redux/Actions/DocumentActions'
import { useHistory } from "react-router-dom";
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";

function GettingStarted(props) {

    /* use history is propertly of router which maintain the location in a stack helps in changing route without reload*/
     let history = useHistory();
     const onChange =(skinCd) => {

        if(props.document.id){ // not the first time calling 
             props.updateDocument(skinCd);        
        }
        else{
             props.setDocument(skinCd); 
        }
        history.push('/contact');
      }

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == props.document.skinCd? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}

const mapStateToProps=(state)=>{

    return {

        document: state.document,
    }

}

const mapDispatchToProps=(dispatch)=>{


    return{

        setDocument : (skinCdId)=> dispatch(documentActions.setSkinCd(skinCdId)), // callback to set onaction call
        updateDocument:(skinCdId)=> dispatch(documentActions.updateSkinCd(skinCdId))

    }


}
  


export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);

