import React,{Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Auxillary from '../components/hoc/Auxillary';
import AuthContext from '../context/auth-context';
class App extends Component{
  constructor(){
    super();
    console.log('[App.js] constructor');
    this.state={
      persons:[
        {id:'1',name:'Moun',age:23},
        {id:'2',name:'Niki',age:24},
        {id:'3',name:'Sruthi',age:18}
      ],
      showPersons:false,
      showCockpit:true,
      changeCounter:0,
      isAuthenticated:false
    }
  }
 static getDerivedStateFromProps(props,state){
   console.log('[App.js] getDerivedStateFromProps',props);
   return state;
 }
 componentDidMount(){
  console.log('[App.js] componentDidMount');
 }
 shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('[App.js] getSnapshotBeforeUpdate');
  return null;
}
componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

 togglePersonsHandler=()=>{
   this.setState({showPersons:!this.state.showPersons});
 }
 nameChangeHandler=(event,id)=>{
  const personIndex=this.state.persons.findIndex(p=>{
    return p.id===id;
    });
  const person={...this.state.persons[personIndex]};
  person.name=event.target.value;
  const persons=[...this.state.persons];
  persons[personIndex]=person;

  this.setState((prevState)=>{
    return {
      persons:persons,
      changeCounter:prevState.changeCounter+1
    }
  })
}
 removePersonsHandler=(id)=>{
  const personIndex=this.state.persons.findIndex(p=>p.id===id);
  const persons=[...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
 }
 loginHandler=()=>{
  this.setState({isAuthenticated:true});
 }
  render(){
    console.log('[App.js] render');
    let persons=null;
    if(this.state.showPersons){
      persons=<Persons 
      persons={this.state.persons}
      change={this.nameChangeHandler}
      click={this.removePersonsHandler}/>
    }
    return (
      <Auxillary>
        <button onClick={()=>{this.setState({showCockpit:!this.state.showCockpit})}}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticate:this.state.isAuthenticated,login:this.loginHandler}}>
        {
          this.state.showCockpit ? <Cockpit 
          data={this.props.data}
          personsLength={this.state.persons.length} 
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}/> : null
        }
        {persons}
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App,classes.App);
