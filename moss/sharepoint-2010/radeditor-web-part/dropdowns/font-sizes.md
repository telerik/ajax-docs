---
title: Font Sizes
page_title: Font Sizes | UI for ASP.NET AJAX Documentation
description: Font Sizes
slug: moss/sharepoint-2010/radeditor-web-part/dropdowns/font-sizes
tags: font,sizes
published: True
position: 1
---

# Font Sizes


>caption 

![](images/DropDowns003.png)

## Adding Font Sizes

You can populate the __FontSizes__ dropdown by modifying the __ToolsFile.xml / ListToolsFile.xml__ files, located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/

__For example:__

````XML
	    <root>  
	        <tools name="MainToolbar" enabled="true">    
	            <tool name="FontSize" />  
	        </tools>  
	        <fontSizes>    
	            <item>1</item>    
	            <item>3</item>    
	            <item>5</item>  
	         </fontSizes>
	    </root>
````



If you want to apply font sizes in pixels (px) or in points (pt) then use the [Real Font Size]({%slug moss/sharepoint-2010/radeditor-web-part/dropdowns/real-font-sizes%}) dropdown.
