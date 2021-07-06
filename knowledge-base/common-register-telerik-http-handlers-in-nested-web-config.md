---
title: Register Telerik HTTP handlers in nested web.config
description: Register Telerik ASP.NET AJAX HTTP handlers in nested web.config. Check it now!
type: how-to
page_title: Register Telerik HTTP handlers in nested web.config
slug: common-register-telerik-http-handlers-in-nested-web-config
res_type: kb
---


## HOW-TO

Register the Telerik AJAX handlers if you cannot modify the root level web.config file.

## SOLUTION

Add a web.config file in the sub-folder in the web application that you can modify and register the handlers there. Then, use the properties of each control that uses handlers to point them to the new path. For example, for RadScriptManager, this is the HttpHandlerUrl property, for RadEditor you may need DialogHandlerUrl and/or SpellCheckSettings-AjaxUrl, for RadProgressArea you need the AjaxUrl property of RadProgressManager.

The configuration will depend on the handler(s) each control uses and the properties it exposes. You can find the former by monitoring the network traffic through the browser dev toolbar, and you can explore the latter via the intellisense in Visual Studio.

You can find [here](files/common-nested-web-config-handler-registration.zip) a basic example of registering the handlers in a folder different than the root.


