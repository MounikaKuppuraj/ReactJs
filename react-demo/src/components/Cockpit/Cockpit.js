import React,{useEffect} from 'react';
import classes from './Cockpit.css';
const Cockpit = (props) => {
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
      alert('hai hello');
    },1000);
    return ()=>{
      console.log('[Cockpit.js] willUnmount');
    }
  },[]);
  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect');
    return ()=>{
      console.log('[Cockpit.js] 2nd willUnmount');
    }
  });
    let btnCls='';
    const assignClass=[];
    if(props.persons.length<=2){
      assignClass.push(classes.red);
    }
    if(props.persons.length<=1){
      assignClass.push(classes.bold);
    }
    if(props.showPersons){
        btnCls=classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
        <h1>{props.data}</h1>
        <p className={assignClass.join(' ')}>This is working fine...</p>
        <button className={btnCls}
        onClick={props.toggle}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;
