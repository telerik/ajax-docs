---
title: Edit Modes
page_title: Edit Modes | UI for ASP.NET AJAX Documentation
description: Edit Modes
slug: editor/functionality/editor-views-and-modes/edit-modes
tags: edit,modes
published: True
position: 0
---

# Edit Modes



## Changing Editor Modes

RadEditor offers three different edit modes Design, Html and Preview:

* __Design:__In the Design mode you can edit and format the content by using the RadEditor toolbar buttons, dropdowns and dialogs.

* __Html__: HTML mode provides direct access to the content HTML . This mode is used most often by advanced users.

* __Preview__: Shows how the content will look like before updating the page.

__Design mode__:
>caption 

![](images/editor-designmode.png)

__Html mode__:More advanced users sometimes need to modify the HTML code of the content directly. The HTML mode provides access to the HTML markup for fine-grain control.
>caption 

![Html Mode](images/editor-htmlmode.png)

__Preview mode__:After editing your document in the editor preview, users may like to see how the page looks like before updating the page. The editor can be switched to the Preview Mode just by a single click of the preview button
>caption 

![Preview Mode](images/editor-previewmode.png)

## Using the EditModes Enumeration

You can also control the displaying of the Design, Html and Preview buttons by using the __EditModes__enumeration property.__Example 1__: Display only the Design and Preview modes (configure the editor inline or in the codebehind):

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1" EditModes="Design,Preview">
	    </telerik:RadEditor>
````





````C#
	     
			RadEditor1.EditModes = EditModes.Design | EditModes.Preview; 
				
````
````VB
	
	        RadEditor1.EditModes = EditModes.Design Or EditModes.Preview
	
````


__Example 2__: Display the Html mode only (configure the editor inline or in the codebehind):

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1" EditModes="Html">
	    </telerik:RadEditor>
````





````C#
	
	        RadEditor1.EditModes = EditModes.Html;
	
````
````VB
	
	        RadEditor1.EditModes = EditModes.Html
	
````


# See Also

 * [Edit Modes](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/EditModes/DefaultCS.aspx)
