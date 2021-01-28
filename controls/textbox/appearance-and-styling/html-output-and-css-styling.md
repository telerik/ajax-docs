---
title: HTML Output and CSS Styling
page_title: HTML Output and CSS Styling - RadTextBox
description: Check our Web Forms article about HTML Output and CSS Styling.
slug: radtextbox/appearance-and-styling/html-output-and-css-styling
tags: html,output,and,css,styling
published: True
position: 4
---

# HTML Output and CSS Styling



>note Since Q1 2012 **RadInput** has a new rendering mode for its controls - Single Input Rendering, which is enabled by default. Therefore, this topic is no longer valid, except in the cases when **Old Rendering** mode is activated by setting the **EnableSingleInputRendering** property to **False** .

Styles for Telerik controls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the **.RadInput_Default** style defines the default font and vertical alignment properties for the entire input control:

````CSS
.RadInput_Default
{
	 font: normal 11px Arial, Verdana, Tahoma, Sans-Serif; vertical-align: middle;
}
````



See the [CSS Skin File Selectors]({%slug radtextbox/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for **RadInput** skins.

## HTML Output of RadDateInput

````HTML
<span class="RadInput RadInput_Default" id="RadControl1_wrapper">
	<input type="text" class="riTextBox riEnabled" id="RadControl1_text" />
	<input type="text" style="visibility: hidden" class="rdfd_" id="RadControl1" />
	<input type="hidden" id="RadControl1_ClientState" /></span>
````





````HTML
<div class="RadInput RadInput_Default" id="RadControl3_wrapper">
	<table class="riTable">
		<tbody>
			<tr>
				<td>
					<label class="riLabel">
						Label</label>
				</td>
				<td class="riCell">
					<input type="text" class="riTextBox riEnabled" id="RadControl3_text" />
					<input type="text" style="visibility: hidden" class="rdfd_" id="RadControl3" />
				</td>
				<td class="riBtn">
					<a href="#"><span>Button</span></a>
				</td>
				<td class="riSpin">
					<a href="javascript:void(0)" class="riUp"><span>Spin Up</span></a><a href="javascript:void(0)"
						class="riDown"><span>Spin Down</span></a>
				</td>
			</tr>
		</tbody>
	</table>
	<input type="hidden" id="RadControl3_ClientState" />
</div>
````



The HTML output of a textbox styled by RadInputManager is the following:

````HTML
<input type="text" class="RadInputMgr RadInputMgr_Default RadInput_Enabled_Default"
	id="TextBox1" />
````



* **input.RadInputMgr.RadInputMgr_SkinName** - the textbox has three CSS classes - one is common for all RadInputManager textboxes, one is common for all RadInputManager textboxes with a particular skin, and the last one styles the textbox according to its state (enabled, hovered, focused, invalid, etc)

**In all three examples above, the ``<input>`` element is replaced by a ``<textarea>`` element if TextMode="MultiLine".**

By default in non-single input rendering mode the width of the label is not set, and the length of the input is 100%, so it will be auto sized to get all possible free space in the table. When in single input rendering mode, the default length of the label is 40% and 60% for the input. This width can be changed with the LabelWidth property. Another reason you would might want to set EnableSingleInputRendering to false for your Telerik’s ASP.NET AJAX Input controls is to avoid re-computing of the styles dynamically on the client.

## Notes on RadInput skinning

* the RadInput table cells should have a zero padding, with the exception of the riCell table cell - it should have a right padding equal to the sum of the textbox' side borders and paddings. Otherwise the textbox will overlay the control's buttons or its right border will not be seen.


## Dynamically applied classes

The Skin CSS file includes definitions for the classes that reflect the current state of the input controls. These classes are **riEnabled**, **riDisabled**, **riEmpty**, **riFocused**, **riHover**, **riError**, and **riNegative**.

>note The various [style properties]({%slug radtextbox/appearance-and-styling/styles%}) will override any of the properties set by these classes.
>

