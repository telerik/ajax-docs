---
title: OnAjaxSettingCreated
page_title: OnAjaxSettingCreated | UI for ASP.NET AJAX Documentation
description: OnAjaxSettingCreated
slug: ajax/server-side-programming/events/onajaxsettingcreated
tags: onajaxsettingcreated
published: True
position: 2
---

# OnAjaxSettingCreated



The __AjaxSettingCreated__ event occurs after an AjaxSetting is
added to the RadAjaxManager __AjaxSettings__ collection. The event
can be triggered by the AjaxSettings configured at design time, as they are
instantiated, or at run-time after AddAjaxSetting() is called.The
event cannot be canceled.

The __AjaxSettingCreated__ event handler receives two
arguments:

1. The __RadAjaxManager__ control that owns the AjaxSettings collection that the setting is being added to. This argument is of type object, but can be cast to the __RadAjaxManager__ type.

1. And __AjaxSettingCreatedEventArgs__ object with the following properties:

* __Initiator__: A reference to the object that triggered the AJAX request.

* __Updated__: A reference to the object that will be updated by the AJAX request.

* __UpdatePanel__: A reference to the underlying MS AJAX UpdatePanel.

## Example

>tabbedCode

````C#
	    protected void RadAjaxManager1_AjaxSettingCreated(object sender, AjaxSettingCreatedEventArgs e)
	    {
	        RadAjaxManager1.Alert("AjaxSetting Created for initiator " + e.Initiator.ClientID 
	            + " and updated control " + e.Updated.ClientID);
	    }  
				
````
````VB.NET
	    Protected Sub RadAjaxManager1_AjaxSettingCreated(ByVal sender As Object, ByVal e As AjaxSettingCreatedEventArgs)
	        RadAjaxManager1.Alert("AjaxSetting Created for initiator " + e.Initiator.ClientID + " and updated control " + e.Updated.ClientID)
	    End Sub
	
````
>end
