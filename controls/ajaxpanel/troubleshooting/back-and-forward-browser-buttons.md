---
title: Back and Forward Browser Buttons
page_title: Back and Forward Browser Buttons
description: Check our Web Forms article about Back and Forward Browser Buttons.
slug: ajaxpanel/troubleshooting/back-and-forward-browser-buttons
tags: back,and,forward,browser,buttons
published: True
position: 9
---

# Back and Forward Browser Buttons



## 

Generally speaking, the ajax controls are using xmlhttp requests which update silently parts of the page. The browser **Back** and **Forward** functionality is only available when a full postback has occurred and that is the reason for them not to remember the last page state after ajax request.

You can however enable the browser back and forward buttons by enabling history through the ScriptManager on the page. For more information refer to the below articles:[https://msdn.microsoft.com/en-us/library/cc488548.aspx](https://msdn.microsoft.com/en-us/library/cc488548.aspx)

[https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.addhistorypoint.aspx](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.addhistorypoint.aspx)

[http://dotnetslackers.com/articles/aspnet/AFirstLookAtASPNETExtensions35HistoryPoints.aspx](http://dotnetslackers.com/articles/aspnet/AFirstLookAtASPNETExtensions35HistoryPoints.aspx)
