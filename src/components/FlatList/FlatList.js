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
    const {
      class: _class,
      items,
      renderItem: RenderItem,
      keyExtractor
    } = this.props;
    return (
      <ul class={"FlatList " + _class}>
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
