---
title: Assign Different Client Events for Different Controls
page_title: Assign Different Client Events for Different Controls
description: Check our Web Forms article about Assign Different Client Events for Different Controls.
slug: ajaxpanel/client-side-programming/how-to/assign-different-client-events-for-different-controls
tags: assign,different,client,events,for,different,controls
published: True
position: 4
---

# Assign Different Client Events for Different Controls



## 

In order to assign different client-events to different AJAX-enabled controls, you can use the approach shown in **Example 1** .

**Example 1: You can determine the target control of the AJAX request using the client-side events of the RadAjaxManager.**

````ASP.NET
<telerik:RadAjaxPanel runat="server" ID="RadAjaxPanel1" ClientEvents-OnRequestStart="Start" ClientEvents-OnResponseEnd="End">
	<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
	<asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
		<asp:ListItem>111</asp:ListItem>
		<asp:ListItem>222</asp:ListItem>
	</asp:DropDownList>
</telerik:RadAjaxPanel>
````



````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
		function Start(sender, arguments) {
			if (arguments.EventTarget == "<%= Button1.UniqueID %>") {
				alert("StartButton");
			}
			if (arguments.EventTarget == "<%= DropDownList1.UniqueID %>") {
				alert("StartDropdown");
			}
		}
		function End(sender, arguments) {
			if (arguments.EventTarget == "<%= Button1.UniqueID %>") {
    			alert("EndButton");
    		} if (arguments.EventTarget == "<%= DropDownList1.UniqueID %>") {
    			alert("EndDropdown");
    		}
    	}
	</script>
</telerik:RadCodeBlock>
````



This way the **DropDownList** and the **Button** will have different client-events although they are using the same **RadAjaxManager** or **RadAjaxPanel** .

## See Also

 * [Overview]({%slug ajaxpanel/client-side-programming/overview%})

 * [OnRequestStart]({%slug ajaxpanel/client-side-programming/events/onrequeststart%})

 * [OnResponseEnd]({%slug ajaxpanel/client-side-programming/events/onresponseend%})
