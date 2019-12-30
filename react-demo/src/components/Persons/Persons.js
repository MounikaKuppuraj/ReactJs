import React,{Component} from 'react'
import Person from './Person/Person';
class Persons extends Component{
  static getDerivedStateFromProps(props,state){
    console.log('[Persons.js] getDerivedStateFromProps',props);
    return state;
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  render(){
    console.log('[Persons.js] Persons rendering...');
    return this.props.persons.map(person=><Person key={person.id} 
              name={person.name} 
              age={person.age}
              change={(event)=>this.props.change(event,person.id)}
              click={()=>this.props.click(person.id)}/>
    );
  }
  }
export default Persons;
