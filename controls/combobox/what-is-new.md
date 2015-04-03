---
title: What is New
page_title: What is New | UI for ASP.NET AJAX Documentation
description: What is New
slug: combobox/what-is-new
tags: what,is,new
published: False
position: 3
---

# What is New



## Q2 2010 release

Since Q2 2010 all new functionalities are listed in the control's Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## What's New in RadComboBox for ASP.NET AJAX Q1 SP1 2010 (Version Number 2010.1.415)

* VS 2010/.NET 4 RTM support

* Spaces after an autocomplete separator are ignored when matching Items (MarkFirstMatch=True)

* Added [Localization]({%slug combobox/accessibility-and-internationalization/localization%}) property

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q1 2010 (Version Number 2010.1.309)

* jQuery updated to version 1.4.2

* [Automatic Load on Demand]({%slug combobox/load-on-demand/automatic-load-on-demand%})

* New property: [Label]({%slug combobox/appearance-and-styling/adding-a-label%})

* [Added javascript intellisense under VS 2008/ VS 2010](http://blogs.telerik.com/aspnet-ajax/posts/10-03-01/radcontrols-for-asp-net-ajax-q1-2010-release-comes-with-native-net-4-builds-and-javascript-intellisense-in-vs-2008-2010.aspx)

* RadComboBox now escapes single quotes before doing a Load On Demand request

* Bug-fixes



## What's New in RadComboBox for ASP.NET AJAX Q3 SP2 2009 (Version Number 2009.3.1314)

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q3 SP1 2009 (Version Number 2009.3.1208)

* New Skin - [Windows7]({%slug combobox/appearance-and-styling/skins%})

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q3 2009 (Version Number 2009.3.1103)

* New Skin - [Sitefinity]({%slug combobox/appearance-and-styling/skins%}).

* [Performance optimizations on the server](http://blogs.telerik.com/aspnet-ajax/posts/09-10-15/radcontrols-for-asp-net-ajax---now-with-more-speed.aspx)

* Support for Visual Studio 2010 Beta 2

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q2 SP1 2009 (Version Number 2009.2.826)

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q2 2009 (Version Number 2009.2.701)

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q1 2009 SP2 (Version Number 2009.1.527)

* Full support for Google Chrome v.2

* Compatibility with Visual Studio 2010 Beta 1

* New common skin: [Simple]({%slug combobox/appearance-and-styling/skins%})

* Added support to render properly in callback / MVC / webservice scenarios

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q1 2009 SP1 (Version Number 2009.1.402)

* Full support for Internet Explorer 8

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q1 2009

* Animations are using the jQuery library now

* Added new property __UseHttpGet__ to the [WebServiceSettings]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}) properties. By default its value is *False*.

## What's New in RadComboBox for ASP.NET AJAX Q3 2008 SP2 (Version Number 2008.3.1314)

* New event: [OnClientItemDataBound]({%slug combobox/client-side-programming/events/onclientitemdatabound%}). Fires for each item that is created during __Web Service__ Load on Demand.

* New method: __clearCache__ - clears the cache when __EnableItemCaching__ is enabled.

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q3 2008 SP1 (Version Number 2008.3.1125)

* Bug-fixes

## What's New in RadComboBox for ASP.NET AJAX Q3 2008 (Version Number 2008.3.1105)

* [MaxHeight]({%slug combobox/appearance-and-styling/controlling-appearance%}) property added to allow the height of the dropdown list to vary depending on the number of items.

* [AccessibilityMode](AD24C4D4-BED7-49E5-9470-5F19A9E5A45B) property added. If it is set to true noscript tag containing select html element will be rendered. This select will be displayed instead of RadComboBox if the javascript is disabled.

* __Better performance__ - lazy initialized items. They are initialized when the dropdown is opened or they are accessed for the first time.

* Added new server side methods __FindItemByText__, __FindItemByValue__, __FindItemIndexByText__, __FindItemIndexByValue__ which have a second argument *ignoreCase* which indicates whether the comparison is case-sensitive (__true__) or case-insensitive (__false__).

* Added a new server side method __FindItem__which has one argument *match *of type [Predicate Generic Delegate](http://msdn.microsoft.com/en-us/library/bfcke1bz(VS.80).aspx). This method can be used to find an Item by some custom criteria.

* Added protected virtual methods for server-side events – __OnItemDataBound__, __OnTextChanged__, __OnSelectedIndexChanged__.

* Support for server-side expressions (<%= %>) in the __ItemTemplate__.

## What's New in RadComboBox for ASP.NET AJAX Q2 SP2 (Version Number 2008.2.1001)

* [OnClientTextChange client-side event]({%slug combobox/client-side-programming/events/onclienttextchange%})

## What's New in RadComboBox for ASP.NET AJAX Q2 SP1 (Version Number 2008.2.826)

* [Added design time support for HeaderTemplate and FooterTemplate]({%slug combobox/design-time/template-design-surface%})

* [Filtering]({%slug combobox/functionality/filtering%}) functionality now works with AutoCompleteSeparator

## What's New in RadComboBox for ASP.NET AJAX Q2 (Version Number 2008.2.723)

* [Filtering]({%slug combobox/functionality/filtering%})

* [Sorting]({%slug combobox/functionality/sorting%})

* [Adding images to items]({%slug combobox/appearance-and-styling/adding-images-to-items%})

* [ClientChanges]({%slug combobox/client-side-programming/accessing-client-changes-at-the-server%}) property added to RadComboBox class. Now client-side changes are available on the server side after postback.

* [EnableTextSelection]({%slug combobox/functionality/autocomplete%}) property added to RadComboBox class.

* __ChangeTextOnKeyBoardNavigation__ property added to RadComboBox class. If set to False, the combobox will not change its text in the input area when you scroll down the items with the keyboard.

* Added [get_visible, set_visible, show, hide, get_imageUrl, set_imageUrl, get_disabledImageUrl, set_disabledImageUrl and findControl]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%}) client-side methods of RadComboBoxItem object.

* Added [get_visibleItems, setAllItemsVisible, get_changeText, set_changeText, get_enableTextSelection and set_enableTextSelection]({%slug combobox/client-side-programming/objects/radcombobox-object%}) client-side methods of RadComboBox object.

* __Gray__ skin has been added. The __Mac__ skin has been removed from the Telerik.Web.UI assembly. More information on Q2 Skinning is available [here](http://blogs.telerik.com/ZhivkoDimitrov/Posts/08-06-27/Q2_Asp_Net_skinning.aspx?ReturnURL=%2fZhivkoDimitrov%2fPosts.aspx).

## What's New in RadComboBox for ASP.NET AJAX Q1 SP2 (Version Number 2008.1.619)

* [Footer templates]({%slug combobox/templates/footers%})

* [Load-on-demand items caching]({%slug combobox/load-on-demand/caching-items%})

* [OnClientDropDownOpened client-side event]({%slug combobox/client-side-programming/events/onclientdropdownopened%})

* [OnClientDropDownClosed client-side event]({%slug combobox/client-side-programming/events/onclientdropdownclosed%})

* When [creating items with the Item Builder]({%slug combobox/design-time/radcombobox-item-builder%}), if you don not set the __Value__ of the item - it will automatically become equal to the __Text__ property.

* [attachDropDown]({%slug combobox/troubleshooting/ajaxified-control-in-itemtemplate-does-a-full-postback%}) client-side method. Use it in the scenario described here: [Ajaxified control in ItemTemplate does a full postback]({%slug combobox/troubleshooting/ajaxified-control-in-itemtemplate-does-a-full-postback%})

## What’s New in RadComboBox for ASP.NET AJAX Q1 2008 SP1 (Version Number 2008.1.515)

* [IsSeparator]({%slug combobox/appearance-and-styling/separators%}) property

* Additional feature to KeyBoard navigation: If RadComboBox is in “readonly” mode (AllowCustomText, EnableLoadOnDemand and MarkFirstMatch properties are set to false), keyboard can be used to navigate items, e.g. pressing the "c" keyboard button will iterate through all items which text starts with "c".

## What’s New in RadControls for ASP.NET AJAX Q1 2008 (Version Number 2008.1.415)

* Added __get_domEvent__ to the event arguments of all [client events]({%slug combobox/client-side-programming/events%})

* [EmptyMessage]({%slug combobox/appearance-and-styling/using-the-emptymessage-property%}) property

* Added __Value__ property to the event arguments of the [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%}) server-side event

# See Also

 * [Changes and backward compatibility]({%slug combobox/changes-and-backward-compatibility%})
