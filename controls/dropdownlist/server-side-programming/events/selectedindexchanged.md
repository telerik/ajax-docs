---
title: SelectedIndexChanged
page_title: SelectedIndexChanged - RadDropDownList
description: Check our Web Forms article about SelectedIndexChanged.
slug: dropdownlist/server-side-programming/events/selectedindexchanged
tags: selectedindexchanged
published: True
position: 2
---

# SelectedIndexChanged



## 

The **SelectedIndexChanged** event occurs when the SelectedIndex has just changed.

>caution The **SelectedIndexChanged** event does not fire unless the **AutoPostBack** property is **True** .
>


The **SelectedIndexChanged** event handler receives two arguments:

1. The **RadDropDownList** that is loading items. This argument is of type object, but can be cast to the **RadDropDownList** type.

2. An EventArgs object. This object has the following properties for identifying what has changed:

	* **Index** is the index of the item that was just selected.

	* **Text** is the text of the item that was just selected.

	* **Value** is the value of the item that was just selected.

Use the **SelectedIndexChanged** event handler to respond in server-side code when the user changes the current selection:

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1"
	 runat="server"
	 AutoPostBack="true"
	 OnSelectedIndexChanged="RadDropDownList1_SelectedIndexChanged">
</telerik:RadDropDownList>
````





````C#
	
	    protected void RadDropDownList1_SelectedIndexChanged(object sender, DropDownListEventArgs e)
	    {
	        Label1.Text = "You selected " + e.Text + " item";
	    }
	
````
````VB.NET
	
	    Private Sub RadDropDownList1_SelectedIndexChanged(ByVal o As Object, ByVal e As Telerik.Web.UI.DropDownListEventArgs)
	
	        Label1.Text = "You selected " + e.Text + " item"
	
	    End Sub
	
````

