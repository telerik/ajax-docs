---
title: Set Properties
page_title: Set Properties | RadEditor for ASP.NET AJAX Documentation
description: Set Properties
slug: editor/getting-started/set-properties
tags: set,properties
published: True
position: 2
---

# Set Properties

There are several different ways for setting RadEditor properties:

* **Inline, in the control declaration**: You can edit RadEditor properties directly in the ASP.NET aspx or ascx declaration. The advantages to this approach is that editing is easy and no compilation is required to apply the changes. The "best practice" here would be to set properties that will not be changed in the application logic:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server" Width="500" Height="500">
   <Content>
	 <b>Setting inline properties</b>
   </Content>
</telerik:RadEditor> 
````

* **In the code-behind**: The advantage to this approach is that you discover improper settings when the application is compiled. Also, you can implement complex logic for setting properties that depend on multiple factors. Here you can set properties conditionally or in response to an event.

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		RadEditor1.Width = Unit.Pixel(500);
		RadEditor1.Height = Unit.Pixel(500);
		RadEditor1.Content = "<b>Setting inline properties</b>";
	}
} 
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not Page.IsPostBack Then
		RadEditor1.Width = Unit.Pixel(500)
		RadEditor1.Height = Unit.Pixel(500)
		RadEditor1.Content = "<b>Setting inline properties</b>"
	End If
End Sub
````

* **Using Themes**: This approach is intended to be used when similar settings must be used for several RadEditor controls in an application. This ensures that configuration of all controls is done from a single location.To use Themes with the editor (see the following [MSDN](https://msdn2.microsoft.com/en-us/library/wcyt4fxb%28vs.80%29.aspx) link on themes). See the [Using Themes]({%slug editor/how-to/use-themes%}) topic for more information.
