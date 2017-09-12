---
title: ExternalDialogsPath property
page_title: ExternalDialogsPath property | UI for ASP.NET AJAX Documentation
description: ExternalDialogsPath property
slug: sharepoint/2007/radeditor-for-moss/dialogs/externaldialogspath-property
tags: externaldialogspath,property
published: True
position: 8
---

# ExternalDialogsPath property

By default, all RadEditor dialogs are embedded as resource files in the Telerik.Web.UI.dll file, which makes their customization harder. In order to provide an easy way to modify the editor's dialogs, the Telerik® UI for ASP.NET Ajax suite installation now comes with an extra folder named **EditorDialogs**which contains the dialogs' ascx files. You can configure RadEditor to use the external dialog files by copying the **EditorDialogs**folder to the root of the web application and setting the **ExternalDialogsPath**property to point to it, e.g.

## Example:

The example below demonstrates how to hide the "New Folder" button in all the dialogs containing FileExplorer. Here are the steps:

1. Copy the **EditorDialogs**folder to the **/Program Files/Common Files/Microsoft Shared/web server extensions/wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/**foder.

1. Set the **ExternalDialogsPath**property to point to the EditorDialogs folder. In order to do this add the following element in the respective ConfigFilie.xml and ListConfigFile.xml (for list, wiki, blog ...).

	**XML**
	
	    <property name="ExternalDialogsPath">/_wpresources/RadEditorSharePoint/5.x.x.0**1f131a624888eeed/Resources/EditorDialogs</property>

1. Open the **FileBrowser.ascx** file, which is in the **EditorDialogs**folder and locate the following control, which represent the **FileExplorer**:

	**ASP.NET**
	
	    <telerik:RadFileExplorer ID="RadFileExplorer2" Height="450px" Width="400px" TreePaneWidth="150px"
	        runat="Server" EnableOpenFile="false" AllowPaging="true" />


1. To hide the "New Folder" button set the **EnableCreateNewFolder**property to false.

	**ASP.NET**
	
	    <telerik:RadFileExplorer ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px"
	        EnableCreateNewFolder="false" runat="Server" EnableOpenFile="false" AllowPaging="true" />

1. Save the file and test the editor.
