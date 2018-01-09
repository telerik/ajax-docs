---
title: Getting Started
page_title: Getting Started | RadCheckBoxList for ASP.NET AJAX Documentation
description: Getting Started
slug: checkboxlist/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following help article demonstrates how to set up a page with a **RadCheckBoxList** control and use its **OnSelectedIndexChanged** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application, add a **RadCheckBoxList** control:

	**ASP.NET**	
	
		<telerik:RadCheckBoxList ID="RadCheckBoxList1" runat="server">
		</telerik:RadCheckBoxList>

1. Add two `ButtonListItem` objects to the `Items` collection and set the appropriate values for `Text` and `Selected` properties of each item:

	**ASP.NET**

		<telerik:RadCheckBoxList ID="RadCheckBoxList1" runat="server">
			<Items>
				<telerik:ButtonListItem Text="Accept" Value="0" Selected="true" />
				<telerik:ButtonListItem Text="Decline" Value="1" />
			</Items>
		</telerik:RadCheckBoxList>

1. To hook to the **OnSelectedIndexChanged** server-side event of **RadCheckBoxList**, add an attribute to the main control tag and add the method signature:

	**ASP.NET**

		<telerik:RadCheckBoxList ID="RadCheckBoxList1" runat="server" OnSelectedIndexChanged="RadCheckBoxList1_SelectedIndexChanged">
			<Items>
				<telerik:ButtonListItem Text="Accept" Value="0" Selected="true" />
				<telerik:ButtonListItem Text="Decline" Value="1" />
			</Items>
		</telerik:RadCheckBoxList>

	**C#**
	
		protected void RadCheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
		{

		}

	**VB.NET**
	
		Protected Sub RadCheckBoxList1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

1. Add a Label control to write the information to:

	**ASP.NET**

		<asp:Label ID="Label1" Text="" runat="server" />

1. Use the **OnSelectedIndexChanged** event handler to write information about the properties of the `SelectedItem` of the `RadCheckBoxList`:

	**C#**
	
		protected void RadCheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
		{
			RadCheckBoxList checkboxlist = sender as RadCheckBoxList;


			string data = string.Format("selected index: {0}, selected value {1}, selected text: {2}",
										checkboxlist.SelectedIndex, checkboxlist.SelectedValue, checkboxlist.SelectedItem.Text);
			Label1.Text = data;
		}

	**VB.NET**
	
		Protected Sub RadCheckBoxList1_SelectedIndexChanged(sender As Object, e As EventArgs)
			Dim checkboxlist As RadCheckBoxList = TryCast(sender, RadCheckBoxList)


			Dim data As String = String.Format("selected index: {0}, selected value {1}, selected text: {2}", checkboxlist.SelectedIndex, checkboxlist.SelectedValue, checkboxlist.SelectedItem.Text)
			Label1.Text = data
		End Sub



## See Also

 * [Design Time]({%slug checkboxlist/design-time%})

 * [Properties and Events]({%slug checkboxlist/server-side-programming/properties-and-events%})
