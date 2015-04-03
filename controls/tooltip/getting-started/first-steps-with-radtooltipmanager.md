---
title: FIrst Steps with RadToolTipManager
page_title: FIrst Steps with RadToolTipManager | UI for ASP.NET AJAX Documentation
description: FIrst Steps with RadToolTipManager
slug: tooltip/getting-started/first-steps-with-radtooltipmanager
tags: first,steps,with,radtooltipmanager
published: True
position: 1
---

# FIrst Steps with RadToolTipManager



## 

The following tutorial demonstrates how __RadToolTipManager__ is used to provide a common look and feel for multiple elements. See [RadToolTipManager Overview]({%slug tooltip/radtooltipmanager/overview%}) for more more uses of this control.
>caption 

![](images/tooltip-gettingstarted002.png)

In a new AJAX-Enabled Web Application, add two __TextBox__ controls and one __Button__ from the Standard tab to the default web page.

In the first textbox, set the __ToolTip__property to "Enter your valid login name".

In the second textbox, set the __ToolTip__property to "Enter a valid password".

Set the Button __Text__ property to "Login" and the __ToolTip__ property to "Click this button to login to the system".

Add a __RadToolTipManager__ control to the page and set__AutoTooltipify="true".__

Set the __Skin__ property to __Office2007__.

Press __F5__ to run the application. Run the mouse over the textboxes and button to activate the tooltips. *Notice that the tooltips have the Office2007 style and that the contents for the tooltips are automatically picked up from the standard ToolTip property.*

# See Also

 * [First Steps with RadToolTip]({%slug tooltip/getting-started/first-steps-with-radtooltip%})

 * [Load Content On Demand]({%slug tooltip/radtooltipmanager/load-content-on-demand%})
