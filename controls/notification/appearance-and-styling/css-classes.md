---
title: CSS Classes
page_title: CSS Classes | RadNotification for ASP.NET AJAX Documentation
description: CSS Classes
slug: notification/appearance-and-styling/css-classes
tags: css,classes
published: True
position: 1
---

# CSS Classes



## Common Styles / Base Stylesheet


| CSS Class | Description |
| ------ | ------ |
|.RadNotification|Main RadNotification wrapping DIV element|
|.rnRoundedCorners|Applies rouneded corners to the main wrapping DIV element|
|.rnTitleBar|Specifies TitleBar warpping element|
|.rnTitleBarIcon|Styles TitleBar icon|
|.rnTitleBarTitle|Styles TitleBar title|
|.rnCommands|Styles TitleBar command buttons UL wrapping element|
|.rnCommands li|Styles TitleBar command buttons LI element|
|.rnCommands a|Styles TitleBar command buttons A element|
|.rnCommands .rnMenuIcon a|Styles TitleBar command Menu button normal style|
|.rnCommands .rnMenuIcon a:hover|Styles TitleBar command Menu button hover style|
|.rnCommands .rnCloseIcon a|Styles TitleBar command Close button normal style|
|.rnCommands .rnCloseIcon a:hover|Styles TitleBar command Close button hover style|
|.rnCommands a .rnAccessibility|Styles TitleBar command accessibillity style|
|.rnContentWrapper|Styles RadNotification Content Wrapper element|
|div.rnNoTitleBar .rnContentWrapper|Styles Content Wrapper element when no titlebar mode is true|
|.rnContentIconClipIn|Styles Content Predefined Icon Outer wrapping element|
|*html .rnContentIconClipIn|Styles Content Predefined Icon Outer wrapping element - IE6 specific|
|*+html .rnContentIconClipIn|Styles Content Predefined Icon Outer wrapping element - IE7 specific|
|.rnContentIconClip|Styles Content Predefined Icon Inner wrapping element|
|*+html .rnContentIconClip|Styles Content Predefined Icon Inner wrapping element - IE7 specific|
|.rnContentIconClipIn .rnCustomIcon|Styles Content Custom Icon Outer wrapping element|
|*html .rnContentIconClipIn .rnCustomIcon|Styles Content Custom Icon Outer wrapping element - IE6 specific|
|*+html .rnContentIconClipIn .rnCustomIcon|Styles Content Custom Icon Outer wrapping element - IE7 specific|
|.rnContent|Styles Content element|
|.rnContentTemplate|Styles Content Template element|

## Right to Left Support


| CSS Class | Description |
| ------ | ------ |
|.rnRtl .rnCommands li, .rnRtl .rnTitleBarIcon, .rnRtl .rnTitleBarTitle, .rnRtl .rnContentIconClipIn|Titlebar Commnads, Icon, Title and Content Icon float is changed in order to cover RTL requierments|
|.rnRtl .rnTitleBarTitle|Titlebar title RTL specific styles|
|div.rnRtl .rnCommands|Titlebar Commands RTL specific styles|
|*html div.rnRtl .rnCommands|Titlebar Commands RTL specific styles - IE6 specific|
|*+html div.rnRtl .rnCommands|Titlebar Commands RTL specific styles - IE6 specific - IEE7 specific|
|.rnRtl .rnTitleBarIcon|Titlebar Icon RTL specific styles|
|.rnRtl .rnContent|Content RTL specific styles|
|.rnRtl .rnContentIconClipIn|Content Icon Outer RTL specific styles|
|*html .rnRtl .rnContentIconClipIn|Content Icon Outer RTL specific styles - IE6 specific|
|*html .rnRtl .rnContentIconClipIn|Content Icon Outer RTL specific styles - IE6 specific|
|*+html .rnRtl .rnContentIconClipIn|Content Icon Outer RTL specific styles - IE7 specific|
|*html .rnRtl .rnContentIconClipIn .rnCustomIcon|Content Custom Icon Outer RTL specific styles - IE6 specific|
|*html .rnRtl .rnContentIconClip|Content Icon Inner RTL specific styles - IE6 specific|

## Skin Specific Styles


| CSS Class | Description |
| ------ | ------ |
|.RadNotification_SkinName|RadNotification Wrapping element Skin Specific Styles|
|.RadNotification_SkinName.rnShadows|RadNotification Wrapping element shadows enabled|
|.RadNotification_SkinName .rnTitleBar|RadNotification Titlebar gradient and Command buttons skin specific sprite images and styles applied|
|.RadNotification_SkinName .rnCommands a|RadNotification Titlebar gradient and Command buttons skin specific sprite images applied|
|.RadNotification_SkinName .rnContentWrapper|RadNotification Content Wrapper Skin Specific Styles|
|.RadNotification_SkinName .rnCommands|RadNotification Commands base style overwritten for some skins|

# See Also

 * [Tutorial: Creating a Custom Skin]({%slug notification/appearance-and-styling/create-a-custom-skin%})

 * [Skins]({%slug notification/appearance-and-styling/skins%})

 * [Controlling Appearance]({%slug notification/appearance-and-styling/control-appearance%})
