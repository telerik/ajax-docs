---
title: RadAjaxManager Object
page_title: RadAjaxManager Object | UI for ASP.NET AJAX Documentation
description: RadAjaxManager Object
slug: ajax/client-side-programming/radajaxmanager-object
tags: radajaxmanager,object
published: True
position: 1
---

# RadAjaxManager Object



## 

__Table 1__ lists significant properties and methods of the __RadAjaxManager__ client-side object. __Example 1__ shows how to get the Ajax settings using get_ajaxSettings.


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|[ajaxRequest]({%slug ajax/client-side-programming/overview%})|string|none|Initiates an AJAX request that fires the[AjaxRequest]({%slug ajax/server-side-programming/events/onajaxrequest%})event on the server.|
|[ajaxRequestWithTarget]({%slug ajax/client-side-programming/overview%})|string, string|none|Simulates a postback/AJAX request initiated from a control with a specified __UniqueID__ .|
|get_ajaxSettings|none|array of objects|Returns an array of settings where each object has properties for the __InitControlID__ and another array of __UpdatedControls__ (see __Example 1__ ).|
|get_defaultLoadingPanelID|none|string|Returns the __DefaultLoadingPanelID__ .|
|get_enableAJAX|none|boolean| __True__ if AJAX is enabled.|
|get_enableHistory|none|boolean| __True__ if browser history is enabled during AJAX requests.|
|set_ajaxSettings|array of objects|none|Sets the array of objects representing the __AjaxSettings__ .|
|set_defaultLoadingPanelID|string|none|Sets the __DefaultLoadingPanelID__ |
|set_enableAJAX|boolean|none|Enables or disable AJAX for the AJAX initiator. Pass __true__ to enable AJAX, __false__ to have the subsequent requests performed as standard postbacks.|
|set_enableHistory|boolean|none|Allows browser history during AJAX requests. Pass __true__ to allow browser history during AJAX requests.|

__Example 1__: Using get_ajaxSettings

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

 * [Overview]({%slug ajax/client-side-programming/overview%})

 * [Demo: RadAjaxManager Client-side API](http://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
