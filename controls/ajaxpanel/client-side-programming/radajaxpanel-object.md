---
title: RadAjaxPanel Object
page_title: RadAjaxPanel Object
description: Check our Web Forms article about RadAjaxPanel Object.
slug: ajaxpanel/client-side-programming/radajaxpanel-object
previous_url: ajax/client-side-programming/radajaxpanel-object
tags: radajaxpanel,object
published: True
position: 2
---

# RadAjaxPanel Object



## 

The following table lists significant methods of the **RadAjaxPanel** client-side object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_ajaxSettings|none|array of objects|Returns an array of settings where each object has properties for the InitControlID and another array of UpdatedControls.|
|get_defaultLoadingPanelID|none|string|Returns the DefaultLoadingPanelID.|
|get_enableAJAX|none|boolean|True if AJAX is enabled.|
|get_enableHistory|none|boolean|True if browser history is enabled during AJAX requests.|
|set_ajaxSettings|array of objects|none|Sets the array of objects representing the AjaxSettings.|
|set_defaultLoadingPanelID|string|none|Sets the DefaultLoadingPanelID|
|set_enableAJAX|boolean|none|Allows or blocks the request to be executed through AJAX. Pass True to allow AJAX, False to have the request fulfilled through a standard postback.|
|set_enableHistory|boolean|none|Allows browser history during AJAX requests. Pass True to allow browser history during AJAX requests.|

Example:

````JavaScript
	    <script type="text/javascript">
	        var ajaxPanel = $find("<%= RadAjaxPanel1.ClientID %>");
	        var settings = ajaxPanel.get_ajaxSettings();
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


