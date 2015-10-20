---
title: Getting Started
page_title: Getting Started | RadLinkButton for ASP.NET AJAX Documentation
description: Getting Started
slug: linkbutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadLinkButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadLinkButton** control:

	**ASP.NET**	
	
		<telerik:RadLinkButton id="RadLinkButton1" runat="server" text="My Button">
		</telerik:RadLinkButton>	

	The **Text** property specifies the text displayed in the **RadLinkButton** control.

1. To hook to the **OnClick** server-side event of **RadLinkButton** switch to Design view of Visual Studio and double click on the button. This operation will insert the following function in the code behind file:

	**C#**
	
		protected void RadLinkButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadLinkButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	as well as add `OnClick="RadLinkButton1_Click"` to the **RadLinkButton**'s declaration. In the Click event handler add the code that you want to be executed when the **RadLinkButton** control is clicked.

## See Also

 * [Properties and Events]({%slug linkbutton/server-side-programming/properties-and-events%})
