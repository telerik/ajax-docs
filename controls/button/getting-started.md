---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: button/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started



## 

The following tutorial demonstrates how to set up a page with a __RadButton__ control and attach its __OnClick__ server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a __RadButton__ control:

````ASPNET
		
		<telerik:RadButton id="RadButton1" runat="server" text="My Button">
		</telerik:RadButton>
		
````

The __Text__ property specifies the text displayed in the __RadButton__ control.

1. To hook to the __OnClick__ server-side event of __RadButton__ switch to Design view ofVisual Studio and double click on the button. This operation will insert the following function in the code behind file:

>tabbedCode

````C#
		protected void RadButton1_Click(object sender, EventArgs e)
		{
		}
````



````VB.NET
		Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
		End Sub
````


>endas well as add OnClick="RadButton1_Click" to the __RadButton__'s declaration.In the Click event handler add the code that you want to be executed when the __RadButton__ control is clicked.

# See Also

 * [Properties and Events]({%slug button/server-side-programming/properties-and-events%})

 * [Methods]({%slug button/server-side-programming/methods%})
