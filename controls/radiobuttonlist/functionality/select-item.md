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

This help article showcases how to operate with the items of **RadRadioButtonList** on the server-side/client-side.

* [Select Toggle State Server-Side](#select-toggle-state-server-side)

* [Get Selected Toggle State Server-Side](#get-selected-toggle-state-server-side)

* [Select Toggle State Client-Side](#select-toggle-state-client-side)

* [Get Selected Toggle State Client-Side](#get-selected-toggle-state-client-side)

## Select Item Server-Side

To select a particular item of **RadRadioButtonList** you should set the `Selected` property of the target item to `true`.

>caption Example 1: Select a RadioButtonListItem from the markup. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList" runat="server">
	<Items>
		<telerik:RadioButtonListItem Text="Item 1" Value="0" Selected="true" />
		<telerik:RadioButtonListItem Text="Item 2" Value="1" />
	</Items>
</telerik:RadRadioButtonList>
```` 

>caption Example 2: Select a ButtonToggleState from the code behind. 

````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadRadioButtonList1.ToggleStates[1].Selected = true;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	RadRadioButtonList1.ToggleStates(1).Selected = True
End Sub
````

For a data-bound scenario you can use the `SelectedToggleStateIndex` of the control (**Example 3**).

>caption Example 3: Databind the selected state of a RadRadioButtonList.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" Width="150px">
	<MasterTableView AutoGenerateColumns="false">
		<Columns>
			<telerik:GridTemplateColumn DataField="SelectToggleStateField" HeaderText="SelectToggleStateField">
				<ItemTemplate>
					<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" SelectedToggleStateIndex='<%#Eval("SelectState") %>'>
						<ToggleStates>
							<telerik:ButtonToggleState Text="State 1">
							</telerik:ButtonToggleState>
							<telerik:ButtonToggleState Text="State 2">
							</telerik:ButtonToggleState>
							<telerik:ButtonToggleState Text="State 3">
							</telerik:ButtonToggleState>
						</ToggleStates>
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

>warning The `SelectedToggleStateIndex` property will not take effect if directly assigned with a value in the markup. The `SelectedToggleStateIndex` property takes effect only when set from the code behind or integrated in a data-bound scenario in the markup (**Example 3**). 

## Get Selected Toggle State Server-Side

To get the selected toggle state and selected toggle state index you can use the `SelectedToggleState` and `SelectedToggleStateIndex` properties of the **RadRadioButtonList** control.

>caption Example 4: Get `SelectedToggleState` and `SelectedToggleStateIndex` of **RadRadioButtonList** from the code behind. 

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" OnToggleStateChanged="RadRadioButtonList1_ToggleStateChanged">
	<ToggleStates>
		<telerik:ButtonToggleState Text="State 1" CommandName="command1" CommandArgument="argument1" Value="value1">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="State 2" CommandName="comamnd2" CommandArgument="argument2" Value="value2" Selected="true">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="State 3" CommandName="command3" CommandArgument="argument3" Value="value3">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadRadioButtonList>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	int selectedToggleStateIndex = RadRadioButtonList1.SelectedToggleStateIndex;
	ButtonToggleState selectedToggleState = RadRadioButtonList1.SelectedToggleState;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	Dim selectedToggleStateIndex As Integer = RadRadioButtonList1.SelectedToggleStateIndex
	Dim selectedToggleState As ButtonToggleState = RadRadioButtonList1.SelectedToggleState
End Sub
````

The selected toggle state reference provides all its properties (e.g., `Value`, `Text`, `CommandName`) and inner tags (`Icon` and `Image`).

>tip You can also get the `SelectedToggleState`, `SelectedToggleStateIndex` and the corresponding properties (e.g., `Value`, `Text`, `CommandName`, `CommandArgument`) of the selected toggle state from the arguments of the `OnToggleStateChanged` event (**Example 5**).

>caption Example 5: Get `SelectedToggleState`, `SelectedToggleStateIndex`, `CommandName` and `CommandArgument` of the `ToggleButtonStateChangedEventArgs` event arguments. 


````C#
	protected void RadRadioButtonList1_ToggleStateChanged(object sender, Telerik.Web.UI.ToggleButtonStateChangedEventArgs e)
	{
		int selectedToggleStateIndex = e.SelectedToggleStateIndex;
		ButtonToggleState selectedToggleState = e.SelectedToggleState;
		string commandNameArgument = string.Format("CommandName: {0}, CommandArgument: {1}", e.CommandName, e.CommandArgument);
	}
````
````VB
Protected Sub RadRadioButtonList1_ToggleStateChanged(sender As Object, e As Telerik.Web.UI.ToggleButtonStateChangedEventArgs)
	Dim selectedToggleStateIndex As Integer = e.SelectedToggleStateIndex
	Dim selectedToggleState As ButtonToggleState = e.SelectedToggleState
	Dim commandNameArgument As String = String.Format("CommandName: {0}, CommandArgument: {1}", e.CommandName, e.CommandArgument)
End Sub
````

## Select Toggle State Client-Side

You can select a particular toggle state of **RadRadioButtonList** by passing the corresponding index in the `set_selectedToggleStateIndex()` method of the control.

>caption Example 6: Select a toggle state on the client-side.

````JavaScript
var toggleButton = $find("<%=RadRadioButtonList1.ClientID%>");
toggleButton.set_selectedToggleStateIndex(0);
````


## Get Selected Toggle State Client-Side

You can obtain the toggle states, selected toggle state and selected toggle state index of **RadRadioButtonList** through the `get_toggleStates()`, `get_selectedToggleState()`, and `get_selectedToggleStateIndex()` methods.

>caption Example 7: Reference toggle states, selected toggle state and selected toggle state index of **RadRadioButtonList** through its client-side API. 

````JavaScript
var toggleButton = $find("<%=RadRadioButtonList1.ClientID%>");
var toggleStates = toggleButton.get_toggleStates();
var selectedToggleState = toggleButton.get_selectedToggleState();
var selectedToggleStateIndex = toggleButton.get_selectedToggleStateIndex();
````


## See Also

 * [Image]({%slug togglebutton/functionality/image%})
 
 * [Custom Icons]({%slug togglebutton/functionality/icons/custom-icons%})

 * [Server-Side API]({%slug togglebutton/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug togglebutton/client-side-programming/overview%})
