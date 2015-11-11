---
title: ContentTemplate
page_title: ContentTemplate | RadImageButton for ASP.NET AJAX Documentation
description: ContentTemplate
slug: imagebutton/functionality/content-template
tags: contenttemplate
published: True
position: 1
---

# ContentTemplate

This help article showcases how to add complex content (server-side controls and HTML elements) in **RadImageButton** instead of a simple image with/without text (**Figure 1**). You can do this both in the markup, or in the code-behind:

* [Add Elements to RadImageButton in the Markup](#add-elements-to-radimagebutton-in-the-markup)

* [Add Elements to RadImageButton from the Code-behind](#add-elements-to-radimagebutton-from-the-code-behind)

## Add Elements to RadImageButton in the Markup

In order to add controls to the **RadImageButton** in the markup, you should place them directly in the composite **ContentTemplate** property (**Example 1**).

>caption Figure 1: RadImageButtons with ContentTemplate. The result from Examples 1-3.

![RadImageButtons with ContentTemplate](images/RadImageButtons-contenttemplate.png)

>caption Example 1: Adding controls to ContentTemplate of RadImageButton in the markup.

````ASP.NET
<telerik:RadImageButton runat="server" ID="RadImageButton1">
	<ContentTemplate>
        <img alt="cog" src="http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Images/cog.png" />
        <telerik:RadRating ID="RadRating1" runat="server" Enabled="false" Value="3" SelectionMode="Continuous" ItemCount="5" />
		<div>Tasks</div>
	</ContentTemplate>
</telerik:RadImageButton>
````

## Add Elements to RadImageButton from the Code-behind

You can add controls to **RadImageButton** from the code-behind in two ways:

* Add elements to the **Controls** collection of **RadImageButton** (**Example 2**). 

	**Example 2**: Adding controls to the **Controls** collection of **RadImageButton** from the code-behind.

	**ASP.NET**

		<telerik:RadImageButton runat="server" ID="RadImageButton1" Width="160px" Height="85px">
		</telerik:RadImageButton>

	**C#**

		protected void Page_Init(object sender, EventArgs e)
		{
			Image buttonContentImage = new Image()
			{
				ID = "buttonContent",
				AlternateText = "my car",
				ImageUrl = "http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Images/car.png"
			};
			Label buttonContentLabel = new Label() { ID = "Label1", Text = "Vehicles" };
			RadImageButton1.Controls.Add(buttonContentImage);
			RadImageButton1.Controls.Add(buttonContentLabel);
		}
	**VB**

		Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
			Dim buttonContentImage As New Image() With {
				.ID = "buttonContent",
				.AlternateText = "my car",
				.ImageUrl = "http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Images/car.png"
			}
			Dim buttonContentLabel As New Label() With {
			   .ID = "Label1",
			   .Text = "Vehicles"
			}
			RadImageButton1.Controls.Add(buttonContentImage)
			RadImageButton1.Controls.Add(buttonContentLabel)
		End Sub

* Set the **ContentTemplate** property to an instance of a class that implements the **ITemplate** interface (**Example 3**).

	**Example 3**: Adding controls to the **RadImageButton** by using the **ITemplate** class.

	**ASP.NET**

		<telerik:RadImageButton runat="server" ID="RadImageButton1" Width="71px" Height="70px">
		</telerik:RadImageButton>

	**C#**

		protected void Page_Init(object sender, EventArgs e)
		{
			RadImageButton1.ContentTemplate = new ButtonContentTemplate();
		}

		public class ButtonContentTemplate : ITemplate
		{
			void ITemplate.InstantiateIn(Control container)
			{
				System.Web.UI.WebControls.Image contentImage = new System.Web.UI.WebControls.Image();
				contentImage.ID = "contentImage";
				contentImage.ImageUrl = "http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Images/envelope.png";
				contentImage.AlternateText = "envelope";
				container.Controls.Add(contentImage);

				Label contentLabel = new Label();
				contentLabel.ID = "contentLabel";
				contentLabel.Text = "E-Mail";
				container.Controls.Add(contentLabel);
			}
		}

	**VB**

		Protected Sub Page_Init(sender As Object, e As EventArgs)
			RadImageButton1.ContentTemplate = New ButtonContentTemplate()
		End Sub

		Public Class ButtonContentTemplate
			Implements ITemplate
			Private Sub ITemplate_InstantiateIn(container As Control) Implements ITemplate.InstantiateIn
				Dim contentImage As New System.Web.UI.WebControls.Image()
				contentImage.ID = "contentImage"
				contentImage.ImageUrl = "http://demos.telerik.com/aspnet-ajax/button/examples/contenttemplate/Images/envelope.png"
				contentImage.AlternateText = "envelope"
				container.Controls.Add(contentImage)

				Dim contentLabel As New Label()
				contentLabel.ID = "contentLabel"
				contentLabel.Text = "E-Mail"
				container.Controls.Add(contentLabel)
			End Sub
		End Class


## See Also

 * [ImageButton - Content Template]({%slug imagebutton/functionality/contenttemplate%})
