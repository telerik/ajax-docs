---
title: Setting Event Handlers via JavaScript
page_title: Setting Event Handlers via JavaScript | UI for ASP.NET AJAX Documentation
description: Setting Event Handlers via JavaScript
slug: tooltip/client-side-programming/events/setting-event-handlers-via-javascript
tags: setting,event,handlers,via,javascript
published: True
position: 1
---

# Setting Event Handlers via JavaScript



## 

When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	
	        function addEvents()
	        {
	            var radToolTip1 = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip1.add_show(clientShow1);
	            radToolTip1.add_show(clientShow2);
	        }
	
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
	        function removeEvents()
	        {
	            var radToolTip1 = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip1.remove_show(clientShow);
	        }
	
````




>caption A list with the available methods

| Name | Description |
| ------ | ------ |
| __add_beforeShow__ |Add a handler to the BeforeShow event.|
| __add_show__ |Add a handler to the Show event.|
| __add_beforeHide__ |Add a handler to the BeforeHide event.|
| __add_hide__ |Add a handler to the Hide event.|
| __remove_beforeShow__ |Remove a handler from the BeforeShow event.|
| __remove_show__ |Remove a handler from the Show event.|
| __remove_beforeHide__ |Remove a handler from the BeforeHide event.|
| __remove_hide__ |Remove a handler from the Hide event.|
