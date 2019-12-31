import React,{useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {
  const toggleRef=useRef(null);
  const authContext=useContext(AuthContext);
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    // setTimeout(()=>{
    //   alert('hai hello');
    // },1000);
    toggleRef.current.click();
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
    if(props.personsLength<=2){
      assignClass.push(classes.red);
    }
    if(props.personsLength<=1){
      assignClass.push(classes.bold);
    }
    if(props.showPersons){
        btnCls=classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
        <h1>{props.data}</h1>
        <p className={assignClass.join(' ')}>This is working fine...</p>
        <button 
        className={btnCls}
        ref={toggleRef}
        onClick={props.toggle}>Toggle Persons</button>
        <p>Hello</p>
        <button onClick={authContext.login}>Log in</button>
        </div>
    )
}

export default React.memo(Cockpit);
