---
title: Buttons inside an iframe are unclickable on iOS devices
description: Buttons inside an iframe are unclickable on iOS devices. Check it now!
type: how-to
page_title: Buttons inside an iframe are unclickable on iOS devices
slug: common-button-inside-an-iframe-or-radwindow-is-unclickable-on-ios-devices
res_type: kb
---

## Problem

Buttons inside iframe or RadWindow that have background image applied via CSS, become unclickable if the frame's content will get big enough to become scrollable. This seems to be a bug in iOS.  
  
Steps to reproduce the issue:  

 1. Create a div and place an iframe in it.
 
 ````HTML
<div class="frameContainer">
    <iframe src="pageWithLardeContent.aspx"></iframe>
</div>
 ````

 2. Make the div element small

 ````CSS
.frameContainer {
    position: absolute;
    top: 50px;
    left: 50px;
    height: 400px;
    right: 50px;
    border: 1px solid red;
    overflow: auto;
}
 ````

 3. Create another page that has large content and includes a button like the one below:

 ````CSS
.Button {
    background: url(someImage.png) blue;
} 
 ````

 ````HTML
<input type="button" class="Button" value="Button" onclick="click()" /> 
 ````

 Include the following click event handler as well.

 ````JavaScript
function click() {
    alert('Button Clicked');
} 
 ````

## Solution

Current solution is to remove the background image applied via CSS.

 