import React, { Component } from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

export default class SearchResults extends Component {
	render() {
		return (
			<>
				{/* {this.props.SearchResults.length >= 1 && ( */}
				<div className='SearchResults'>
					<h2>Results</h2>
					<TrackList
						tracks={this.props.SearchResults}
						playlistTracks={this.props.playlistTracks}
						onAdd={this.props.onAdd}
						isRemoval={false}
						isPlaylist={false}
					/>
				</div>
				{/* )} */}
			</>
		)
	}
}
