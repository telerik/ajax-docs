---
title: Select State
page_title: Select State | RadToggleButton for ASP.NET AJAX Documentation
description: Select State
slug: togglebutton/functionality/select-state
tags: select,state
published: True
position: 0
---

# Select State

This help article showcases how to operate with the toggle states of **RadToggleButton** on the server-side/client-side.

* [Select Toggle State Server-Side](#select-toggle-state-server-side)

* [Get Selected Toggle State Server-Side](#get-selected-toggle-state-server-side)

* [Select Toggle State Client-Side](#select-toggle-state-client-side)

* [Get Selected Toggle State Client-Side](#get-selected-toggle-state-client-side)

## Select Toggle State Server-Side

To select a particular toggle state of **RadToggleButton** you should set the `Selected` property of the target toggle state to `true`.

>caption Example 1: Select a ButtonToggleState from the markup. 

````ASP.NET
	<telerik:RadToggleButton runat="server" ID="RadToggleButton1">
		<ToggleStates>
			<telerik:ButtonToggleState Text="State 1">
			</telerik:ButtonToggleState>
			<telerik:ButtonToggleState Text="State 2" Selected="true">
			</telerik:ButtonToggleState>
			<telerik:ButtonToggleState Text="State 3">
			</telerik:ButtonToggleState>
		</ToggleStates>
	</telerik:RadToggleButton>
```` 

>caption Example 2: Select a ButtonToggleState from the code behind. 

````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadToggleButton1.ToggleStates[1].Selected = true;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	RadToggleButton1.ToggleStates(1).Selected = True
End Sub
````


## Get Selected Toggle State Server-Side

To get the selected toggle state and selected toggle state index you can use the `SelectedToggleState` and `SelectedToggleStateIndex` properties of the **RadToggleButton** control.

>caption Example 3: Get `SelectedToggleState` and `SelectedToggleStateIndex` of **RadToggleButton** from the code behind. 

````ASP.NET
<telerik:RadToggleButton runat="server" ID="RadToggleButton1" OnToggleStateChanged="RadToggleButton1_ToggleStateChanged">
	<ToggleStates>
		<telerik:ButtonToggleState Text="State 1" CommandName="command1" CommandArgument="argument1" Value="value1">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="State 2" CommandName="comamnd2" CommandArgument="argument2" Value="value2" Selected="true">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="State 3" CommandName="command3" CommandArgument="argument3" Value="value3">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadToggleButton>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	int selectedToggleStateIndex = RadToggleButton1.SelectedToggleStateIndex;
	ButtonToggleState selectedToggleState = RadToggleButton1.SelectedToggleState;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	Dim selectedToggleStateIndex As Integer = RadToggleButton1.SelectedToggleStateIndex
	Dim selectedToggleState As ButtonToggleState = RadToggleButton1.SelectedToggleState
End Sub
````

The selected toggle state reference provides all its properties (e.g., `Value`, `Text`, `CommandName`) and inner tags (`Icon` and `Image`).

>tip You can also get the `SelectedToggleState`, `SelectedToggleStateIndex` and the corresponding properties (e.g., `Value`, `Text`, `CommandName`, `CommandArgument`) of the selected toggle state from the arguments of the `OnToggleStateChanged` event (**Example 4**).

>caption Example 4: Get `SelectedToggleState`, `SelectedToggleStateIndex`, `CommandName` and `CommandArgument` of the `ToggleButtonStateChangedEventArgs` event arguments. 


````C#
	protected void RadToggleButton1_ToggleStateChanged(object sender, Telerik.Web.UI.ToggleButtonStateChangedEventArgs e)
	{
		int selectedToggleStateIndex = e.SelectedToggleStateIndex;
		ButtonToggleState selectedToggleState = e.SelectedToggleState;
		string commandNameArgument = string.Format("CommandName: {0}, CommandArgument: {1}", e.CommandName, e.CommandArgument);
	}
````
````VB
Protected Sub RadToggleButton1_ToggleStateChanged(sender As Object, e As Telerik.Web.UI.ToggleButtonStateChangedEventArgs)
	Dim selectedToggleStateIndex As Integer = e.SelectedToggleStateIndex
	Dim selectedToggleState As ButtonToggleState = e.SelectedToggleState
	Dim commandNameArgument As String = String.Format("CommandName: {0}, CommandArgument: {1}", e.CommandName, e.CommandArgument)
End Sub
````

## Select Toggle State Client-Side

You can select a particular toggle state of **RadToggleButton** by passing the corresponding index in the `set_selectedToggleStateIndex()` method of the control.

>caption Example 5: Select a toggle state on the client-side.

````JavaScript
var toggleButton = $find("<%=RadToggleButton1.ClientID%>");
toggleButton.set_selectedToggleStateIndex(0);
````


## Get Selected Toggle State Client-Side

You can obtain the toggle states, selected toggle state and selected toggle state index of **RadToggleButton** through the `get_toggleStates()`, `get_selectedToggleState()`, and `get_selectedToggleStateIndex()` methods.

>caption Example 6: Reference toggle states, selected toggle state and selected toggle state index of **RadToggleButton** through its client-side API. 

````JavaScript
var toggleButton = $find("<%=RadToggleButton1.ClientID%>");
var toggleStates = toggleButton.get_toggleStates();
var selectedToggleState = toggleButton.get_selectedToggleState();
var selectedToggleStateIndex = toggleButton.get_selectedToggleStateIndex();
````


## See Also

 * [Image]({%slug togglebutton/functionality/image%})
 
 * [Custom Icons]({%slug togglebutton/functionality/icons/custom-icons%})

 * [Server-Side API]({%slug togglebutton/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug togglebutton/client-side-programming/overview%})
