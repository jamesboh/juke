'use strict';

import React from 'react';
import SingleAlbum from './components/singleAlbum';
import Albums from './components/albums';
import Sidebar from './sidebar';
import Footer from './footer';
import axios from 'axios';

class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			albums: [],
			selectedAlbum: {}
		}
	}
	componentDidMount() {
		axios.get('/api/albums')
			.then(res => res.data)
			.then(dbAlbums => {
				const albums = dbAlbums.map(album => {
					album.imageUrl = `/api/albums/${album.id}/image`
					return album
				})
				this.setState({ albums })
			})
			.catch(console.error.bind(console))
	}
	handleClick(selectedAlbum) {
		//getting songs
		axios.get('api/albums/' + selectedAlbum.id)
			.then(res => res.data)
			.then(dbAlbum => {
				selectedAlbum.songs = dbAlbum.songs
				this.setState({ selectedAlbum })
			})
			.catch(console.error.bind(console))
	}
	resetSelectedAlbum() {
		this.setState({
			selectedAlbum: {}
		})
	}
	play(url) {
		const audio = document.createElement('audio');
		audio.src = url
		audio.load();
		audio.play();
	}
	render() {
		const el = (
			<div id="main" className="container-fluid">
				<div className="col-xs-2">
					<Sidebar resetSelectedAlbum={this.resetSelectedAlbum.bind(this)} />
				</div>
				<div className="col-xs-10">
					{ Object.keys(this.state.selectedAlbum).length ? (<SingleAlbum selectedAlbum={this.state.selectedAlbum} play={this.play.bind(this)} />) : null }
					<h3>Albums</h3>
					<Albums albums={this.state.albums} handleClick={this.handleClick.bind(this)} />
				</div>
		      	<Footer />
		    </div>
		);
		return el;
	}
}

export default Main;