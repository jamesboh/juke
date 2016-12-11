'use strict';

import React, { Component } from 'react';
import Songs from './songs';


class SingleAlbum extends Component {
	render() {
    const selectedAlbum = this.props.selectedAlbum;

		return (
      <div key={selectedAlbum.id} className="album col-xs-10">
        <div>
          <h3>{selectedAlbum.name}</h3>
          <img src={selectedAlbum.imageUrl} className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          
          <Songs songs={selectedAlbum.songs} play={this.props.play} />
          
        </table>
      </div>
		)
	}
}

export default SingleAlbum;