---
title: Set Defaults
page_title: Set Defaults | RadEditor for ASP.NET AJAX Documentation
description: Set Defaults
slug: editor/managing-content/content-area-appearance/set-defaults
tags: set,defaults
published: True
position: 0
---

# Set Defaults



## 

RadEditor offers the ability to easily apply various styles to its content area by setting the **CssFiles** property to point to an external css file and manually specify the classes that you want to load in the editor. For example to set the editor to use white text on a black background as well as to change the default bullet / ordered lists shapes set the **CssFiles** property to point to an external css file (you can name it **EditorContentArea.css**):

````XML
	    <telerik:RadEditor ID="RadEditor1" runat="server">
	        <CssFiles>
	            <telerik:EditorCssFile Value="~/EditorContentArea.css" />
	        </CssFiles>
	    </telerik:RadEditor>
````



EditorContentArea.css

````XML
	    body
	    {
	    color: white;
	    background-color: black;
	    padding:3px;
	    background-image: none;
	    margin: 0px;
	    text-align: left;
	    }
	
	    OL
	    {
	        list-style-type: upper-roman;
	    }
	    OL OL
	    {
	        list-style-type: decimal;
	    }
	    UL
	    {
	        list-style-type: square;
	    }
	    UL UL
	    {
	        list-style-type: disc;
	    } 
````



More information about the **list-style-type** property is available in MSDN: [list-style-type Attribute | listStyleType Property](http://msdn.microsoft.com/en-us/library/ms530797.aspx).

You can also style other elements in the editor's content area by adding their respective global css class.
