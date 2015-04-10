---
title: Displaying The Popup Above The Input Area
page_title: Displaying The Popup Above The Input Area | UI for ASP.NET AJAX Documentation
description: Displaying The Popup Above The Input Area
slug: calendar/how-to/displaying-the-popup-above-the-input-area
tags: displaying,the,popup,above,the,input,area
published: True
position: 2
---

# Displaying The Popup Above The Input Area



## 

__RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__ all display their popup calendar and time view controls immediately below the input area. You can use the [client-side API]({%slug calendar/client-side-programming/overview%}) to display the popup above the input area instead. The following example shows how to do this for __RadDateTimePicker__. The same technique can be used with __RadDatePicker__ and __RadTimePicker__ controls.

````ASPNET
	     
	<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
		<script type="text/javascript">
			function ShowPopupAbove(sender, eventArgs) {
				var picker = $find("<%= RadDateTimePicker1.ClientID %>");
				var userChar = eventArgs.get_keyCharacter();
				var textBox = picker.get_textBox();
				if (userChar == '@') {
					var popupElement = picker.get_popupContainer();
					var dimensions = Telerik.Web.UI.Calendar.Utils.GetElementDimensions(popupElement);
					var position = Telerik.Web.CommonScripts.getLocation(textBox);
					picker.showPopup(position.x, position.y - dimensions.height);
					eventArgs.set_cancel(true);
				}
				else if (userChar == '#') {
					var popupElement = picker.get_timePopupContainer();
					var dimensions = Telerik.Web.UI.Calendar.Utils.GetElementDimensions(popupElement);
					var position = Telerik.Web.CommonScripts.getLocation(textBox);
					picker.showTimePopup(position.x, position.y - dimensions.height);
					eventArgs.set_cancel(true);
				}
			}
		</script>
	</telerik:RadCodeBlock>
	<div style="height: 300px"></div>
	
	<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
		<DateInput runat="server">
			<ClientEvents OnKeyPress="ShowPopupAbove" />
		</DateInput>
		<DatePopupButton CssClass="radPopupImage_Default" Visible="False" />
		<TimePopupButton CssClass="radPopupImage_Default" Visible="False" />
	</telerik:RadDateTimePicker>
	
````



# See Also

 * [Displaying the Popup]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/displaying-the-popup%})
