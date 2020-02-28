---
title: Smart Tag
page_title: Smart Tag | RadComboBox for ASP.NET AJAX Documentation
description: Smart Tag
slug: combobox/design-time/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The **RadComboBox** Smart Tag allows easy access to frequently needed tasks. You can display the **Smart Tag** by right clicking on a **RadComboBox** control in the design window, and choosing **Show Smart Tag**.

## Unbound Smart Tag

When **RadComboBox** is unbound, the Smart Tag looks like the following:

![combobox smarttag](images/combobox_smarttag.png)

Using the unbound **RadComboBox** Smart Tag you can perform the following:

## RadComboBox Tasks

* **Choose Data Source** lets you bind the RadComboBox declaratively by selecting a data source from a drop-down list of all available data source components. If you select **<New Data Source...>** the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component.

* **Build RadComboBox** opens the [RadComboBox Item builder]({%slug combobox/design-time/radcombobox-item-builder%}), where you can add static items to the RadComboBox and set their properties.

* **Skin** lets you select from a list of available [skins]({%slug combobox/appearance-and-styling/skins%}) to customize the look of your **RadComboBox**.

## Learning Center

Links navigate directly to RadComboBox examples, help, or code library. You can also search the Telerik web site for a given string.

![combobox smarttag](images/combobox_smarttag.png)

## Edit Templates

Clicking the **Edit Templates** link brings up a [template editor]({%slug combobox/design-time/template-design-surface%}) where you can customize the Item Template.

## Bound Smart Tag

When **RadComboBox** is bound to a data source, the Smart Tag looks like the following:

![combobox smarttag bound](images/combobox_smarttag_bound.png)

Using the bound **RadComboBox** Smart Tag you can perform any task you can perform with the unbound Smart Tag. In addition, you can choose **Configure Data** **Source...** to open the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx), where you can configure the currently bound data source component.

Once the Data Source is chosen, you can select each of the following: **DataTextField** and **DataValueField**. These should be fields in the Data Source which will serve data respectively for the **Text** and **Value** properties of RadComboBox Items.

# See Also

 * [Overview]({%slug combobox/data-binding/overview%})
