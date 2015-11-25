---
title: Getting Started
page_title: Getting Started | RadToggleButton for ASP.NET AJAX Documentation
description: Getting Started
slug: togglebutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadToggleButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadToggleButton** control:

	**ASP.NET**	
	
		<telerik:RadToggleButton id="RadToggleButton1" runat="server" text="My Button">
		</telerik:RadToggleButton>	

	The **Text** property specifies the text displayed in the **RadToggleButton** control.

1. To hook to the **OnClick** server-side event of **RadToggleButton** switch to [Design view]({%slug togglebutton/design-time%}) of Visual Studio and double click on the button. This operation will insert the following function in the code behind file:

	**C#**
	
		protected void RadToggleButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadToggleButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	as well as add `OnClick="RadToggleButton1_Click"` to the **RadToggleButton**'s declaration. In the Click event handler add the code that you want to be executed when the **RadToggleButton** control is clicked.

## See Also

 * [Design Time]({%slug togglebutton/design-time%})

 * [Properties and Events]({%slug togglebutton/server-side-programming/properties-and-events%})
