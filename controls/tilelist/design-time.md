---
title: Design Time
page_title: Design Time | UI for ASP.NET AJAX Documentation
description: Design Time
slug: tilelist/design-time
tags: design,time
published: True
position: 1
---

# Design Time



__RadTileList__ offers a design-time configurator for Visual Studio that you can use to select and setup its datasource and databinding settings, set several main properties	and edit the tiles collection. You can also perform several other tasks like changing the skin of the control,	adding a RadAjaxManager, RadScriptManager and RadStyleSheetManager.	These options are accessed through the __Smart Tag__ of the control:
>caption RadTileList Smart Tag

![tilelist-design-time-smart-tag](images/tilelist-design-time-smart-tag.png)

## Datasource Setup

The first item is a dropdown populated with the declarative datasources on the page. Once a datasource is selected (or created through Visual Studio's wizard)the two lines below it let you configure or refresh it. They are both features exposed by Visual Studio.

## Main RadTileList properties

After the datasource configuration the main properties that control the __RadTileList's__ appearance are exposed for easy access:

* __TileRows__: the number of rows in which tiles will be distributed. Defaults to 3.

* __Width__: the width of the control. If there are more tiles than the designated width a scrollbar appears by default.

* __Height__: the height of the control. Typically, RadTileList calculates it based on the number of rows and you need not set it.

## Configuration Wizard

The __Configuration Wizard__ link opens the wizard you can use to edit the collection of [Tiles]({%slug tilelist/tiles/overview%})and setup the [databinding]({%slug tilelist/data-binding/overview%}) settings of the control:
>caption RadTileList Configuration Wizard - Tile Collection editor

![tilelist-design-time-configuration-wizard-tiles-collection](images/tilelist-design-time-configuration-wizard-tiles-collection.png)

The first tab on the left lets you edit the static tiles in the control. The buttons in the middle section let you edit the list below themand the pane on the right exposes the properties of a selected tile or group.


>caption RadTileList Configuration Wizard - Databinding settings editor

![tilelist-design-time-configuration-wizard-databinding-settings](images/tilelist-design-time-configuration-wizard-databinding-settings.png)

In the databinding settings tab you can, once again, select an existing datasource, or create a new one.Below the dropdown the sections that define the databinding settings are exposed. One for the common settingsand one section for each tile type with it specific options.The properties exposed by each settings group can be modified in the right pane.

## Ajax Resources

* The __Add RadAjaxManager...__ link adds a RadAjaxManager component to your Web page,so you can configure partial postbacks through a comfortable control.

* The __Replace ScriptManager with RadScriptManager__ link replaces the default ScriptManager component that is usedfor AJAX-enabled Web sites with RadScriptManager. If there isn't a ScriptManager on the page this link will allow you to add one.

* The __AddRadStyleSheetManager__ link adds a RadStyleSheetManager to your Web page.

## Choosing the Skin

The __Skin__ dropdown lists all available skins for the control so you can select one that matches the look and feel of the rest of the page.The skins are displayed via small images to give you a better idea of the color scheme they use.

## Learning Center

The last section of the Smart Tag provides several links navigate you directly to the RadTileList online examples, help, or code library.
