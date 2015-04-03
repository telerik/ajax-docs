---
title: Structure
page_title: Structure | UI for ASP.NET AJAX Documentation
description: Structure
slug: ribbonbar/structure
tags: structure
published: True
position: 1
---

# Structure



## 

The RibbonBar is a container that holds different types of items. There are a few types of items that can appear in the toolbar:

* __Application Menu__: the ApplicationMenu is specially designed for the RadRibbonbar control. It enables you to create an application menu similar to the one found in Microsoft Office 2007 and 2010.![Application menu](images/ribbonbar_application_menu.png)

* __Buttons__: RibbonBar buttons (__RibbonBarButton__) are buttons that the user can click to perform some task.![Ribbonbar Button](images/ribbonbar_button.png)

* __Contextual Tabs__: RadRibbonBar's contextual tabs allows you to group a number of tabs based on some context. Contextual tabs are contained in a contextual tab group and following Microsoft's Ribbon spec they are positioned always last, after the normal set of tabs.![Ribbonbar Contextual Tab](images/ribbonbar_contextual_tab.png)

* __Groups__: RibbonBarGroup is a container for other ribbon bar items. Each RibbonBar can have several number of __RibbonBarGroup__ items.![Ribbonbar Group](images/ribbonbar_group.png)

* __Menus__: Menus (__RibbonBarMenu__) do not perform a task. Instead, when the user clicks a menu item, it displays its __child menu items__. The menu item contains one or more menu items that the user can click to perform some task.![Ribbonbar Menu](images/ribbonbar_menu.png)

* __Split Buttons__: Split buttons (__RibbonBarSplitButton__) combine the features of buttons and menu items. When the user clicks on a split button, it performs a task like a toolbar button. When the user clicks on the drop-down arrow, it opens a __drop-down list__, where the user can click on a ribbonbar button.![Ribbonbar Split button](images/ribbonbar_splitbutton.png)

* __Tabs__: The RibbonBar consists of a hierarchy of tabs. The tabs on one level are exposed when the parent tab on the previous level is selected. Each tab is represented by a __RibbonBarTab__ instance.![Ribbonbar Tabs](images/ribbonbar_tabs.png)

* __Toggle Buttons__: Toggle button (__RibbonBarToggleButton__) is a button that represents a setting with two states - on and off. Users can click toggle buttons to turn a setting on or off. For instance, to switch between italic and plain style in selected text.![Ribbonbar Toggle button](images/ribbonbar_togglebutton.png)

* __Quick Access ToolBar__: The Quick Access Toolbar allows you to choose the most used RadRibbonBar commands that are currently available and put shortcuts to them in the title bar of the control.![Ribbonbar Quick Access Toolbar](images/ribbonbar_quick_access_toolbar.png)

When the RadRibbonBar control is selected, the properties pane on the right side enables you configure it by setting its properties. Here are some of them:

* __ToolTip__ - With the __Q2 2012 version__ of the Telerik controls RadRibbonBar control has enhanced ToolTips that enable you to completely describe the associated command and thus reduce the need for related Help. The following illustration shows the Enhanced tooltip for a ribbon control.![ribbonbar-tooltip](images/ribbonbar-tooltip.png)

* __Minimize__ - With the __Q2 2012 version__ of the Telerik controls RadRibbonBar control supports expanding/collapsing of the control. To get this functionality you will need to set the __EnableMinimizing__ property to __true__. In addtion to this, in case you need the control to be minimized on load, you can use the __Minimize__ property of the RadRibbonBar and set it to __true__.
