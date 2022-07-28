---
title: "TypeError: h is not a constructor at Sys.Component.create"
description: "TypeError: h is not a constructor at Sys.Component.create is thrown when AJAX is enabled"
type: troubleshooting
page_title: "TypeError: h is not a constructor at Sys.Component.create"
slug: common-typeerror-h-is-not-a-constructor
position: 
tags: 
ticketid: 1573679
res_type: kb
---



## Description
In some cases, an update of the project's framework to 4.5 or later (4.6, 4.7, 4.8) could cause some controls to not function after an Ajax request/partial postback.
The issue could be tracked by checking the browser's console for a JavaScript error that could prevent the proper behavior of the controls:

* [General troubleshooting of JavaScript errors]({%slug common-general-troubleshooting-javascript-errors%}) 

## Error Message

TypeError: h is not a constructor at Sys.Component.create
at Sys._Application.add_init
at Sys._ScriptLoader._loadScriptsInternal
at Sys._ScriptLoader._loadScriptsInternal
at Sys._ScriptLoader._loadScriptsInternal
at Sys._ScriptLoader._nextSession
at Sys._ScriptLoader._loadScriptsInternal
at Sys._ScriptLoader._scriptLoadedHandler
at Sys.Component.create
at add_init
at _loadScriptsInternal
at _loadScriptsInternal
at _loadScriptsInternal
at _nextSession
at _loadScriptsInternal 
at _scriptLoadedHandler
at _scriptLoadHandler
at b

## Solution
1) For .NET 4.5+ projects, ensure the UnobtrusiveValidation key in the web.config is set

````web.config
<configuration>
  <appSettings>
	<add key="ValidationSettings:UnobtrusiveValidationMode" value="None" />
````

The problem is discussed at:

* https://stackoverflow.com/questions/16660900/webforms-unobtrusivevalidationmode-requires-a-scriptresourcemapping-for-jquery
* [jQuery Troubleshooting article]({%slug links-troubleshooting-kb-resources %})

2) Set EnableScriptsCombine=false for the RadScriptManager. This could help to resolve the issue and one possible reason for the issue would be if there is a custom script that is incorrectly formatted or when combined with other scripts cause some errors. 

2.1) Some more related resources on the topic with the incorrectly formatted custom script files:

* https://www.telerik.com/forums/microsoftajax-js-throwing-an-error 
* https://www.broculos.net/2013/11/h-is-not-constructor-javascript-error.html 


## See Also
* [General troubleshooting of JavaScript errors]({%slug common-general-troubleshooting-javascript-errors%}) 
* https://stackoverflow.com/questions/16660900/webforms-unobtrusivevalidationmode-requires-a-scriptresourcemapping-for-jquery
* [jQuery Troubleshooting article]({%slug links-troubleshooting-kb-resources %})

