---
title: Getting Started
page_title: Getting Started | RadPushButton for ASP.NET AJAX Documentation
description: Getting Started
slug: pushbutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadPushButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadPushButton** control:

	**ASP.NET**	
	
		<telerik:RadPushButton id="RadPushButton1" runat="server" text="My Button">
		</telerik:RadPushButton>	

	The **Text** property specifies the text displayed in the **RadPushButton** control.

1. To hook to the **OnClick** server-side event of **RadPushButton** switch to Design view of Visual Studio and double click on the button. This operation will insert the following function in the code behind file:

	**C#**
	
		protected void RadPushButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadPushButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	as well as add `OnClick="RadPushButton1_Click"` to the **RadPushButton**'s declaration. In the Click event handler add the code that you want to be executed when the **RadPushButton** control is clicked.

## See Also

 * [Properties and Events]({%slug pushbutton/server-side-programming/properties-and-events%})
