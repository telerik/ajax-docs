---
title: Focus the RadComboBox
page_title: Focus the RadComboBox | UI for ASP.NET AJAX Documentation
description: Focus the RadComboBox
slug: combobox/how-to/focus-the-radcombobox
tags: focus,the,radcombobox
published: True
position: 0
---

# Focus the RadComboBox



## Set the focus on the client

To focus RadComboBox on the client, you should follow the steps below:

* Get the client-side instance of RadComboBox;

* Get the DOM element of the input field;

* Focus the input field.

````JavaScript
	
function SetFocus() {
    var comboBox = $find("<%=RadComboBox1.ClientID %>");
    var input = comboBox.get_inputDomElement();
    input.focus();
}
	
````



## Set the focus on the server

Use the [SetFocus](http://msdn.microsoft.com/en-us/library/bb156188.aspx) method of the ScriptManager or RadScriptManager.



````C#
	     
ScriptManager1.SetFocus(RadComboBox1.ClientID + "_Input");
				
````
````VB.NET
	     
ScriptManager1.SetFocus(RadComboBox1.ClientID + "_Input")
				
````


>note The focus of RadComboBox might not be visible in some browsers if AllowCustomText property is not set to true. You could test the focus using the [OnClientFocus]({%slug combobox/client-side-programming/events/onclientfocus%}) event.
>


# See Also

 * [OnClientFocus]({%slug combobox/client-side-programming/events/onclientfocus%})
