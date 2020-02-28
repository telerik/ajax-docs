---
title: Modify RadEditor to Become Accessible
page_title: Modify RadEditor to Become Accessible | UI for ASP.NET AJAX Documentation
description: Modify RadEditor to Become Accessible
slug: sharepoint/2007/radeditor-for-moss/customization/modify-radeditor-to-become-accessible
tags: modify,radeditor,to,become,accessible
published: True
position: 7
---

# Modify RadEditor to Become Accessible

To achieve this, please follow the steps below:

1. On the SharePoint server, open**C:\Program Files\Common Files\Microsoft Shared\web server extensions\wpresources\RadEditorSharePoint\5.x.x.x**1f131a624888eeed\Resources**

	>note The 5.x.x.x number in the path is the version of the MOSS RadEditor that you have.

1. Copy the **EditorDialogs** folder from [this link](https://www.telerik.com/documents/EditorDialogs.zip) to the **Resources** folder

1. Open the **ConfigFile.xml**file (if you are using RadEditor in Web Part scenario) and/or **ListConfigFile.xml** (for List scenario) from the Resources folder and add the following properties:

	**XML**
	
	    <configuration>
	        ........
	        <property name="OnClientLoad">OnClientLoad</property>
	        <property name="NewLineBr">false</property>
	        <property name="ExternalDialogsPath">/_wpresources/RadEditorSharePoint/5.x.x.x**1f131a624888eeed/Resources/EditorDialogs/</property>
	        <property name="EditModes">Design</property>
	        ........
	    </configuration>

		
	>note Again, the number in the ExternalDialogsPath property represents the version of the RadEditor that you are using. It should be the same as one in the name of the folder above.


1. Open the ToolsFile.xml file from the Resources folder and change it to the following (the same changes apply to **ListToolsFile.xml**if you are using RadEditor in Lists scenario):

	**XML**
	
		<root>
			 <modules>
			 </modules>
			 <tools>
			   <tool name="MoveFocusToTextEditor" text="Move Focus To Text Editor"  />
			   <tool name="Indent" text="Comment" />
			   <tool name="Outdent" text="Uncomment" />
			   <tool name="InsertParagraph" shortcut="CTRL+ALT+P" />
			   <tool name="Cut" shortcut="CTRL+X" />
			   <tool name="Copy" shortcut="CTRL+C" />
			   <tool name="Paste" shortcut="CTRL+V"/>
			   <tool separator="true"/>
			   <tool name="Bold" shortcut="CTRL+B"/>
			   <tool name="InsertOrderedList" shortcut="CTRL+ALT+L" />
			   <tool name="InsertUnorderedList" shortcut="CTRL+ALT+U" />
			   <tool name="XhtmlValidator" />
			   <tool name="ImageManager" shortcut="CTRL+M"/>
			   <tool name="LinkManager" />
			   <tool name="Unlink" shortcut="CTRL+SHIFT+K" />
			   <tool name="InsertCustomDate" Text="Insert Custom Date" />
			   <tool name="InsertTable" shortcut="CTRL+ALT+T" />
			   <tool separator="true"/>
			   <tool name="FormatBlock" text="Structure" width="150px"/>
			   <tool name="Help" shortcut="CTRL+H" />
			 </tools>
			 <paragraphs>
			   <paragraph name="Clear Formatting" value="<p>" />
			   <paragraph name="Heading 2" value="<h2>" />
			   <paragraph name="Heading 3" value="<h3>" />
			   <paragraph name="Heading 4" value="<h4>" />
			   <paragraph name="Heading 5" value="<h5>" />
			 </paragraphs>
			 <cssFiles></cssFiles>
		</root>


1. Download the zipped **rnib.js**file from [this link](https://www.telerik.com/documents/rnib.zip) and append its content at the end of the **MOSSEditorTools.js** file in the **Resources** folder.

1. Test RadEditor - try the keyboard shortcut Ctrl+H to open the help menu
