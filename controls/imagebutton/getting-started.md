---
title: Getting Started
page_title: Getting Started - RadImageButton
description: Check our Web Forms article about Getting Started.
slug: imagebutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadImageButton** control and attach its **OnClick** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application, add a **RadImageButton** control:

	**ASP.NET**	
	
		<telerik:RadImageButton id="RadImageButton1" runat="server" Width="100px" Height="100px" Text="Image Button">
            <Image Url="image.png" />
		</telerik:RadImageButton>	

	The **Image-Url** property specifies the image that is going to be rendered in the **RadImageButton**. The **Text** property renders the specified text over the image.

1. To hook to the **OnClick** server-side event of **RadImageButton**, switch to [Design view]({%slug imagebutton/design-time%}) of Visual Studio and double-click on the **RadImageButton**. This will insert the following function in the code-behind file:

	**C#**
	
		protected void RadImageButton1_Click(object sender, EventArgs e)
		{
		}

	**VB**
	
		Protected Sub RadImageButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

	This will also add `OnClick="RadImageButton1_Click"` to the **RadImageButton**'s declaration. In the Click event handler, add the code that you want to be executed when the **RadImageButton** control is clicked.

## See Also

 * [Design Time]({%slug imagebutton/design-time%})

 * [Properties and Events]({%slug imagebutton/server-side-programming/properties-and-events%})
