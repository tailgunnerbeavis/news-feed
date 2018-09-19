import React, { Component } from 'react';

class Editor extends Component {

	editItem() {
		let item = this.props.list[this.props.itemNum]
		console.log(this.props.types.find(type => type.name === item.type))
		return ([
			<select value={item.type} onChange={(e) => this.props.save(Object.assign({}, item, {type: e.target.value}), this.props.itemNum)}>
				{this.props.types.map((type) => {
					return <option value={type.name}>{type.name}</option>
				})}
			</select>,
			...(this.props.types.find(type => type.name === item.type) && this.props.types.find(type => type.name === item.type).entries.map(entry => {
							return(
								<input key={entry} value={item[entry]} onChange={(e) => this.props.save(Object.assign({}, item, {[entry]: e.target.value}), this.props.itemNum)} />
								)
						})) || [],
			<input key="done" value="done" type="button" onClick={this.props.doneEditing} />,
			])
	}

	render() {
		return(
			<div>
				{this.editItem()}
			</div>
			)
	}
}

export default Editor