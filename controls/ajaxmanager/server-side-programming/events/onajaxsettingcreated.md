---
title: OnAjaxSettingCreated
page_title: OnAjaxSettingCreated
description: Check our Web Forms article about OnAjaxSettingCreated.
slug: ajaxmanager/server-side-programming/events/onajaxsettingcreated
previous_url: ajax/server-side-programming/events/onajaxsettingcreated
tags: onajaxsettingcreated
published: True
position: 2
---

# OnAjaxSettingCreated



The **AjaxSettingCreated** event occurs after an AjaxSetting is
added to the RadAjaxManager **AjaxSettings** collection. The event
can be triggered by the AjaxSettings configured at design time, as they are
instantiated, or at run-time after AddAjaxSetting() is called.The
event cannot be cancelled.

The **AjaxSettingCreated** event handler receives two
arguments:

1. The **RadAjaxManager** control that owns the AjaxSettings collection that the setting is being added to. This argument is of type object, but can be cast to the **RadAjaxManager** type.

2. And **AjaxSettingCreatedEventArgs** object with the following properties:

* **Initiator** : A reference to the object that triggered the AJAX request.

* **Updated** : A reference to the object that will be updated by the AJAX request.

* **UpdatePanel** : A reference to the underlying MS AJAX UpdatePanel.

## Example



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

