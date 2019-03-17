import React, { Component } from 'react';

//material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import links from '../links'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            subscriptions:["ok.djskcn"],
            anchorEl: null,
            user:'Pranay'
        };
    }
    componentDidMount(){
      if(this.state.id){

      }
      else if(localStorage.hasOwnProperty('id')){
        let id=localStorage.getItem('id')
        this.setState({id:id})
      }
      else if(window.location.search){
        let id=window.location.search.substr(4)
        this.setState({id:id})
        localStorage.setItem("id", id);
      }else{
        //he is not authorized to come here
      }
    }
    postSubscrtiptions(){
      let subscriptionsLink=links.subscriptions
      let {id,subscriptions}=this.state
      var data = JSON.stringify({
        "userId": id,
        "subscriptions": subscriptions
      });

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open("POST", subscriptionsLink);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.send(data);
    }

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };
    logOut =() =>{
      this.setState(
        {
          id:'',
          subscriptions:[],
          anchorEl: null,
        }
      );
    }
    render() {
        const { classes } = this.props;
        const { anchorEl,id } = this.state;
        const {user} =this.state;
        const open = Boolean(anchorEl);
        return (
          <div className={classes.root}>
            <AppBar position="fixed">
              <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  RSS-AGGREGATOR
                </Typography>
                {
                  !id &&(
                  <Button color="inherit" href={links.login}>Login</Button>
                )}
                {id && (
                  <div>
                    <IconButton
                      aria-owns={open ? 'menu-appbar' : undefined}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem  disabled>
                        Hey {user}
                      </MenuItem>
                      <MenuItem onClick={this.logOut}>Log out</MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}
//for material ui
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};
export default withStyles(styles)(Header);
