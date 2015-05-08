---
title: setFocus
page_title: setFocus | RadEditor for ASP.NET AJAX Documentation
description: setFocus
slug: editor/client-side-programming/methods/setfocus
tags: setfocus
published: True
position: 14
---

# setFocus

Sets the focus on RadEditor.

This example demonstrates how to set the focus in the content area of RadEditor by firing the `setFocus()` method. The focus is initially set to on the text input below the editor control.

````ASP.NET
<body onload="SetFocusOnTextBox();">
   <form id="form2" runat="server">
   <asp:ScriptManager id="ScriptManager" runat="server"/>                              
   <telerik:radeditor runat="server" ID="RadEditor1">
	   <Content>
		   Here is sample content!
	   </Content>
   </telerik:radeditor>
   <input type="text" id="text"/>
   <input type="button" value="Set Focus On RadEditor" onclick="SetFocusOnRadEditor()" />
   <script type="text/javascript">
	function SetFocusOnRadEditor() {
		var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to RadEditor client object
		editor.setFocus(); //set the focus on the the editor
	}
	function SetFocusOnTextBox() {
		var editor = $get("text"); //get a reference to the input textbox with id text
		editor.focus(); //set the focus on the the textbox
	}
   </script>
   </form>
</body> 	
````


