---
title: Overview
page_title: Overview | RadEditor for ASP.NET AJAX Documentation
description: Getting and Setting Content Overview
slug: editor/managing-content/getting-and-setting-content/overview
tags: overview
published: True
position: 0
---

# Getting and Setting Content Overview

Most development tasks with RadEditor involve getting and setting content.

## Setting Content

Use the **Content** property to set or get text content, including HTML markup. You can set the **Content** directly inline within the **<Content>** tag:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
	<Content>This content is set <b>directly</b> inline and includes HTML markup</Content>
</telerik:RadEditor>
````

In code-behind, set the **Content** property:

````C#
private void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		RadEditor1.Content = "<strong>Sample HTML Content Loaded via the Html property</strong>";
	}
}	
````
````VB
Private Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not Page.IsPostBack Then
		RadEditor1.Content = "<strong>Sample HTML Content Loaded via the Html property</strong>"
	End If
End Sub
````

## Getting Content

You can access RadEditor content through the following properties:

* **Content**: Used to get or set RadEditor text content, including the XHTML markup.

* **Text**: This read-only property gets the RadEditor text without the HTML markup.

````ASP.NET
<asp:Button ID="Button1" runat="server" Text="Send" OnClick="Button1_Click" />
<asp:TextBox ID="TextBox1" runat="server" TextMode="multiline"></asp:TextBox>
<asp:TextBox ID="TextBox2" runat="server" TextMode="multiline"></asp:TextBox>
<telerik:RadEditor ID="RadEditor1" runat="server">
</telerik:RadEditor>
````


````C#
protected void Button1_Click(object sender, EventArgs e)
{
	TextBox1.Text = RadEditor1.Text;
	TextBox2.Text = RadEditor1.Content;
} 
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	TextBox1.Text = RadEditor1.Text
	TextBox2.Text = RadEditor1.Content
End Sub
````

>note The **Text** property of RadEditor returns editor content as pure text. It does convert `<BR/>` tags into `\n` lines correctly - so, if the editor content is loaded in a textarea, it will display those new lines correctly.
>
>However, if the content is loaded back into the editor, of course, there is a problem, because the "\n" symbols mean nothing in HTML and they will be simply ignored by the browser. So, to display content in several lines, use code similar to the following example:
>
>`RadEditor1.Content = dbContent.Replace("\n", "<br/>");`

## See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Edit Template in Grid]({%slug editor/how-to/edit-template-in-grid%})
