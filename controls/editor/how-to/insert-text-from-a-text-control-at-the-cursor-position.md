---
title: Insert Text from a Text Control at the Cursor Position
page_title: Insert Text from a Text Control at the Cursor Position | UI for ASP.NET AJAX Documentation
description: Insert Text from a Text Control at the Cursor Position
slug: editor/how-to/insert-text-from-a-text-control-at-the-cursor-position
tags: insert,text,from,a,text,control,at,the,cursor,position
published: True
position: 4
---

# Insert Text from a Text Control at the Cursor Position



## 



The example below demonstrates how to insert text at the cursor position in RadEditor when a button is clicked:

1. Add a textbox to your page:

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	    </telerik:RadEditor>
	    <asp:TextBox ID="TextBox1" runat="server" Height="97px"></asp:TextBox>
````



1. Add a button to execute the paste command:

````ASPNET
	    <input id="Insert" type="button" value="<--Insert" onclick="PasteTextInEditor(Form1.TextBox1.value);" />
````



1. Include the __PasteTextInEditor__ method in your ascx/aspx file. Use the __pasteHtml__ method to paste the content from the textbox:

````XML
	    <script type="text/javascript">
	        function PasteTextInEditor(text)
	        {
	            var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to RadEditor client object    
	            editor.pasteHtml(text); //PasteHtml is a method from the editor client side API
	        }
	    </script>
````



1. Test the solution.

__EXAMPLE FILES__

[Paste Text To Cursor Position](http://www.telerik.com/ArticleFileDownload.aspx?I=r8w&G=euY)
