import React,{Component} from 'react';
import {robots} from './robots'

import CardList from './CardList';
import SearchBoxer from './Searchboxer';
import Scroll from './Scroll';


class App extends Component{
	constructor()
	{
	 super();
	this.state={
	
	robots:[],
	searchfield:''
               
               }
	
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>{return response.json();})
		.then(users=>{this.setState({robots:users})});
			
		

	}
	onSearchChange=(event)=>
	{
		this.setState({searchfield: event.target.value});
		/*onst filteredRobots=this.state.robots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
		console.log(filteredRobots);*/
	}
   render()
   { const filteredRobots=this.state.robots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
		console.log(filteredRobots);
		if(this.state.robots.length===0)
		{
			return <h1>Loading....</h1>
		}
		else
		{
   	return (
	<div className='tc'>
     <h1>RoboFriends</h1>
     <SearchBoxer searchChange={this.onSearchChange} />
    <Scroll>
	<CardList robots={filteredRobots}/>
	</Scroll>
	</div>
	);
   }
}

};
export default App;