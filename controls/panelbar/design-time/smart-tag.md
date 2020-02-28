---
title: Smart Tag
page_title: Smart Tag | RadPanelBar for ASP.NET AJAX Documentation
description: Smart Tag
slug: panelbar/design-time/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The **RadPanelBar** Smart Tag allows easy access to frequently needed tasks. You can display the Smart Tag by right clicking on a **RadPanelBar** control in the design window, and choosing **Show Smart Tag**.

## Unbound Smart Tag

When **RadPanelBar** is unbound, the Smart Tag looks like the following:

![Smart Tag](images/panelbar_smarttag.png)

Using the unbound **RadPanelBar** Smart Tag you can perform the following:

## RadPanelBar Tasks

* **Choose Data Source** lets you bind the menu declaratively by selecting a data source from a drop-down list of all available data source components. If you select **`<New Data Source...>`** the standard [Windows Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/w4dd7z6t(VS.80).aspx) appears, where you can create and configure a data source component.

* **Build RadPanelBar...** opens the [RadPanelBar Item Builder]({%slug panelbar/design-time/radpanelbar-item-builder%}), where you can create and configure statically-defined items for your menu.

## Ajax Resources

* **Add RadAjaxManager...** adds a RadAjaxManager component to your Web page, and displays the **r.a.d.ajax Property Builder** where you can configure it.

* **Replace ScriptManager with RadScriptManager** replaces the default **ScriptManager** component that is added for AJAX-enabled Web sites with **RadScriptManager**.

* Add **RadStyleSheetManager** adds a **RadStyleSheetManager** to your Web page.

## Skin

The **Skin** drop-down lets you preview the built-in [skins]({%slug panelbar/appearance-and-styling/skins%}) and select one for your menu.

## Learning Center

Links navigate you directly to RadPanelBar examples, help, or code library. You can also search the Telerik web site for a given string.

## Edit Templates

Clicking the **Edit Templates** link brings up a [template design surface]({%slug panelbar/design-time/template-design-surface%}) where you can create or edit the [templates]({%slug panelbar/templates/overview%}) your **RadPanelBar** uses.

## Bound Smart Tag

When **RadPanelBar** is bound to a data source, the Smart Tag looks like the following:

![Bound Smart Tag](images/panelbar_smarttag_bound.PNG)

Using the bound **RadPanelBar** Smart Tag you can perform the following:

## RadPanelBar Tasks

* **Choose Data Source** lets you change the declarative menu binding by selecting a data source from a drop-down list of all available data source components. If you select **`<New Data Source...>`** the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component. If you select "**(None)**", you remove the existing binding.

* **Configure Data Source...** opens the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx), where you can configure the currently bound data source component.

* **Refresh Schema** refreshes the schema for the currently bound data source component.

* **Edit RadPanelBar Databindings**... opens the [NavigationItemBinding Collection Editor]({%slug panelbar/design-time/navigationitembinding-collection-editor%}), where you can specify [databindings]({%slug panelbar/data-binding/using-databindings%}) to map between the fields in the data source and **RadPanelItem** properties.

* Once the Data Source is chosen, you can select each one of the following: **DataFieldID**, **DataFieldParentID**, **DataTextField**, **DataValueField** and **DataNavigationUrlField**. For the first two, you need to select the fields in the Data Source that will be used when creating the hierarchy of RadPanelBar Items. The rest will serve data respectively for the **Text, Value** and **NavigateUrl** properties of RadPanelBar Items.

* **Edit Templates** brings up the [template design surface]({%slug panelbar/design-time/template-design-surface%}), where you can create or edit the [templates]({%slug panelbar/templates/overview%}) your **RadPanelBar** uses.
