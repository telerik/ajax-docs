---
title: Customizing the Table Dialog
page_title: Customizing the Table Dialog | UI for ASP.NET AJAX Documentation
description: Customizing the Table Dialog
slug: sharepoint/2010/radeditor-web-part/configuration/customizing-the-table-dialog
tags: customizing,the,table,dialog
published: True
position: 1
---

# Customizing the Table Dialog



## 

You can easily remove certain options and tools from the Table Properties dialog. For example, you may want to remove options like cellspacing, cellpadding and alignment in case these are specified by the CSS class.

1. Extract theedit the EditorDialogs folder from the RadEditor installation files in the C:\Program Files\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources directory.



2. Open the __ConfigFile.xml__or __ListConfigFile.xml__(depending on your exact scenario) which is located in the following folder:

/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/ and set the editor's __ExternalDialogsPath__ property to point to the __EditorDialogs__ folder e.g.

````XML
		<configuration>
	         ........
	         <property name="ExternalDialogsPath">/_wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/EditorDialogs</property>
	         ........
	    </configuration> 
````



3. Open the __TablePropertiesControl.ascx__which is located in the __EditorDialogs__folder and modify it so that to best fix your scenario.
