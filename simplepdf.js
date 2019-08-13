/**
  * SimplePDF
  *
  * Small javscript library that prints HTML and CSS
  *
  * Copyright (C) 2019  genya1
  * https://github.com/genya1
  *
  * MIT LICENSE
  */

"use strict";

var simplePDF = function ()
{
  /**
    * Super small library that prints HTML and CSS 
    * Just input the HTML/CSS data and that is it
    */

  /**
    * INTERNALS
    */
  var HTMLdata = "";
  var callbacks = {};

  /**
    * closePrint() => Removes iframe after printing is finished
    */	
  var closePrint = function ()
  {
    document.body.removeChild(this.__container__);
  };

  /**
    * setPrint() => Triggers print when iframe loaded
    */
  var setPrint = function ()
  {
    this.contentWindow.__container__ = this;
    this.contentWindow.onbeforeunload = closePrint;
    this.contentWindow.onafterprint = closePrint;
    this.contentWindow.focus(); // Required for IE
    this.contentWindow.print();
  };

  /**
    * _print() => Creates hidden iframe and prints it through setPrint()
    */
  var _print = function ()
  {
    var oHiddFrame = document.createElement("iframe");
    oHiddFrame.onload = setPrint;
    oHiddFrame.style.position = "fixed";
    oHiddFrame.style.right = "0";
    oHiddFrame.style.bottom = "0";
    oHiddFrame.style.width = "0";
    oHiddFrame.style.height = "0";
    oHiddFrame.style.border = "0";

    oHiddFrame.srcdoc = HTMLdata; // the data to print

    document.body.appendChild(oHiddFrame);
  };

  /**
    * USER FUNCTIONS
    */

  /**
    * setData() => Sets the data to print 
    */
  this.setData = function (data)
  {
    HTMLdata = data;
  };

  /**
    * print() => Triggers the print dialog and prints the data set
    */  
  this.print = function ()
  {	
    _print();
  };

};
