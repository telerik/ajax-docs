---
title: Customizing the Table Dialog
page_title: Customizing the Table Dialog
description: Check our Web Forms article about Customizing the Table Dialog.
slug: sharepoint/2010/radeditor-web-part/configuration/customizing-the-table-dialog
tags: customizing,the,table,dialog
published: True
position: 1
---

# Customizing the Table Dialog





You can easily remove certain options and tools from the Table Properties dialog. For example, you may want to remove options like cellspacing, cellpadding and alignment in case these are specified by the CSS class.

1. Extract the edit the EditorDialogs folder from the RadEditor installation files in the `C:\Program Files\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\6.x.x.0**1f131a624888eeed\Resources` directory.

1. Open the **ConfigFile.xml** or **ListConfigFile.xml** (depending on your exact scenario) which is located in the following folder (`/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/` and set the editor's **ExternalDialogsPath** property to point to the **EditorDialogs** folder e.g.):

	**XML**

		<configuration>
		     ........
		     <property name="ExternalDialogsPath">/_wpresources/RadEditorSharePoint/6.x.x.0__1f131a624888eeed/Resources/EditorDialogs</property>
		     ........
		</configuration> 


1. Open the **TablePropertiesControl.ascx** which is located in the **EditorDialogs** folder and modify it so that to best fix your scenario.
