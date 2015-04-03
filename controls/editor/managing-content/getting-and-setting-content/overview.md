---
title: Getting and Setting Content Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: editor/managing-content/getting-and-setting-content/overview
tags: overview
published: True
position: 0
---

# Getting and Setting Content Overview



Most development tasks with RadEditor involve getting and setting content.

## Setting Content

Use the __Content__ property to set or get text content, including HTML markup. You can set the __Content__directly inline within the __<Content>__ tag:

````ASPNET
	    <telerik:RadEditor ID="RadEditor1" runat="server">
	        <Content>This content is set <b>directly</b> inline and includes HTML markup</Content>
	    </telerik:RadEditor>
````



In code-behind, set the __Content__ property:

>tabbedCode

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


>end

## Getting Content

You can access RadEditor content through the following properties:

* __Content__: Used to get or set RadEditor text content, including the XHTML markup.

* __Text__: This read-only property gets the RadEditor text without the HTML markup.

````ASPNET
	    <asp:Button ID="Button1" runat="server" Text="Send" OnClick="Button1_Click" />
	    <asp:TextBox ID="TextBox1" runat="server" TextMode="multiline"></asp:TextBox>
	    <asp:TextBox ID="TextBox2" runat="server" TextMode="multiline"></asp:TextBox>
	    <telerik:RadEditor ID="RadEditor1" runat="server">
	    </telerik:RadEditor>
````



>tabbedCode

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


>end



__Note:__

The __Text__property of RadEditor returns editor content as pure text. It does convert __<BR/>__ tags into __\n__ lines correctly - so, if the editor content is loaded in a textarea, it will display those new lines correctly.

However, if the content is loaded back into the editor, of course, there is a problem, because the "\n" symbols mean nothing in HTML and they will be simply ignored by the browser. So, to display content in several lines, use code such as

RadEditor1.Content = dbContent.__Replace("\n", "<br/>")__;

# See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Edit Template in Grid]({%slug editor/application-scenarios/edit-template-in-grid%})
