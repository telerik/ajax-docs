---
title: Events
page_title: Events - RadColorPicker
description: Check our Web Forms article about Events.
slug: colorpicker/server-side-programming/events
tags: events
published: True
position: 1
---

# Events





The **RadColorPicker** control raises a single server-side event, **ColorChanged** that fires when the user changes the **SelectedColor** with the mouse or mouse wheel. Set the **AutoPostBack** property **True** to raise the event right after the color is changed on the client. Retrieve the **SelectedColor** property within the **ColorChanged** event handler:


![](images/colorpicker-server001.png)



````C#
protected void RadColorPicker1_ColorChanged(object sender, EventArgs e)
{
	string colorName = System.Drawing.ColorTranslator.ToHtml(RadColorPicker1.SelectedColor);
	Label1.Text = string.Format("Color: {0}  Hue: {1}  Saturation: {2}  Brightness {3}",
		colorName,
		RadColorPicker1.SelectedColor.GetHue(),
		RadColorPicker1.SelectedColor.GetSaturation(),
		RadColorPicker1.SelectedColor.GetBrightness());
} 
````
````VB
Protected Sub RadColorPicker1_ColorChanged(ByVal sender As Object, ByVal e As EventArgs)
	Dim colorName As String = System.Drawing.ColorTranslator.ToHtml(RadColorPicker1.SelectedColor)
	Label1.Text = String.Format("Color: {0} Hue: {1} Saturation: {2} Brightness {3}", colorName, RadColorPicker1.SelectedColor.GetHue(), RadColorPicker1.SelectedColor.GetSaturation(), RadColorPicker1.SelectedColor.GetBrightness())
End Sub
````


# See Also

 * [Methods]({%slug colorpicker/server-side-programming/methods%})
