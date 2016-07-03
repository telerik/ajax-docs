---
title: Select Item
page_title: Select Item | RadRadioButtonList for ASP.NET AJAX Documentation
description: Select Item
slug: togglebutton/functionality/select-item
tags: select,item
published: True
position: 1
---

# Select Item

This help article showcases how to operate with the items of a **RadRadioButtonList** on the server-side/client-side.

* [Select Item Server-Side](#select-item-server-side)

* [Get Selected Item Server-Side](#get-selected-item-server-side)

* [Select Item Client-Side](#select-item-client-side)

* [Get Selected Item Client-Side](#get-selected-item-client-side)

## Select Item Server-Side

To select a particular item of a **RadRadioButtonList**, you should set the `Selected` property of the target item to `true`.

>caption Example 1: Select a RadioButtonListItem from the markup. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList" runat="server">
	<Items>
		<telerik:RadioButtonListItem Text="Item 1" Value="0" Selected="true" />
		<telerik:RadioButtonListItem Text="Item 2" Value="1" />
	</Items>
</telerik:RadRadioButtonList>
```` 

>caption Example 2: Select a RadioButtonListItem from the code behind. 

````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadRadioButtonList1.Items[0].Selected = true;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	RadRadioButtonList1.Items(1).Selected = True
End Sub
````

For a data-bound scenario you can use the `SelectedIndex` of the control (**Example 3**).

>caption Example 3: Data bind the selected state of a RadRadioButtonList.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" Width="150px">
	<MasterTableView AutoGenerateColumns="false">
		<Columns>
			<telerik:GridTemplateColumn DataField="SelectToggleStateField" HeaderText="SelectToggleStateField">
				<ItemTemplate>
					<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" SelectedIndex='<%#Eval("SelectState") %>'>
						<Items>
							<telerik:RadioButtonListItem Text="Item 1" Value="0" />
							<telerik:RadioButtonListItem Text="Item 2" Value="1" />
							<telerik:RadioButtonListItem Text="Item 3" Value="2" />
						</Items>
					</telerik:RadRadioButtonList>
				</ItemTemplate>
			</telerik:GridTemplateColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>
```` 
````C#
public void Page_Init(object sender, System.EventArgs e)
{
	if (!IsPostBack)
	{
		DataTable dt = new DataTable();
		dt.Columns.Add("SelectState", typeof(int));
		dt.Rows.Add(0);
		dt.Rows.Add(1);
		dt.Rows.Add(2);
		RadGrid1.DataSource = dt;
	}
}
````
````VB
Public Sub Page_Init(sender As Object, e As System.EventArgs)
	If Not IsPostBack Then
		Dim dt As New DataTable()
		dt.Columns.Add("SelectState", GetType(Integer))
		dt.Rows.Add(0)
		dt.Rows.Add(1)
		dt.Rows.Add(2)
		RadGrid1.DataSource = dt
	End If
End Sub
````

>warning The `SelectedIndex` property will not take effect if directly assigned with a value in the markup. The `SelectedIndex` property takes effect only when set from the code behind or integrated in a data-bound scenario in the markup (**Example 3**). 

## Get Selected Item Server-Side

To get the selected item and selected index you can use the `SelectedItem` and `SelectedIndex` properties of the **RadRadioButtonList** control.

>caption Example 4: Get `SelectedIndex` and `SelectedItem` of **RadRadioButtonList** from the code behind. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" OnSelectedIndexChanged="RadRadioButtonList1_SelectedIndexChanged">
	<Items>
		<telerik:RadioButtonListItem Text="Item 1" Value="0" />
		<telerik:RadioButtonListItem Text="Item 2" Value="1" Selected="true" />
		<telerik:RadioButtonListItem Text="Item 3" Value="2" />
	</Items>
</telerik:RadRadioButtonList>
````

````C#
protected void RadRadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
{
	int selectedIndex = RadRadioButtonList1.SelectedIndex;
	RadioButtonListItem selectedradioButtonListItem = RadRadioButtonList1.SelectedItem;
}
````
````VB
Protected Sub RadRadioButtonList1_SelectedIndexChanged(sender As Object, e As EventArgs)
	Dim selectedIndex As Integer = RadRadioButtonList1.SelectedIndex
	Dim selectedradioButtonListItem As RadioButtonListItem = RadRadioButtonList1.SelectedItem
End Sub
````

The selected item reference provides all its properties (e.g., `Value`, `Text`, `Selected` and `Enabled`).


## Select Item Client-Side

You can select a particular item of **RadRadioButtonList** by passing the corresponding index in the `set_selectedIndex()` method of the control.

>caption Example 6: Select an item on the client-side.

````JavaScript
var radioButtonList = $find("<%=RadRadioButtonList1.ClientID%>");
radioButtonList.set_selectedIndex(0);
````


## Get Selected Item Client-Side

You can obtain the items, selected item and selected item index of **RadRadioButtonList** through the `get_items()`, `get_selectedItem()`, and `get_selectedIndex()` methods.

>caption Example 7: Reference items, selected item and selected index of **RadRadioButtonList** through its client-side API. 

````JavaScript
var radioButtonList = $find("<%=RadRadioButtonList1.ClientID%>");
var items = radioButtonList.get_items();
var selectedItem = radioButtonList.get_selectedItem();
var selectedIndex = radioButtonList.get_selectedIndex();
````


## See Also

 * [Image]({%slug togglebutton/functionality/image%})
 
 * [Custom Icons]({%slug togglebutton/functionality/icons/custom-icons%})

 * [Server-Side API]({%slug togglebutton/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug togglebutton/client-side-programming/overview%})