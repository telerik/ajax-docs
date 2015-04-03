---
title: Getting a Reference to the RadEditor Document Object
page_title: Getting a Reference to the RadEditor Document Object | UI for ASP.NET AJAX Documentation
description: Getting a Reference to the RadEditor Document Object
slug: editor/client-side-programming/getting-a-reference-to-the-radeditor-document-object
tags: getting,a,reference,to,the,radeditor,document,object
published: True
position: 2
---

# Getting a Reference to the RadEditor Document Object



## 

The client-side __get_document()__ method provides a reference to the editor's content area document object. By getting a reference to the editor's document object, you can manipulate the selection in the content area, execute browser commands and call low level browser API methods.

The following example demonstrates how to get a reference to the editor's document and apply bold formatting over the selected content:

````ASPNET
	    <asp:ScriptManager ID="ScriptManager1" runat="server" />
	    <telerik:RadEditor ID="RadEditor1" runat="server">
	    </telerik:RadEditor>
	    <button onclick="ApplyBold()" unselectable="on">
	        Click to apply bold over selection</button>
	    <script type="text/javascript">
	        function ApplyBold()
	        {
	            var editor = $find("<%=RadEditor1.ClientID%>"); //return a reference to RadEditor
	            var oDocument = editor.get_document(); //get a reference to the editor's document
	            oDocument.execCommand("Bold", false, null);
	        }
	    </script>
````



You can find more information about the execCommand method in the following MSDN and Mozilla articles:[execCommand Method](http://msdn2.microsoft.com/en-us/library/ms536419.aspx),[Command Identifiers](http://msdn2.microsoft.com/en-us/library/ms533049.aspx),[Rich-Text Editing in Mozilla](http://developer.mozilla.org/en/docs/Rich-Text_Editing_in_Mozilla)
