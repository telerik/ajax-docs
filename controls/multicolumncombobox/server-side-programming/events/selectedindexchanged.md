---
title: SelectedIndexChanged
page_title: SelectedIndexChanged | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: SelectedIndexChanged
slug: multicolumncombobox/server-side-programming/events/selectedindexchanged
tags: selectedindexchanged
published: True
position: 1
---

# SelectedIndexChanged



## 

The **SelectedIndexChanged** event occurs when the selected item has just changed.

>caution The **SelectedIndexChanged** event does not fire unless the **AutoPostBack** property is **True** .
>


The **SelectedIndexChanged** event handler receives two arguments:

1. The **RadMultiColumnComboBox** that is loading items. This argument is of type object, but can be cast to the **RadMultiColumnComboBox** type.

2. An EventArgs object. This object has the following properties for identifying what has changed:

	* **Text** is the text of the item that was just selected.
	* **Value** is the value of the item that was just selected.
	* **OldText** is the text of the previously selected item.
	* **OldValue** is the value of the previously selected item.

Use the **SelectedIndexChanged** event handler to respond in server-side code when the user changes the current selection:

````ASPNET
<asp:Label Text="text" ID="Label1" runat="server" />
<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox1" AutoPostBack="true" DataTextField="text" DataValueField="value" OnSelectedIndexChanged="RadMultiColumnComboBox1_SelectedIndexChanged"
	runat="server" RenderMode="Lightweight">
	<Items>
		<telerik:MultiColumnComboBoxItem Text="Item 1" Value="1" />
		<telerik:MultiColumnComboBoxItem Text="Item 2" Value="2" />
		<telerik:MultiColumnComboBoxItem Text="Item 3" Value="3" />
		<telerik:MultiColumnComboBoxItem Text="Item 4" Value="4" />
	</Items>
</telerik:RadMultiColumnComboBox>
````


````C#
protected void RadMultiColumnComboBox1_SelectedIndexChanged(object sender, Telerik.Web.UI.RadMultiColumnComboBoxSelectedIndexChangedEventArgs e)
{
	var text = string.Format("Text:'{0}', Value:'{1}'", e.Text, e.Value;
	Label1.Text = text;
}
````
````VB.NET
Protected Sub RadMultiColumnComboBox1_SelectedIndexChanged(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMultiColumnComboBoxSelectedIndexChangedEventArgs)
	Dim text = String.Format("Text:'{0}', Value:'{1}'", e.Text, e.Value)
	Label1.Text = text
End Sub
````

