---
title: Smart Tag
page_title: Smart Tag | UI for ASP.NET AJAX Documentation
description: Smart Tag
slug: dock/design-time/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The Smart Tags for __RadDock__, __RadDockZone__, and __RadDockLayout__ are identical. They all let you easily change the skin for your control or quickly get help. You can display the Smart Tag by right clicking on a __RadDock__, __RadDockZone__, __or RadDockLayout__ control and choosing "Show Smart Tag".
>caption 

![dock-smart-tag](images/dock-smart-tag.png)

## Ajax Resources

* __Add RadAjaxManager...__ adds a __RadAjaxManager__ component to your Web page, and displays the __r.a.d.ajax Property Builder__ where you can configure it.

* __Add RadStyleSheetManager__ adds a __RadStyleSheetManager__ to your Web page.

## Skin

The __Skin__ drop-down displays a list of available [skins]({%slug dock/appearance-and-styling/skins%}) that you can apply to your control, along with an example of what the __RadDock__ control looks like for each skin. Assign a skin by selecting the one you want from the list.

* When you set the __Skin__ from the __RadDock__ Smart Tag, the selected skin applies only to that __RadDock__ control.

* When you set the __Skin__ from the __RadDockZone__ Smart Tag, the selected skin not only affects the appearance of the __RadDockZone__ control, it becomes the default skin for any __RadDock__ controls nested in the __RadDockZone__ at design time. (Setting the __Skin__ property of individual __RadDock__ controls overrides this default.)

* When you set the __Skin__ from the __RadDockLayout__ Smart Tag, the selected skin becomes the default skin for all __RadDockZone__ controls nested in the __RadDockLayout__ at design time. (Setting the __Skin__ property of individual __RadDockZone__ controls overrides this default.) As __RadDockLayout__ is not rendered on client Web pages, there is no visual impact on the __RadDockLayout__ component itself.

## Learning Center

Links navigate you directly to RadDock examples, help, and code library.
