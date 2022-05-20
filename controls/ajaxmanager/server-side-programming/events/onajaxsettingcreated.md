---
title: OnAjaxSettingCreated
page_title: AjaxManager OnAjaxSettingCreated Server-Side Event
description: "Learn how to use the OnAjaxSettingCreated server-side event when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/server-side-programming/events/onajaxsettingcreated
previous_url: ajax/server-side-programming/events/onajaxsettingcreated
tags: telerik, aspnet, ajax, ajaxmanager, onajaxsettingcreated, serverside, programming
published: True
position: 2
---

# OnAjaxSettingCreated

The `AjaxSettingCreated` event occurs after an `AjaxSetting` is added to the `AjaxSettings` collection of the AjaxManager. 

The event can be triggered by the `AjaxSettings` configured at design-time as they are instantiated, or at run-time after `AddAjaxSetting()` is called. The event cannot be cancelled.

The `AjaxSettingCreated` event handler receives two arguments:

* The `RadAjaxManager` control that owns the `AjaxSettings` collection to which the setting is added. This argument is of type object, but can be cast to the `RadAjaxManager` type.

* And `AjaxSettingCreatedEventArgs` object with the following properties:
    * `Initiator`&mdash;A reference to the object that triggered the AJAX request.

    * `Updated`&mdash;A reference to the object that will be updated by the AJAX request.

    * `UpdatePanel`&mdash;A reference to the underlying MS AJAX UpdatePanel.


The following example demonstrates how to use the `OnAjaxSettingCreated` event. 

````C#
protected void RadAjaxManager1_AjaxSettingCreated(object sender, AjaxSettingCreatedEventArgs e)
{
	RadAjaxManager1.Alert("AjaxSetting Created for initiator " + e.Initiator.ClientID 
	    + " and updated control " + e.Updated.ClientID);
}  			
````
````VB
Protected Sub RadAjaxManager1_AjaxSettingCreated(ByVal sender As Object, ByVal e As AjaxSettingCreatedEventArgs)
	RadAjaxManager1.Alert("AjaxSetting Created for initiator " + e.Initiator.ClientID + " and updated control " + e.Updated.ClientID)
End Sub
````

