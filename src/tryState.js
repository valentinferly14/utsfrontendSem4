import React, { Component } from 'react'
import Props from './tryProps';

export default class State extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barang: "Sunscreen",
			harga: 60000,
			quantity: 0,
			bayar: 0
		}
	}
	plusQuantity = () => this.setState({ quantity: this.state.quantity + 1 });
	minusQuantity = () => this.setState({ quantity: this.state.quantity - 1 });
	totalBayar = ()=> this.setState({bayar: this.state.quantity * this.state.harga})
	render() {
	return (
		<div>
			<Props barang={this.state.barang} harga={this.state.harga}/>
			<h3>Jumlah Barang: {this.state.quantity}</h3>
			<input type='button' onClick={this.plusQuantity} value='+'></input>
			<input type='button' onClick={this.minusQuantity} value='-'></input>
			<h3>Total Harga: Rp{this.state.bayar}</h3>
			<input type='button' onClick={this.totalBayar} value='Bayar'></input>
	  </div>
	)
  }
}
