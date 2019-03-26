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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import links from '../links'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            anchorEl: null,
            user:'',
            dialogOpen:false,
        };
    }
    componentDidMount(){

      if(this.state.id){
      }
      else if(window.location.search){
        let userRegax=/userName=\w*/g
        let userName=((userRegax.exec(window.location.search))[0]).substr(9)

        let idRegax=/=[(A-Za-z0-9)]*&/g
        let id=(idRegax.exec(window.location.search))[0]
        id=id.substr(1,id.length-2)

        // let id=window.location.search.substr(4)
        //make a request to fetch subscriptions array
        this.setState({id:id,user:userName})
        localStorage.setItem("id", id);
        localStorage.setItem("user", userName);
      }
      else if(localStorage.hasOwnProperty('id')){
        let id=localStorage.getItem('id')
        this.setState({id:id})
      }
      else{
        //he is not logged in
      }

      if(localStorage.hasOwnProperty('user')){
        let userName=localStorage.getItem('user')
        this.setState({user:userName})
      }
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
          anchorEl: null,
          user:''
        }
      );
      localStorage.removeItem("id");
      localStorage.setItem("subscriptions",
      JSON.stringify([
        {"key":1.673347293598026,"label":"Times Of India.india","value":"toi.india"},
        {"key":1.4755966062293795,"label":"Times Of India.world","value":"toi.world"},
        {"key":1.9720040771460856,"label":"Times Of India.health","value":"toi.health"}
      ]));
      // localStorage.removeItem("subscriptions");
      localStorage.removeItem("user");
      this.handleDialogClickOpen()
      this.props.history.push({
          pathname: '/',
      })
    }
    handleDialogClickOpen = () => {
      this.setState({ dialogOpen: true });
    };

    handleDialogClose = () => {
      this.setState({ dialogOpen: false });
    };
    subscriptions = () =>{
      this.handleClose()
      this.props.history.push({
          pathname: '/subscription',
      })
    }
    home = () =>{
      this.handleClose()
      this.props.history.push({
          pathname: '/',
      })
    }
    // onClick={this.home}
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
                      <MenuItem onClick={this.home}>
                        Home
                      </MenuItem>
                      <MenuItem onClick={this.subscriptions}>
                        Subscritptions
                      </MenuItem>
                      <MenuItem onClick={this.logOut}>Log out</MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>

            <Dialog
              open={this.state.dialogOpen}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Logged out"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You are logged out of your account
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogClose} color="primary">
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
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
    // cursor: 'pointer',
    flexGrow: 1,
  }
};
export default withStyles(styles)(Header);
