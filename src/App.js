import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import TodoInput from './components/TodoInput'

class App extends Component {

  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){

    fetch('https://facebook.github.io/react-native/movies.json').
    then((Response)=>Response.json()).
    then((findresponse) =>
    {
      console.log(findresponse);

      this.setState({
        data: findresponse.movies
      })
    })

    console.log("call")

  }

   componentWillUnmount() {
  console.log("clear")
  }

  


  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">          
          <Header />
          <TodoInput />
        </div>
        <div className="todo-wrapper"> 
            <div>
              {
                this.state.data.map((movieDetails) => {
                  return <div> {movieDetails.title} {movieDetails.releaseYear}</div>
                })
              }
          </div>
        </div>       
      </div>
    );
  }
}

export default App;
