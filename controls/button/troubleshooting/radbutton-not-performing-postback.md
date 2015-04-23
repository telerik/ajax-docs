---
title: RadButton Not Performing Postback
page_title: RadButton Not Performing Postback | RadButton for ASP.NET AJAX Documentation
description: RadButton Not Performing Postback
slug: button/troubleshooting/radbutton-not-performing-postback
tags: radbutton,not,performing,postback
published: True
position: 1
---

# RadButton Not Performing Postback



## 

Sometimes you may encounter a scenario in which the **RadButton** controldoesn’t trigger postback and is rendered as an input HTML element of type button. Most probably thisbehavior is caused by a validation control on the page, containing the **RadButton**.

For example you can take the following situation – a page with ASP TextBox and a RequiredFieldValidator, attached to that textbox. The page is submitted via **RadButton**, which hasdefault settings. Below is the markup of the described page:

````ASPNET
		<asp:TextBox ID="NameInput" runat="server" />
		<asp:RequiredFieldValidator ID="RequiredNameValidator" ControlToValidate="NameInput"
				runat="server" Display="Dynamic" />
		<telerik:RadButton ID="btnSubmit" runat="server" Text="Submit">
		</telerik:RadButton>
````



In some cases the validation requirements are not met and the **RadButton**doesn’t initiate postback, which may cause confusion if the validation is not easy to spotand the button is not supposed to be part of it.

If you want to exclude the **RadButton** from the validation mechanism of the page, you can set its	[CausesValidation](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.button.causesvalidation.aspx)property to **false** (this is also valid for a regular Button control).

# See Also

 * [RadButton Known Issues in IE6 and IE7]({%slug button/troubleshooting/radbutton-known-issues-in-ie6-and-ie7%})

 * [Event Handlers Are Not Raised]({%slug button/troubleshooting/event-handlers-are-not-raised%})

 * [Client-side Click Event Handler Is Not Executed]({%slug button/troubleshooting/client-side-click-event-handler-is-not-executed%})

 * [Button.CausesValidation Property](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.button.causesvalidation.aspx)
