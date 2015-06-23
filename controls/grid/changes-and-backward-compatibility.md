---
title: Changes and Backward Compatibility
page_title: Changes and Backward Compatibility | RadGrid for ASP.NET AJAX Documentation
description: Changes and Backward Compatibility
slug: grid/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: True
position: 1
---

# Changes and Backward Compatibility



## Telerik RadGrid for ASP.NET AJAX Q2 2010

Since Q2 2010 all major changes for the controls are listed in the official Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## Telerik RadGrid for ASP.NET AJAX Q1 2010

As of Q1 2010 **RadGrid** has a base style sheet file for its skins. If you are using an older custom skin with the latest release, you need to set the **EnableEmbeddedBaseStylesheet** property to **false**. In addition, some icons have been redesigned, including pager, filter, edit, delete, refresh, reorder icons.

## Telerik RadGrid for ASP.NET AJAX Q3 2009

RadGrid for ASP.NET AJAX which is part of the Q3 2009 release is fully backwards compatible with its previous version (Q2 2009).

## Telerik RadGrid for ASP.NET AJAX Q2 2009

Setting **ClipCellContentOnResize="true"** now triggers a **Fixed TableLayout** for the MasterTableView (otherwise you will need to set it manually in order to make cell clipping work). As a result, you may experience unexpected fixed TableLayout when column resizing is enabled (since cell clipping is enabled by default). Please set **ClipCellContentOnResize="false"** in order to revert back to the old behavior.

## Telerik RadGrid for ASP.NET AJAX Q1 2009

In this version of the control, a number of changes have been made with respect to the pager rendering, styling, as well as the status item. Below is a short list, introducing the changes:

* The main wrapper for the pager has a CSS class name of **rgPager**. In terms of html this renders as:<tr class="rgPager">

* **GridStatusBarItem** is now obsolete. Presently, the pager hosts a table, with one or two cells, depending on whether there will be some status indication or not. The **GridStatusBarItem** is actually replaced by the first of these two cells.The second cell hosts most of the elements of the pager. Its CSS class name is created by concatenating "**rgPagerCell**", and the present paging mode, for example "**NextPrev**". Within this cell are rendered the blocks, pertaining to the individual elements of the pager - number links, arrows, labels and drop downs to change the page size, along with the information element showing "page x to y from z".The CSS classes, related to these elements are as shown below:**rgArrPart1** - left arrows, associated to "First Page" and "Previous Page" **rgArrPart2** - right arrows, associated to "Last Page" and "Next Page"**rgNumPart** - numeric part, associated with the numeric representations of the page indexes (e.g. 1, 2, 3)**rgAdvpart** - advanced part, associated with the controls to change the page size **rgInfoPart** - right info text, associated with the information element, reflecting the rows and items countThe slider block has no special CSS class, associated with it.

* Within the numeric part of the pager, each number is an **<a>** element with a <span> inside, and no CSS class.

* The current page (the page that the user has presently chosen as a CurrentPageIndex) has a CSS class of **rgCurrentPage**.

* The Labels nested within the advanced pager part have a CSS class of "**rgPagerLabel**".

* Each TextBox within the pager has a CSS class of "**rgPagerTextBox**".

* Each Button within the advanced pager has a CSS class of "**rgPagerButton**".

* The Label, associated with the slider has a CSS class of "**rgSliderLabel**".

* Embedded skins improvements - all grid skins received major improvements/enhancements. See [this topic]({%slug grid/appearance-and-styling/modifying-existing-skins%}) from the documentation for more info about the changes.

How to apply the old skins as external:The RadGrid skins has been improved and the css classes/images used in them were unified with the rest of Telerik UI controls for ASP.NET AJAX. If you intend to use the old versions of the skins to avoid layout changes/skins updates, you can find the entire set of old skins (prior to the Q1 2009 release) attached to [this forum post](http://www.telerik.com/community/forums/aspnet-ajax/calendar/radcalendar-q3-2008-skins-available-for-download.aspx).

They have been adapted to be fully compatible with the Q1 2009 release. In order to use them as non embedded skins, you should do the following:

1. copy the corresponding CSS file and images to your website, the exact location depends on your preference;

2. register the CSS file manually with a <link> tag or via an ASP.NET theme;

3. set EnableEmbeddedSkins="false" to the control, which will use the non-embedded skin;

For more information about Telerik controls skinning mechanism and using non-embedded skins, please refer to:

[How skins work](http://www.telerik.com/help/aspnet-ajax/introduction-how-skins-work.html)

[Skin registration](http://www.telerik.com/help/aspnet-ajax/introduction-skin-registration.html)

[Using skins in ASP.NET themes](http://www.telerik.com/help/aspnet-ajax/introduction-themes-how-to.html)

[Disabling embedded resources](http://www.telerik.com/help/aspnet-ajax/introduction-disabling-embedded-resources.html)

An online demo, which shows how to use various controls with non-embedded skins is available at:

[Custom skins demo](http://demos.telerik.com/aspnet-ajax/grid/examples/styles/customskin/defaultcs.aspx)

## Telerik RadGrid for ASP.NET AJAX Q3 2008

RadGrid for ASP.NET AJAX which is part of the Q3 2008 release is fully backwards compatible with its previous version (Q2 2008).

## Telerik RadGrid for ASP.NET AJAX Q2 2008

RadGrid for ASP.NET AJAX which is part of the Q2 2008 release is fully backwards compatible with its previous version (Q1 2008).
