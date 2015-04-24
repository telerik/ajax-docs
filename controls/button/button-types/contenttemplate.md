---
title: ContentTemplate
page_title: ContentTemplate | RadButton for ASP.NET AJAX Documentation
description: ContentTemplate
slug: button/button-types/contenttemplate
tags: contenttemplate
published: True
position: 4
---

# ContentTemplate

This help article showcases how to add complex content (server-side controls and HTML elements) in a **RadButton** instead of plain text. You can do this both in the markup, or in the code behind:

* [Add Elements to RadButton in the Markup](#add-elements-to-radbutton-in-the-markup)

* [Add Elements to RadButton from the Code-behind](#add-elements-to-radbutton-from-the-code-behind)

## Add Elements to RadButton in the Markup

In order to add controls to the **RadButton** in the markup, you should place them directly in the composite **ContentTemplate** property (**Example 1**).

>caption Example 1: Adding controls to the **ContentTemplate** of a **RadButton** in the markup.

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1">
	<ContentTemplate>
		<img alt="cog" src="http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Img/cog.png" />
		<span>Tasks</span>
		<telerik:RadRating ID="RadRating1" runat="server" Enabled="false" Value="3" SelectionMode="Continuous" ItemCount="5" />
	</ContentTemplate>
</telerik:RadButton>
````

## Add Elements to RadButton from the Code-behind

You can add controls to the **RadButton** from the code-behind in two ways:

* Add elements to the **Controls** collection of the **RadButton** (**Example 2**).**Example 2**: Adding controls to the **Controls** collection of **RadButton** from code behind.

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" Width="160px" Height="70px">
</telerik:RadButton>
````
````C#	
protected void Page_Init(object sender, EventArgs e)
{
	Literal radButtonContent = new Literal();
	radButtonContent.ID = "radButtonContent";
	radButtonContent.Text = "<img alt='car' src='http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Img/car.png' /><span>Vehicles</span>";
	RadButton1.Controls.Add(radButtonContent);
}
````
````VB	
Protected Sub Page_Init(sender As Object, e As EventArgs)
	Dim radButtonContent As New Literal()
	radButtonContent.ID = "radButtonContent"
	radButtonContent.Text = "<img alt='car' src='http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Img/car.png' /><span>Vehicles</span>"
	RadButton1.Controls.Add(radButtonContent)
End Sub
````

* Set the **ContentTemplate** property to an instance of a class that implements the **ITemplate** interface (**Example 3**).**Example 3**: Adding controls to the **RadButton** by using the **ITemplate** class.



````ASPNET
<telerik:RadButton runat="server" ID="RadButton1" Width="160px" Height="70px">
</telerik:RadButton>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadButton1.ContentTemplate = new ButtonContentTemplate();
}

public class ButtonContentTemplate : ITemplate
{
	void ITemplate.InstantiateIn(Control container)
	{
		System.Web.UI.WebControls.Image contentImage = new System.Web.UI.WebControls.Image();
		contentImage.ID = "contentImage";
		contentImage.ImageUrl = "http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Img/envelope.png";
		contentImage.AlternateText = "envelope";
		container.Controls.Add(contentImage);

		Label contentLabel = new Label();
		contentLabel.ID = "contentLabel";
		contentLabel.Text = "E-Mail";
		container.Controls.Add(contentLabel);
	}
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	RadButton1.ContentTemplate = New ButtonContentTemplate()
End Sub

Public Class ButtonContentTemplate
	Implements ITemplate
	Private Sub ITemplate_InstantiateIn(container As Control) Implements ITemplate.InstantiateIn
		Dim contentImage As New System.Web.UI.WebControls.Image()
		contentImage.ID = "contentImage"
		contentImage.ImageUrl = "http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Img/envelope.png"
		contentImage.AlternateText = "envelope"
		container.Controls.Add(contentImage)

		Dim contentLabel As New Label()
		contentLabel.ID = "contentLabel"
		contentLabel.Text = "E-Mail"
		container.Controls.Add(contentLabel)
	End Sub
End Class
````


# See Also

 * [Button Types Overview]({%slug button/button-types/overview%})

 * [Split Button]({%slug button/button-types/split-button%})

 * [Icons Overview]({%slug button/button-types/icons/overview%})

 * [Image Button]({%slug button/button-types/image-button%})

 * [Toggle button]({%slug button/button-types/toggle-button%})