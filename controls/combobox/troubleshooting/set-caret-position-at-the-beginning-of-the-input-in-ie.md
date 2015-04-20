---
title: Set Caret Position at the Beginning of the Input in IE
page_title: Set Caret Position at the Beginning of the Input in IE | UI for ASP.NET AJAX Documentation
description: Set Caret Position at the Beginning of the Input in IE
slug: combobox/troubleshooting/set-caret-position-at-the-beginning-of-the-input-in-ie
tags: set,caret,position,at,the,beginning,of,the,input,in,ie
published: True
position: 12
---

# Set Caret Position at the Beginning of the Input in IE



## 

By default when an item is selected, the input of the RadComboBox is focused and the caret is positoned at the end of the selected item's text. This could be a problem when the text of the item exceeds the width of the input, since you are seeing only the end of the text. There is a very easy workaround for this behavior shown below:

>note Please note that this behavior only occurs in IE, so there is no need of the workaround in the other browsers.
>


````ASPNET
<telerik:radcombobox id="RadComboBox1" runat="server" onclientselectedindexchanged="OnClientSelectedIndexChanged">
		<Items>
			<telerik:RadComboBoxItem Text="Very very very very very long text1" />
			<telerik:RadComboBoxItem Text="Very very very very very long text2" />
			<telerik:RadComboBoxItem Text="Very very very very very long text3" />
			<telerik:RadComboBoxItem Text="Very very very very very long text4" />
			<telerik:RadComboBoxItem Text="Very very very very very long text5" />
			<telerik:RadComboBoxItem Text="Very very very very very long text6" />
		</Items>
	</telerik:radcombobox>
<script type="text/javascript">


	function OnClientSelectedIndexChanged(sender, args) {

		var combo = sender;
		var input = combo.get_inputDomElement();

		if (input.setSelectionRange) {
			input.setSelectionRange(0, 0);
		}
		else if (input.createTextRange) {
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', 0);
			range.moveStart('character', 0);
			range.select();
		}

	}
</script>
````





# See Also
