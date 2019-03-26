import React from 'react';
import Select from 'react-select';
import {categories,websites} from '../data/subscriptions'

class App extends React.Component {
  state = {
    selectedCategoryOption: {value:null},
  }
  handleCategoryChange = (selectedCategoryOption) => {
    this.setState({ selectedCategoryOption });
  }
  handleChange = (selectedOption) => {
    this.props.addItem(selectedOption,this.state.selectedCategoryOption)
  }
  render() {

    const { selectedCategoryOption } = this.state;
    return (
      <div style={{margin:'50px auto',width:'50%'}}>
          <div style={{margin:'50px auto'}}>
            <Select
              placeholder={'Select category'}
              isSearchable
              onChange={this.handleCategoryChange}
              options={categories}
            />
          </div>
          <div style={{margin:'50px auto'}}>
            <Select
              placeholder={'Select Website'}
              isSearchable
              onChange={this.handleChange}
              options={websites[selectedCategoryOption.value]}
            />
          </div>
      </div>
    );
  }
}
export default App;
