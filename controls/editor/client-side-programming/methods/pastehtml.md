---
title: pasteHtml
page_title: pasteHtml | RadEditor for ASP.NET AJAX Documentation
description: pasteHtml
slug: editor/client-side-programming/methods/pastehtml
tags: pastehtml
published: True
position: 13
---

# pasteHtml



## 

Pastes HTML content to the cursor position.


>caption  

|  **function pasteHtml(content)**  |  |  |
| ------ | ------ | ------ |
| **content** | **string** |The HTML content, that will be pasted in Telerik RadEditor|

The following example will show you how to paste content into the editor's content area from an external input button:

````ASPNET
	<telerik:radeditor runat="server" ID="RadEditor1"></telerik:radeditor>
	<input type="button" value="Paste Content" onclick="InsertSpan();return false;" />
	<script type="text/javascript">
	    function InsertSpan()
	    {
	        var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to the editor
	        editor.pasteHtml('<span style="width:100px;border: 1px solid red;background-color: blue;color: white;">sample content</span>');
	    }
	</script>   
````


