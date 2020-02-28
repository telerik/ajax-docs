---
title: getParentElement
page_title: getParentElement | RadEditor for ASP.NET AJAX Documentation
description: getParentElement
slug: editor/client-side-programming/methods/selection/getparentelement
tags: getparentelement
published: True
position: 5
---

# getParentElement

Returns a reference to the currently selected HTML element in the RadEditor for ASP.NET AJAX content area.

````JavaScript
function getParentElement()
````

>note The return value is an HTML element. The method returns the first parent element of the selection. For example, if the cursor is in the middle of a bolded text, the call to the **getParentElement** will return a reference to the `<strong>` tag.

You can use also **editor.getSelectedElement();** to get a reference to the currently selected HTML element.

This example checks if the currently selected object is an image and adds a border to the element if so.If the selected element is a link, it changes its style:

````ASP.NET
<telerik:radeditor runat="server" ID="RadEditor1">
	   <Content>
		   This RadEditor instance contains some <a href="www.telerik.com">links</a> and images <img src="https://www.telerik.com/images/Homepage/TelerikLogo.gif" alt="Telerik Logo"/>
	   </Content>
 </telerik:radeditor>
   <script type="text/javascript">
	function changeSelectionAttributes() {
		//Get a reference to the client-side RadEditor object:
		var editor = $find("<%=RadEditor1.ClientID%>");
		var theSelectionObject = editor.getSelection();
		//Get a reference the selected element:
		var theSelectedElement = theSelectionObject.getParentElement();
		if (theSelectedElement) {
			if (theSelectedElement.tagName == "A") {
				theSelectedElement.style.fontSize = "22px";
			}
			else if (theSelectedElement.tagName == "IMG") {
				theSelectedElement.style.border = "groove 5px aqua";
			}
		}
	}
   </script>
<br/>
<input type="button" onclick="javascript:changeSelectionAttributes();" value="Change!"/> 
````


