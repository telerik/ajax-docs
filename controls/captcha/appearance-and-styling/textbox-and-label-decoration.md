---
title: TextBox and Label Decoration
page_title: TextBox and Label Decoration | UI for ASP.NET AJAX Documentation
description: TextBox and Label Decoration
slug: captcha/appearance-and-styling/textbox-and-label-decoration
tags: textbox,and,label,decoration
published: True
position: 1
---

# TextBox and Label Decoration



## Child controls decoration

RadCaptcha offer two composite properties-__TextBoxDecoration__	and __TextBoxLabelDecoration__-that offer properties to apply style decoration following the standard[System.Web.UI.WebControls.WebControl](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol%28v=vs.110%29.aspx) decoration properties.You can set __BackColor__, __Font__, etc.

In the following example we will customize the border of the TextBox and the Font style of the TextBoxLabel.

>tabbedCode

````ASPNET
			<telerik:RadCaptcha ID="RadCaptcha1" runat="server">
				<TextBoxDecoration BorderColor="Gray" BorderStyle="Solid" BorderWidth="2px" />
				<TextBoxLabelDecoration ForeColor="Gray" Font-Italic="true" Font-Names="Verdana, Arial, Georgia" />
			</telerik:RadCaptcha>
````



````C#
			RadCaptcha1.TextBoxDecoration.BorderColor = Color.Gray;
			RadCaptcha1.TextBoxDecoration.BorderStyle = BorderStyle.Solid;
			RadCaptcha1.TextBoxDecoration.BorderWidth = Unit.Pixel(2);
	
			RadCaptcha1.TextBoxLabelDecoration.Font.Names = new string[] { "Verdana", "Arial", "Georgia" };
			RadCaptcha1.TextBoxLabelDecoration.Font.Italic = true;
			RadCaptcha1.TextBoxLabelDecoration.ForeColor = Color.Gray;
````



````VB.NET
			RadCaptcha1.TextBoxDecoration.BorderColor = Color.Gray
			RadCaptcha1.TextBoxDecoration.BorderStyle = BorderStyle.Solid
			RadCaptcha1.TextBoxDecoration.BorderWidth = Unit.Pixel(2)
	
			RadCaptcha1.TextBoxLabelDecoration.Font.Names = New String() {"Verdana", "Arial", "Georgia"}
			RadCaptcha1.TextBoxLabelDecoration.Font.Italic = True
			RadCaptcha1.TextBoxLabelDecoration.ForeColor = Color.Gray
````


>end
>caption RadCaptcha with decorated TextBox and TextBoxLabel

![captcha-controls-decoration](images/captcha-controls-decoration.png)

# See Also

 * [CSS Classes]({%slug captcha/appearance-and-styling/css-classes%})

 * [System.Web.UI.WebControls.WebControl](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol%28v=vs.110%29.aspx)
