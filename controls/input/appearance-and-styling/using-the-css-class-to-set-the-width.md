---
title: Using the CSS class to set the width
page_title: Using the CSS class to set the width | UI for ASP.NET AJAX Documentation
description: Using the CSS class to set the width
slug: input/appearance-and-styling/using-the-css-class-to-set-the-width
tags: using,the,css,class,to,set,the,width
published: True
position: 7
---

# Using the CSS class to set the width



## 

>note Since the Q3 2011, the RadInput controls have a **LabelWidth** property. With it and the **Width** property, the functionality from below can be achieved declaratively.
>


Due to their specific HTML rendering and different layout modes, **RadInput** textboxes always have an explicit width set as an inline style. In some cases it may be more convenient to manage the controls' widths with external CSS code or to simply remove the default width. Depending on the control's configuration, there are a couple of different ways to accomplish this.



````ASPNET
<script type="text/javascript">
	function changeWidth(sender, args) {
		var textBox = sender;
		textBox._originalTextBoxCssText = "width:200px;";
		textBox.updateCssClass();
	}
</script>
<telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" ShowButton="true"
	ShowSpinButtons="true" Label="Label">
	<clientevents onload="changeWidth" />
</telerik:RadNumericTextBox>
````



The following examples involve overriding the control's inline width style with CSS rules using the !important clause.

````ASPNET
<style type="text/css">
	.CustomClass
	{
		width: 200px !important;
	}

		.CustomClass .riLabel
		{
			width: 30% !important;
		}

	span.CustomClass .riContentWrapper,
	span.CustomClass.riContButton.riContSpinButtons .riContentWrapper
	{
		width: 70% !important;
		padding-right: 0;
	}
</style>
<telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" ShowButton="true"
	ShowSpinButtons="true" Label="Label" WrapperCssClass="CustomClass">
</telerik:RadNumericTextBox>
````



````ASPNET
<style type="text/css">
	.ContainerClass .RadInput
	{
		width: 300px !important;
	}

		.ContainerClass .RadInput .riLabel
		{
			width: 40% !important;
		}

	.ContainerClass span.RadInput .riContentWrapper,
	.ContainerClass span.riContButton.riContSpinButtons .riContentWrapper
	{
		width: 60% !important;
		padding-right: 0;
	}
</style>
<div class="ContainerClass">
	<telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" ShowButton="true" ShowSpinButtons="true"
		Label="Label">
	</telerik:RadNumericTextBox>
</div>
````

The suggested examples apply for the [Single Input Rendering]({%slug input/single-input-rendering-mode%}) mode of RadInput. More information abdout the default CSS classes can be found [here] ({%slug input/appearance-and-styling/css-skin-file-selectors%}). 

# See Also

 * [HTML Output and CSS Styling]({%slug input/appearance-and-styling/html-output-and-css-styling%})
