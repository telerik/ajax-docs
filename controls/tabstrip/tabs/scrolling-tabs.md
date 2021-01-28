---
title: Scrolling Tabs
page_title: Scrolling Tabs - RadTabStrip
description: Check our Web Forms article about Scrolling Tabs.
slug: tabstrip/tabs/scrolling-tabs
tags: scrolling,tabs
published: True
position: 2
---

# Scrolling Tabs



By default, when there is not enough room to display all the tabs at one level, **RadTabStrip** simply truncates the display:

![Truncated tabs](images/tabstrip_tabstruncated.png)

A number of properties let you change this to allow the user to scroll the tabs at a level.

>tip As an alternate to scrolling, you can also set the **IsBreak** property on a tab so that the tabs at a single level appear in multiple rows.
>


## Enabling Scrolling

To enable scrolling for a set of tabs in the tab strip, set the **ScrollChildren** property of the parent tab to **True**. You can enable scrolling on the root level tabs by setting the **ScrollChildren** property of the **TabStrip** to **True**.

When scrolling is enabled, a pair of scroll buttons appears in the set of tabs:

![Tabs with scroll buttons](images/tabstrip_tabswithscrollbuttons.png)

>note Scrolling is only an option if the [orientation]({%slug tabstrip/appearance-and-styling/controlling-layout%}) of the tab strip is horizontal.
>


## Positioning the Scroll Buttons

The **ScrollButtonsPosition** property determines the position of the scroll buttons. Set the **ScrollButtonsPosition** property the parent tab to position the scroll buttons in the line of child tabs. To position the scroll buttons on the root-level tabs, set the **ScrollButtonsPostion** property of the **RadTabStrip** control.

When **ScrollButtonsPosition** is "Right" (the default) a pair of scroll buttons appear at the right end of the line of tabs:

![Tabs with scroll buttons](images/tabstrip_tabswithscrollbuttons.png)

When **ScrollButtonsPosition** is "Left", the scroll buttons appear at the left end of the line of tabs:

![Scroll buttons left](images/tabstrip_scrollbuttonsleft.png)

When **ScrollButtonsPosition** is "Middle", the button for scrolling left appears on the left end of the line of tabs, and the button for scrolling right appears on the right end:

![Scroll buttons middle](images/tabstrip_scrollbuttonsmiddle.png)

## Scrolling Behavior

Set the **PerTabScrolling** property (for the **RadTabStrip** control or for a parent **RadTab** object) to specify how the line of child tabs responds when the user clicks on a scroll button.

When **PerTabScrolling** is **True**, the line of tabs scrolls in steps, so that it always starts at the beginning of a tab:

![Per items scrolling](images/tabstrip_peritemscrolling.png)

When **PerTabScrolling** is **False**, the line of tabs scrolls in a smooth continuous motion, so that the first tab can appear cut off:

![Continuous scrolling](images/tabstrip_continuousscrolling.png)

>note When **PerTabScrolling** is **True**, the **ScrollPosition** property specifies the initial scroll position (the index of the first tab to appear in the list).
>

