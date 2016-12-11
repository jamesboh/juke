'use strict';

import React, { Component } from 'react';

class Songs extends Component {
	render() {
		const songs = this.props.songs;

		return (
			<tbody>
			{ songs.map( song => (
				<tr key={song.id}>
				  <td>
				    <button className="btn btn-default btn-xs" onClick={ () => this.props.play(song.url) }>
				      <span className="glyphicon glyphicon-play"></span>
				    </button>
				  </td>
				  <td>{song.name}</td>
				  <td>{song.artists.map( artist => artist.name ).join(', ')}</td>
				  <td>{song.genre}</td>
				</tr>
				) 
			) }
			</tbody>
		)
	}
}

export default Songs;