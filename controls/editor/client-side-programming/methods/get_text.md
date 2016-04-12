---
title: get_text
page_title: get_text | RadEditor for ASP.NET AJAX Documentation
description: get_text
slug: editor/client-side-programming/methods/get_text
tags: get_text
published: True
position: 10
---

# get_text

You can find here more details about the usage of the client-side **get_text()** method.

Returns the editor's content as plain text (strips down the tags). As of **Q1 2015**, optionally,you can configure how the text to be stripped via the *options* parameter.

The method can accept 1 parameters:

`get_text(options)`

The table below shows more details about their purpose:

>caption Method's Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| **options** | **Object** |Options for the strip behavior. Example:`{ trimText: true, removeMultipleSpaces: true }`List of the available options to enable: *trimText* - Removes all leading and trailing white-space characters; *removeMultipleSpaces* - Merges all white-space characters.|

The example below demonstrates how to obtain the RadEditor's content as plain text and alert it:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<Content>        
		<b>Here is sample content!</b>    
	</Content>
</telerik:RadEditor>
<input type="button" value="Get Plain Text" onclick="GetHtmlSelection()" />
<script type="text/javascript">
	function GetHtmlSelection() {
		var editor = $find("<%= RadEditor1.ClientID %>"); //get a reference to RadEditor client object
		// Configure the needed options for the stripping behavior
		var options = {
		    trimText: true, // Removes all leading and trailing white-space characters. 
		    removeMultipleSpaces: true //Merges all white-space characters. 
		}
		
		var oSelElem = editor.get_text(options); //get the editor content as plain text
		
		alert(oSelElem); //alert the plain text content
	}
</script>
````


