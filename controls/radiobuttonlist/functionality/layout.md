---
title: Layout
page_title: Layout | RadRadioButtonList for ASP.NET AJAX Documentation
description: Layout
slug: radiobuttonlist/functionality/layout
tags: layout
published: True
position: 0
---

# Layout

This help article showcases how to configure the layout of the **RadRadioButtonList** control via the `Layout`, `Columns` and `Direction` properties.

* [Layout](#layout)

* [Columns](#columns)

* [Direction](#direction)

## Layout

You can control whether the radio buttons will be rendered inside ul or li elements or without any elements. This behavior is controlled via the `Layout` property that takes `Flow` (default value), `OrderedList` and `UnorderedList` values.

You can see the output of **Example 1** that shows different layouts of the control in **Figure 1**.

>caption Figure 1: Compare different layouts of RadRadioButtonList.

![radiobuttonlist-layout](images/radiobuttonlist-layout.png) 

>caption Example 1: Configure the Layout of RadRadioButtonList. 

````ASP.NET
Layout="Flow"
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" Layout="Flow">
</telerik:RadRadioButtonList>
"OrderedList"
<telerik:RadRadioButtonList ID="RadRadioButtonList2" runat="server" Layout="OrderedList">
</telerik:RadRadioButtonList>
"UnorderedList"
<telerik:RadRadioButtonList ID="RadRadioButtonList3" runat="server" Layout="UnorderedList">
</telerik:RadRadioButtonList>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
	for (int i = 0; i < 10; i++)
	{
		RadioButtonListItem rbli = new RadioButtonListItem() { Text = "Item " + i, Value = i.ToString() };
		if (i == 0) { rbli.Selected = true; }
		RadRadioButtonList1.Items.Add(rbli);
		RadRadioButtonList2.Items.Add(rbli);
		RadRadioButtonList3.Items.Add(rbli);
	}
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	For i As Integer = 0 To 9
		Dim rbli As New RadioButtonListItem() With { _
			Key .Text = "Item " & i, _
			Key .Value = i.ToString() _
		}
		If i = 0 Then
			rbli.Selected = True
		End If
		RadRadioButtonList1.Items.Add(rbli)
		RadRadioButtonList2.Items.Add(rbli)
		RadRadioButtonList3.Items.Add(rbli)
	Next
End Sub
````

## Columns

Radio buttons inside the RadRadioButtonList are rendered inside a single column by default. You can control, however, this behavior through the `Columns` property. A sample is shown in **Example 2** and the output is available in **Figure 2**.

>caption Figure 2: Display radio buttons in two columns.

![radiobuttonlist-layout-columns](images/radiobuttonlist-layout-columns.png) 

>caption Example 2: The code that shows how to display radio buttons in two columns. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" Layout="Flow" Columns="2">
</telerik:RadRadioButtonList>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
	for (int i = 0; i < 10; i++)
	{
		RadioButtonListItem rbli = new RadioButtonListItem() { Text = "Item " + i, Value = i.ToString() };
		if (i == 0) { rbli.Selected = true; }
		RadRadioButtonList1.Items.Add(rbli);
	}
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	For i As Integer = 0 To 9
		Dim rbli As New RadioButtonListItem() With { _
			Key .Text = "Item " & i, _
			Key .Value = i.ToString() _
		}
		If i = 0 Then
			rbli.Selected = True
		End If
		RadRadioButtonList1.Items.Add(rbli)
	Next
End Sub
````

## Direction

You can control the direction in which radio buttons are displayed within the groups via the `Direction` property (the output of **Example 3** is shown in **Figure 3**).

>caption Figure 3: Display radio buttons in different direction within the columns.

![radiobuttonlist-layout-direction](images/radiobuttonlist-layout-direction.png) 

>caption Example 2: Configure horizontal and vertical direction for radio buttons. 

````ASP.NET
Direction="Horizontal"
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" Layout="Flow" Columns="2" Direction="Horizontal">
</telerik:RadRadioButtonList>
Direction="Vertical"
<telerik:RadRadioButtonList ID="RadRadioButtonList2" runat="server" Layout="Flow" Columns="2" Direction="Vertical">
</telerik:RadRadioButtonList>
```` 
````C#
protected void Page_Init(object sender, EventArgs e)
{
	for (int i = 0; i < 10; i++)
	{
		RadioButtonListItem rbli = new RadioButtonListItem() { Text = "Item " + i, Value = i.ToString() };
		if (i == 0) { rbli.Selected = true; }
		RadRadioButtonList1.Items.Add(rbli);
		RadRadioButtonList2.Items.Add(rbli);
	}
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	For i As Integer = 0 To 9
		Dim rbli As New RadioButtonListItem() With { _
			Key .Text = "Item " & i, _
			Key .Value = i.ToString() _
		}
		If i = 0 Then
			rbli.Selected = True
		End If
		RadRadioButtonList1.Items.Add(rbli)
		RadRadioButtonList2.Items.Add(rbli)
	Next
End Sub
````

## See Also
 
 * [Getting Started]({%slug radiobuttonlist/getting-started%})

 * [Server-Side API]({%slug radiobuttonlist/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug radiobuttonlist/client-side-programming/overview%})
