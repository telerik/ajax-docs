---
title: CSS Styles
page_title: CSS Styles | UI for ASP.NET AJAX Documentation
description: CSS Styles
slug: sharepoint/2007/radeditor-for-moss/dropdowns/css-styles
tags: css,styles
published: True
position: 5
---

# CSS Styles

![](images/DropDowns010.png)

The CSS class dropdown of RadEditor displays all classes defined in the page or from external CSS files. The dropdown is populated from the **CssClasses**Collection. By default RadEditor for MOSS uses the same CSS files as the default rich-text editor. Those files are **HtmlEditorTableFormats**.**css** and **HtmlEditorCustomStyles.css,** which are located in the following folder:

*/Program Files/Common Files/Microsoft Shared/web server extensions/12/Template/Layouts/1033/Styles*

>tip The folder location can be different if you are not using US English version of MOSS. The 1033 number signifies the current culture and might be different for different language versions of MOSS.

**For example:**

The files which properties need to be modified are **ToolsFile.xml / ListToolsFile.xml**, located in the following folder:

*/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/*

````XML
<root>  
<tools name="MainToolbar" enabled="true">
	<tool name="ApplyClass" />  
	</tools>  
	<classes>    
		<class name="Clear Class" value="" />
		<class name="Links Class" value="a.link" />
		<class name="Images Class" value=".img" />
		<class name="My Red Text" value=".redText" />
	</classes>
</root>
````


