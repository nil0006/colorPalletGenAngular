import { Injectable } from '@angular/core';
import axios from 'axios'
var tinycolor = require("tinycolor2");
@Injectable({
  providedIn: 'root'
})
export class ColorgenService {

  constructor() { }
  async getData(){
    var colorForm = tinycolor.random();
		var colorFormToChange = colorForm.toHexString();
			var chosenColorP = colorFormToChange.toString();
			var accentColor = tinycolor(chosenColorP).spin(-90).toString();
			var accentTwoColor = tinycolor(accentColor).spin(-45).toString();
			var accentThreeColor = tinycolor(accentTwoColor).complement().toHexString();
      var accentFourColor = tinycolor(chosenColorP).complement().toHexString()

    var newColor=[colorFormToChange,accentColor,accentTwoColor,accentThreeColor,accentFourColor]      
    return newColor
    
  }
  }
