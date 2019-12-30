import React,{Component} from 'react';
import classes from './Person.css';
import withClass from '../../hoc/withClass';
import Auxillary from '../../hoc/Auxillary';
import PropTypes from 'prop-types';
class Person extends Component {
    static getDerivedStateFromProps(props,state){
        console.log('[Person.js] getDerivedStateFromProps',props);
        return state;
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return null;
      }
      componentDidUpdate(){
        console.log('[Person.js] componentDidUpdate');
      }
    render(){
        console.log('[Person.js] Person rendering...');
        return (
            <Auxillary>
               <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p> 
               <input type="text" onChange={this.props.change} value={this.props.name}/>
            </Auxillary>
        )
    }
}
Person.propTypes={
  click:PropTypes.func,
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired,
  change:PropTypes.func
}
export default withClass(Person,classes.Person);
