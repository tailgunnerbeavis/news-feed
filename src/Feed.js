import React, { Component } from 'react';
var he = require('he');
var _ = require('lodash');

class Feed extends Component {

	listItems(list) {
		return(list.map((item, i) => {
			console.log(item)
			if(!this.props.types.find(type => type.name === item.type)) return (<li onClick={() => this.props.edit(i)} key={"list" + i} >Unknown Type</li>)
			return(<li onClick={() => this.props.edit(i)} key={"list" + i} dangerouslySetInnerHTML={{ __html: this.props.types.find(type => type.name === item.type).template(_.mapValues(item, value => he.encode(value))) }} />
			)
		}))
	}

	render() {
		return(
			<div>
				<ul>
					{this.listItems(this.props.list)}
				</ul>
			</div>
			)
	}
}

export default Feed