export const fetchData=()=>{
    // console.log('I am called');
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        console.log(typeof(this.responseText));
        console.log(JSON.parse(this.responseText));
      }
    });

    xhr.open("GET", "http://localhost:4000");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "0a65afe3-caa1-4740-b2b1-8895853113a0");

    xhr.send(data);
}
