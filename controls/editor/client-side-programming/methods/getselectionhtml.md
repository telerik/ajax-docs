---
title: getSelectionHtml
page_title: getSelectionHtml | UI for ASP.NET AJAX Documentation
description: getSelectionHtml
slug: editor/client-side-programming/methods/getselectionhtml
tags: getselectionhtml
published: True
position: 9
---

# getSelectionHtml



## 

Returns the HTML of the selection.


>caption  

|  __function__  __getSelectionHtml()__  |
| ------ |

The example below demonstrates how to get the selected HTML and wrap it inside a DIV element with applied formatting:

````XML
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <Content>        
	            Here is sample content!    
	        </Content>
	    </telerik:RadEditor>
	    <input type="button" value="Apply Formatting" onclick="SetFormatting()" />
	    <script type="text/javascript">
	        function SetFormatting()
	        {    
	            var editor = $find("<%=RadEditor1.ClientID%>");//get a reference to RadEditor client object    
	            var selection = editor.getSelectionHtml();
	            editor.pasteHtml('<div style="color: red;font-weight: bold;font-style: italic;">' + selection + '</div>');
	        }
	    </script>
````


