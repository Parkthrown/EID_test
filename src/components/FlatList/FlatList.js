import React, { Component } from "react";
import "./FlatList.css";

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  render() {
    const { items, renderItem: RenderItem, keyExtractor } = this.props;

    return (
      <ul class="FlatList">
        {items.map((item, i) => (
          <li key={keyExtractor(item)}>
            <RenderItem item={item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default FlatList;
