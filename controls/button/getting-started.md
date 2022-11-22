---
title: Getting Started
page_title: Getting Started - RadButton
description: Check our Web Forms article about Getting Started.
slug: button/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started with the Telerik WebForms Button

The following tutorial demonstrates how to set up a page with a **RadButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadButton** control:

	**ASP.NET**	
	
		<telerik:RadButton RenderMode="Lightweight" id="RadButton1" runat="server" text="My Button">
		</telerik:RadButton>	

	The **Text** property specifies the text displayed in the **RadButton** control.

1. To hook to the **OnClick** server-side event of **RadButton** switch to Design view of Visual Studio and double click on the button. This operation will insert the following function in the code behind file:

	**C#**
	
		protected void RadButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	as well as add `OnClick="RadButton1_Click"` to the **RadButton**'s declaration.In the Click event handler add the code that you want to be executed when the **RadButton** control is clicked.

## See Also

 * [Properties and Events]({%slug button/server-side-programming/properties-and-events%})

 * [Methods]({%slug button/server-side-programming/methods%})
