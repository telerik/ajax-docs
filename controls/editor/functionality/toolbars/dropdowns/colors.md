---
title: Colors
page_title: Colors | RadEditor for ASP.NET AJAX Documentation
description: Colors
slug: editor/functionality/toolbars/dropdowns/colors
tags: colors
published: True
position: 5
---

# Colors

The RadEditor **Colors** dropdown displays a predefined set of colors by default and displays for the Font and Fill color drop downs. All colors are held in the **Colors** collection. You can add to the Colors collection declaratively, programmatically and using the ToolsFile.

![](images/editor-dropdowns007.png)

## Using the ColorsCollection Declaratively

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" Skin="WebBlue">
	<Colors>
		<telerik:EditorColor Title="Dark Orange" Value="#FF8C00" />
		<telerik:EditorColor Title="Red" Value="red" />
		<telerik:EditorColor Title="Purple" Value="#9900CC" />
	</Colors>
</telerik:RadEditor>
````

## Using ColorsProgrammatically

Use the Colors collection **Add()** method to include new items in the list. Using the **Add()** method resets the Colors dropdown, so the colors you add will not be appended to the default set, but will rather create a new Colors set. See the example below:



````C#
RadEditor1.Colors.Add("#FF8C00");
RadEditor1.Colors.Add("red");
RadEditor1.Colors.Add("#9900CC");</pre>     
````
````VB
RadEditor1.Colors.Add("#FF8C00")
RadEditor1.Colors.Add("red")
RadEditor1.Colors.Add("#9900CC")
````

>note Bear in mind that RadEditor will persist its state (including the Colors set) between postbacks. In order to create a new set of Colors (e.g. for different users), you will need to clear it first. This can be done using the **Remove()** or **Clear()** methods for the Colors collection.

## Using the ToolsFile

You can also populate the color dropdowns using the ToolsFile, as shown in the example below:

![](images/editor-dropdowns008.png)

````XML
<root>  
	<tools name="MainToolbar" enabled="true">    
		<tool name="BackColor" />    
		<tool name="ForeColor" />  
	</tools>  
	<colors>    
		<color Title ="My color" value="#FF00EE" />    
		<color value="#840012" />    
		<color value="#0000AA" />    
		<color value="#95AA34" />  
	</colors>
</root>
````

**Here is the default set of colors:**

"","#ffcccc","#ffcc99","#ffff99","#ffffcc","#99ff99","#99ffff","#ccffff","#ccccff","#ffccff","#cccccc","#ff6666","#ff9966", "#ffff66","#ffff33","#66ff99","#33ffff","#66ffff","#9999ff","#ff99ff","#c0c0c0","#ff0000","#ff9900","#ffcc66","#ffff00", "#33ff33","#66cccc","#33ccff","#6666cc","#cc66cc","#999999","#cc0000","#FF6600","#FFCC33","#FFCC00","#33CC00","#3366FF", "#00CCCC","#6633FF","#CC33CC","#666666","#990000","#cc6600","#cc9933","#999900","#009900","#339999","#3333ff","#6600cc", "#993399","#333333","#660000","#993300","#996633","#666600","#006600","#336666","#000099","#333399","#663366","#000000", "#330000","#663300","#663333","#333300","#003300","#003333","#000066","#330099","#330033"

## See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})
