---
title: Set a ToolTip to the Navigation Buttons
page_title: Set a ToolTip to the Navigation Buttons | UI for ASP.NET AJAX Documentation
description: Set a ToolTip to the Navigation Buttons
slug: listbox/how-to/set-a-tooltip-to-the-navigation-buttons
tags: set,a,tooltip,to,the,navigation,buttons
published: True
position: 5
---

# Set a ToolTip to the Navigation Buttons



## 

This article shows how to set ToolTips for the navigation buttons of __RadListBox__. We will do this using a javascript code - find the appropriate <A> element of the button and set its title property.

What you need to do is to place the following javascript code on your page:

````JavaScript
	     
	
	    function pageLoad() {
	       window.$ = $telerik.$;
	       $(".rlbButton").each(function(b) {
	           var className = this.className;
	           if (className.indexOf("TransferFrom") > -1) {
	               this.title = "Move right";
	               return;
	           }
	           if (className.indexOf("TransferTo") > -1) {
	               this.title = "Move left";
	               return;
	           }
	           if (className.indexOf("TransferAllFrom") > -1) {
	               this.title = "Move all right";
	               return;
	           }
	           if (className.indexOf("TransferAllTo") > -1) {
	               this.title = "Move all left";
	               return;
	           }
	           if (className.indexOf("MoveUp") > -1) {
	               this.title = "Move up";
	               return;
	           }
	           if (className.indexOf("MoveDown") > -1) {
	               this.title = "Move down";
	               return;
	           }
	           if (className.indexOf("Delete") > -1) {
	               this.title = "Delete";
	               return;
	           }
	       });
	    }
	 			
````



This code will set the tooltips for all buttons. If you do not need all of these just delete the respective IF clause.
