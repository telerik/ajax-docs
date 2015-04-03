---
title: Understanding the Skin CSS File
page_title: Understanding the Skin CSS File | UI for ASP.NET AJAX Documentation
description: Understanding the Skin CSS File
slug: colorpicker/appearance-and-styling/understanding-the-skin-css-file
tags: understanding,the,skin,css,file
published: True
position: 2
---

# Understanding the Skin CSS File



## 

Styles for Telerik controls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the .RadColorPicker_MySkin .palette" style will have an inset, two pixel gray border and a white background.

````XML
	.RadColorPicker_MySkin .palette
	{
		border: inset 2px #9c9c9c;
		background: #fff;
	} 
````



See the [CSS Skin File Selectors]({%slug colorpicker/appearance-and-styling/css-classes%}) topic for more information on the specific CSS selectors used for RadColorPicker skins.

Each style maps to a "class" attribute in an HTML tag. For example, consider the HTML rendering of a __RadColorPicker__ control:

````HTML
	<table
	   cellspacing="0"
	   cellpadding="0"
	   class="radcolorpicker RadColorPicker_Default"
	   id="RadColorPicker1">
	   <tbody>
	       <tr>
	           <td>
	               <div
	                   class="palette"
	                   id="RadColorPicker1_palette">
	                   <div
	                       class="emptycolor selectedcolor"
	                       id="RadColorPicker1_emptycolor">
	                       <a
	                           title="No Color"
	                           href="javascript:void(0);">
	                           <span>No Color</span>
	                       </a>
	                   </div>
	                   <ul>
	                       <li>
	                           <a style=". . ."
	                               title="#C00000"
	                               href="javascript:void(0);"
	                               class="colorbox">
	                               <span style="width: 12px;height: 12px;">#C00000</span>
	                           </a>
	                       </li>
	                       . . .
	                   </ul>
	                   <div
	                       style=". . ."
	                       class="colorpreview">
	                       <span class="colorvaluedark">#00B0F0</span>
	                       <span class="colorvaluelight">#00B0F0</span>
	                   </div>
	               </div>
	           </td>
	       </tr>
	   </tbody>
	</table> 
````



The __RadColorPicker__ control is rendered as a Table element with the class "radcolorpicker RadColorPicker_Default". The color boxes are rendered as a series of list item "<li>" tags that each contain a link "<a>" tag.

# See Also

 * [Controlling Appearance]({%slug colorpicker/appearance-and-styling/controlling-appearance%})

 * [Creating a Custom Skin]({%slug colorpicker/appearance-and-styling/creating-a-custom-skin%})

 * [CSS Classes]({%slug colorpicker/appearance-and-styling/css-classes%})

 * [Skins]({%slug colorpicker/appearance-and-styling/skins%})
