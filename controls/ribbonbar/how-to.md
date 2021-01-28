---
title: How To
page_title: How To - RadRibbonBar
description: Check our Web Forms article about How To.
slug: ribbonbar/how-to
tags: application,scenarios
published: True
position: 3
---

# How To



## 

**Q: How can I alter the height of the RadRibbonBar control?**

**A:** Since we have different items placed in the RadRibbonBar control (for instance Quick access Toolbar, ContextualTabs, Groups, Buttons whose image size may vary from small to large as described [here]({%slug ribbonbar/appearance-and-styling/item-sizes%})) the current design of the RadRibbonBar control does not allow altering of its height. Another reason for that is a very possible distortion of the control's layout. For example you might have issues with the layout of the buttons and/or the groups in the tabs. Therefore we would not recommend that you change the height of the control.

**Q: How can I collapse RadRibbonBar control?**

**A:** Since **Q2 2012** you can use the **EnableMinimizing** property of the control in a combination with the **Minimized** property.
