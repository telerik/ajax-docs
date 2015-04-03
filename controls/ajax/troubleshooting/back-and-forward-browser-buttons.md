---
title: Back and Forward Browser Buttons
page_title: Back and Forward Browser Buttons | UI for ASP.NET AJAX Documentation
description: Back and Forward Browser Buttons
slug: ajax/troubleshooting/back-and-forward-browser-buttons
tags: back,and,forward,browser,buttons
published: True
position: 9
---

# Back and Forward Browser Buttons



## 

Generally speaking, the ajax controls are using xmlhttp requests which update silently parts of the page. The browser __Back__ and __Forward__ functionality is only available when a full postback has occurred and that is the reason for them not to remember the last page state after ajax request.

You can however enable the browser back and forward buttons by enabling history through the ScriptManager on the page. For more infromation refer to the below articles:[http://msdn.microsoft.com/en-us/library/cc488548.aspx](http://msdn.microsoft.com/en-us/library/cc488548.aspx)

[http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.addhistorypoint.aspx](http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.addhistorypoint.aspx)

[http://dotnetslackers.com/articles/aspnet/AFirstLookAtASPNETExtensions35HistoryPoints.aspx](http://dotnetslackers.com/articles/aspnet/AFirstLookAtASPNETExtensions35HistoryPoints.aspx)
