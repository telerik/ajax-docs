---
title: OnClientClicked
page_title: OnClientClicked - RadSplitButton
description: Check our Web Forms article about OnClientClicked.
slug: splitbutton/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 4
---

# OnClientClicked


The **clicked** event is subsequent to the **clicking** event, and occurs when the RadSplitButton control is clicked. The event is fired after the client-side validation is completed, just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadSplitButton control

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs), containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadSplitButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadSplitButton's **CommandArgument** property

This event should be used in scenarios where the user needs to execute custom client-side code when the button is clicked.

## See Also

 * [RadSplitButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/splitbutton/client-side-api/client-side-events/defaultcs.aspx)

 * [SplitButton Object]({%slug splitbutton/client-side-programming/splitbutton-object%})
 
 * [Telerik.Web.UI.ButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)

