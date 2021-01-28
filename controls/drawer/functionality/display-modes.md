---
title: Display Modes
page_title: Display Modes - RadDrawer
description: Check our Web Forms article about Display Modes.
slug: drawer/functionality/display-modes
tags: display,mode,interaction
published: True
position: 1
---


# Display modes

## Overlay Mode

The overlay mode is not associated with any content. The drawer appears on top of the page contents from the side which is configured in the position setting. To show the drawer either swipe or drag with mouse or call the `show()` method of the widget. The drawer closes on click/tap of any of the options or on the overlay.

## Push Mode

The `push` mode is associated with specific page content and the element from which the widget is initialized should wrap that content. When the drawer opens it will push that content to the side. It is designed for wider screens (desktop/tablet). To show the drawer either swipe or drag with mouse or call the `show()` method of the widget. The drawer closes on click/tap of any of the options or on the associated content.

The height of the widget is determined by the higher content of the two - the template of the widget or the wrapped content it is associated with. The `minHeight` setting can be used to prevent the content from changing its height as the user toggles the drawer options.

## Mini Mode

The `mini` option can be activated with both `overlay` and `push` modes by enabling the mini configuration option. If set to true, it will use the default width of `50px` and the main template. You can set it to an object and change both the partially visible `MiniSettings.Width` and `MiniSettings.Template`.


## See Also

* [Live Demo - Functionality](https://demos.telerik.com/aspnet-ajax/drawer/functionality/defaultcs.aspx)

* [Live Demo - Mini Mode](https://demos.telerik.com/aspnet-ajax/drawer/minimode/defaultcs.aspx)
