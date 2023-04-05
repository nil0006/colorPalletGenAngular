import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class ColorgenService {

  constructor() { }
  public generateData(){
    var dataArray
    var url = "http://colormind.io/api/";
    var data = {
	model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		dataArray = JSON.parse(http.responseText).result;
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));
  return dataArray
  }
  async getData(){
    var URL = "http://colormind.io/api/";
    const response = await axios.post(URL, {
      model: 'default'
    }, {
      headers: {
        'Content-Type': 'text/plain'
      }
      
    })
    var returnVal=response.data.result    
    return returnVal
    
  }
  }
