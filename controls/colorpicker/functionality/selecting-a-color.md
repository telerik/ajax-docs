---
title: Selecting a Color
page_title: Selecting a Color | UI for ASP.NET AJAX Documentation
description: Selecting a Color
slug: colorpicker/functionality/selecting-a-color
tags: selecting,a,color
published: True
position: 1
---

# Selecting a Color



## 

To set the selected color of the palette use the __SelectedColor__ property. This can be assigned on the client, in the code-behind or directly in the ASP.NET markup.

* In the ASP.NET markup, define the color as a color name or a hexadecimal as shown in the example below.

````ASPNET
	     
							<telerik:RadColorPicker ID="RadColorPicker1" runat="server" Preset="standard" SelectedColor="#FFFF00" />
				
````

Displays as:
>caption 

![](images/radcolorpicker007.png)

* In code-behind use the __SelectedColor__ property. The selected value is decorated with a different CSS class.

````C#
	     
							RadColorPicker1.SelectedColor = System.Drawing.Color.Green;
				
````



````VB.NET
	     
							RadColorPicker1.SelectedColor = System.Drawing.Color.Green
				
````

Displays as:
>caption 

![](images/radcolorpicker006.png)

* When the __ShowIcon__ property is set to __True__ the __SelectedColor__ will fill the icon.

````C#
	     
							RadColorPicker1.SelectedColor = System.Drawing.Color.Green;RadColorPicker1.ShowIcon = true;
				
````



````VB.NET
	     
							RadColorPicker1.SelectedColor = System.Drawing.Color.Green;RadColorPicker1.ShowIcon = true;
				
````

Displays as:
>caption 

![](images/radcolorpicker005.png)

* You can also get/set the __SelectedColor__ using the [client-side API]({%slug colorpicker/client-side-programming/colorpicker-object%}), with the __set_selectedColor(value)__, __get_selectedColor()__ methods. To get the title of the selected color on the client you can use the __get_selecteColorTitle()__ method. The value on the client-side is always in hexadecimal format.

# See Also

 * [Events]({%slug colorpicker/server-side-programming/events%})
