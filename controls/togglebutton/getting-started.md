---
title: Getting Started
page_title: Getting Started - RadToggleButton
description: Check our Web Forms article about Getting Started.
slug: togglebutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadToggleButton** control and use its **OnToggleStateChanged** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadToggleButton** control:

	**ASP.NET**	
	
		<telerik:RadToggleButton ID="RadToggleButton1" runat="server">
		</telerik:RadToggleButton>	

1. Add two states the user can switch between and set their `Text`, `Value` and `CommandArgument` properties so you can distinguish them on the server:

	**ASP.NET**

		<telerik:RadToggleButton runat="server" ID="RadToggleButton1">
			<ToggleStates>
				<telerik:ButtonToggleState Text="First state" Value="0" CommandArgument="arg1">
				</telerik:ButtonToggleState>
				<telerik:ButtonToggleState Text="Second State" Value="1" CommandArgument="arg2">
				</telerik:ButtonToggleState>
			</ToggleStates>
		</telerik:RadToggleButton>

1. To hook to the **OnToggleStateChanged** server-side event of **RadToggleButton** add an attribute to the main control tag and add the method signature:

	**ASP.NET**

		<telerik:RadToggleButton runat="server" ID="RadToggleButton1" OnToggleStateChanged="RadToggleButton1_ToggleStateChanged">
			<ToggleStates>
				<telerik:ButtonToggleState Text="First state" Value="0" CommandArgument="arg1">
				</telerik:ButtonToggleState>
				<telerik:ButtonToggleState Text="Second State" Value="1" CommandArgument="arg2">
				</telerik:ButtonToggleState>
			</ToggleStates>
		</telerik:RadToggleButton>

	**C#**
	
		protected void RadToggleButton1_ToggleStateChanged(object sender, ToggleButtonStateChangedEventArgs e)
		{
	
		}

	**VB**
	
		Protected Sub RadToggleButton1_ToggleStateChanged(ByVal sender As Object, ByVal e As ToggleButtonStateChangedEventArgs)
		End Sub

1. Add a Label control to write the information to:

	**ASP.NET**

		<asp:Label ID="Label1" Text="" runat="server" />

1. Use the **OnToggleStateChanged** event handler to write information about the current button state:

	**C#**
	
		protected void RadToggleButton1_ToggleStateChanged(object sender, ToggleButtonStateChangedEventArgs e)
		{
			string data = string.Format("current text: {0}, current value {1}, current command argument: {2}",
										 e.SelectedToggleState.Text, e.SelectedToggleState.Value, e.SelectedToggleState.CommandArgument);
			Label1.Text = data;
		}

	**VB**
	
		Protected Sub RadToggleButton1_ToggleStateChanged(sender As Object, e As ToggleButtonStateChangedEventArgs)
			Dim data As String = String.Format("current text: {0}, current value {1}, current command argument: {2}", _
												 e.SelectedToggleState.Text, e.SelectedToggleState.Value, e.SelectedToggleState.CommandArgument)
			Label1.Text = data
		End Sub

## See Also

 * [Design Time]({%slug togglebutton/design-time%})

 * [Properties and Events]({%slug togglebutton/server-side-programming/properties-and-events%})
