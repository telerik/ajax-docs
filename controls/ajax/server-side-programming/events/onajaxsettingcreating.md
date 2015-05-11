---
title: OnAjaxSettingCreating
page_title: OnAjaxSettingCreating | RadAjax for ASP.NET AJAX Documentation
description: OnAjaxSettingCreating
slug: ajax/server-side-programming/events/onajaxsettingcreating
tags: onajaxsettingcreating
published: True
position: 1
---

# OnAjaxSettingCreating



The **AjaxSettingCreating** event occurs just before an AjaxSetting is added to the RadAjaxManager **AjaxSettings** collection. The event can be triggered by the AjaxSettings configured at design time, as they are about to be instantiated, or at run-time in response to AddAjaxSetting(). The event can be cancelled.

The **AjaxSettingCreating** event handler receives two arguments:

1. The **RadAjaxManager** control that owns the AjaxSettings collection that the setting is being added to. This argument is of type object, but can be cast to the **RadAjaxManager** type.

2. An **AjaxSettingCreatingEventArgs** object with the following properties:

* **Canceled** : This boolean property can be set true to abandon creating the AjaxSetting and will prevent the [OnAjaxSettingCreated]({%slug ajax/server-side-programming/events/onajaxsettingcreated%}) event from firing.

* **Initiator** : A reference to the object that triggered the AJAX request.

* **Updated** : A reference to the object that will be updated by the AJAX request.

* **UpdatePanel** : A reference to the underlying MS AJAX UpdatePanel.

## Example



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

