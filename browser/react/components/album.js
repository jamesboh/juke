'use strict';

import React, { Component } from 'react';

const Album = ({ album, handleClick }) => (
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

export default Album;

