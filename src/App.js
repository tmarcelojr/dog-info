import { Component } from 'react';
// import ReactDom from 'react-dom'
import './App.css';
import Dogcomponent from './Dogcomponent.js';
import './Dogcomponent.css';
import './Imagecomponent.js';
import Dogname from './Dogname.js'
import Nav from './Nav.js'
// import { Redirect } from 'react-router-dom'




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dogs: [],
      Loading: true,
      oneDog: ""
    }
  }

  
  componentDidMount() {
    fetch("https://dogs-api-info.herokuapp.com/dogs")
      .then(response => response.json())
      .then(data => {
        this.setState({
          dogs: data,
          currentPage: "search",
          Loading: false

        })
      })
  }
  getDog = (e, dogName) => {
    const dogInput = dogName
    const dog = this.state.dogs.filter(dog => {
      return dog.name.toLowerCase() === dogInput.toLowerCase()
    })
    this.setState({oneDog: dog})
    console.log(dog);
  }

  handleBreed = (e) => {
    this.setState({ value: e.target.value })
  }

  // newPage = (page) => this.setState({currentPage: page})

  // handleCurrentPage = (dogs) => {
  //   if(this.state.currentPage === "all-dogs") {
  //     return <Dogname dogs={this.state.dogs}/>
  //   //  <Dogname <div {this.state.dog.push('/all-dogs')}> All Dogs </div> />
  //   }
  // }


  render() {
  
    console.log(this.state.dogs);
    return (
      <div className="App">
        <header className="header">
          WELCOME TO THE COMPLETE GUIDE TO DOGS
          FROM AROUND THE WORLD!!!
        </header>
        {/* <Dogname dogs={this.state.dogs}/> */}
        <button className="submit" onClick={(e) => this.getDog(e, this.state.value)}>Click to get dog info</button>
        <div className="search-container">
          <input className="search" type="text" placeholder="search breed" value={this.state.value} onChange={this.handleBreed}></input>
        </div>
        {
          this.state.oneDog.length !== 0 ? <Dogcomponent dog={this.state.oneDog} /> : null
        }
       {this.handleCurrentPage(this.state)}
      <div>
        {/* <Nav redirect = {this.newPage} /> */}
         
     </div> 
      </div>
    );
  }
}

export default App;
