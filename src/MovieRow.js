import React from 'react'

class MovieRow extends React.Component{
    viewMovie(){
        const url="https://www.themoviedb.org/movie/" +this.props.movie.id
        window.location.href=url
      }
    render(){
      
        return  <table key={this.props.index}>
        <tbody>
        <tr>
          <td>
              <img style={{width:98}} alt="moviesimage" src={this.props.movie.poster_src}/>
          </td>
          <td>
          <h3>{this.props.movie.original_title}</h3>
          <p>{this.props.movie.overview}</p>
          <input type="button" onClick={this.viewMovie.bind(this)} value="view"/>
          </td>
        </tr>
        </tbody>
      </table>
    }
}
export default MovieRow