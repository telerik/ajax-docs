---
title: Getting Started
page_title: Getting Started | RadImageButton for ASP.NET AJAX Documentation
description: Getting Started
slug: imagebutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadImageButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadImageButton** control:

	**ASP.NET**	
	
		<telerik:RadImageButton id="RadImageButton1" runat="server" text="My Button">
		</telerik:RadImageButton>	

	The **Text** property specifies the text displayed in the **RadImageButton** control.

1. To hook to the **OnClick** server-side event of **RadImageButton** switch to [Design view]({%slug imagebutton/design-time%}) of Visual Studio and double click on the button. This operation will insert the following function in the code behind file:

	**C#**
	
		protected void RadImageButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadImageButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	as well as add `OnClick="RadImageButton1_Click"` to the **RadImageButton**'s declaration. In the Click event handler add the code that you want to be executed when the **RadImageButton** control is clicked.

## See Also

 * [Design Time]({%slug imagebutton/design-time%})

 * [Properties and Events]({%slug imagebutton/server-side-programming/properties-and-events%})
