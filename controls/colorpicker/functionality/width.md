---
title: Width
page_title: Width | RadColorPicker for ASP.NET AJAX Documentation
description: Width
slug: colorpicker/functionality/width
tags: width
published: True
position: 4
---

# Width



The size of the color boxes in the palette is automatically calculated according to the **Columns** property to fit the given **Width** property. Each box is of equal width and height. By default, the size of each color box is **15** by **15** pixels. The example below shows two RadColorPicker definitions where both have 5 **Columns**, but the first uses the default width and the second has a **Width** of 200 pixels.

````ASP.NET
<telerik:RadColorPicker
   runat="server"
   ID="RadColorPicker1"
   SelectedColor="#000000"
   ShowEmptyColor="false"
   PreviewColor="false"
   Columns="5"
>
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




![](images/radcolorpicker009.png)

````ASP.NET
<telerik:RadColorPicker
   runat="server"
   ID="RadColorPicker1"
   SelectedColor="#000000"
   ShowEmptyColor="false"
   PreviewColor="false"
   Columns="5"
   Width="200px"
>
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


![](images/radcolorpicker010.png)

# See Also

 * [Columns]({%slug colorpicker/functionality/columns%})
