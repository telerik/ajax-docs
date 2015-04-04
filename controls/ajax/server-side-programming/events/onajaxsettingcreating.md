---
title: OnAjaxSettingCreating
page_title: OnAjaxSettingCreating | UI for ASP.NET AJAX Documentation
description: OnAjaxSettingCreating
slug: ajax/server-side-programming/events/onajaxsettingcreating
tags: onajaxsettingcreating
published: True
position: 1
---

# OnAjaxSettingCreating



The __AjaxSettingCreating__ event occurs just before an AjaxSetting is added to the RadAjaxManager __AjaxSettings__ collection. The event can be triggered by the AjaxSettings configured at design time, as they are about to be instantiated, or at run-time in response to AddAjaxSetting(). The event can be cancelled.

The __AjaxSettingCreating__ event handler receives two arguments:

1. The __RadAjaxManager__ control that owns the AjaxSettings collection that the setting is being added to. This argument is of type object, but can be cast to the __RadAjaxManager__ type.

1. An __AjaxSettingCreatingEventArgs__ object with the following properties:

* __Canceled__: This boolean property can be set true to abandon creating the AjaxSetting and will prevent the [OnAjaxSettingCreated]({%slug ajax/server-side-programming/events/onajaxsettingcreated%}) event from firing.

* __Initiator__: A reference to the object that triggered the AJAX request.

* __Updated__: A reference to the object that will be updated by the AJAX request.

* __UpdatePanel__: A reference to the underlying MS AJAX UpdatePanel.

## Example



````C#
	
	    protected void RadAjaxManager1_AjaxSettingCreating(object sender, AjaxSettingCreatingEventArgs e)
	    {
	        e.Canceled = (e.Initiator == Button1) & (e.Updated == Label1);
	    }
				
````
````VB.NET
	    Protected Sub RadAjaxManager1_AjaxSettingCreating(ByVal sender As Object, ByVal e As AjaxSettingCreatingEventArgs)
	        e.Canceled = IIf((e.Initiator Is Button1) And (e.Updated Is Label1), True, False)
	    End Sub
````

