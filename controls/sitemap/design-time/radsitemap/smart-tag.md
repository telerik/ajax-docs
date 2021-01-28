---
title: Smart Tag
page_title: Smart Tag - RadSiteMap
description: Check our Web Forms article about Smart Tag.
slug: sitemap/design-time/radsitemap/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The **RadSiteMap** Smart Tag allows easy access to frequently needed tasks. You can display the Smart Tag by right clicking on a **RadSiteMap** control in the design window, and choosing **Show Smart Tag**.

## Unbound Smart Tag

When **RadSiteMap** is unbound, the Smart Tag looks like the following:

![RadSiteMap Smart Tag](images/sitemap_smarttag.png)

Using the unbound **RadSiteMap** Smart Tag you can perform the following:

## RadSiteMap Tasks

* **Choose Data Source** lets you bind the menu declaratively by selecting a data source from a drop-down list of all available data source components. If you select **<New Data Source...>** the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component.

* **Build RadSiteMap...** opens the [RadSiteMap Item Builder]({%slug sitemap/design-time/radsitemap/radsitemap-item-builder%}), where you can create and configure statically-defined items for your menu.

## Ajax Resources

* **Add RadAjaxManager...** adds a RadAjaxManager component to your Web page, and displays the **RadAjaxManager Property Builder** where you can configure it.

* **Replace ScriptManager with RadScriptManager** replaces the default **ScriptManager** component that is added for AJAX-enabled Web sites with **RadScriptManager**.

* Add **RadStyleSheetManager** adds a **RadStyleSheetManager** to your Web page.

## Skin

The **Skin** drop-down lets you preview the built-in [skins]({%slug menu/appearance-and-styling/appearance-skins%}) and select one for your sitemap.

## Learning Center

Links navigate you directly to RadSiteMap examples, help, or code library. You can also search the Telerik web site for a given string.

## Edit Templates

Clicking the **Edit Templates** link brings up a [template design surface]({%slug sitemap/design-time/radsitemap/template-design-surface%}) where you can create or edit the [templates]({%slug sitemap/templates/overview%}) your **RadSiteMap** uses.

## Bound Smart Tag

When **RadSiteMap** is bound to a data source, the Smart Tag looks like the following:

![RadSiteMap Bound Smart Tag](images/sitemap_smarttagbounds.png)

Using the bound **RadSiteMap** Smart Tag you can perform the following:

## RadSiteMap Tasks

* **Choose Data Source** lets you change the declarative menu binding by selecting a data source from a drop-down list of all available data source components. If you select "**<New Data Source...>**" the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component. If you select "**(None)**", you remove the existing binding.

* **Configure Data Source...** opens the standard Windows [Data Source Configuration Wizard](https://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx), where you can configure the currently bound data source component.

* **Refresh Schema** refreshed the schema for the currently bound data source component.

* **Edit RadSiteMap Databindings**... opens the [NavigationItemBinding Collection Editor]({%slug sitemap/design-time/radsitemap/navigationitembinding-collection-editor-%}), where you can specify databindings to map between the fields in the data source and **RadSiteMapItem**properties.

* Once the Data Source is chosen, you can select each one of the following: **DataFieldID**,**DataFieldParentID**,**DataTextField**,**DataValueField** and **DataNavigationUrlField**. For the first two, you need to select the fields in the Data Source that will be used when creating the hierarchy of the RadSiteMap. The rest will serve data respectively for the **Text, Value** and **NavigateUrl** properties of RadSiteMap Items.

* **Edit Templates** brings up the [template design surface]({%slug sitemap/design-time/radsitemap/template-design-surface%}), where you can create or edit the [templates]({%slug sitemap/templates/overview%}) your **RadSiteMap** uses.
