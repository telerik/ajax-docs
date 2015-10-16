---
title: RadStandardButton Not Performing Postback
page_title: RadStandardButton Not Performing Postback | RadStandardButton for ASP.NET AJAX Documentation
description: RadStandardButton Not Performing Postback
slug: standardbutton/troubleshooting/radstandardbutton-not-performing-postback
tags: radstandardbutton,not,performing,postback
published: True
position: 0
---

# RadStandardButton Not Performing Postback

Sometimes you may encounter a scenario in which the **RadStandardButton** control doesn’t trigger postback and is rendered as an input HTML element of type button. Most probably this behavior is caused by a validation control on the page, containing the **RadStandardButton**.

For example you can take the following situation – a page with ASP TextBox and a RequiredFieldValidator, attached to that text box. The page is submitted via **RadStandardButton**, which has default settings. Below is the markup of the described page:

````ASP.NET
<asp:TextBox ID="NameInput" runat="server" />
<asp:RequiredFieldValidator ID="RequiredNameValidator" ControlToValidate="NameInput"
		runat="server" Display="Dynamic" />
<telerik:RadStandardButton ID="btnSubmit" runat="server" Text="Submit">
</telerik:RadStandardButton>
````

In some cases the validation requirements are not met and the **RadStandardButton** doesn’t initiate postback, which may cause confusion if the validation is not easy to spot and the button is not supposed to be part of it.

If you want to exclude the **RadStandardButton** from the validation mechanism of the page, you can set its	[CausesValidation](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.button.causesvalidation.aspx) property to **false** (this is also valid for a regular Button control).

## See Also

 * [Event Handlers Are Not Raised]({%slug standardbutton/troubleshooting/event-handlers-are-not-raised%})

 * [Client-side Click Event Handler Is Not Executed]({%slug standardbutton/troubleshooting/client-side-click-event-handler-is-not-executed%})

 * [Button.CausesValidation Property](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.button.causesvalidation.aspx)
