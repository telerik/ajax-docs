---
title: OnClientResponseError
page_title: OnClientResponseError | RadXmlHttpPanel for ASP.NET AJAX Documentation
description: OnClientResponseError
slug: xmlhttppanel/client-side-programming/events/onclientresponseerror
tags: onclientresponseerror
published: True
position: 3
---

# OnClientResponseError




The **OnClientResponseError** occurs in the cases when an error (WebService or Callback error) occurs when the **RadXmlHttpPanel** tries to load certain content.

The event handler receives two parameters:

1. The instance of the **RadXmlHttpPanel**control in which the error occurred.

1. An eventArgs parameter containing the following properties and methods:

	1. `set_cancelErrorAlert` lets you prevent from displaying the built-in error alert that notifies the user that an error has occurred, and gives the possibility to display a custom error message.
	
	1. `get_cancelErrorAlert` returns a boolean value indicating whether the **RadXmlHttpPanel’s** displaying of the built-in error alert has been canceled.

The following example demonstrates how the user can display: a custom content inside the **RadXmlHttpPanel** or a custom error message (alert), if an error has occurred while loading content inside the panel. The panel tries to load RadCalendar control, but an error will occur because the control’s RegisterWithScriptManager property has not been set to false.

````JavaScript
function LoadCalendar()
{
    var panel = $find("RadXmlHttpPanel1");
    panel.set_value(value);
}
function OnClientResponseError(panel, args)
{
    alert("OnClientResponseError fired because an error occured");
    args.set_cancelErrorAlert(true);
    var content = "<label style='color: Red;'>The Control could not be loaded because of an callback error!</label>";
    panel.set_html(content);
}
````



````ASP.NET
<input type="button" value="LoadRadCalendar" onclick="LoadCalendar()" />
<telerik:RadXmlHttpPanel ID="RadXmlHttpPanel1" runat="server" OnServiceRequest="RadXmlHttpPanel1_ServiceRequest" OnClientResponseError="OnClientResponseError">
</telerik:RadXmlHttpPanel>
````





````C#
protected void RadXmlHttpPanel1_ServiceRequest(object sender, RadXmlHttpPanelEventArgs e)
{
	RadCalendar calendar = new RadCalendar();
	calendar.ID = "RadCalendar1";
	//calendar.RegisterWithScriptManager = false
	RadXmlHttpPanel1.Controls.Add(calendar);
}
````
````VB
Protected Sub RadXmlHttpPanel1_ServiceRequest(ByVal sender As Object, ByVal e As RadXmlHttpPanelEventArgs)
    Dim calendar As New RadCalendar()
    calendar.ID = "RadCalendar1"
    'calendar.RegisterWithScriptManager = false
    RadXmlHttpPanel1.Controls.Add(calendar)
End Sub
````

