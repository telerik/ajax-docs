---
title: Select Item
page_title: Select Item - RadCheckBoxList
description: Check our Web Forms article about Select Item.
slug: checkboxlist/functionality/select-item
tags: select,item
published: True
position: 1
---

# Select Item

This help article showcases how to operate with the items of a **RadCheckBoxList** on the server side or client side.

* [Select Item Server Side](#select-item-server-side)

* [Get Selected Item Server Side](#get-selected-item-server-side)

* [Select Item Client Side](#select-item-client-side)

* [Get Selected Item Client Side](#get-selected-item-client-side)

## Select Item Server Side

To select a particular item of a **RadCheckBoxList**, you should set the `Selected` property of the target item to `true`.

>caption Example 1: Select a ButtonListItem from the markup. 

````ASP.NET
<telerik:RadCheckBoxList ID="RadCheckBoxList" runat="server">
	<Items>
		<telerik:ButtonListItem Text="Item 1" Value="0" Selected="true" />
		<telerik:ButtonListItem Text="Item 2" Value="1" />
	</Items>
</telerik:RadCheckBoxList>
```` 

>caption Example 2: Select a ButtonListItem from the code behind. 

````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadCheckBoxList1.Items[0].Selected = true;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	RadCheckBoxList1.Items(1).Selected = True
End Sub
````

For a data-bound scenario you can use the `SelectedIndex` of the control (**Example 3**).

>caption Example 3: Data bind the selected state of a RadCheckBoxList.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" Width="150px">
	<MasterTableView AutoGenerateColumns="false">
		<Columns>
			<telerik:GridTemplateColumn DataField="SelectToggleStateField" HeaderText="SelectToggleStateField">
				<ItemTemplate>
					<telerik:RadCheckBoxList ID="RadCheckBoxList1" runat="server" SelectedIndex='<%#Eval("SelectState") %>'>
						<Items>
							<telerik:ButtonListItem Text="Item 1" Value="0" />
							<telerik:ButtonListItem Text="Item 2" Value="1" />
							<telerik:ButtonListItem Text="Item 3" Value="2" />
						</Items>
					</telerik:RadCheckBoxList>
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

## Get Selected Item Server Side

To get all selected items, you can loop over the `Items` collection and check for the item's `Selected` property.

To get the first selected item and first selected index you can use the `SelectedItem` and `SelectedIndex` properties of the **RadCheckBoxList** control.

>caption Example 4: Get the selected items of the **RadCheckBoxList** from the code behind. 

````ASP.NET
<telerik:RadCheckBoxList ID="RadCheckBoxList1" runat="server" OnSelectedIndexChanged="RadCheckBoxList1_SelectedIndexChanged">
	<Items>
		<telerik:ButtonListItem Text="Item 1" Value="0" />
		<telerik:ButtonListItem Text="Item 2" Value="1" Selected="true" />
		<telerik:ButtonListItem Text="Item 3" Value="2" />
	</Items>
</telerik:RadCheckBoxList>
````

````C#
protected void RadCheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
{
	//get all selected items via a loop
    foreach (ButtonListItem item in RadCheckBoxList1.Items)
    {
        if(item.Selected)
        {
            Response.Write(string.Format("item with text {0} and value {1} is selected<br />", item.Text, item.Value));
        }
    }

	//get the first selected item through exposed properties
	int selectedIndex = RadCheckBoxList1.SelectedIndex;
	ButtonListItem selectedButtonListItem = RadCheckBoxList1.SelectedItem;
}
````
````VB
Protected Sub RadCheckBoxList1_SelectedIndexChanged(sender As Object, e As EventArgs)
	'get all selected items via a loop
    For Each item As ButtonListItem In RadCheckBoxList1.Items
        If item.Selected Then
            Response.Write(String.Format("item with text {0} and value {1} is selected<br />", item.Text, item.Value))
        End If
    Next

	'get the first selected item through exposed properties
	Dim selectedIndex As Integer = RadCheckBoxList1.SelectedIndex
	Dim selectedButtonListItem As ButtonListItem = RadCheckBoxList1.SelectedItem
End Sub
````

The `SelectedItem` reference provides all its properties (e.g., `Value`, `Text`, `Selected` and `Enabled`).


## Select Item Client Side

You can select a particular item of a **RadCheckBoxList** by passing the corresponding index in the `set_selectedIndex()` method of the control.

Another approach is to loop through the items via the `get_items()` method and use the `set_selected()` method each [Telerik.Web.UI.ButtonListItem]({%slug Telerik.Web.UI.ButtonListItem%}) item provides.

>caption Example 6: Select an item on the client side.

````JavaScript
var checkboxlist = $find("<%=RadCheckBoxList1.ClientID%>");
//select item by index
checkboxlist.set_selectedIndex(0);

//select item by another condition via its own methods
var items = checkboxlist.get_items();
for (var i = 0; i < items.length; i++) {
    if (items[i].get_text() == "Item 3") {
        items[i].set_selected(true);
    }
    else {
        items[i].set_selected(false);
    }
}
````


## Get Selected Item Client Side

You can obtain the selected items, first selected item and first selected item index of **RadCheckBoxList** through the `get_selectedItems()`, `get_selectedItem()`, and `get_selectedIndex()` methods.

The `get_selectedItems()` method returns an array of [Telerik.Web.UI.ButtonListItem]({%slug Telerik.Web.UI.ButtonListItem%}) items.

The `get_selectedIndices()` method provides an array of numbers that correspond to the indexes of the selected items.

>caption Example 7: Reference items, selected item and selected index of the **RadCheckBoxList** through its client-side API. 

````JavaScript
var checkboxlist = $find("<%=RadCheckBoxList1.ClientID%>");
var items = checkboxlist.get_items();
//loop over all the items and use their selected state
var selItems = cbl.get_selectedItems();
for (var i = 0; i < selItems.length; i++) {
    console.log(String.format("text: {0} with value: {1}", selItems[i].get_text(), selItems[i].get_value()));
}
//get the first selected item
var selectedItem = checkboxlist.get_selectedItem();
var selectedIndex = checkboxlist.get_selectedIndex();
````


## See Also

 * [Server-Side API]({%slug checkboxlist/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug checkboxlist/client-side-programming/overview%})
