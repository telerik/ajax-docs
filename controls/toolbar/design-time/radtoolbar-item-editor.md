---
title: RadToolBar Item Editor
page_title: RadToolBar Item Editor | UI for ASP.NET AJAX Documentation
description: RadToolBar Item Editor
slug: toolbar/design-time/radtoolbar-item-editor
tags: radtoolbar,item,editor
published: True
position: 1
---

# RadToolBar Item Editor



The __RadToolBar Item Editor__ lets you populate your toolbar with buttons. There are two ways to bring up the RadToolBar Item Editor:

* From the __RadToolBar__[ Smart Tag ](5BB964CF-AA36-443D-824B-60964E411B25), click on the __Build RadToolBar__ link.

* Right-click on the __RadToolBar__ component and select __Build RadToolBar__ from its context menu.

## RadToolBar Item Editor

![toolbar itemeditor](images/toolbar_itemeditor.png)

The __RadToolBar Item Editor__ lets you add, rearrange, configure, and delete buttons on the toolbar. These actions are initiated using the toolbar at the upper left of the Item Editor:

![ToolBar Item Builder Buttons](images/toolbar_itembuildertoolbar.png)

The following table describes the controls in the toolbar:


| Button | Function |
| ------ | ------ |
|![ToolBar Add Button](images/toolbar_addtoolbutton.png)|Adds a __RadToolBarButton__ to the toolbar in the next available position.|
|![ToolBar Add Drop Down Button](images/toolbar_adddropdownbutton.png)|Adds a __RadToolBarDropDown__ to the toolbar in the next available position.|
|![ToolBar Add Split Button](images/toolbar_addsplitbutton.png)|Adds a __RadToolBarSplitButton__ to the toolbar in the next available position.|
|![ToolBar Add Child Button](images/toolbar_addchildbutton.png)|Adds a __RadToolBarButton__ to the end of the drop-down list for the currently selected __RadToolBarDropDown__ or __RadToolBarSplitButton__ .|
|![Toolbar Delete Button](images/toolbar_deletebutton.png)|Deletes the currently selected button from the toolbar or drop-down list.|
|![ToolBar Move Up Button](images/toolbat_movebuttonup.png)|Moves the currently selected button backward in the toolbar or drop-down list so that it precedes the previous sibling.|
|![ToolBar Move Down Button](images/toolbar_movebuttondown.png)|Moves the currently selected tab forward in the toolbar or drop-down list, so that it follows the next sibling.|

## 

When a button is selected, the properties pane on the right of the __RadToolBar Item Editor__ lets you configure the item by setting its properties. For each button,

* __Text__ is the text that appears on the button.

* __ToolTip__ is the text of a tooltip that appears when the user hovers the mouse over the button.

* __Enabled__ controls whether the button is initially enabled or disabled.

* __CssClass__, __OuterCssClass__, __FocusedCssClass__, __DisabledCssClass__, __HoveredCssClass__, and __ClickedCssClass__[control the appearance of the button]({%slug toolbar/appearance-and-styling/setting--the-css-class-of-buttons%}) when it is in its normal state, has focus, is disabled, is under the mouse, and is clicked, respectively.(__RadToolBarButton__ has an additional property, __CheckedCssClass__, for when it is checked).

* __ImageUrl__, __FocusedImageUrl__, __DisabledImageUrl__, __HoveredImageUrl__, and __ClickedImageUrl__ let you [add an image]({%slug toolbar/appearance-and-styling/adding-images-to-buttons%}) that appears next to the button text when it is in its normal state, focused, disabled, under the mouse, or clicked, respectively. (__RadToolBarButton__ has an additional property, __CheckedImageUrl__, for supplying an image when the button is checked.)

* __ImagePosition__ lets you specify where the image appears relative to the text of the button.

In addition to these properties, which are common to all types of buttons, __RadToolBarButton__ and __RadToolBarSplitButton__ support some additional properties:

* __Value__ is a string value that you can associate with the button for use when programming the button behavior.

* __CommandName__ and __CommandArgument__ let you associate a command with the button.

* __NavigateUrl__ and __Target__ cause the tab to automatically launch another Web page (specified by __NavigateUrl__) in the window specified by __Target__. If the __Target__ property is not set, the new Web page uses the current browser window.

* __PostBack__ and __PostBackUrl__ specify whether the button causes a postback when clicked, and the URL of the page that is the target of that postback.

* __EnableDefaultButton__ and __DefaultButtonIndex__ let you assign one of the buttons in its drop-down list as the [default button]({%slug toolbar/radtoolbar-items/default-items%}) of a __RadToolBarSplitButton__.

* __IsSeparator__lets you convert a __RadToolBarButton__ into a [separator]({%slug toolbar/appearance-and-styling/separators%}).

* __CheckOnClick__ lets you allow __RadToolBarButton__ to support a [checked state]({%slug toolbar/radtoolbar-items/two-state-buttons%}). When __RadToolBarButton__ supports a checked state, __Checked__ specifies the initial checked state, and __AllowSelfUnCheck__ specifies whether users can uncheck the button by clicking. __Group__lets you associate the __RadToolBarButton__ controls with a group, so that they function like a radio group.

# See Also

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})
