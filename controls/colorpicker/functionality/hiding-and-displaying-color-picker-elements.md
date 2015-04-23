---
title: Hiding and Displaying Color Picker Elements
page_title: Hiding and Displaying Color Picker Elements | RadColorPicker for ASP.NET AJAX Documentation
description: Hiding and Displaying Color Picker Elements
slug: colorpicker/functionality/hiding-and-displaying-color-picker-elements
tags: hiding,and,displaying,color,picker,elements
published: True
position: 6
---

# Hiding and Displaying Color Picker Elements





You can hide the empty color button by setting the **ShowEmptyColor** property to **False**. Hide the preview area by setting the **PreviewColor**property to **False**. The example below hides both areas to leave the palette only.
 

![](images/radcolorpicker015.png)

````ASPNET
<telerik:RadColorPicker
   ID="RadColorPicker1"
   runat="server"
   Preset="standard"
   Skin="Vista"
   PreviewColor="False"
   ShowEmptyColor="False"
/> 
````





````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadColorPicker1.ShowEmptyColor = false;
	RadColorPicker1.PreviewColor = false;
} 
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	RadColorPicker1.ShowEmptyColor = False
	RadColorPicker1.PreviewColor = False
End Sub
````

