---
title: Default Items
page_title: Default Items | UI for ASP.NET AJAX Documentation
description: Default Items
slug: toolbar/radtoolbar-items/default-items
tags: default,items
published: True
position: 5
---

# Default Items



## 

__RadToolBarSplitButton__combines the functionality of __RadToolBarButton__ and __RadToolBarDropDown__. When the user clicks the button it can respond by generating the client-side __OnClientButtonClicking__ and __OnClientButtonClicked__ events and the server-side __ButtonClick__ event. It can also display a drop-down list when the user clicks its drop-down arrow.

The "push button" behavior of the split button can operate independently of its drop-down list, or it can represent one of the buttons in the drop-down list (the default button).

* To allow the split button's "push button" behavior to act independently of the drop-down list, set the __EnableDefaultButton__ property to __False__. When EnableDefaultButton is False, the split button is rendered using its own __Text__ property and any Image properties you specify.

* To allow the split button to represent a button in the drop-down list, set the __EnableDefaultButton__ property to __True__ (this is the default value). When __EnableDefaultButton__ is __True__, the __DefaultButtonIndex__ property identifies which button in its drop-down list is the default button. (__DefaultButtonIndex__ is the index of the default button in the split button's __Buttons__ collection). When __EnableDefaultButton__ is __True__, the split button is rendered using the __Text__ and image of the default button rather than the values assigned to its own __Text__ and image properties.
