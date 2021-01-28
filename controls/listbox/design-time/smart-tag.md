---
title: Smart Tag
page_title: Smart Tag - RadListBox
description: Check our Web Forms article about Smart Tag.
slug: listbox/design-time/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag

The **RadListBox** Smart Tag allows easy access to frequently needed tasks. You can display the **Smart Tag** by right clicking on a **RadListBox** control in the design window, and choosing **Show Smart Tag.**

![Show smart tag](images/listbox_show_smart_tag.png)

## Smart Tag of unbound RadListBox

When **RadListBox** is unbound, the Smart Tag looks like the following:

![Unbound Smart Tag](images/listbox_unbound_smart_tag.png)

Using the unbound **RadListBox** Smart Tag you can perform the following:

## RadListBox Tasks

* **Choose Data Source** lets you bind RadListBox declaratively by selecting a data source from a drop-down list of all available data source components. If you select **<New Data Source...>** the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component.

* **Build RadListBox** opens the [RadListBox Item builder]({%slug listbox/design-time/item-builder%}), where you can add static items to the ListBox and set their properties.

* **Add RadListBox** adds another RadListBox on the page related to the first one. Use this when you want to [transfer items]({%slug listbox/functionality/transfer%}) between two RadListBox controls.

* **Skin** lets you select from a list of available [skins]({%slug listbox/appearance-and-styling/skins%}) to customize the look of your **RadListBox**.

## Learning Center

Links navigate you directly to RadListBox examples, help, or code library. You can also search the Telerik web site for a given string.

## Edit Templates

Clicking the **Edit Templates** link brings up a [template editor]({%slug listbox/design-time/template-editor%}) where you can customize the Item Template.

## Smart Tag of bound RadListBox

When **RadListBox** is bound to a data source, the Smart Tag looks like the following:

![Bound Smart Tag](images/listbox_bound_smart_tag.png)

Using the Smart Tag of bound **RadListBox** lets you perform any task you can perform with the Smart Tag of unbound RadListBox. In addition, you can choose **Configure Data Source...** to open the standard [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx), where you can configure the currently bound data source component.

Once the Data Source is chosen, you can select each of the following: **DataKeyField**, **DataSortField**, **DataTextField** and **DataValueField**. These should be fields in the Data Source which will serve data respectively for the primary key, sort order column and **Text** and **Value** properties of RadListBox Items.

# See Also

 * [Item Builder]({%slug listbox/design-time/item-builder%})

 * [Template Editor]({%slug listbox/design-time/template-editor%})
