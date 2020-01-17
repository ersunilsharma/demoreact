import React, {Component} from 'react';
import Avatarlist from './Avatarlist';
import './Avatar.css';
import 'tachyons';


	class Avatar extends Component{

		constructor(){
			super();
			this.state = {
				name : "Welcome To Avatar World, Please Subscription My Channel"
			}
		}
		 
		
		namechange(){
			this.setState({
				name: "Are You Youtube Channel Successful Subscription"

			})
		}

        render() {
			const avatarlistarry = [
				{
				 id:0,
				 name:"Sunil Sharma",
				 work:"Software Developer"
				},
				{
				 id:1,
				 name:"Amit",
				 work:"Software Developer"
				},
				{
				 id:2,
				 name:"Madan Lal",
				 work:"Software Developer"
				},
				{
				 id:3,
				 name:"Nagee Ram",
				 work:"Software Developer"
				},
				 ]
				
				
				const avatarcardlist = avatarlistarry.map( (avatracard, i) => {
				return <Avatarlist key={i} id={avatarlistarry[i].name} 
								 name={avatarlistarry[i].name} 
								 work={avatarlistarry[i].work} />
				
				}
				
				
				 )
				
					return  <div className="tc"> 
								 <h1> {this.state.name} </h1>
								  {avatarcardlist}
								 <button onClick= { () => this.namechange()}>Subscribe</button>
							</div>
  
		}


	}




export default Avatar;