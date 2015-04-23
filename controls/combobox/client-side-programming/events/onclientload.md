---
title: OnClientLoad
page_title: OnClientLoad | RadComboBox for ASP.NET AJAX Documentation
description: OnClientLoad
slug: combobox/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 13
---

# OnClientLoad



## 

The **OnClientLoad** client-side event occurs after the combobox has been fully initialized on the client-side.

The event handler receives one parameter:

1. The combobox instance firing the event.

This event is helpful if you need to get the client-side instance of the combobox when it is embedded in other controls. Hook the **OnClientLoad** event and get the client-side instance of the combobox as demonstrated in the example below. This technique can be used to retrieve the combo instance for use elsewhere.

````JavaScript
	     
	
function OnClientLoadHandler(sender)   {
	var combo;
	combo=sender;
}

<telerik:RadComboBox 
	ID="RadComboBox1" 
	runat="server" 
	OnClientLoad="OnClientLoadHandler" .../>
				
````



>caution This technique may not work when AJAX is used. The asynchronous requests may interfere with the **OnClientLoad** event.
>


This event cannot be cancelled.
