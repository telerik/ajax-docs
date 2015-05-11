---
title: OnClientValueChanged
page_title: OnClientValueChanged | RadSlider for ASP.NET AJAX Documentation
description: OnClientValueChanged
slug: slider/client-side-programming/events/onclientvaluechanged
tags: onclientvaluechanged
published: True
position: 9
---

# OnClientValueChanged

The **OnClientValueChanged**client-side event occurs as the value property changes.

The event handler receives parameters:

1. The slider instance that fired the event.

1. Event arguments with the following properties:

* **get_oldValue**: returns the slider Value just prior to the change.

* **get_newValue**: returns the slider Value after the change.

The example below displays the new and old values.

````ASP.NET
<script type="text/javascript">
function clientValueChange(sender, eventArgs)
{                    
  var myDiv = document.getElementById("myDiv")
  myDiv.innerHTML = "Old value is:" + eventArgs.get_oldValue()
   + "  New value:" + sender.get_value();             
}
</script> 

<div id="myDiv"></div>
	   
<telerik:RadSlider
   ID="RadSlider1"
   runat="server"
   OnClientValueChanged="clientValueChange"
   Skin="Mac"
/>
````


