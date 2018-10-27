import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
      this.state={}
//     const movies=[{id: 0, poster_src: "",tittle:"Avenger",description:"av4"},
//       {id: 1,poster_src: "",tittle:"Avenger3",description:"av3"}
//     ]
     
// var movieRows=[]
//     movies.forEach((movie)=>{
//       console.log(movie.id)
//       console.log(movie.tittle)
//       console.log(movie.description)

//       const movieInfo=<MovieRow movie={movie}/>
//       movieRows.push(movieInfo)
//     })

//     this.state={rows:movieRows}

this.performNetworkCall("spy")
  }

  performNetworkCall(searchTerm){
      console.log("Performing Netwok activity")
      const url_string="https://api.themoviedb.org/3/search/movie?api_key=3e7bf532ba46ae68f628bd7b8e2dcd51&language=en-US&page=1&include_adult=false&query="+searchTerm
      $.ajax({
          url: url_string,
          success: (searchResults)=>{
            console.log("fetched data succesully")
         //   console.log(searchResults)
            const results=searchResults.results
           // console.log(results)
            var movieRows=[]
             results.forEach(function(movie,index) {
               movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
             // console.log(index)
              const movieRow=<MovieRow  key={index} movie={movie}/>
              movieRows.push(movieRow)
           })
         
           this.setState({rows:movieRows})

          },
          error:(xhr,status,err)=>{
            console.error("errrordfdmfkdnjbd")
          }
      })
  }
  changeHandler(event){
    console.log(event.target.value)
    const searchTerm=event.target.value
    this.performNetworkCall(searchTerm)
  }
  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="favicon.ico" alt="description"/>
              </td>
              <td width="8">
                
              </td>
              <td>
                <h2>MoviePedia</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <input style={
          {
            fontSize:18,
            display:'block',
            width:"96.5%",
            paddingTop:5,
            paddingBottom:5,
            paddingLeft:20
            
          }
        }
        onChange={this.changeHandler.bind(this)}
        placeholder="Enter a Movie name"></input>

       {this.state.rows} 
      </div>
    );
  }
}

export default App;
