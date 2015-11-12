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

This help article showcases how to add complex content (server-side controls and HTML elements) in **RadImageButton** instead of plain text (**Figure 1**). You can do this both in the markup, or in the code-behind:

* [Add Elements to RadImageButton in the Markup](#add-elements-to-radimagebutton-in-the-markup)

* [Add Elements to RadImageButton from the Code-behind](#add-elements-to-radimagebutton-from-the-code-behind)
    * [Using Controls Collection](#using-controls-collection)
    * [Using ITemplate Interface](#using-itemplate-interface)

## Add Elements to RadImageButton in the Markup

In order to add controls to the **RadImageButton** in the markup, you should place them directly in the composite **ContentTemplate** property (**Example 1**).

>caption Figure 1: RadImageButtons with ContentTemplate. The result from Examples 1-3.

![RadImageButtons with ContentTemplate](images/RadImageButtons-contenttemplate.png)

>caption Example 1: Adding controls to ContentTemplate of RadImageButton in the markup.

````ASP.NET
<style>
    .button {
        line-height:15px;
    }
    .access-key {
        text-decoration: underline;
    }
</style>

<telerik:RadImageButton runat="server" ID="OkImageButton" Width="100" Height="28" Skin="Silk">
    <ContentTemplate>
        <div class="button"><span class="access-key">O</span>K</div>
    </ContentTemplate>
</telerik:RadImageButton>
<telerik:RadImageButton runat="server" ID="CancelImageButton" Width="100" Height="28" Skin="Silk">
    <ContentTemplate>
        <div class="button"><span class="access-key">C</span>ancel</div>
    </ContentTemplate>
</telerik:RadImageButton>
````

## Add Elements to RadImageButton from the Code-behind

You can add controls to **RadImageButton** from the code-behind in two ways:

### Using Controls Collection 

>caption Example 2: Adding controls to the **Controls** collection of **RadImageButton** from the code-behind.

````ASP.NET
<style>
    .button {
        line-height:15px;
    }
    .access-key {
        text-decoration: underline;
    }
</style>

<telerik:RadImageButton runat="server" ID="OkImageButton" Width="100" Height="28" Skin="Silk">
</telerik:RadImageButton>
<telerik:RadImageButton runat="server" ID="CancelImageButton" Width="100" Height="28" Skin="Silk">
</telerik:RadImageButton>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    HtmlGenericControl okButton = new HtmlGenericControl("div");
    okButton.Attributes.Add("class", "button");
    okButton.InnerHtml = "<span class=\"access-key\">O</span>K";

    OkImageButton.Controls.Add(okButton);

    HtmlGenericControl cancelButton = new HtmlGenericControl("div");
    cancelButton.Attributes.Add("class", "button");
    cancelButton.InnerHtml = "<span class=\"access-key\">C</span>ancel";

    CancelImageButton.Controls.Add(cancelButton);
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	Dim okButton As New HtmlGenericControl("div")
	okButton.Attributes.Add("class", "button")
	okButton.InnerHtml = "<span class=""access-key"">O</span>K"

	OkImageButton.Controls.Add(okButton)

	Dim cancelButton As New HtmlGenericControl("div")
	cancelButton.Attributes.Add("class", "button")
	cancelButton.InnerHtml = "<span class=""access-key"">C</span>ancel"

	CancelImageButton.Controls.Add(cancelButton)
End Sub
````

### Using ITemplate Interface

>caption Example 3: Adding controls to the **RadImageButton** by using the **ITemplate** class.

````ASP.NET
<style>
    .button {
        line-height:15px;
    }
    .access-key {
        text-decoration: underline;
    }
</style>

<telerik:RadImageButton runat="server" ID="OkImageButton" Width="100" Height="28" Skin="Silk">
</telerik:RadImageButton>
<telerik:RadImageButton runat="server" ID="CancelImageButton" Width="100" Height="28" Skin="Silk">
</telerik:RadImageButton>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    OkImageButton.ContentTemplate = new OkButtonContentTemplate();
    CancelImageButton.ContentTemplate = new CancelButtonContentTemplate();
}

public class OkButtonContentTemplate : ITemplate
{
    void ITemplate.InstantiateIn(Control container)
    {
        HtmlGenericControl okButton = new HtmlGenericControl("div");
        okButton.Attributes.Add("class", "button");
        okButton.InnerHtml = "<span class=\"access-key\">O</span>K";

        container.Controls.Add(okButton);
    }
}

public class CancelButtonContentTemplate : ITemplate
{
    void ITemplate.InstantiateIn(Control container)
    {
        HtmlGenericControl cancelButton = new HtmlGenericControl("div");
        cancelButton.Attributes.Add("class", "button");
        cancelButton.InnerHtml = "<span class=\"access-key\">C</span>ancel";

        container.Controls.Add(cancelButton);
    }
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	OkImageButton.ContentTemplate = New OkButtonContentTemplate()
	CancelImageButton.ContentTemplate = New CancelButtonContentTemplate()
End Sub

Public Class OkButtonContentTemplate
	Implements ITemplate
	Private Sub ITemplate_InstantiateIn(container As Control) Implements ITemplate.InstantiateIn
		Dim okButton As New HtmlGenericControl("div")
		okButton.Attributes.Add("class", "button")
		okButton.InnerHtml = "<span class=""access-key"">O</span>K"

		container.Controls.Add(okButton)
	End Sub
End Class

Public Class CancelButtonContentTemplate
	Implements ITemplate
	Private Sub ITemplate_InstantiateIn(container As Control) Implements ITemplate.InstantiateIn
		Dim cancelButton As New HtmlGenericControl("div")
		cancelButton.Attributes.Add("class", "button")
		cancelButton.InnerHtml = "<span class=""access-key"">C</span>ancel"

		container.Controls.Add(cancelButton)
	End Sub
End Class
````

## See Also

 * [PushButton - Content Template]({%slug pushbutton/functionality/contenttemplate%})
 * [LinkButton - Content Template]({%slug linkbutton/functionality/contenttemplate%})
