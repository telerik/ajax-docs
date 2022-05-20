---
title: OnAjaxSettingCreating
page_title: AjaxManager OnAjaxSettingCreating Server-Side Event
description: "Learn how to use the OnAjaxSettingCreating server-side event when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/server-side-programming/events/onajaxsettingcreating
previous_url: ajax/server-side-programming/events/onajaxsettingcreating
tags: telerik, aspnet, ajax, ajaxmanager, onajaxsettingcreating, event, serverside, programming
published: True
position: 1
---

# OnAjaxSettingCreating

The `AjaxSettingCreating` event occurs just before an `AjaxSetting` is added to the `AjaxSettings` collection of the AjaxManager. 

The event can be triggered by the `AjaxSettings` configured at design-time as they are about to be instantiated, or at run-time in response to `AddAjaxSetting()`. The event can be cancelled.

The `AjaxSettingCreating` event handler receives two arguments:

* The `RadAjaxManager` control that owns the `AjaxSettings` collection to which the setting is added. This argument is of type object, but can be cast to the `RadAjaxManager` type.

* An `AjaxSettingCreatingEventArgs` object with the following properties:

    * `Canceled`&mdash;This boolean property can be set to `true` to abandon creating the `AjaxSetting` and will prevent the [`OnAjaxSettingCreated`]({%slug ajaxmanager/server-side-programming/events/onajaxsettingcreated%}) event from firing.

    * `Initiator`&mdash;A reference to the object that triggered the AJAX request.

    * `Updated`&mdash;A reference to the object that will be updated by the AJAX request.

    * `UpdatePanel`&mdash;A reference to the underlying MS AJAX UpdatePanel.


The following example demonstrates how to use the `OnAjaxSettingCreating` event.

````C#
protected void RadAjaxManager1_AjaxSettingCreating(object sender, AjaxSettingCreatingEventArgs e)
{
	e.Canceled = (e.Initiator == Button1) & (e.Updated == Label1);
}			
````
````VB
Protected Sub RadAjaxManager1_AjaxSettingCreating(ByVal sender As Object, ByVal e As AjaxSettingCreatingEventArgs)
	e.Canceled = IIf((e.Initiator Is Button1) And (e.Updated Is Label1), True, False)
End Sub
````

