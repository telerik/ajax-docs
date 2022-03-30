---
title: RadAjaxManager Object
page_title: RadAjaxManager Client-Side Object
description: "Learn more about the client-side RadAjaxManager object when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/client-side-programming/radajaxmanager-object
previous_url: ajax/client-side-programming/radajaxmanager-object
tags: telerik, aspnet, ajax, ajaxmanager, radajaxmanager, object
published: True
position: 1
---

# RadAjaxManager Object

The `RadAjaxManager` client-side object provides a set of significant properties an dmethods for client-side programming. 

The following table lists the `RadAjaxManager` properties and methods.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|[`ajaxRequest`]({%slug ajaxmanager/client-side-programming/overview%})|string|none|Initiates an AJAX request that fires the [`AjaxRequest`]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%}) event on the server.|
|[`ajaxRequestWithTarget`]({%slug ajaxmanager/client-side-programming/overview%})|string, string|none|Simulates a postback/AJAX request initiated from a control with a specified `UniqueID`.|
|`get_ajaxSettings`|none|array of objects|Returns an array of settings where each object has properties for the `InitControlID` and another array of `UpdatedControls`.|
|`get_defaultLoadingPanelID`|none|string|Returns the `DefaultLoadingPanelID`.|
|`get_enableAJAX`|none|boolean| `True` if AJAX is enabled.|
|`get_enableHistory`|none|boolean| `True` if the browser history is enabled during AJAX requests.|
|`set_ajaxSettings`|array of objects|none|Sets the array of objects representing the `AjaxSettings`.|
|`set_defaultLoadingPanelID`|string|none|Sets the `DefaultLoadingPanelID`. |
|`set_enableAJAX`|boolean|none|Enables or disable AJAX for the AJAX initiator. Pass `true` to enable AJAX, or `false` to have the subsequent requests performed as standard postbacks.|
|`set_enableHistory`|boolean|none|Allows the browser history during AJAX requests. Pass `true` to allow browser history during AJAX requests.|

The following example demonstrates how to use the `get_ajaxSettings` configuration. 

````JavaScript
	    <script type="text/javascript">
	        var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
	        var settings = ajaxManager.get_ajaxSettings();
	        var settingsList = '';
	        for (setting in settings) {
	            var initiatingControl = settings[setting].InitControlID;
	            var controls = settings[setting].UpdatedControls;
	            var controlList = '';
	            for (control in controls) {
	                controlList += ' ' + controls[control].ControlID;
	            }
	            settingsList += '\nInitiated by: ' + initiatingControl + '\nUpdated Controls: ' + controlList;
	        }
	        alert(settingsList); 
	    </script>
````



# See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})
* [Demo: AjaxManager Client-Side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)