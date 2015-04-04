---
title: Defining Color Palettes
page_title: Defining Color Palettes | UI for ASP.NET AJAX Documentation
description: Defining Color Palettes
slug: colorpicker/functionality/defining-color-palettes
tags: defining,color,palettes
published: True
position: 0
---

# Defining Color Palettes



## 

__RadColorPicker__

1. Using the __Preset__ property, a user can choose from a number of predefined (embedded) palettes. [See]({%slug colorpicker/functionality/color-presets%}) the available predefined palettes.

````ASPNET
	     
							<telerik:RadColorPicker ID="RadColorPicker1" runat="server" Preset="Standard" />
				
````

The result is:
>caption 

![](images/radcolorpicker001.png)

1. Defining the __Items____collection__ allows users to set their own colors in the color palette

````ASPNET
	<telerik:RadColorPicker ID="RadColorPicker1" runat="server" Preset="none">
	   <telerik:ColorPickerItem Title="Yellow" Value="#FFFF00" />
	   <telerik:ColorPickerItem Title="Light Green" Value="#00FF00" />
	   <telerik:ColorPickerItem Title="Turquoise" Value="#00FFFF" />
	   <telerik:ColorPickerItem Title="Pink" Value="#FF00FF" />
	   <telerik:ColorPickerItem Title="Blue" Value="#0000FF" />
	   <telerik:ColorPickerItem Title="Red" Value="#FF0000" />
	   <telerik:ColorPickerItem Title="Dark Blue" Value="#000080" />
	   <telerik:ColorPickerItem Title="Teal" Value="#008080" />
	   <telerik:ColorPickerItem Title="Green" Value="#008000" />
	   <telerik:ColorPickerItem Title="Violet" Value="#800080" />
	   <telerik:ColorPickerItem Title="Dark Red" Value="#800000" />
	   <telerik:ColorPickerItem Title="Dark Yellow" Value="#808000" />
	   <telerik:ColorPickerItem Title="Gray - 50%" Value="#808080" />
	   <telerik:ColorPickerItem Title="Gray - 25%" Value="#C0C0C0" />
	   <telerik:ColorPickerItem Title="Black" Value="#000000" />
	</telerik:RadColorPicker> 
````

The result is:
>caption 

![](images/radcolorpicker002.png)

1. Using the __Preset__*and *the __Items__ collection, you can extend the colors of a predefined palette by adding custom colors to an existing palette:

````ASPNET
	<telerik:RadColorPicker ID="RadColorPicker1" runat="server" Preset="Grayscale">
	   <telerik:ColorPickerItem Title="Blue" Value="#0000FF" />
	   <telerik:ColorPickerItem Title="Red" Value="#FF0000" />
	   <telerik:ColorPickerItem Title="Green" Value="#008000" />
	   <telerik:ColorPickerItem Title="Black" Value="#000000" />
	</telerik:RadColorPicker> 
````

The result is:
>caption 

![](images/radcolorpicker003.png)

1. You can also combine preset palettes in the code-behind:

````ASPNET
	     
							<telerik:RadColorPicker ID="RadColorPicker1" runat="server" />
				
````





````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			RadColorPicker1.Columns = 12;
			RadColorPicker1.Items.AddRange(RadColorPicker1.GetStandardColors());
			RadColorPicker1.Items.AddRange(RadColorPicker1.GetGrayscaleColors());
		} 
````
````VB.NET
		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
			RadColorPicker1.Columns = 12
			RadColorPicker1.Items.AddRange(RadColorPicker1.GetStandardColors())
			RadColorPicker1.Items.AddRange(RadColorPicker1.GetGrayscaleColors())
		End Sub
````


The result is:
>caption 

![](images/radcolorpicker004.png)
