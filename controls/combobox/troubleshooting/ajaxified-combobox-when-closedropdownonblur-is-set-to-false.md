---
title: Ajaxified ComboBox when CloseDropDownOnBlur is set to false 
page_title: Ajaxified ComboBox when CloseDropDownOnBlur is set to false - RadComboBox
description: Check our Web Forms article about Ajaxified ComboBox when CloseDropDownOnBlur is set to false.
slug: combobox/troubleshooting/ajaxified-combobox-when-closedropdownonblur-is-set-to-false
tags: ajaxified,combobox,closedropdownonblur,false
published: True
position: 15
---

# Ajaxified ComboBox when CloseDropDownOnBlur is set to false



## 

Ajaxifying the ComboBox when its **CloseDropDownOnBlur** property is set to **false** and **OpenDropDownOnLoad** to **true** may lead to an exception (Cannot read property 'reflowing' of null) after an ajax request and subsequent window resize. In order for the ComboBox' dropdown settings to be properly restored after the 
request its dropdown needs to be closed before the request and open after it. This can be done with the corresponding client-side methods of the control, as shown below: 


````ASPNET
<telerik:RadCodeBlock ID="RadCodeBlock2" runat="server">
	<script type="text/javascript">
		function OnResponseEnd(sender, args) {
			var combo = $find("<%=RadComboBox1.ClientID%>");
			combo.showDropDown();
		}

		function OnRequestStart(sender, args) {
			var combo = $find("<%=RadComboBox1.ClientID%>");
			combo.hideDropDown();
		}
	</script>
</telerik:RadCodeBlock>
<div>
	<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" IsSticky="true"></telerik:RadAjaxLoadingPanel>
	<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" LoadingPanelID="RadAjaxLoadingPanel1"
		ClientEvents-OnResponseEnd="OnResponseEnd" ClientEvents-OnRequestStart="OnRequestStart">
		<div>
			<asp:Button ID="Button1" runat="server" Text="PostBack" />
			<telerik:RadComboBox ID="RadComboBox1" runat="server" AutoPostBack="true" CloseDropDownOnBlur="false" OpenDropDownOnLoad="true">
				<Items>
					<telerik:RadComboBoxItem Text="Item1" />
					<telerik:RadComboBoxItem Text="Item2" />
					<telerik:RadComboBoxItem Text="Item3" />
					<telerik:RadComboBoxItem Text="Item4" />
				</Items>
			</telerik:RadComboBox>
		</div>
	</telerik:RadAjaxPanel>
</div>
````


