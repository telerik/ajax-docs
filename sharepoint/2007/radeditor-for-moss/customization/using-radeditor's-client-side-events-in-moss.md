---
title: Using RadEditor's Client-Side events in MOSS
page_title: Using RadEditor's Client-Side events in MOSS | UI for ASP.NET AJAX Documentation
description: Using RadEditor's Client-Side events in MOSS
slug: sharepoint/2007/radeditor-for-moss/customization/using-radeditor's-client-side-events-in-moss
tags: using,radeditor's,client-side,events,in,moss
published: True
position: 2
---

# Using RadEditor's Client-Side events in MOSS



## 

Telerik RadEditor's provides a very rich Client-Side API which is very useful when implementing some more complicated scenarios. Bellow are the editor's Client-Side events:

* [OnClientCommandExecuted](09F2FCE1-1A8A-4E2B-A74C-7E8678BD8F38)

* [OnClientCommandExecuting](625682A4-8E53-4E1A-A18E-237A0BE05A4B)

* [OnClientLoad](9F38397E-C605-4164-9303-1482E1CC0617)

* [OnClientPasteHtml](4250AC92-3D64-40FE-AB7D-D9CAB52B15B6)

* [OnClientSelectionChange](FE68835D-A909-4BE1-B2CF-89EC5F4E4E15)



In order to execute you custom code called when RadEditor's Client-Side event is fired you need to:

1. Set the desired event in the respective ConfigFile

1. Put your custom code in the \wpresources\RadEditorSharePoint\5.x.x.x**1f131a624888eeed\Resources\ MOSSEditorTools.js

**For example:**

Open the \wpresources\RadEditorSharePoint\5.x.x.x**1f131a624888eeed\Resources\**ConfigFile.xml** and attach the editor's OnClientLoad event to your custom OnClientLoad function e.g.

<property name="**OnClientLoad**">OnClientLoad</property>

Next, open the \wpresources\RadEditorSharePoint\5.x.x.x**1f131a624888eeed\Resources\**MOSSEditorTools.js** and set your custom **OnClientLoad**function e.g.

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
