---
title: Change the appearance of the input element
page_title: Change the appearance of the input element
description: Check our Web Forms article about Change the appearance of the input element.
slug: combobox/appearance-and-styling/change-the-appearance-of-the-input-element
tags: tutorial,change,appearance,input,element
published: True
position: 4
---

# Change the appearance of the input element

This tutorial is relevant to the **old versions** of Telerik.Web.UI assembly **(prior to Q1 2009).** For the new versions please check [this article]({%slug combobox/appearance-and-styling/change-the-height-of-the-input-element%}).


The tutorial will show you different ways of changing the appearance of the input element of RadComboBox (inline, in the code-behind, with JavaScript, with CSS).

*  **Inline**

Set the **BackColor** and **ForeColor** properties of RadComboBox:

````ASPNET

<telerik:radcombobox 
	id="RadComboBox1" 
	backcolor="red" 
	forecolor="yellow" 
	width="180"
	runat="server">
</telerik:radcombobox>

```` 

The result is:

![ComboBox Input1](images/combobox_input1.png)

* **Code-behind** You can set different properties in the code behind as follows:

````C#

protected void Page_Load(object sender, EventArgs e)
{    
	RadComboBox1.BackColor = System.Drawing.Color.Red;    
	RadComboBox1.ForeColor = System.Drawing.Color.Yellow;    
	RadComboBox1.Font.Bold = true;
}

````

The result is:

![ComboBox Input2](images/combobox_input2.png)

* **JavaScript** You can change the look of the input area with JavaScript code, e.g. dynamically in the **OnClientSelectedIndexChanged**

````JavaScript

function OnClientSelectedIndexChangedHandler(sender, eventArgs) {
	var inputElement = sender.get_inputDomElement();
	inputElement.style.backgroundColor = "blue";
	inputElement.style.color = "yellow";
	inputElement.style.height = "37px";
	inputElement.style.textAlign = "center";
}

````

The result is:

![ComboBox Input3](images/combobox_input3.png)

* **CSS**

Add the CSS rules to the `<Head>` section of the page:

````CSS

div.RadComboBox_MyDefault .rcbInputCell INPUT.rcbInput
{
	background-color: red;
	color: yellow;
	height: 37px;
}

````

Here MyDefault is the name of the **Skin** of RadComboBox. If you use a different skin, you need to put its name instead of Default.

The result is:

![ComboBox Input4](images/combobox_input4.png)

Using the CssClass property:

````ASPNET

<telerik:RadComboBox RenderMode="Lightweight" 
	ID="RadComboBox4" 
	Width="180" 
	CssClass="CustomCssClass" 
	runat="server">
</telerik:RadComboBox>

````

In order the CSS class to take effect to the input area (override the default skin), you need to define it in the following way

````CSS

div.CustomCssClass .rcbInputCell INPUT.rcbInput
{    
	background-color: red;       
	color: yellow;    
	height: 37px;    
}

````

Here the specificity of the selector is high enough to override the skin's selector.

## See Also

[How To Override Styles in a RadControl for ASP.NET AJAX' Embedded Skin](https://blogs.telerik.com/Server-Error.aspx?aspxerrorpath=/DimoDimov/Posts/08-06-17/How_To_Override_Styles_in_a_RadControl_for_ASP_NET_AJAX_Embedded_Skin.aspx)

[CSS Skin File Selectors]({%slug combobox/appearance-and-styling/css-skin-file-selectors%})

[Understanding the Skin CSS File]({%slug combobox/appearance-and-styling/understanding-the-skin-css-file%})

[Change the height of the input element]({%slug combobox/appearance-and-styling/change-the-height-of-the-input-element%}) 

