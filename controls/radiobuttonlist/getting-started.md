---
title: Getting Started
page_title: Getting Started | RadRadioButtonList for ASP.NET AJAX Documentation
description: Getting Started
slug: radiobuttonlist/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadRadioButtonList** control and use its **OnSelectedIndexChanged** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadRadioButtonList** control:

	**ASP.NET**	
	
		<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server">
		</telerik:RadRadioButtonList>

1. Add two `RadioButtonListItem` objects with appropriate `Text` and `Selected` state to the `Items` collection :

	**ASP.NET**

		<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server">
			<Items>
				<telerik:RadioButtonListItem Text="Accept" Value="0" Selected="true" />
				<telerik:RadioButtonListItem Text="Decline" Value="1" />
			</Items>
		</telerik:RadRadioButtonList>

1. To hook to the **OnSelectedIndexChanged** server-side event of **RadRadioButtonList** add an attribute to the main control tag and add the method signature:

	**ASP.NET**

		<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" OnSelectedIndexChanged="RadRadioButtonList1_SelectedIndexChanged">
			<Items>
				<telerik:RadioButtonListItem Text="Accept" Value="0" Selected="true" />
				<telerik:RadioButtonListItem Text="Decline" Value="1" />
			</Items>
		</telerik:RadRadioButtonList>

	**C#**
	
		protected void RadRadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
		{

		}

	**VB**
	
		Protected Sub RadRadioButtonList1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

1. Add a Label control to write the information to:

	**ASP.NET**

		<asp:Label ID="Label1" Text="" runat="server" />

1. Use the **OnSelectedIndexChanged** event handler to write information about the properties of the `SelectedItem` of the `RadRadioButtonList`:

	**C#**
	
		protected void RadRadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
		{
			RadRadioButtonList radioButtonList = sender as RadRadioButtonList;


			string data = string.Format("selected index: {0}, selected value {1}, selected text: {2}",
										radioButtonList.SelectedIndex, radioButtonList.SelectedValue, radioButtonList.SelectedItem.Text);
			Label1.Text = data;
		}

	**VB**
	
		Protected Sub RadRadioButtonList1_SelectedIndexChanged(sender As Object, e As EventArgs)
			Dim radioButtonList As RadRadioButtonList = TryCast(sender, RadRadioButtonList)


			Dim data As String = String.Format("selected index: {0}, selected value {1}, selected text: {2}", radioButtonList.SelectedIndex, radioButtonList.SelectedValue, radioButtonList.SelectedItem.Text)
			Label1.Text = data
		End Sub



## See Also

 * [Design Time]({%slug radiobuttonlist/design-time%})

 * [Properties and Events]({%slug radiobuttonlist/server-side-programming/properties-and-events%})
