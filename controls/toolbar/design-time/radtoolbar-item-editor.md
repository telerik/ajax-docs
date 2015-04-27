---
title: RadToolBar Item Editor
page_title: RadToolBar Item Editor | RadToolBar for ASP.NET AJAX Documentation
description: RadToolBar Item Editor
slug: toolbar/design-time/radtoolbar-item-editor
tags: radtoolbar,item,editor
published: True
position: 1
---

# RadToolBar Item Editor



The **RadToolBar Item Editor** lets you populate your toolbar with buttons. There are two ways to bring up the RadToolBar Item Editor:

* From the **RadToolBar**[ Smart Tag ](5BB964CF-AA36-443D-824B-60964E411B25), click on the **Build RadToolBar** link.

* Right-click on the **RadToolBar** component and select **Build RadToolBar** from its context menu.

## RadToolBar Item Editor

![toolbar itemeditor](images/toolbar_itemeditor.png)

The **RadToolBar Item Editor** lets you add, rearrange, configure, and delete buttons on the toolbar. These actions are initiated using the toolbar at the upper left of the Item Editor:

![ToolBar Item Builder Buttons](images/toolbar_itembuildertoolbar.png)

The following table describes the controls in the toolbar:


| Button | Function |
| ------ | ------ |
|![ToolBar Add Button](images/toolbar_addtoolbutton.png)|Adds a **RadToolBarButton** to the toolbar in the next available position.|
|![ToolBar Add Drop Down Button](images/toolbar_adddropdownbutton.png)|Adds a **RadToolBarDropDown** to the toolbar in the next available position.|
|![ToolBar Add Split Button](images/toolbar_addsplitbutton.png)|Adds a **RadToolBarSplitButton** to the toolbar in the next available position.|
|![ToolBar Add Child Button](images/toolbar_addchildbutton.png)|Adds a **RadToolBarButton** to the end of the drop-down list for the currently selected **RadToolBarDropDown** or **RadToolBarSplitButton** .|
|![Toolbar Delete Button](images/toolbar_deletebutton.png)|Deletes the currently selected button from the toolbar or drop-down list.|
|![ToolBar Move Up Button](images/toolbat_movebuttonup.png)|Moves the currently selected button backward in the toolbar or drop-down list so that it precedes the previous sibling.|
|![ToolBar Move Down Button](images/toolbar_movebuttondown.png)|Moves the currently selected tab forward in the toolbar or drop-down list, so that it follows the next sibling.|

## 

When a button is selected, the properties pane on the right of the **RadToolBar Item Editor** lets you configure the item by setting its properties. For each button,

* **Text** is the text that appears on the button.

* **ToolTip** is the text of a tooltip that appears when the user hovers the mouse over the button.

* **Enabled** controls whether the button is initially enabled or disabled.

* **CssClass**, **OuterCssClass**, **FocusedCssClass**, **DisabledCssClass**, **HoveredCssClass**, and **ClickedCssClass**[control the appearance of the button]({%slug toolbar/appearance-and-styling/setting--the-css-class-of-buttons%}) when it is in its normal state, has focus, is disabled, is under the mouse, and is clicked, respectively.(**RadToolBarButton** has an additional property, **CheckedCssClass**, for when it is checked).

* **ImageUrl**, **FocusedImageUrl**, **DisabledImageUrl**, **HoveredImageUrl**, and **ClickedImageUrl** let you [add an image]({%slug toolbar/appearance-and-styling/adding-images-to-buttons%}) that appears next to the button text when it is in its normal state, focused, disabled, under the mouse, or clicked, respectively. (**RadToolBarButton** has an additional property, **CheckedImageUrl**, for supplying an image when the button is checked.)

* **ImagePosition** lets you specify where the image appears relative to the text of the button.

In addition to these properties, which are common to all types of buttons, **RadToolBarButton** and **RadToolBarSplitButton** support some additional properties:

* **Value** is a string value that you can associate with the button for use when programming the button behavior.

* **CommandName** and **CommandArgument** let you associate a command with the button.

* **NavigateUrl** and **Target** cause the tab to automatically launch another Web page (specified by **NavigateUrl**) in the window specified by **Target**. If the **Target** property is not set, the new Web page uses the current browser window.

* **PostBack** and **PostBackUrl** specify whether the button causes a postback when clicked, and the URL of the page that is the target of that postback.

* **EnableDefaultButton** and **DefaultButtonIndex** let you assign one of the buttons in its drop-down list as the [default button]({%slug toolbar/radtoolbar-items/default-items%}) of a **RadToolBarSplitButton**.

* **IsSeparator**lets you convert a **RadToolBarButton** into a [separator]({%slug toolbar/appearance-and-styling/separators%}).

* **CheckOnClick** lets you allow **RadToolBarButton** to support a [checked state]({%slug toolbar/radtoolbar-items/two-state-buttons%}). When **RadToolBarButton** supports a checked state, **Checked** specifies the initial checked state, and **AllowSelfUnCheck** specifies whether users can uncheck the button by clicking. **Group**lets you associate the **RadToolBarButton** controls with a group, so that they function like a radio group.

# See Also

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})
