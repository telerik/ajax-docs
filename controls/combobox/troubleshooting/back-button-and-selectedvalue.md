---
title: Back Button and SelectedValue
page_title: Back Button and SelectedValue | UI for ASP.NET AJAX Documentation
description: Back Button and SelectedValue
slug: combobox/troubleshooting/back-button-and-selectedvalue
tags: back,button,and,selectedvalue
published: True
position: 7
---

# Back Button and SelectedValue



## 

**PROBLEM**

Steps to reproduce the problem:

1. Select a combo item

2. Use **Response.Redirect** or **Server.Transfer** to go to another page

3. Click on the Back button of the browser

The combobox shows the correct text, but the SelectedValue property is not correct (the SelectedItem is lost).

**WORKAROUND**

1. Add a hidden field to the page which will hold the selected value of the combobox:

		````ASPNET
		
		<input type="hidden" id="RadComboBox1Value" value="" />
		
		````



2. Subscribe to the [OnClientSelectedIndexChanged]({%slug combobox/client-side-programming/events/onclientselectedindexchanged%}) event and update that hidden field:

````JavaScript
	
function onSelectedIndexChanged(sender, eventArgs) {
	$get("RadComboBox1Value").value = eventArgs.get_item().get_value();
}
	
````



3. On pageLoad() check for the value of the hidden field. If it is not empty - find the appropriate combo item and select it:

````JavaScript
		
function pageLoad() {
	var savedValue = $get("RadComboBox1Value").value;
	var combo = $find('<%= RadComboBox1.ClientID %>');
	if (savedValue != "" && combo.findItemByValue(savedValue)) {
	  combo.findItemByValue(savedValue).select();
	}
}
	
````



Here is the final code:

````ASPNET
<telerik:RadComboBox ID="RadComboBox1"
   runat="server"
   OnClientSelectedIndexChanged="onSelectedIndexChanged">
   <Items>
	   <telerik:RadComboBoxItem runat="server" Text="Red" Value="red" />
	   <telerik:RadComboBoxItem runat="server" Text="Blue" Value="blue" />
	   <telerik:RadComboBoxItem runat="server" Text="Green" Value="Green" />
   </Items>
</telerik:RadComboBox>
   
<input type="hidden" id="RadComboBox1Value" value="" />
   
<asp:Button ID="Button1" runat="server" Text="Button that Redirects" />
<script type="text/javascript">
	function pageLoad() {
		var savedValue = $get("RadComboBox1Value").value;
		var combo = $find('<%= RadComboBox1.ClientID %>');

		if (savedValue != "" && combo.findItemByValue(savedValue)) {
			combo.findItemByValue(savedValue).select();
		}
	}

	function onSelectedIndexChanged(sender, eventArgs) {
		$get("RadComboBox1Value").value = eventArgs.get_item().get_value();
	}
</script>
````


