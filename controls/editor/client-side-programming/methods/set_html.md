---
title: set_html
page_title: set_html - RadEditor
description: Check our Web Forms article about set_html.
slug: editor/client-side-programming/methods/set_html
tags: set_html
published: True
position: 12
---

# set_html

You can find here more details about the usage of the client-side **set_html()** method.

The method can accept 4 parameters:

`set_html(content, title, setFocus, raiseSelChanged)`

The table below shows more details about their purpose:


>caption Method's Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| **content** | **String** |The HTML content, that will be set in Telerik RadEditor.|
| **title** | **String** |The command's title shown in the Undo stack. This is an optional parameter, the default value is " *Set HTML* ".|
| **setFocus** | **Boolean** |Specifies whether setFocus to be fired after the command execution. This is an optional parameter, the default value is *true*. When *true* the cursor will appear at the beggining of the content placed.|
| **raiseSelChanged** | **Boolean** |Indicates whether to raise selectioChange event. This is an optional parameter, the default value is *true* .|

The example below demonstrates how to clean the content in the content area from a standard input button:

````ASP.NET
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

>caption Avoid calling set_html() in Preview Mode, because the content is no longer editable in this mode and tampering with it can cause errors. Here's how to make sure you avoid that:

````ASP.NET
<script>
	function setNewContent() {
		var editor = $find("<%=RadEditor1.ClientID%>");
		if (editor.get_mode() < 4) { //1 and 2 are Design and HTML modes respectively
			editor.set_html("new content " + new Date());
		}
	}
</script>
<asp:Button Text="set content" OnClientClick="setNewContent(); return false;" runat="server" />
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight">
	<Content>
	lorem ipsum
	</Content>
</telerik:RadEditor>
````

