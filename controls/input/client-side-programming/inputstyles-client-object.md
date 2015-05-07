---
title: InputStyles Client Object
page_title: InputStyles Client Object | RadInput for ASP.NET AJAX Documentation
description: InputStyles Client Object
slug: input/client-side-programming/inputstyles-client-object
tags: inputstyles,client,object
published: True
position: 5
---

# InputStyles Client Object



## 

The InputStyles client object is returned by the **get_styles()** method of any **RadInput** control client object. It has a number of properties, each of which controls the style of the input control when it is in a particular state. The value of each property is an array of strings, where each string is a **name/value** pair for a style attribute. See [OnLoad]({%slug input/client-side-programming/events/onload%}) for an example of using this object.

The following table lists the properties of the InputStyles client object:


>caption  

| Property | Description |
| ------ | ------ |
| **DisabledStyle** |The style when the control is disabled.|
| **EnabledStyle** |The style when the control is enabled.|
| **EmptyMessageStyle** |The style when the control is displaying its empty message.|
| **FocusedStyle** |The style when the control has focus.|
| **HoveredStyle** |The style when the mouse hovers over the control.|
| **InvalidStyle** |The style when the control is displaying an invalid value.|
| **NegativeStyle** |The style when the control is displaying a negative value.|

This example demonstrates how the **InputStyles** object could be used to modify the appearance of an input control:

````JavaScript
<script type="text/javascript">
	function toggleModes(checkBox) {
		var textBox = $find("<%= RadTextBox1.ClientID %>");
		if (checkBox.checked) {
			textBox.get_styles().EnabledStyle[0] += "background-color: Gray; color: White;";
			textBox.get_styles().FocusedStyle[0] += "background-color: #AAA; color: White; border: 1px dashed DarkGreen;";
			textBox.get_styles().HoveredStyle[0] += "background-color: #AAA; color: White;";
			textBox.updateCssClass();
		}
		else {
			textBox.get_styles().EnabledStyle[0] = "";
			textBox.get_styles().FocusedStyle[0] = "";
			textBox.get_styles().HoveredStyle[0] = "";
			textBox.updateCssClass();
		}
	}
</script>
````



````ASPNET
<telerik:RadTextBox ID="RadTextBox1" runat="server"></telerik:RadTextBox>
<asp:CheckBox ID="CheckBox1" runat="server" onclick="toggleModes(this);" Text="Dark Mode On" />
````



# See Also

 * [Styles]({%slug input/appearance-and-styling/styles%})

 * [RadTextBox Client Object]({%slug input/client-side-programming/radtextbox-client-object%})

 * [RadNumericTextBox Client Object]({%slug input/client-side-programming/radnumerictextbox-client-object%})

 * [RadMaskedTextBox Client Object]({%slug input/client-side-programming/radmaskedtextbox-client-object%})

 * [RadDateInput Client Object]({%slug input/client-side-programming/raddateinput-client-object%})
