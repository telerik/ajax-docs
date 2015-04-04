---
title: Docking Zones
page_title: Docking Zones | UI for ASP.NET AJAX Documentation
description: Docking Zones
slug: editor/functionality/toolbars/docking-zones
tags: docking,zones
published: True
position: 3
---

# Docking Zones



## 

The RadEditor Toolbar position can be changed by using the __DockingZone__ attribute which can have the following values:

1. __Left__

1. __Right__

1. __Top__

1. __Bottom__

1. __Module__

1. The __id__ of outer html element
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

>tabbedCode

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
>end
