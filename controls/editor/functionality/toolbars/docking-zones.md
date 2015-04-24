---
title: Docking Zones
page_title: Docking Zones | RadEditor for ASP.NET AJAX Documentation
description: Docking Zones
slug: editor/functionality/toolbars/docking-zones
tags: docking,zones
published: True
position: 3
---

# Docking Zones



## 

The RadEditor Toolbar position can be changed by using the **DockingZone** attribute which can have the following values:

1. **Left**

1. **Right**

1. **Top**

1. **Bottom**

1. **Module**

1. The **id** of outer html element
>caption 

![](images/editor-dockingzone.png)

Here is an example how to:

* Set Toolbar position in the RadEditor declaration:

````XML
	    <tools>   
	        <telerik:EditorToolGroup DockingZone="Left">        
	            <telerik:EditorTool Name="AjaxSpellCheck" />        
	            .................   
	        </telerik:EditorToolGroup> 
	    </tools>
````



* Set Toolbar position in the ToolsFile

````XML
	    <tools enabled="true" dockingzone="Bottom">    
	        <tool name="Bold" />    
	        .....................
	    </tools>
````



* Set the tools programmatically in the codebehind:



````C#
	
	        EditorToolGroup toolgroupLeft = new EditorToolGroup(); 
	        toolgroupLeft.Attributes["DockingZone"] = "Left"; 
	        editor.Tools.Add(toolgroupLeft); 
	        toolgroupLeft.Tools.Add(new EditorTool("Bold"));
	
````
````VB
	
	        Dim toolgroupLeft As New EditorToolGroup()
	        toolgroupLeft.Attributes("DockingZone") = "Left"
	        editor.Tools.Add(toolgroupLeft)
	        toolgroupLeft.Tools.Add(New EditorTool("Bold"))
	
````

