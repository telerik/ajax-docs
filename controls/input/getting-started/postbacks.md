---
title: Postbacks
page_title: Postbacks | UI for ASP.NET AJAX Documentation
description: Postbacks
slug: input/getting-started/postbacks
tags: postbacks
published: True
position: 6
---

# Postbacks



## 

By default, the __RadInput__ controls do not cause a postback when the user finishes editing. You can change this default behavior by setting the __AutoPostBack__ property to __True__.

All four types of __RadInput__ controls have the __AutoPostBack__ property. When __AutoPostBack__ is __True__, a postback occurs when the user changes the value in the control and the control then loses focus.

You can conditionally prevent the postback that occurs when __AutoPostBack__ is __True__ by using the client-side __OnValueChanged__ event. To prevent the postback from occurring, call __set_cancel(true)__ on the eventArgs argument of the event handler:

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



An alternative and more suitable approach would be to use __set_autoPostBack(CustomCondition)__:

````JavaScript
	            function PreventPostBack(sender, eventArgs) {
	                var condition = (eventArgs.get_newValue() == "42");
	                sender.set_autoPostBack(condition);
	            }
````



# See Also

 * [OnValueChanged]({%slug input/client-side-programming/events/onvaluechanged%})
