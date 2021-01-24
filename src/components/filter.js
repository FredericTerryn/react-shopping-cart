import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filer-result">{this.props.count} Products</div>
                <div className="filer-sort">
                    {"Order "}
                    <select value={this.props.size} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                    </div>
                <div className="filer-size">
                    {"Filter "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="ALL">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select></div>
            </div>
        )
    }
}
