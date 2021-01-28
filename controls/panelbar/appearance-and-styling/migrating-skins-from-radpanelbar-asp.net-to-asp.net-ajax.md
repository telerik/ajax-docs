---
title: Migrating Skins from RadPanelBar ASP.NET to ASP.NET AJAX
page_title: Migrating Skins from RadPanelBar ASP.NET to ASP.NET AJAX - RadPanelBar
description: Check our Web Forms article about Migrating Skins from RadPanelBar ASP.NET to ASP.NET AJAX.
slug: panelbar/appearance-and-styling/migrating-skins-from-radpanelbar-asp.net-to-asp.net-ajax
tags: migrating,skins,from,radpanelbar,asp.net,to,asp.net,ajax
published: True
position: 0
---

# Migrating Skins from RadPanelBar ASP.NET to ASP.NET AJAX



## 

Since RadPanelBar for ASP.NET AJAX inherits its rendering from RadPanelBar for ASP.NET "Classic", it is rather easy to migrate a skin.

There are only two changes that are needed in the skins:

1. add the control-specific prefix ("rp" to the CSS class names and capitalize the first letter of the "Classic" class names afterwards

2. change RadPanelbar_SkinName to RadPanelBar_SkinName

The following table lists all class names in the "Classic" version of RadPanelBar and their equivalents in the RadPanelBar for ASP.NET AJAX:


| RadPanelBar "Classic" class name | RadPanelBar for ASP.NET AJAX class name |
| ------ | ------ |
|RadPanelbar_Skin|RadPanelBar_Skin|
|link|rpLink|
|focused|rpFocused|
|expanded|rpExpanded|
|expandable|rpExpandable|
|text|rpText|
|rootGroup|rpRootGroup|
|group|rpGroup|
|item|rpItem|
|first|rpFirst|
|last|rpLast|
|disabled|rpDisabled|
|separator|rpSeparator|
|level1|rpLevel1|
|slide|rpSlide|
