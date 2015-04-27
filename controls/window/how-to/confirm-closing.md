---
title: Confirm Closing
page_title: Confirm Closing | RadWindow for ASP.NET AJAX Documentation
description: Confirm Closing
slug: window/how-to/confirm-closing
tags: confirm,closing
published: True
position: 10
---

# Confirm Closing



It is a common scenario that a confirmation is required from the user just before a popup dialog is closed, e.g. to confirm discarding changes.	To achieve this with the **RadWindow** the **OnClientBeforeClose** event must be used. Two simple examples	follow below. They can be extended to only ask for confirmation depending on a flag that can be raised from inside the content page -just wrap the functionality in an IF block. How to access the main page from inside the content page	is explained in [this help article]({%slug window/how-to/calling-functions-in-windows%}). It also shows how to get a reference to the	RadWindow from inside the content page, so that a custom field in the RadWindow object can also be used instead of using a global variable.	The event handler receives the RadWindow instance as the first parameter and JavaScript allows for dynamic creation of fields inside the object.

## Using the Standard Confirm dialog

The simplest approach is to use the standard browser confirm() dialog. It blocks the execution thread and thus interrupts the entire page:

````ASPNET
		<telerik:RadWindow runat="server" ID="RadWindow1" OnClientBeforeClose="OnClientBeforeClose">
		</telerik:RadWindow>
		<asp:Button ID="Button1" Text="text" runat="server" />
		<script type="text/javascript">
			function OnClientBeforeClose(sender, args)
			{
				args.set_cancel(!confirm("Are you sure you want to close this window"));
			}
		</script>
````



## Using the RadConfirm dialog

The **RadConfirm** dialog is a standard RadWindow and thus cannot block the thread execution like the browser confirm() can.This means that the logic must be extended to [dynamically add/remove the OnClientBeforeClose handler]({%slug window/client-side-programming/events/setting-handlers-by-using-javascript%}).The RadConfirm also requires that there is a **RadWindowManager** on the same page and that the event is cancelled each time so thatthe RadWindow can be closed with code depending on the user input. The benefit from this approach is that it provided consistent look and styling.

````ASPNET
		<telerik:RadWindowManager runat="server" id="RadWindowManager1"></telerik:RadWindowManager>
		<telerik:RadWindow runat="server" ID="RadWindow1" OnClientBeforeClose="OnClientBeforeClose">
		</telerik:RadWindow>
		<script type="text/javascript">
			function OnClientBeforeClose(sender, args)
			{
				args.set_cancel(true);
				function confirmCallback(arg)
				{
					if (arg)
					{
						sender.remove_beforeClose(OnClientBeforeClose);
						sender.close();
						sender.add_beforeClose(OnClientBeforeClose);
					}
				}
				radconfirm("Are you sure you want to close this window?", confirmCallback);
			}
		</script>
````



# See Also

 * [Calling Functions in Windows]({%slug window/how-to/calling-functions-in-windows%})

 * [Setting Handlers by Using JavaScript]({%slug window/client-side-programming/events/setting-handlers-by-using-javascript%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})
