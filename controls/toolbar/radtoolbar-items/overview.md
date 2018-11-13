---
title: Overview
page_title: RadToolBar Items Overview | RadToolBar for ASP.NET AJAX Documentation
description: Overview
slug: toolbar/radtoolbar-items/overview
tags: overview
published: True
position: 0
---

# RadToolBar Items Overview



__RadToolBar__ Items can be __buttons__, __drop-downs__ or __split buttons__. The sections below describe the most important properties of the three item-types.

## RadToolBarButton

The __RadToolBarButton__ has a few important properties, which are listed below:

* __Text__ is the string that the user sees for the button.

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the button.

>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>


* __Value__ is the value associated with the button.

* __CommandName__ and __CommandArgument__ let you associate a command with the button.

* __CheckOnClick__ indicates whether the button has [two states]({%slug toolbar/radtoolbar-items/two-state-buttons%}): "checked" and "unchecked". When __CheckOnClick__ is __True__, the user can change the state to "checked" by clicking on the button.

* __Checked__ indicates whether the button is checked. A button can be checked only if the __CheckOnClick__ property is set to __True__.

* __Group__ lets you group toolbar buttons together so that they act like radio buttons.

* __AllowSelfUnCheck__ lets the user turn off the checked state of a button by clicking. This property should not be set to __True__ if the button is used in a group.

* __Enabled__ determines whether the user can click the button to perform some task.

* __IsSeparator__ turns the button into a [separator]({%slug toolbar/appearance-and-styling/separators%}). Separators do not perform a task, but simply act to make visual distinctions in the layout of buttons in the toolbar or a drop-down list.

* __CssClass__ is the name of a CSS style to be applied to the button. The style can be declared in the CSS file of the applied skin.

In addition to the built-in properties, you can add your own [custom attributes]({%slug toolbar/radtoolbar-items/custom-attributes%}) to the toolbar buttons to expand their functionality.

## RadToolBarDropDown

The __RadToolBarDropDown__ object exposes a __Buttons__ collection. In other words, the __RadToolBarDropDown__ can contain __RadToolBarButtons__. Below are listed some of the most important properties of the __RadToolBarDropDown__:

* __Text__ is the string that the user sees for the drop-down.

* __Enabled__ indicates whether the user can expand/collapse the drop-down.

* __Visible__ indicates whether the drop-down is visible or not.

* __CssClass__ is the name of the CSS style to be applied to the drop-down. The style can be declared in the CSS file of the applied skin.

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the drop-down.

In addition to the built-in properties, you can add your own [custom attributes]({%slug toolbar/radtoolbar-items/custom-attributes%}) to drop-downs to expand their functionality.



## RadToolBarSplitButton

The __RadToolBarSplitButton__ object also exposes a __Buttons__ collection.

* __Text__ is the string that the user sees for the split button.

* __EnableDefaultButton__ lets you specify a button in the split button's __Buttons__ collection that acts as a [default button]({%slug toolbar/radtoolbar-items/default-items%}). When the split button has a default button, it displays the __Text__ and image of the default button rather than the values assigned to its own __Text__ and image properties.

* __DefaultButtonIndex__ identifies which button in the __Buttons__ collection is the default button when the __EnableDefaultButton__ property is __True__.

* __Value__ is the value associated with the split button.

* __CommandName__ and __CommandArgument__ let you associate a command with the split button.

* __Enabled__ indicates whether the user can click/expand/collapse the split button.

* __Visible__ indicates whether the split button is visible or not.

* __CssClass__ is the name of the CSS style to be applied to the split button. The style can be declared in the CSS file of the applied skin.

* __ToolTip__ is the text of the tooltip that appears when the user hovers the mouse over the split button.

In addition to the built-in properties, you can add your own [custom attributes]({%slug toolbar/radtoolbar-items/custom-attributes%}) to split buttons to expand their functionality.



## Controlling what items appear

There are a number of ways you can control the buttons that __RadToolBar__ holds. You can:

* [Specify the buttons in-line]({%slug toolbar/radtoolbar-items/declaring-items-statically-at-design-time%}) at design time.

* Load the items from an [XML file]({%slug toolbar/radtoolbar-items/loading-items-from-xml%}).

* [Bind the toolbar]({%slug toolbar/data-binding/overview%}) to a data source.

* Add, remove, and edit the items in the toolbar in [server-side code]({%slug toolbar/radtoolbar-items/working-with-items-at-the-server%}).

# See Also

 * [RadToolBar Item Editor]({%slug toolbar/design-time/radtoolbar-item-editor%})

 * [Structure]({%slug toolbar/structure%})
