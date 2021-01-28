---
title: What is New
page_title: What is New - RadMenu
description: Check our Web Forms article about What is New.
slug: menu/what-is-new
tags: what,is,new
published: False
position: 2
---

# What is New



## Q2 2010 release

Since Q2 2010 all new functionalities are listed in the control's Release Notes posted [here](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## What’s New in RadMenu for ASP.NET AJAX Q1 2010

* Added: Rounded corners and shadows

* Improved: Performance optimizations for RadMenu animations in IE (most significant in IE7)

## What’s New in RadMenu for ASP.NET AJAX Q3 SP2 2009 (Version Number 2009.3.1314):

* Bug-fixes



## What’s New in RadMenu for ASP.NET AJAX Q3 SP1 2009 (Version Number 2009.3.1208):

* New Skin - [Windows7]({%slug menu/appearance-and-styling/appearance-skins%})



## What’s New in RadMenu for ASP.NET AJAX Q3 2009 (Version Number 2009.3.1103):

* [Multi columns]({%slug menu/functionality/multi-column-menu%}) enabled with the new pair of properties - **RepeatColumns** and **RepeatDirection** (either for DefaultGroupSettings or per-item GroupSettings).

* New Skin - [Sitefinity]({%slug menu/appearance-and-styling/appearance-skins%}).

* [Performance optimizations on the server](https://blogs.telerik.com/tsvetomirtsonev/posts/09-10-15/radcontrols_for_asp_net_ajax_-_now_with_more_speed.aspx)

* Bug-fixes



## What’s New in RadMenu for ASP.NET AJAX Q2 SP1 2009:

* New **RadMenuItem** property: **OuterCssClass** - gets or sets the Cascading Style Sheet (CSS) class applied on the outmost item element (<LI>).

* New client-side methods of **RadContextMenu - addTargetElement(element), removeTargetElement(element).** They are used to dynamically add/remove targets to the context menu.

* Bug-fixes

## What’s New in RadMenu for ASP.NET AJAX Q2 2009 (Version Number 2009.2.701):

* Implemented **selection** support. Added new properties to **RadMenu** class: **EnableSelection** - indicates if the currently selected item will be tracked and highlighted, **SelectedValue**(returns the Value of the selected item or its Text if the value is empty)****and **SelectedItem.** In addition, a server side **ClearSelectedItem()** and a client side **get_selectedItem** methods were added.

* Added new properties to **RadMenuItem** class: [Selected, SelectedCssClass and SelectedImageUrl]({%slug menu/radmenu-items/overview%}) to correspond to the **SelectedItem** implementation

* The **AccessKey** property of **RadMenuItem** is now Localizable

## What’s New in RadMenu for ASP.NET AJAX Q1 SP2 2009 (Version Number 2009.1.527):

* Full support for Google Chrome v.2

* Compatibility with Visual Studio 2010 Beta 1

* New common skin: [Simple]({%slug menu/appearance-and-styling/appearance-skins%})

* Added support to render properly in callback / MVC / webservice scenarios

* Bug-fixes

## What’s New in RadMenu for ASP.NET AJAX Q1 SP1 2009 (Version Number 2009.1.402):

* Full Support for Internet Explorer 8

* Bug-fixes

## What’s New in RadMenu for ASP.NET AJAX Q1 2009 (2009.1.311):

* Animations are using the jQuery library now

* Added new property **UseHttpGet** to the [WebServiceSettings]({%slug menu/data-binding/web-service-binding%}) properties. By default its value is *False*.

## What’s New in RadMenu for ASP.NET AJAX Q3 2008 (2008.3.1105):

* New property – **EnableRootItemScroll.** Setting this property to “true” in combination with Width/Height will allow the root items to be scrolled.

* Added new server side methods **FindItemByText**, **FindItemByValue** which have a second argument *ignoreCase* which indicates whether the comparison is case-sensitive (**true**) or case-insensitive (**false**).

* Added a new server side method **FindItem**which has one argument *match *of type [Predicate Generic Delegate](https://msdn.microsoft.com/en-us/library/bfcke1bz(VS.80).aspx). This method can be used to find an Item by some custom criteria.

* Added protected virtual methods for server-side events – **OnItemDataBound**, **OnItemClick**, etc.

* Support for server-side expressions (<%= %>) in the **ItemTemplate**.

## What’s New in RadMenu for ASP.NET AJAX Q2 SP1 2008 (Version Number 2008.2.826):

* [Hierarchical databinding to IEnumerable]({%slug menu/data-binding/binding-to-object-based-data-sources%}) via the DataFieldID/DataFieldParentID properties

* The group height/width is now auto-adjusted if the menu does not fit the window

* [findItemByUrl and findItemByAbsoluteUrl]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%}) client side methods of RadMenu

## What’s New in RadMenu for ASP.NET AJAX Q2 2008 (Version Number 2008.2.723):

* Added [ClientChanges]({%slug menu/client-side-programming/accessing-client-changes-at-the-server%}) property to the RadMenu class. Now client-side changes are available on the server side after postback.

* Added [findControl]({%slug menu/templates/accessing-controls-inside-templates%}) client-side method of RadMenuItem class.



## What’s New in RadMenu for ASP.NET AJAX Q1 2008 SP1 (Version Number 2008.1.515):

* [Added public getter and setter for the clicked flag]({%slug menu/how-to/expand-root-menuitem-on-click-only%}).

* Added public click() method to the [RadMenuItem client-side object]({%slug menu/client-side-programming/objects/radmenuitem-object%}).



## What’s New in RadMenu for ASP.NET AJAX Q1 2008 (Version Number 2008.1.415):

* Client event arguments now have a **domEvent** property


