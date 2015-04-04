---
title: ContentTemplate
page_title: ContentTemplate | UI for ASP.NET AJAX Documentation
description: ContentTemplate
slug: button/button-types/contenttemplate
tags: contenttemplate
published: True
position: 4
---

# ContentTemplate



This help article showcases how to add complex content (server-side controls and HTML elements) in a __RadButton__ instead of plain text. You can do this both in the markup, or in the code behind:

* [Add Elements to RadButton in the Markup](#add-elements-to-radbutton-in-the-markup)

* [Add Elements to RadButton from the Code-behind](#add-elements-to-radbutton-from-the-code-behind)

## Add Elements to RadButton in the Markup

In order to add controls to the __RadButton__ in the markup, you should place them directly in the composite __ContentTemplate__ property (__Example 1__).

__Example 1__: Adding controls to the __ContentTemplate__ of a __RadButton__ in the markup.

````ASPNET
		<telerik:RadButton runat="server" ID="RadButton1">
			<ContentTemplate>
				<img alt="cog" src="http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Img/cog.png" />
				<span>Tasks</span>
				<telerik:RadRating ID="RadRating1" runat="server" Enabled="false" Value="3" SelectionMode="Continuous" ItemCount="5" />
			</ContentTemplate>
		</telerik:RadButton>
````



## Add Elements to RadButton from the Code-behind

You can add controls to the __RadButton__ from the code-behind in two ways:

* Add elements to the __Controls__ collection of the __RadButton__ (__Example 2__).__Example 2__: Adding controls to the __Controls__ collection of __RadButton__ from code behind.



````ASPNET
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


* Set the __ContentTemplate__ property to an instance of a class that implements the __ITemplate__ interface (__Example 3__).__Example 3__: Adding controls to the __RadButton__ by using the __ITemplate__ class.



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

 * [Overview]({%slug button/button-types/overview%})

 * [Split Button]({%slug button/button-types/split-button%})

 * [Overview]({%slug button/button-types/icons/overview%})

 * [Image Button]({%slug button/button-types/image-button%})

 * [Toggle button]({%slug button/button-types/toggle-button%})
