---
title: getText
page_title: getText - RadEditor
description: Check our Web Forms article about getText.
slug: editor/client-side-programming/methods/selection/gettext
tags: gettext
published: True
position: 2
---

# getText

Returns the currently selected content as plain text in the Telerik RadEditor ContentArea.

````JavaScript 
function getText()		
````

This example populates a textbox with the currently selected text:

````ASP.NET
<telerik:radeditor runat="server" ID="RadEditor1">
   <Content>
	   Here is some <span style="color:white;background-color:red;">formatted</span> content.
   </Content>
</telerik:radeditor>
<asp:TextBox id="TextBox1" runat="server"  />
<script type="text/javascript">
	function populateSelectedText()
	{
		//Get a reference to the client-side RadEditor object:
		var editor = $find("<%=RadEditor1.ClientID%>");
		var theSelectionObject = editor.getSelection();
		//Get the selected text:
		var theSelectedText = theSelectionObject.getText();

		//Get a reference to the textbox:
		var myTextBox = $get("<%=TextBox1.ClientID%>");
		myTextBox.value = theSelectedText;
	}
</script>
<input type="button" onclick="javascript:populateSelectedText();" value="Populate the textbox with the selected text!"/> 
````


