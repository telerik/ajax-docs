---
title: Page-break Button
page_title: Page-break Button | RadEditor for ASP.NET AJAX Documentation
description: Page-break Button
slug: editor/functionality/toolbars/buttons/examples/page-break-button
tags: page-break,button
published: True
position: 0
---

# Page-break Button



## 



Here are the details on how to implement a print break button on the editor's toolbar:

1. Add a custom [**PageBreak**] button to the toolbar:

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <Tools>
	            <telerik:EditorToolGroup>
	                <telerik:EditorTool Name="PageBreak" />
	            </telerik:EditorToolGroup>
	        </Tools>
	    </telerik:RadEditor>
````



1. In the aspx/ascx file with the editor add the following javascript command under the editor's declaration which will be executed each time when the user presses the [**PageBreak**] button:

````JavaScript
	
	        Telerik.Web.UI.Editor.CommandList["PageBreak"] = function (commandName, editor, args)
	        {
	            editor.pasteHtml("<p STYLE='page-break-before: always'>sample text in the paragraph</p>"); 
	        };
	
````



1. By executing the command above, the user will insert a special print break tag in the editor. The **PageBreak** command will be rendered as a button on the toolbar. In order to look nice, you should provide a button icon and set the following style in the page:

````XML
	    <style>
	        .reTool .PageBreak
	        {
	            background-image: url(<ImagePath>);
	        }
	    </style>
````


