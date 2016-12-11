'use strict';

import React, { Component } from 'react';

class Album extends Component {
	render() {
		const { album, handleClick } = this.props;

		return (
			<div className="col-xs-4">
		      <a className="thumbnail" href="#" onClick={ () => handleClick(album) }>
		        <img src={album.imageUrl} />
		        <div className="caption">
		          <h5>
		            <span>{album.name}</span>
		          </h5>
		          <small>{album.songs.length} songs</small>
		        </div>
		      </a>
		    </div>
		)
	}
}

export default Album;

