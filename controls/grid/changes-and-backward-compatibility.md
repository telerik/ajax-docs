---
title: Changes and Backward Compatibility
page_title: Changes and Backward Compatibility - RadGrid
description: Review RadGrid changes across ASP.NET AJAX releases and update custom skins, layout settings, and pager integrations for compatibility.
slug: grid/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: False
position: 30
---

# Changes and Backward Compatibility

Review release-specific RadGrid changes and backward-compatibility notes before upgrading an ASP.NET AJAX application.


## Telerik RadGrid for ASP.NET AJAX Q2 2010

Starting with Q2 2010, the [official Telerik UI for ASP.NET AJAX release history](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx) lists all major control changes.

## Telerik RadGrid for ASP.NET AJAX Q1 2010

Starting with Q1 2010, **RadGrid** has a base style sheet file for its skins. If you use an older custom skin with the latest release, set the **EnableEmbeddedBaseStylesheet** property to **false**. Some icons were also redesigned, including the pager, filter, edit, delete, refresh, and reorder icons.

## Telerik RadGrid for ASP.NET AJAX Q3 2009

RadGrid for ASP.NET AJAX in the Q3 2009 release is fully backward compatible with the previous Q2 2009 version.

## Telerik RadGrid for ASP.NET AJAX Q2 2009

Setting **ClipCellContentOnResize="true"** triggers a fixed table layout for the `MasterTableView`. If column resizing is enabled, set **ClipCellContentOnResize="false"** to restore the previous behavior.

## Telerik RadGrid for ASP.NET AJAX Q1 2009

In this version of the control, a number of changes have been made with respect to the pager rendering, styling, as well as the status item. Below is a short list, introducing the changes:

* The main wrapper for the pager has the CSS class name **rgPager**. In HTML, it renders as `<tr class="rgPager">`.

* **GridStatusBarItem** is obsolete. The pager hosts a table with one or two cells, depending on whether it displays a status indication. The first cell replaces **GridStatusBarItem**. The second cell hosts most pager elements. Its CSS class combines `rgPagerCell` with the paging mode, such as `NextPrev`. The pager uses these CSS classes for its individual elements:
	* `rgArrPart1` - Left arrows for **First Page** and **Previous Page**.
	* `rgArrPart2` - Right arrows for **Last Page** and **Next Page**.
	* `rgNumPart` - Numeric page links.
	* `rgAdvpart` - Controls for changing the page size.
	* `rgInfoPart` - Text that reports the row and item counts.
	The slider block has no special CSS class.

* Within the numeric part of the pager, each number is an **<a>** element with a <span> inside, and no CSS class.

* The current page (the page that the user has presently chosen as a CurrentPageIndex) has a CSS class of **rgCurrentPage**.

* The Labels nested within the advanced pager part have a CSS class of "**rgPagerLabel**".

* Each TextBox within the pager has a CSS class of "**rgPagerTextBox**".

* Each Button within the advanced pager has a CSS class of "**rgPagerButton**".

* The Label, associated with the slider has a CSS class of "**rgSliderLabel**".

* Embedded skins received major improvements. See [Modifying existing RadGrid skins]({%slug grid/appearance-and-styling/modifying-existing-skins%}) for more information about these changes.

## Applying old skins as external skins

The RadGrid skins were improved, and their CSS classes and images were unified with the rest of Telerik UI controls for ASP.NET AJAX. If you want to keep the skins from before Q1 2009, download them from the [forum post with the legacy skins](https://www.telerik.com/community/forums/aspnet-ajax/calendar/radcalendar-q3-2008-skins-available-for-download.aspx).

They were adapted to be compatible with the Q1 2009 release. Use the legacy skins as non-embedded skins as follows:

1. Copy the corresponding CSS file and images to your website. Choose a location that matches your application structure.

2. Register the CSS file manually with a `<link>` tag or through an ASP.NET theme.

3. Set `EnableEmbeddedSkins="false"` on the control to use the non-embedded skin.

For more information about Telerik control skinning and non-embedded skins, see these resources:

- [How Telerik skins work](https://www.telerik.com/help/aspnet-ajax/introduction-how-skins-work.html)

- [Registering skins](https://www.telerik.com/help/aspnet-ajax/introduction-skin-registration.html)

- [Using skins in ASP.NET themes](https://www.telerik.com/help/aspnet-ajax/introduction-themes-how-to.html)

- [Disabling embedded resources](https://www.telerik.com/help/aspnet-ajax/introduction-disabling-embedded-resources.html)

The [custom skins demo](https://demos.telerik.com/aspnet-ajax/grid/examples/styles/customskin/defaultcs.aspx) shows how to use non-embedded skins with Telerik controls.

## Telerik RadGrid for ASP.NET AJAX Q3 2008

RadGrid for ASP.NET AJAX in the Q3 2008 release is fully backward compatible with the previous Q2 2008 version.

## Telerik RadGrid for ASP.NET AJAX Q2 2008

RadGrid for ASP.NET AJAX in the Q2 2008 release is fully backward compatible with the previous Q1 2008 version.

## See Also

- [Modifying existing RadGrid skins]({%slug grid/appearance-and-styling/modifying-existing-skins%})
