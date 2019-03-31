import React, { Component } from 'react';
// import Title from './title';
// import Image from './image';
// import Date from './date';
import "../styles/main.css";
// import data from '../data'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import links from '../links'

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            js:[],
            isRedirect:false,
            id:'',
            subscriptions:[],
            reload:true,
        };
        this.content=this.content.bind(this);
    }
    fetchData(data){
        if(!this.state.reload){
          return
        }
        const that=this;
        data=JSON.stringify(data)
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4 && this.status===200) {
            that.setState({
              js:JSON.parse(this.responseText),
              subscriptions:JSON.parse(data),
              reload:false,
            })
          }
        });

        xhr.open("POST", links.fetch_articles);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    }
    componentDidMount() {

        if (this.state.id) {

        }else if (localStorage.hasOwnProperty('id')) {
            let id = localStorage.getItem('id')
            this.setState({
                id: id
            },()=>{
              if(window.location.search){
                this.getSubscriptionFromDB()
              }
            })
        }
        if(localStorage.hasOwnProperty('subscriptions')){
          let subscriptions=localStorage.getItem('subscriptions')
          this.setState({
              subscriptions: subscriptions
          })
          let apiSubscriptions=this.getSubscription(JSON.parse(subscriptions))
          this.fetchData(apiSubscriptions);
        }else{

        }

    }
    content = (x) => {
      // console.log('x is',x);
      this.props.history.push({
          pathname: '/content',
          state: {
              title: x.title,
              date: x.pubDate,
              description: x.description,
              link: x.link
          }
      })
    }
    getSubscription(data){
      let apiSubscriptions=data.map((a,i)=>{
        return a.value;
      })
      return apiSubscriptions;
    }
    getDate(date){
      let now = new Date(date);
    	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    	let monthIndex = now.getMonth();
    	let nowDate = now.getDate();
    	let fullYear = now.getFullYear();
    	let hours = now.getHours().toString();
    	if(hours.length === 1)hours  = '0' + hours;
    	let minutes = now.getMinutes().toString();
      if(minutes.length === 1)minutes  = '0' + minutes;
    	return `${months[monthIndex]} ${nowDate}, ${fullYear} ${hours}:${minutes}`;
    }
    getImage(item){
         var rex = /<img[^>]+?\s+src="?([^"\s]+)"?\s*"/g;
         var m = rex.exec( item.description );
         if(m && m[1]){
           return m[1];
         }
         return undefined;
    }
    SimpleCard(props,item) {
      // let imageLink=this.getImage(item);
      const { classes } = props;
      // <img src={imageLink} alt="Logo" width="250" height= "150"/>
      return (

        <Card className={classes.card} key={item.title}>
          <CardHeader title={item.title}/>
          <CardContent >
            <Typography component="p">
              {this.getDate(item.pubDate)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" className={classes.button} onClick={()=>this.content(item)}>Learn More</Button>
            <Button color="primary" className={classes.button} onClick={()=>window.open(item.link, "_blank")}>Visit Website</Button>
          </CardActions>
        </Card>
      );
    }
    getSubscriptionLabel(key){
        let a;
    }
    getSubscriptionFromDB(){
      console.log('getSubscriptionFromDB called');
      var data = JSON.stringify({
        "userId": this.state.id
      });
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      const that=this
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log('response from db',this.responseText);
          let subscriptionsObject=JSON.parse(this.responseText).map((a,i)=>{
            let newItem = {
              key: 1 + Math.random(),
              label: a,
              value: a
            };
            // this.getSubscriptionLabel(a);
            return newItem;
          })
          localStorage.setItem('subscriptions',JSON.stringify(subscriptionsObject))
          that.fetchData(JSON.parse(this.responseText));
        }
      });

      xhr.open("POST", links.fetch_subscribtions);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
    }
    render(){
        if(this.state.id && !localStorage.hasOwnProperty('subscriptions')){
          this.getSubscriptionFromDB();
        }
        if(this.props.location.state && this.props.location.state.reload && (this.state.subscriptions.length === 0)){
          //this is called first time when user signs up
          let apiSubscriptions=this.getSubscription(this.props.location.state.subscriptions)
          this.fetchData(apiSubscriptions)
        }
        return (
          <div className="div1" style={styles.parent}>
            {this.state.js.map((item)=>{
              return this.SimpleCard(this.props,item)
            })}
          </div>
        )
    }
}
const styles = {
  parent:{
    marginTop:60,
    marginLeft:'20%',
    marginRight:'20%',
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

  card: {
    minWidth: 775,
    margin:20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,

  },
  pos: {
    marginBottom: 12,
  },
};
export default withStyles(styles)(Main);
