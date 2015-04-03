---
title: RadWindowManager
page_title: RadWindowManager | UI for ASP.NET AJAX Documentation
description: RadWindowManager
slug: window/getting-started/radwindowmanager
tags: radwindowmanager
published: True
position: 3
---

# RadWindowManager



## 

As is illustrated in [Getting Started]({%slug window/getting-started/overview%}), it is not necessary to use a __RadWindowManager__ object to create and use __RadWindow__ controls. Using __RadWindowManager__, however, is a convenient way to declare common properties for all the windows your Web page brings up. When using __RadWindowManager__, you do not drag __RadWindow__ objects onto your form directly from the toolbox. Instead, use the __Windows__ property of the __RadWindowManager__ control to bring up the [RadWindow Collection Editor]({%slug window/design-time/visual-configuration-manager%}), where you can create the __RadWindow__ controls and set their properties.

Both __RadWindowManager__ and __RadWindow__ inherit from __RadWindowBase__. The common properties that are set in __RadWindowManager__ apply to all child __RadWindow__ controls, and each individual __RadWindow__ can override these with a new value. Typically, the __RadWindow__ controls override the following properties:

* __VisibleOnPageLoad__: Causes the window to be visible when the page is loaded. By default this value is false.

* __OffsetElementId__: Indicates an HTML element whose upper left corner is used by the window to position itself when showing. This is commonly used in combination with the __Top__ and __Left__ properties.

* __InitialBehaviors__: Specifies whether the window will be minimized or maximized initially (values can be added together - for example in addition you can specify whether to pin the windows).

* __Behaviors__: Specifies whether the window can be maximized, minimized, resized, closed, and or pinned by the user.

>note While __RadWindow__ objects do not require a __RadWindowManager__ object, you must use __RadWindowManager__ if you are making use of __radalert__ , __radconfirm__ , and __radprompt__ dialogs. You will need the __RadWindowManager__ as well if you want to use the __radopen()__ function to open windows.
>


# See Also

 * [Overview]({%slug window/alert,-confirm,-prompt-dialogs/overview%})
