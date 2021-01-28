---
title: Controlling Appearance
page_title: Controlling Appearance - RadSplitter
description: Check our Web Forms article about Controlling Appearance.
slug: splitter/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance

## Layout

**RadSplitter** controls provide you with tremendous flexibility in the layout of a Web page:

* You can lay out the region defined by a splitter in just about any way you like by [adding pages to define regions]({%slug splitter/layout/declaring-splitter%}), and [nesting splitters]({%slug splitter/layout/nesting-splitters%}) to further subdivide those regions.

* The **Orientation** property specifies the way in which the panes of a splitter [divide up the space]({%slug splitter/layout/orientation%}).

* The [size of panes]({%slug splitter/layout/specifying-size%}) can be configured in both absolute and percentage based terms.

**RadSlidingZone** controls that are added to the pane of a splitter and be configured to expand in any [direction]({%slug splitter/sliding-zones/sliding-direction%}), and lay out their tabs based on that direction.

## Look and Feel

**RadSplitter** controls have three properties that affect its basic look-and-feel:

* The [Skin property]({%slug splitter/appearance-and-styling/skins%}) controls the general appearance of the splitter, as well as any **RadPane**, **RadSplitBar**, **RadSlidingZone**, and **RadSlidingPane** controls nested inside the splitter.

* The **PanesBorderSize** property lets you configure the width of the border that appears around individual panes.

* The **SplitBarsSize** property lets you configure the size of any split bars that you add between panes.

**RadSlidingZone** controls have a **SlideDuration** property that lets you specify the speed of the animated sliding effect when the user expands the sliding panes.

**RadSlidingPane** controls let you configure [the appearance of individual tabs]({%slug splitter/sliding-zones/specifying-tab-appearance%}).

## Text

Both **RadSplitBar** and **RadSlidingPane** controls contain icons that the user can click to interact with them. When the user hovers the mouse over these icons, they display tool tips that inform the user on the effects of clicking on them. A number of properties let you [change the text]({%slug splitter/accessibility-and-internationalization/changing-the-strings-in-the-user-interface%}) that appears in these tool tips.
