---
title: set_html
page_title: set_html | UI for ASP.NET AJAX Documentation
description: set_html
slug: editor/client-side-programming/methods/set_html
tags: set_html
published: True
position: 12
---

# set_html



You can find here more details about the usage of the client-side __set_html()__ method.

## 

The method can accept 4 parameters:

`set_html(content, title, setFocus, raiseSelChanged)`

The table below shows more details about their purpose:


>caption Method's Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| __content__ | __String__ |The HTML content, that will be set in Telerik RadEditor.|
| __title__ | __String__ |The command's title shown in the Undo stack. This is an optional parameter, the default value is " *Set HTML* ".|
| __setFocus__ | __Boolean__ |Specifies whether setFocus to be fired after the command execution. This is an optional parameter, the default value is *true* .|
| __raiseSelChanged__ | __Boolean__ |Indicates whether to raise selectioChange event. This is an optional parameter, the default value is *true* .|

The example below demonstrates how to clean the content in the content area from a standard input button:

````ASPNET
	<telerik:radeditor runat="server" ID="RadEditor1">
	   <Content>
	       Here is sample content!
	   </Content>
	</telerik:radeditor>
	<input type="button" value="reset" onclick="ResetContent();return false;" />
	<script type="text/javascript">
		function ResetContent() {
			var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to RadEditor client object
			editor.set_html(""); //reset the content
		}
	</script> 
````


