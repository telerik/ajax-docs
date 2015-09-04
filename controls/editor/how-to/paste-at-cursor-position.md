---
title: Paste at the Cursor Position
page_title:  Paste at the Cursor Position | RadEditor for ASP.NET AJAX Documentation
description: paste content programmatically at the cursor position
slug: editor/how-to/paste-at-cursor-position
tags: paste,programmatically,at,the,cursor,position
published: True
position: 1
---

# Paste at the Cursor Position

This article explains how to **paste** content **into RadEditor at the cursor position** programmatically. You can see that in **Example 1**.

Sometimes the application logic requires that a button click or any other user interaction with the form will paste content in the editor control right where the user was last editing.

To achieve this, you need to:

1. **Store the current cursor position** or selection in a global variable. To do that, use the [OnClientSelectionChange event]({%slug editor/client-side-programming/events/onclientselectionchange%}) and the 
[getDomRange() method]({%slug editor/client-side-programming/radeditor-object%}) RadEditor provides.

1. **Obtain the needed HTML** according to your business logic and UX requirements. You can find some tips on requesting complex content from the server in the [Different ways to make a request to the server in ASP.NET](http://www.telerik.com/blogs/different-ways-to-make-a-request-to-the-server) blog post.

1. **Restore the cursor position** by using the [select() DomRange method](/devtools/aspnet-ajax/api/client/Telerik.Web.UI.Editor.DomRange).

1. **Paste programmatically** by using the [pasteHtml() method]({%slug editor/client-side-programming/methods/pastehtml%}).


**Example 1**: Paste content programmatically at the cursor position in RadEditor.

````
Enter text here:
<asp:TextBox ID="Textbox1" Text="paste me" runat="server" />
<br />
<asp:Button ID="Button1" Text="paste at cursor position" OnClientClick="pasteAtCursorPos(); return false;" runat="server" />
<br />
Type text, select content or move the cursor in the editor and click the button again
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientSelectionChange="OnClientSelectionChange">
	<Content>
		<p>paragraph 1</p>
		<p>paragraph two</p>
	</Content>
</telerik:RadEditor>
<script>
	function pasteAtCursorPos() {
		var data = $get("<%=Textbox1.ClientID%>").value;//get the desired content
		var editor = $find("<%=RadEditor1.ClientID%>");
		if (currentRange) {
			currentRange.select(); //restore the selection
		}
		editor.pasteHtml(data); //paste content
	}
	
	var currentRange = null;
	
	function OnClientSelectionChange(sender, args) {
		currentRange = sender.getDomRange(); //store current range/cursor position
	}
</script>
````

>note The cursor and the selection are features of the browser. This means that they are only available on the client-side. There is no facility to add content on the server-side. This is why the article explains a pure JavaScript approach to paste content through the RadEditor API.

## See Also

* [RadEditor's DomRange method](/devtools/aspnet-ajax/api/client/Telerik.Web.UI.Editor.DomRange)

* [OnClientSelectionChange Event]({%slug editor/client-side-programming/events/onclientselectionchange%})

* [Paste HTML]({%slug editor/client-side-programming/methods/pastehtml%})

* [Different ways to make a request to the server in ASP.NET blog post](http://www.telerik.com/blogs/different-ways-to-make-a-request-to-the-server)