---
title: Single Rendering HTML Output
page_title: Single Rendering HTML Output | UI for ASP.NET AJAX Documentation
description: Single Rendering HTML Output
slug: input/appearance-and-styling/single-rendering-html-output
tags: single,rendering,html,output
published: True
position: 5
---

# Single Rendering HTML Output



The main advantage of using the __SingleInputRendering__ mode of the RadInput controls is the less rendered HTML elements. Another improvement in this case is that no tables are used for showing the buttons and/or labels.

## HTML Output of RadInput textboxes in Single Rendering mode

The HTML output of a RadInput control in Single Rendering Mode without Label and Password Strength Checker is the following:

````XML
		<span id="RadNumericTextBox1_wrapper" class="riSingle  riContSpinButtons RadInput RadInput_Metro"
			style="width: 290px;">
			<input id="RadNumericTextBox1" name="RadNumericTextBox1"
				class="riTextBox riEmpty" value="type here..." type="text"><a class="riUp" href="javascript:void(0)"
					id="RadNumericTextBox1_SpinUpButton"><span>Spin Up</span></a><a
						class="riDown" href="javascript:void(0)" id="RadNumericTextBox1_SpinDownButton"><span>Spin
							Down</span></a><input value="{&quot;enabled&quot;:true,&quot;emptyMessage&quot;:&quot;type here...&quot;,&quot;validationText&quot;:&quot;&quot;
							,&quot;valueAsString&quot;:&quot;&quot;,&quot;minValue&quot;:-70368744177664,&quot;maxValue&quot;:70368744177664}"
								autocomplete="off" id="RadNumericTextBox1_ClientState"
								name="RadNumericTextBox1_ClientState" type="hidden"></span>
````



* __span.riSingleriContButton RadInput RadInput_Metro__- this is the control wrapper, which holds the skin name.The <span> is an inline element, which does not force a new line on the page. The .riSingle CSS class force*display:inline-block*attribute so width is supported by the <span> element. The default width of the RadInput is 160px.

* __a.riButton__ - the submit button. It is displayed if the __ShowButton__ property is set to __"true"__.

* __a.riUp and a.riDown__ - the spin buttons of RadNumericTextBox . They are displayed if the __ShowSpinButton__ property is set to __"true"__.

The HTML output of a RadInput control in Single Rendering Mode with Label and Password Strength Checker is the following:

````XML
		<span id="RadNumericTextBox1_wrapper" class="riSingle  riContSpinButtons RadInput RadInput_Metro"
			style="width: 290px;">
			<label class="riLabel" for="RadNumericTextBox1" id="RadNumericTextBox1_Label" style="width: 116px;">
				RadNumericTextBox:
			</label>
			<span class="riContentWrapper" style="width: 174px;">
				<input id="RadNumericTextBox1" name="RadNumericTextBox1" class="riTextBox riEmpty"
					value="type here..." type="text"><a class="riUp" href="javascript:void(0)" id="RadNumericTextBox1_SpinUpButton"><span>Spin
						Up</span></a><a class="riDown" href="javascript:void(0)" id="RadNumericTextBox1_SpinDownButton"><span>Spin
							Down</span></a></span>
			<input value="{&quot;enabled&quot;:true,&quot;emptyMessage&quot;:&quot;type here...&quot;,&quot;validationText&quot;:&quot;&quot;
			,&quot;valueAsString&quot;:&quot;&quot;,&quot;minValue&quot;:-70368744177664,&quot;maxValue&quot;:70368744177664}"
				autocomplete="off" id="RadNumericTextBox1_ClientState" name="RadNumericTextBox1_ClientState"
				type="hidden"></span>
````



* __span.riSingle__ - this class is applied only on the wrapper elements when __SingleInputRendering__ is enabled.

* __input.riTextBox__ - this class is applied to the input all the time. You can use this CSS class to style the input element.

* __label.riLabel__ - the textbox label, which provides information to the user. When clicked, the textbox is focused. The label is set by using the input’s “Label” property. Its width could be set with the __“LabelWidth”__ property, which is 40 % of the entire input width by default.

* __span.riContentWrapper__ - this is the second wrapper, which holds the textbox and buttons. Its width is calculated on the server and equals to the default input width without the width of the label if the label is enabled.

* For a list of the different CSS classes that are applied based on the state of the input control check [this]({%slug input/appearance-and-styling/styles%}) help topic.

>note These classes are specific to the input control when it is in single-input rendering mode.	For a list of the CSS classes that are applicable to all rendering modes check[ this]({%slug input/appearance-and-styling/css-skin-file-selectors%})help topic.
>

