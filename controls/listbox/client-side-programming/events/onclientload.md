---
title: OnClientLoad
page_title: OnClientLoad - RadListBox
description: Check our Web Forms article about OnClientLoad.
slug: listbox/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

## 

The **OnClientLoad** client-side event occurs after RadListBox has been fully initialized on the client-side.

The event handler receives one parameter:

1. The listbox instance firing the event.

This event is helpful if you need to get the client-side instance of the listbox when it is embedded in other controls. Hook the **OnClientLoad** event and get the client-side instance of the listbox as demonstrated in the example below. This technique can be used to retrieve the RadListBox instance for use elsewhere.


````JavaScript
var listbox;  
function OnClientLoadHandler(sender)  {   
 listbox = sender;
}

<telerik:RadListBox RenderMode="Lightweight" ID="RadListBox1" runat="server" OnClientLoad="OnClientLoadHandler" ... /> 
````


