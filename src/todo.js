import React, { Component } from "react";
import ListItem from "./listitem.js";
import { deleteitems, additems } from "./redux/todo/todoAction";
import { connect } from "react-redux";

class AddTodo extends Component {
  state = {
    currentItems: {
      text: "",
      key: "",
    },
  };
  handelinput = (e) => {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  additem = (e) => {
    e.preventDefault();
    const item = this.state.currentItems;
    this.props.additems(item);
    this.setState({
      currentItems: {
        text: "",
        key: "",
      },
    });
  };
  deleteitem = (key) => {
    const featureitem = this.props.items.filter((item) => item.key !== key);
    console.log(featureitem);
    this.props.deleteitems(featureitem);
  };

  // itemupdate = (text, key) => {
  //   console.log(text, "text");
  //   const items = this.props.items;
  //   items.map((item) => {
  //     if (item.key === key) {
  //       item.text = text;
  //     }
  //   });
  //   console.log(items);
  //   this.props.updateitem(items);
  // };

  render() {
    return (
      <div className="add">
        <header>
          <form id="to-do-form" onSubmit={this.additem}>
            <input
              type="text"
              placeholder="enter text"
              value={this.state.currentItems.text}
              onChange={this.handelinput}
            />
            <button type="submit">Add</button>
          </form>
        </header>

        <ListItem
          items={this.props.items}
          deleteitem={this.deleteitem}
          // setUpdate={this.itemupdate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.items);
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dipatch);
  return {
    additems: (item) => dispatch(additems(item)),
    deleteitems: (item) => dispatch(deleteitems(item)),
    // updateitem: (item) => dispatch(updateitem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
