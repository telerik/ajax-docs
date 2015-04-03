---
title: getHtml
page_title: getHtml | UI for ASP.NET AJAX Documentation
description: getHtml
slug: editor/client-side-programming/methods/selection/gethtml
tags: gethtml
published: True
position: 3
---

# getHtml



## 

Returns the currently selected html in the Telerik RadEditor ContentArea.

````JavaScript
	     
		function getHtml()
				
````



__Note__: The return value contains the HTML formatting in contrast to the [getText]({%slug editor/client-side-programming/methods/selection/gettext%}) method.

The example below populates a Label and a TextBox with the currently selected html:

````ASPNET
	<telerik:radeditor runat="server" ID="RadEditor1">
	   <Content>
	       Here is some <span style="color:white;background-color:red;">formatted</span> content.
	   </Content>
	</telerik:radeditor>
	<asp:label id="formattedSelectionContent" runat="server"/> <br/><br/>
	<hr/>
	The actual html will appear here:<br/>
	<asp:textbox id="htmlSelectionContent" runat="server" TextMode="Multiline"  rows="5"  columns="40"/>
	<script type="text/javascript">
	    function showSelectedHtml()
	    {
	        //Get a reference to the client-side RadEditor object:
	        var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to RadEditor client object
	        var theSelectionObject = editor.getSelection();
	        //Get the selected html:
	        var theSelectedText = theSelectionObject.getHtml();
	        //Get a reference to the textbox:
	        var myTextBox = $get("<%=htmlSelectionContent.ClientID%>");
	        myTextBox.value = theSelectedText;
	        //Get a reference to the Label:
	        var myLabel = $get("<%=formattedSelectionContent.ClientID%>");
	        myLabel.innerHTML = theSelectedText;
	    }
	</script>
	<br/><br/>
	<input type="button" onclick="javascript:showSelectedHtml();" value="Show"/> 
````


