---
title: Using the EmptyMessage Property
page_title: Using the EmptyMessage Property - RadComboBox
description: Check our Web Forms article about Using the EmptyMessage Property.
slug: combobox/appearance-and-styling/using-the-emptymessage-property
tags: using,the,emptymessage,property
published: True
position: 12
---

# Using the EmptyMessage Property



The **EmptyMessage** property of the RadComboBox enables the ability to set any text in the input field of the control. The Empty Message property could be very useful, when one needs to provide more information in the input about the content of the RadComboBox.	This text is not visible when the combobox gets the focus and appears again on blur if no item is selected.



## Setting the EmptyMessage server-side



````C#
	     
protected void Page_Load(object sender, EventArgs e)
{
   RadComboBox1.EmptyMessage = "Please select a country";
}
				
````
````VB.NET
	     
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)

	RadComboBox1.EmptyMessage = "Please select a country"

End Sub
	
````


## Setting the EmptyMessage client-side

````JavaScript
	
		
function onClientLoadHandler(sender, eventArgs) {

	sender.set_emptyMessage("Please select a country");
}
	
	
````



Additionally, you can get the **EmptyMessage** property client-side by calling the **get_emptyMessage()** method of the combobox.

## Controlling the appearance of the EmptyMessage text

To control the appearance of the EmptyMessage text you can change this CSS rule:

````ASPNET
.RadComboBox_Default .rcbInputCell .rcbEmptyMessage 
{ 
	color: #666; font-style: italic;
}
````



Here Default is the name of the Skin of the combobox.
