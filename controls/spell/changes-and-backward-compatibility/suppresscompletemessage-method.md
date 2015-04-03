---
title: suppressCompleteMessage Method
page_title: suppressCompleteMessage Method | UI for ASP.NET AJAX Documentation
description: suppressCompleteMessage Method
slug: spell/changes-and-backward-compatibility/suppresscompletemessage-method
tags: suppresscompletemessage,method
published: True
position: 2
---

# suppressCompleteMessage Method



As of __Q1 2015__, the __suppressCompleteMessage__ property of the [OnClientCheckFinished]({%slug spell/client-side-programming/events/onclientcheckfinished%}) event's arguments	__is a method__.

To prevent the informational alert, you now have to pass *false* as an *argument*(__Example 1__), instead of setting the property value, as in older versions (__Example 2__).

__Example 1__: Preventing the information alert in OnClientCheckFinished in Q1 2015 and later.

````JavaScript
	    	function OnClientCheckFinishedHandler(sender, args) {
	    		args.suppressCompleteMessage(true);//prevent the alert
	    		console.log('Spell check is complete');
	    	}
````



__Example 2__: Preventing the information alert in OnClientCheckFinished in versions before Q1 2015.

````JavaScript
	    	function OnClientCheckFinishedHandler(sender, args) {
	    		args.suppressCompleteMessage = true;//prevent the alert
	    		console.log('Spell check is complete');
	    	}
````



## 
