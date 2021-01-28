---
title: Sliding Pane Behavior
page_title: Sliding Pane Behavior - RadSplitter
description: Check our Web Forms article about Sliding Pane Behavior.
slug: splitter/sliding-zones/sliding-pane-behavior
tags: sliding,pane,behavior
published: True
position: 4
---

# Sliding Pane Behavior

A number of properties control how users can interact with the sliding panes in a sliding zone:

## Opening sliding panes

By default, a sliding pane expands when the user hovers the mouse over its tab in the sliding zone. You can use the **ClickToOpen** property of the **RadSlidingZone** control to change this default behavior so that the panes only expand when the user clicks the tab.

When the sliding pane expands, an animated effect makes it appear to slide out from the sliding zone tab. You can use the **SlideDuration** property of the **RadSlidingZone** control to change the speed of this animated effect. **SlideDuration** specifies the duration, in milliseconds, of the animated effect.

## Closing sliding panes

There are a number of ways the user can close a sliding pane that is expanded:

* A sliding pane closes when the user clicks the collapse button in its title bar.

* A sliding pane closes automatically when the user opens another sliding pane in the same sliding zone.

* If the **ClickToOpen** property is **False**, a sliding zone closes automatically after a brief delay when the user moves the mouse off of the sliding pane and its tab.

## Docking sliding panes

By default, the title bar of a sliding pane contains a Dock/Undock button. When the pane first expands, this control is rendered as a "Dock" button. When the user clicks the "Dock" button, the sliding pane is locked in the expanded state, and cannot be collapsed until it has been undocked. Other sliding panes can be expanded over a docked sliding pane, and the sliding pane remains open.

When a sliding pane is in the docked state, its Dock button changes to an "Undock" button and the collapse button disappears from the title bar. To close the sliding pane, the user must first undock the sliding pane by clicking the undock button.

>note Only one sliding pane from a sliding zone can be docked at a time. If the user expands a second sliding pane over a docked sliding pane and clicks its dock button, the first sliding pane is undocked and closed when the second sliding pane is docked.

You can remove the Dock/Undock button from the title bar of a sliding pane by setting its **EnableDock** property to **False**. When the **EnableDock** property of a **RadSlidingPane** control is **False**, the title bar shows only a collapse button, and the pane cannot be docked (not even using the [client-side API]({%slug splitter/client-side-programming/radslidingpane-object%}) or by specifying the [initial state]({%slug splitter/sliding-zones/specifying-the-initial-state%}) of the sliding zone).

## Resizing sliding panes

By default, sliding panes have a single resizable edge that the user can drag on to change the size of the sliding pane:

* When the [SlideDirection]({%slug splitter/sliding-zones/sliding-direction%}) of the sliding zone is "Right", the right edge of the sliding pane is resizable.

* When the **SlideDirection** of the sliding zone is "Left", the left edge of the sliding pane is resizable.

* When the **SlideDirection** of the sliding zone is "Bottom", the lower edge of the sliding pane is resizable.

* When the **SlideDirection** of the sliding zone is "Top", the upper edge of the sliding pane is resizable.

You can disable the resizing of a sliding panes using its **EnableResize** property. When **EnableResize** is **False**, the size of expanded sliding panes is limited to the dimensions you specify [using the Height and Width properties]({%slug splitter/layout/specifying-size%}).

## See Also

 * [Changing the Strings in the User Interface]({%slug splitter/accessibility-and-internationalization/changing-the-strings-in-the-user-interface%})
