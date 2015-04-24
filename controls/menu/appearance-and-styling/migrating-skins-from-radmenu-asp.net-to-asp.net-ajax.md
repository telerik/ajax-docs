---
title: Migrating Skins from RadMenu ASP.NET to ASP.NET AJAX
page_title: Migrating Skins from RadMenu ASP.NET to ASP.NET AJAX | RadMenu for ASP.NET AJAX Documentation
description: Migrating Skins from RadMenu ASP.NET to ASP.NET AJAX
slug: menu/appearance-and-styling/migrating-skins-from-radmenu-asp.net-to-asp.net-ajax
tags: migrating,skins,from,radmenu,asp.net,to,asp.net,ajax
published: True
position: 0
---

# Migrating Skins from RadMenu ASP.NET to ASP.NET AJAX





## 

Since RadMenu for ASP.NET AJAX inherits its rendering from RadMenu for ASP.NET "Classic", it is rather easy to migrate a skin. The only change in the CSS class names is the control-specific prefix ("rm") and the capitalization of the first letter of the "Classic" class names afterwards. The following table lists all class names in the "Classic" version of RadMenu and their equivalents in the RadMenu for ASP.NET AJAX:




| RadMenu "Classic" class name | RadMenu for ASP.NET AJAX class name |
| ------ | ------ |
|link|rmLink|
|focused|rmFocused|
|expanded|rmExpanded|
|text|rmText|
|rootGroup|rmRootGroup|
|group|rmGroup|
|expandLeft|rmExpandLeft|
|expandRight|rmExpandRight|
|horizontal|rmHorizontal|
|vertical|rmVertical|
|item|rmItem|
|first|rmFirst|
|last|rmLast|
|topArrowDisabled|rmTopArrowDisabled|
|bottomArrowDisabled|rmBottomArrowDisabled|
|leftArrowDisabled|rmLeftArrowDisabled|
|rightArrowDisabled|rmRightArrowDisabled|
|topArrow|rmTopArrow|
|bottomArrow|rmBottomArrow|
|leftArrow|rmLeftArrow|
|rightArrow|rmRightArrow|
|disabled|rmDisabled|
|separator|rmSeparator|
|leftImage|rmLeftImage|
|slide|rmSlide|
