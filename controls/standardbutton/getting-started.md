---
title: Getting Started
page_title: Getting Started | RadStandardButton for ASP.NET AJAX Documentation
description: Getting Started
slug: standardbutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadStandardButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadStandardButton** control:

	**ASP.NET**	
	
		<telerik:RadStandardButton id="RadStandardButton1" runat="server" text="My Button">
		</telerik:RadStandardButton>	

	The **Text** property specifies the text displayed in the **RadStandardButton** control.

1. To hook to the **OnClick** server-side event of **RadStandardButton** switch to Design view of Visual Studio and double click on the button. This operation will insert the following function in the code behind file:

	**C#**
	
		protected void RadStandardButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadStandardButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	as well as add `OnClick="RadStandardButton1_Click"` to the **RadStandardButton**'s declaration. In the Click event handler add the code that you want to be executed when the **RadStandardButton** control is clicked.

## See Also

 * [Properties and Events]({%slug standardbutton/server-side-programming/properties-and-events%})
