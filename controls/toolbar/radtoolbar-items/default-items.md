---
title: Default Items
page_title: Default Items | RadToolBar for ASP.NET AJAX Documentation
description: Default Items
slug: toolbar/radtoolbar-items/default-items
tags: default,items
published: True
position: 5
---

# Default Items



## 

**RadToolBarSplitButton**combines the functionality of **RadToolBarButton** and **RadToolBarDropDown**. When the user clicks the button it can respond by generating the client-side **OnClientButtonClicking** and **OnClientButtonClicked** events and the server-side **ButtonClick** event. It can also display a drop-down list when the user clicks its drop-down arrow.

The "push button" behavior of the split button can operate independently of its drop-down list, or it can represent one of the buttons in the drop-down list (the default button).

* To allow the split button's "push button" behavior to act independently of the drop-down list, set the **EnableDefaultButton** property to **False**. When EnableDefaultButton is False, the split button is rendered using its own **Text** property and any Image properties you specify.

* To allow the split button to represent a button in the drop-down list, set the **EnableDefaultButton** property to **True** (this is the default value). When **EnableDefaultButton** is **True**, the **DefaultButtonIndex** property identifies which button in its drop-down list is the default button. (**DefaultButtonIndex** is the index of the default button in the split button's **Buttons** collection). When **EnableDefaultButton** is **True**, the split button is rendered using the **Text** and image of the default button rather than the values assigned to its own **Text** and image properties.
