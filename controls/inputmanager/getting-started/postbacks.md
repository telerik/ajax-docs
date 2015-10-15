---
title: Postbacks
page_title: Postbacks | RadInput for ASP.NET AJAX Documentation
description: Postbacks
slug: input/getting-started/postbacks
tags: postbacks
published: True
position: 6
---

# Postbacks



## 

By default, the **RadInput** controls do not cause a postback when the user finishes editing. You can change this default behavior by setting the **AutoPostBack** property to **True**.

All four types of **RadInput** controls have the **AutoPostBack** property. When **AutoPostBack** is **True**, a postback occurs when the user changes the value in the control and the control then loses focus.

You can conditionally prevent the postback that occurs when **AutoPostBack** is **True** by using the client-side **OnValueChanged** event. To prevent the postback from occurring, call **set_cancel(true)** on the eventArgs argument of the event handler:

````ASPNET
<script type="text/javascript">
	function PreventPostBack(sender, eventArgs)
	{
		if (eventArgs.get_newValue() == "")
			eventArgs.set_cancel(true);
	}
</script>
<telerik:RadTextBox ID="RadTextBox1" runat="server" AutoPostBack="True">
	<ClientEvents OnValueChanged="PreventPostBack" />
</telerik:RadTextBox>
````



An alternative and more suitable approach would be to use **set_autoPostBack(CustomCondition)**:

````JavaScript
function PreventPostBack(sender, eventArgs) {
	var condition = (eventArgs.get_newValue() == "42");
	sender.set_autoPostBack(condition);
}
````



# See Also

 * [OnValueChanged]({%slug input/client-side-programming/events/onvaluechanged%})
