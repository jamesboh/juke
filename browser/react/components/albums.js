'use strict';

import React, { Component } from 'react';
import Album from './album';

class Albums extends Component {

	render() {
		const albumElements = this.props.albums.map(album => {
			return (
				<Album 
					key={album.id} 
					album={album} 
					handleClick={this.props.handleClick}
				/>
			)
		})
		return (
		  <div className="row">
		  	{albumElements}
		  </div>
		)
	}
}

export default Albums;