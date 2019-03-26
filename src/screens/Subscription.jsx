import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Select from '../components/DropDown';
import Button from '@material-ui/core/Button';
// import DoneIcon from '@material-ui/icons/Done';

import links from '../links'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      subscriptions: [
        {key: 1.6001176237725319, label: "Times Of India.india", value: "toi.india"},
        {key: 1.2519983314371668, label: "Times Of India.world", value: "toi.world"},
        {key: 1.642035102151165, label: "Times Of India.health", value: "toi.health"},
      ],
      id:'',
    };
  }
  checkIfAlreadyPresent(value){
    let ans=this.state.subscriptions.reduce((acc,item)=>{
       return acc || value===item.value
    },false)
    return ans;
  }
  addItem(category,website) {
    if(this.checkIfAlreadyPresent(category.value+'.'+website.value)){
      return;
    }
    const newItem = {
      key: 1 + Math.random(),
      label: (category.label+'.'+website.label).slice(),
      value: category.value+'.'+website.value
    };
    const subscriptions = [...this.state.subscriptions];
    subscriptions.push(newItem);
    this.setState({
      subscriptions,
      newItem: ""
    });

    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }
  deleteItem(key) {
    // copy current list of items
    const list = [...this.state.subscriptions];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.key !== key);

    this.setState({ subscriptions: updatedList });

    localStorage.setItem("subscriptions", JSON.stringify(updatedList));
  }
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }
  getChipList(){
    let chipData=[]
    chipData=this.state.subscriptions.map((a,i)=>{
      let chip={}
      chip.key=a.key
      chip.label=a.label
      return chip
    })
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {chipData.map(data => {
          let icon = null;
          icon = <TagFacesIcon />;

          return (
            <Chip
              key={data.key}
              icon={icon}
              label={data.label}
              onDelete={()=>this.deleteItem(data.key)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
  postSubscriptions(subscriptions){
    let subscriptionsLink=links.subscriptions
    let {id}=this.state
    var data = JSON.stringify({
      "userId": id,
      "subscriptions": subscriptions
    });
    const that=this
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        // console.log(this.responseText);
        // console.log(that);
        that.props.history.push({pathname: '/',
        state: {
            reload:true,
            subscriptions:that.state.subscriptions
        }})
      }
    });

    xhr.open("POST", subscriptionsLink);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
  }
  submitSubscription(){
    let apiSubscriptions=this.state.subscriptions.map((a,i)=>{
      return a.value;
    })
    this.postSubscriptions(apiSubscriptions)
  }
  render() {
    return (
      <div className="App" style={{marginTop:80}}>
        <Select addItem={(category,website)=>this.addItem(category,website)}/>
        <div style={{display: 'flex',justifyContent: 'center'}}>
          <h2>Websites subscribed</h2>
        </div>
        <div style={{display: 'flex',justifyContent: 'center'}}>
          {this.getChipList()}
        </div>
        <div style={{marginTop:40,display: 'flex',justifyContent: 'center'}}>
          <Button variant="contained" color="primary" disabled={
            this.state.subscriptions.length===0
            //also check if ID is there are not
          } onClick={()=>{this.submitSubscription()}}>
            subscribe
          </Button>
        </div>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    maxWidth:500,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});
export default withStyles(styles)(App);


// <ul>
//   {this.state.list.map(item => {
//     return (
//       <li key={item.id}>
//         {item.value}
//         <button onClick={() => this.deleteItem(item.id)}>
//           Remove
//         </button>
//       </li>
//     );
//   })}
// </ul>
//

// <div
//   style={{
//     textAlign: "left",
//     maxWidth: 500,
//     margin: "auto",
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection:'column'
//   }}
// >
//   Add an item to the list
//   <br />
//   <div style={{}}>
//     <input
//       type="text"
//       placeholder="Type item here"
//       value={this.state.newItem}
//       onChange={e => this.updateInput("newItem", e.target.value)}
//       onKeyPress={(ev) => {
//         if (ev.key === 'Enter' && this.state.newItem.length!=0) {
//           // Do code here
//           this.addItem()
//         }
//       }}
//     />
//     <button
//       onClick={() => this.addItem()}
//       disabled={!this.state.newItem.length}
//     >
//       &#43; Add
//     </button>
//     <br /> <br />
//   </div>
// </div>
