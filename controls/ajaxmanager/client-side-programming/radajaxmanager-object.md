---
title: RadAjaxManager Object
page_title: RadAjaxManager Object
description: Check our Web Forms article about RadAjaxManager Object.
slug: ajaxmanager/client-side-programming/radajaxmanager-object
previous_url: ajax/client-side-programming/radajaxmanager-object
tags: radajaxmanager,object
published: True
position: 1
---

# RadAjaxManager Object



## 

**Table 1** lists significant properties and methods of the **RadAjaxManager** client-side object. **Example 1** shows how to get the Ajax settings using get_ajaxSettings.


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|[ajaxRequest]({%slug ajaxmanager/client-side-programming/overview%})|string|none|Initiates an AJAX request that fires the[AjaxRequest]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%})event on the server.|
|[ajaxRequestWithTarget]({%slug ajaxmanager/client-side-programming/overview%})|string, string|none|Simulates a postback/AJAX request initiated from a control with a specified **UniqueID** .|
|get_ajaxSettings|none|array of objects|Returns an array of settings where each object has properties for the **InitControlID** and another array of **UpdatedControls** (see **Example 1** ).|
|get_defaultLoadingPanelID|none|string|Returns the **DefaultLoadingPanelID** .|
|get_enableAJAX|none|boolean| **True** if AJAX is enabled.|
|get_enableHistory|none|boolean| **True** if browser history is enabled during AJAX requests.|
|set_ajaxSettings|array of objects|none|Sets the array of objects representing the **AjaxSettings** .|
|set_defaultLoadingPanelID|string|none|Sets the **DefaultLoadingPanelID** |
|set_enableAJAX|boolean|none|Enables or disable AJAX for the AJAX initiator. Pass **true** to enable AJAX, **false** to have the subsequent requests performed as standard postbacks.|
|set_enableHistory|boolean|none|Allows browser history during AJAX requests. Pass **true** to allow browser history during AJAX requests.|

**Example 1**: Using get_ajaxSettings

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

 * [Overview]({%slug ajaxmanager/client-side-programming/overview%})

 * [Demo: RadAjaxManager Client-side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
