---
title: Using Client-Side Events
page_title: Using Client-Side Events | UI for ASP.NET AJAX Documentation
description: Using Client-Side Events
slug: moss/sharepoint-2010/radeditor-web-part/customization/using-client-side-events
tags: using,client-side,events
published: True
position: 1
---

# Using Client-Side Events



## 

Telerik RadEditor's provides a very rich Client-Side API which is very useful when implementing some more complicated scenarios. Bellow are the editor's Client-Side events:

* [OnClientLoad](9F38397E-C605-4164-9303-1482E1CC0617)

* [OnClientCommandExecuting](625682A4-8E53-4E1A-A18E-237A0BE05A4B)

* [OnClientCommandExecuted](09F2FCE1-1A8A-4E2B-A74C-7E8678BD8F38)

* [OnClientModeChange](2C04E1EF-D7FF-4CB2-8FA1-B2355E9E94B1)

* [OnClientPasteHtml](4250AC92-3D64-40FE-AB7D-D9CAB52B15B6)

* [OnClientSelectionChange](FE68835D-A909-4BE1-B2CF-89EC5F4E4E15)

* [OnClientSubmit](4D36939E-4AAE-46A4-8C9E-92C8DFE80E30)

In order to execute you custom code called when RadEditor's Client-Side event is fired you need to:

1. Set the desired event in the respective ConfigFile

1. Put your custom code in the \wpresources\RadEditorSharePoint\6.x.x.x__1f131a624888eeed\Resources\SPEditorTools.js

__For example:__

Open the \wpresources\RadEditorSharePoint\6.x.x.x__1f131a624888eeed\Resources\__ConfigFile.xml__ and attach the editor's OnClientLoad event to your custom OnClientLoad function e.g.

<property name="__OnClientLoad__">OnClientLoad</property>

Next, open the \wpresources\RadEditorSharePoint\6.x.x.x__1f131a624888eeed\Resources\__SPEditorTools.js__ and set your custom __OnClientLoad__function e.g.

````JavaScript
	        function OnClientLoad(editor, args)
	        {
	            editor.attachEventHandler("onkeydown", function (e)
	            {
	                alert("Content area key down " + e.keyCode); 
	            });
	        }
````



Clear the browser's cache and test what the result is.

For more information, about the editor's Client-Side API please review the Client-Side API Reference section of the [RadEditor for ASP.NET AJAX help](3E8A1A58-CF17-4DE4-8B96-4C89332D7486).
