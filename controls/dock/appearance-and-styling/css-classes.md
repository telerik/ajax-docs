---
title: CSS Classes
page_title: CSS Classes | RadDock for ASP.NET AJAX Documentation
description: CSS Classes
slug: dock/appearance-and-styling/css-classes
tags: css,classes
published: True
position: 5
---

# CSS Classes



The following table lists significant CSS selectors and descriptions for RadDock style sheets.

## Common CSS




|  **Class Name**  |  **Description**  |
| ------ | ------ |
|.RadDock|Primary wrapping class of the RadDoc|
|.RadDock .rdTable|RadDoc wrapping table|
|.RadDock .rdTable .rdTop .rdLeft, .RadDock .rdTable .rdTop .rdRight, .RadDock .rdTable .rdMiddle .rdLeft, .RadDock .rdTable .rdMiddle .rdRight, .RadDock .rdTable .rdBottom .rdLeft, .RadDock .rdTable .rdBottom .rdCenter, .RadDock .rdTable .rdBottom .rdRight|Specifies Rad Doc table layout|
|.RadDock .rdContent|Specifies Rad Doc Content|
|.RadDock.rdCollapsed|Specifies Rad Doc Collapsed state|
|.RadDock.rdCollapsed .rdMiddle,.RadDock.rdCollapsed .rdBottom|Specifies Rad Doc Collapsed state middle and bottm zones|
|.RadDock .rdTable, .RadDock .rdTable .rdLeft, .RadDock .rdTable .rdCenter, .RadDock .rdTable .rdRight|Specifies table left, center and right zones|
|.RadDock .rdTop .rdLeft, .RadDock .rdTop .rdRight, .RadDock .rdTop .rdCenter, .RadDock .rdBottom .rdLeft, .RadDock .rdBottom .rdRight, .RadDock .rdBottom .rdCenter|Specifies table left, center and right top zones|
|div.RadDock .rdTop .rdRoundedCorner.rdLeft, div.RadDock .rdTop .rdRoundedCorner.rdRight, .RadDock .rdBottom .rdLeft.rdRoundedCorner, .RadDock .rdBottom .rdRight.rdRoundedCorner|Specifies top rounded corners|
|.RadDock .rdTitleBar em|Specifies RadDoc title bar|
|.RadDock .rdCenter .rdCommands|Primary wrapping commands class of the RadDoc|
|.RadDock .rdCenter .rdCommands li|Specifies RadDoc commands list element|
|.RadDock .rdCenter .rdCommands a, .RadDock .rdCenter .rdCommands a span|Specifies RadDoc commands anchor and span inserted|
|.rdCollapse|Specifies collapse button|
|.rdCollapse:hover|Specifies collapse button hover state|
|.rdExpand|Specifies expand button|
|.rdExpand:hover|Specifies expand button hover state|
|.rdClose|Specifies close button|
|.rdClose:hover|Specifies close button hover state|
|.rdPin|Specifies pin button|
|.rdPin:hover|Specifies pin button hover state|
|.rdUnpin|Specifies unpin button|
|.rdUnpin:hover|Specifies unpin button hover state|
|.rdCustom|Specifies custom button|
|.rdCustom:hover|Specifies custom button hover state|
|.rdRtl,.rdRtl .rdContent, .rdRtl .rdTop .rdCenter, .rdRtl .rdTop .rdCenter ul.rdCommands, .rdRtl .rdTitleBar em|Right to left support|
|.rdTitleBar|Specifies title bar|
|.rdDragHelper|RadDoc helper when dock is dragged|
|.rdHorizontal .RadDock|Specifies horizontal RadDoc|
|.RadDockZone|Specifies RadDoc zone|
|.rdRtl|Needed this in case the BODY has text-aligh:center applied|
|.rdPlaceHolder|Specifies Place Holder|



## Skin-Specific CSS


  

|  **Class Name**  |  **Description**  |
| ------ | ------ |
|.RadDock_SkinName .rdMiddle .rdLeft,.RadDock_SkinName .rdMiddle .rdRight|Middle part left and right background|
|.RadDock_SkinName .rdTop .rdLeft, .RadDock_SkinName .rdTop .rdRight, .RadDock_SkinName .rdTop .rdCenter, .RadDock_SkinName .rdBottom .rdLeft, .RadDock_SkinName .rdBottom .rdRight, .RadDock_SkinName .rdBottom .rdCenter|Top and bottom background|
|.RadDock_SkinName .rdCenter .rdCommands a span|Commands anchor span background|
|.RadDock_SkinName .rdMiddle .rdCenter, .RadDock_SkinName .rdBottom .rdCenter|Middle and bottom center background|
|.RadDock_SkinName .rdContent|RadDock content color|
|.RadDock_SkinName em|RadDock TitleBar em color|

# See Also

 * [HTML Rendering and CSS]({%slug dock/appearance-and-styling/html-rendering-and-css%})

 * [Tutorial: Creating a Custom Classic Skin]({%slug dock/appearance-and-styling/creating-custom-classic-skin%})

 * [Tutorial: Creating a Custom Lightweight Skin]({%slug dock/appearance-and-styling/creating-custom-lightweight-skin%})
