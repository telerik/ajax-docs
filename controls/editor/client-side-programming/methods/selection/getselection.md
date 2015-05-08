---
title: getSelection
page_title: getSelection | RadEditor for ASP.NET AJAX Documentation
description: getSelection
slug: editor/client-side-programming/methods/selection/getselection
tags: getselection
published: True
position: 0
---

# getSelection

Returns a reference to the current RadEditorSelection object.

````JavaScript 
function getSelection()		
````

The **RadEditorSelection** object is used to provide information on the text/objects selected currently in the RadEditor Content Area.

This example below demonstrates how to pop up an alert message with the currently selected text and HTML and selection tag name:

````JavaScript
<telerik:radeditor runat="server" ID="RadEditor1">
   <Content>
	   <strong>sample content</strong>
   </Content>
</telerik:radeditor>
<input type="button" onclick="getSel();return false;" value="Get Selection" />
<script type="text/javascript">
	function getSel()
	{
		var editor = $find("<%=RadEditor1.ClientID %>");
		var selection = editor.getSelection();

		//get the selected text:
		var selectedText = selection.getText();
		//get the selected HTML:
		var selectedHTML = selection.getHtml();
		//get the currently selected HTML element
		var selElement = editor.getSelectedElement(); //or selection.getParentElement()

		alert("The selected text is: " + selectedText + ".\nThe selected HTML is: " + selectedHTML + ".\nThe selected HTML element is " + selElement.tagName + ".");
	}
</script>
````


