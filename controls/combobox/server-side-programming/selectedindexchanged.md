---
title: SelectedIndexChanged
page_title: SelectedIndexChanged - RadComboBox
description: Check our Web Forms article about SelectedIndexChanged.
slug: combobox/server-side-programming/selectedindexchanged
tags: selectedindexchanged
published: True
position: 4
---

# SelectedIndexChanged



## 

The **SelectedIndexChanged** event occurs when the user selects a new item in the drop-down list.

>caution The **SelectedIndexChanged** event does not fire unless the **AutoPostBack** property is **True** .
>


The **SelectedIndexChanged** event handler receives two arguments:

1. The **RadComboBox** that is loading items. This argument is of type object, but can be cast to the **RadComboBox** type.

1. An EventArgs object. This object has the following properties for identifying what has changed:

* **Text** is the text of the item that was just selected.

* **Value** is the value of the item that was just selected.

* **OldText** is the text of the item that was previously selected

* **OldValue** is the value of the item that was previously selected

Use the **SelectedIndexChanged** event handler to respond in server-side code when the user changes the current selection:

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	autopostback="True" 
	onselectedindexchanged="RadComboBox1_SelectedIndexChanged">
</telerik:radcombobox>
````





````C#
		
protected void RadComboBox1_SelectedIndexChanged(object o, Telerik.Web.UI.RadComboBoxSelectedIndexChangedEventArgs e)
{
	Label1.Text = "You selected " + e.Text + " item";
}
	
````
````VB.NET
	
Protected Sub RadComboBox1_SelectedIndexChanged(ByVal o As Object, ByVal e As Telerik.Web.UI.RadComboBoxSelectedIndexChangedEventArgs)

	Label1.Text = "You selected " + e.Text + " item"

End Sub
	
````


# See Also

 * [TextChanged]({%slug combobox/server-side-programming/textchanged%})

 * [OnClientSelectedIndexChanging]({%slug combobox/client-side-programming/events/onclientselectedindexchanging%})

 * [OnClientSelectedIndexChanged]({%slug combobox/client-side-programming/events/onclientselectedindexchanged%})
