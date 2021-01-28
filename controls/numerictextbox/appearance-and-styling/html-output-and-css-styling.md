---
title: HTML Output and CSS Styling
page_title: HTML Output and CSS Styling - RadNumericTextBox
description: Check our Web Forms article about HTML Output and CSS Styling.
slug: numerictextbox/appearance-and-styling/html-output-and-css-styling
tags: html,output,and,css,styling
published: True
position: 4
---

# HTML Output and CSS Styling




Styles for Telerik controls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the **.RadInput_Default** style defines the default font and vertical alignment properties for the entire input control:

````CSS
.RadInput_Default
{
	 font: normal 11px Arial, Verdana, Tahoma, Sans-Serif; vertical-align: middle;
}
````



See the [CSS Skin File Selectors]({%slug numerictextbox/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for **RadInput** skins.

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





