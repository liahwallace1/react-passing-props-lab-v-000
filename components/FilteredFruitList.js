import React from 'react';
import { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(res => res.json())
//       .then(fruit => this.setState({ items: fruit}));
//   }
//
//   render() {
//     const list = !this.props.filter ? this.state.items :
//       this.state.items.filter(i => i.fruit_type == this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
//       </ul>
//     );
//   }
// }

const FilteredFruitList = (props) => {
    const list = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type == props.filter);

  return (
    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null,
}

export default FilteredFruitList;
