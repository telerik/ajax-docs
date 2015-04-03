---
title: Smart Tag
page_title: Smart Tag | UI for ASP.NET AJAX Documentation
description: Smart Tag
slug: tabstrip/design-time/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The __RadTabStrip__ and __RadMultiPage__ Smart Tags allow easy access to frequently needed tasks. You can display the Smart Tag by right clicking on a __RadTabStrip__ or __RadMultiPage__ control in the design window, and choosing __Show Smart Tag__.

## Unbound RadTabStrip Smart Tag

When __RadTabStrip__ is unbound, the Smart Tag looks like the following:



Using the unbound __RadTabStrip__ Smart Tag you can perform the following:

## RadTabStrip Tasks

* __Choose Data Source__ lets you bind the tab strip declaratively by selecting a data source from a drop-down list of all available data source components. If you select __<New Data Source...>__ the standard Windows [Data Source Configuration Wizard](http://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component.

* __Build RadTabStrip...__ opens the [RadTabStrip Item Builder]({%slug tabstrip/design-time/radtabstrip-item-builder%}), where you can create and configure statically-defined items for your tab strip.

* __Related RadMultiPage__[attaches a RadMultiPage control]({%slug tabstrip/radmultipage/integrating-with--radtabstrip%}) that is already on the page to the __RadTabStrip__. Choose a __RadMultiPage__ control from the drop down list.

* __AddRadMultiPage__ creates a new __RadMultiPage__ control on the Web page and attaches it to the __RadTabStrip__.

## Ajax Resources

* __Add RadAjaxManager...__ adds a __RadAjaxManager__ component to your Web page, and displays the __r.a.d.ajax Property Builder__ where you can configure it.

* __Replace ScriptManager with RadScriptManager__ replaces the default __ScriptManager__ component that is added for AJAX-enabled Web sites with __RadScriptManager__.

* Add __RadStyleSheetManager__ adds a __RadStyleSheetManager__ to your Web page.

## Skin

The __Skin__ drop-down lets you preview the built-in [skins]({%slug tabstrip/appearance-and-styling/skins%}) and select one for your tab strip.

## Learning Center

Links navigate you directly to __RadTabStrip__ examples, help, or code library. You can also search the Telerik web site for a given string.

## Edit Templates

Clicking the __Edit Templates__ link brings up a [template design surface]({%slug tabstrip/design-time/template-design-surface%}) where you can create or edit the [templates]({%slug tabstrip/templates/overview%}) your __RadTabStrip__ uses.

## Bound RadTabStrip Smart Tag

When __RadTabStrip__ is bound to a data source, the Smart Tag looks like the following:

![Smart Tag of Bound TabStrip](images/tabstrip_smarttag_bound.PNG)

Using the bound __RadTabStrip__ Smart Tag you can perform the following:

## RadTabStrip Tasks

* __Choose Data Source__ lets you change the declarative menu binding by selecting a data source from a drop-down list of all available data source components. If you select "__<New Data Source...>__" the standard Windows [Data Source Configuration Wizard](http://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx) appears, where you can create and configure a data source component. If you select "__(None)__", you remove the existing binding.

* __Configure Data Source...__ opens the standard Windows [Data Source Configuration Wizard](http://msdn2.microsoft.com/en-us/library/ms247282(VS.80).aspx), where you can configure the currently bound data source component.

* __Edit RadTabStrip Databindings__... opens the [NavigationItemBinding Collection Editor]({%slug tabstrip/design-time/navigationtabbinding-collection-editor%}), where you can specify [databindings]({%slug tabstrip/data-binding/using-databindings%}) to map between the fields in the data source and __RadTab__ properties.

* Once the Data Source is chosen, you can select each one of the following: __DataFieldID__,__DataFieldParentID__,__DataTextField__,__DataValueField__ and __DataNavigationUrlField__. For the first two, you need to select the fields in the Data Source that will be used when creating the hierarchy of the RadTabStrip. The rest will serve data respectively for the __Text,____Value__ and __NavigateUrl__ properties of RadTabs.

* __Related RadMultiPage__[attaches a RadMultiPage control]({%slug tabstrip/radmultipage/integrating-with--radtabstrip%}) that is already on the page to the __RadTabStrip__. Choose a __RadMultiPage__ control from the drop down list.

* __AddRadMultiPage__ creates a new __RadMultiPage__ control on the Web page and attaches it to the __RadTabStrip__.

* __Edit Templates__ brings up the [template design surface]({%slug tabstrip/design-time/template-design-surface%}), where you can create or edit the [templates]({%slug tabstrip/templates/overview%}) your __RadTabStrip__ uses.

## RadMultiPage Smart Tag

The __RadMultiPage__ Smart Tag looks like the following:

![RadMultiPage's Smart Tag](images/tabstrip_radmultipagesmarttag.png)

The __Ajax Resources__ and __Learning center__ sections contain the same options as appear in the __RadTabStrip__ Smart Tag. In addition, the __RadMultiPage__ Smart Tag lets you select the following:

## RadMultiPage Tasks

* Add __RadPageView__ adds a __RadPageView__ to the end of the __RadMultiPage__ control's __PageViews__ collection.
