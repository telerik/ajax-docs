---
title: OnClientAutoSizeEnd
page_title: OnClientAutoSizeEnd | UI for ASP.NET AJAX Documentation
description: OnClientAutoSizeEnd
slug: window/client-side-programming/events/onclientautosizeend
tags: onclientautosizeend
published: True
position: 3
---

# OnClientAutoSizeEnd



## 

The __OnClientAutoSizeEnd__ event of the __RadWindow__ fires when its[automatic size adjustment](http://demos.telerik.com/aspnet-ajax/window/examples/autosize/defaultcs.aspx)operation completes. It may have been invoked automatically because it was shown and its `AutoSize` property is set to `True`,or because the developer called the `autoSize()` method from its [client-side API]({%slug window/client-side-programming/radwindow-object%}).

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.

In case you are having difficulties with getting the AutoSize functionality to work as expected, please examine the[Common AutoSizing Issues]({%slug window/troubleshooting/autosizing-issues%}) help article.

# See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [Autosizing Issues]({%slug window/troubleshooting/autosizing-issues%})
