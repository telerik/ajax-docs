---
title: RadWindowManager
page_title: RadWindowManager | RadWindow for ASP.NET AJAX Documentation
description: RadWindowManager
slug: window/getting-started/radwindowmanager
tags: radwindowmanager
published: True
position: 3
---

# RadWindowManager



## 

As is illustrated in [Getting Started]({%slug window/getting-started/overview%}), it is not necessary to use a **RadWindowManager** object to create and use **RadWindow** controls. Using **RadWindowManager**, however, is a convenient way to declare common properties for all the windows your Web page brings up. When using **RadWindowManager**, you do not drag **RadWindow** objects onto your form directly from the toolbox. Instead, use the **Windows** property of the **RadWindowManager** control to bring up the [RadWindow Collection Editor]({%slug window/design-time/visual-configuration-manager%}), where you can create the **RadWindow** controls and set their properties.

Both **RadWindowManager** and **RadWindow** inherit from **RadWindowBase**. The common properties that are set in **RadWindowManager** apply to all child **RadWindow** controls, and each individual **RadWindow** can override these with a new value. Typically, the **RadWindow** controls override the following properties:

* **VisibleOnPageLoad**: Causes the window to be visible when the page is loaded. By default this value is false.

* **OffsetElementId**: Indicates an HTML element whose upper left corner is used by the window to position itself when showing. This is commonly used in combination with the **Top** and **Left** properties.

* **InitialBehaviors**: Specifies whether the window will be minimized or maximized initially (values can be added together - for example in addition you can specify whether to pin the windows).

* **Behaviors**: Specifies whether the window can be maximized, minimized, resized, closed, and or pinned by the user.

>note While **RadWindow** objects do not require a **RadWindowManager** object, you must use **RadWindowManager** if you are making use of **radalert** , **radconfirm** , and **radprompt** dialogs. You will need the **RadWindowManager** as well if you want to use the **radopen()** function to open windows.
>


# See Also

 * [Overview]({%slug window/alert,-confirm,-prompt-dialogs/overview%})
