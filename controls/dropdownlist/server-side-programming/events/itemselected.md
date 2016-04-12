---
title: ItemSelected
page_title: ItemSelected | RadDropDownList for ASP.NET AJAX Documentation
description: ItemSelected
slug: dropdownlist/server-side-programming/events/itemselected
tags: itemselected
published: True
position: 1
---

# ItemSelected



## 

The **ItemSelected** event occurs when the user selects an item, even if the item is already selected.

>caution The **ItemSelected** event does not fire unless the **AutoPostBack** property is **True** .
>


The **ItemSelected** event handler receives two arguments:

1. The **RadDropDownList** that is loading items. This argument is of type object, but can be cast to the **RadDropDownList** type.

2. An EventArgs object. This object has the following properties for identifying what has changed:

	* **Index** is the index of the item that was just selected.

	* **Text** is the text of the item that was just selected.

	* **Value** is the value of the item that was just selected.

Use the **ItemSelected** event handler to respond in server-side code when the user changes the current selection:

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1"
	 runat="server"
	 AutoPostBack="true"
	 OnItemSelected="RadDropDownList1_ItemSelected">
</telerik:RadDropDownList>
````





````C#
protected void RadDropDownList1_ItemSelected(object sender, DropDownListEventArgs e)
{
	Label1.Text = "You selected " + e.Text + " item";
}
````
````VB.NET
Protected Sub RadDropDownList1_ItemSelected(sender As Object, e As DropDownListEventArgs)
	Label1.Text = "You selected " + e.Text + " item"
End Sub
````

