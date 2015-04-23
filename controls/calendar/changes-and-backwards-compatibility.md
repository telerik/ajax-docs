---
title: Changes and Backwards Compatibility
page_title: Changes and Backwards Compatibility | RadCalendar for ASP.NET AJAX Documentation
description: Changes and Backwards Compatibility
slug: calendar/changes-and-backwards-compatibility
tags: changes,and,backwards,compatibility
published: True
position: 1
---

# Changes and Backwards Compatibility



## Telerik RadCalendar for ASP.NET AJAX Q2 2010

Since Q2 2010 all major changes for the controls are listed in the official Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## Telerik RadCalendar for ASP.NET AJAX Q1 2010

Since Q1 2010 **RadTimeView** control can be used on a page standalone, without RadTimePicker/RadDateTimePicker added on the page. Note that when you are using it with disabled embedded scripts, you need to reference the below script files:

````ASPNET
	<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	   <Scripts>
	       <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	       <asp:ScriptReference Path="~/Scripts/Calendar/RadDateTimePickerScript.js" />
	       <asp:ScriptReference Path="~/Scripts/Calendar/RadTimeViewScripts.js" />
	   </Scripts>
	</telerik:RadScriptManager>			
````



## Telerik RadCalendar for ASP.NET AJAX Q3 2009

RadCalendar for ASP.NET AJAX which is part of the Q3 2009 release is fully backwards compatible with its previous version (Q2 2009).

## Telerik RadCalendar for ASP.NET AJAX Q2 2009

RadCalendar for ASP.NET AJAX which is part of the Q2 2009 release is fully backwards compatible with its previous version (Q1 2009).

## Telerik RadCalendar for ASP.NET AJAX Q1 2009

The RadCalendar skins have been improved and and the css classes/images used in them were unified with the rest of UI for ASP.NET AJAX. If you intend to use the old versions of the skins to avoid layout changes/skins updates, you can find the entire set of old skins (prior to the Q1 2009 release) attached to [this forum post](http://www.telerik.com/community/forums/aspnet-ajax/calendar/radcalendar-q3-2008-skins-available-for-download.aspx).

They have been adapted to be fully compatible with the Q1 2009 release. In order to use them as non-embedded skins, you should do the following:

1. Copy the corresponding CSS file and images to your website, the exact location depends on your preference.

1. Register the CSS file manually with a <link> tag or via an ASP.NET theme.

1. Set **EnableEmbeddedSkins="false"** to the control, which will use the non-embedded skin.

If you are using date/time pickers, you also need the skins for RadInput:

[RadInput Q3 2008 Skins](http://www.telerik.com/community/forums/aspnet-ajax/input/radinput-q3-2008-skins-available-for-download.aspx)

For more information about Telerik controls skinning mechanism and using non-embedded skins, please refer to:

[How skins work](http://www.telerik.com/help/aspnet-ajax/howskinswork.html)

[Skin registration](http://www.telerik.com/help/aspnet-ajax/skinregistration.html)

[Using skins in ASP.NET themes](http://www.telerik.com/help/aspnet-ajax/introduction-themes-how-to.html)

[Disabling embedded resources](http://www.telerik.com/help/aspnet-ajax/disabling_embedded_resources.html)

An online demo, which shows how to use various controls with non-embedded skins is available at:

[Custom skins demo](http://demos.telerik.com/aspnet-ajax/grid/examples/styles/customskin/defaultcs.aspx)

## Telerik RadCalendar for ASP.NET AJAX Q3 2008

Client-side property Owner is renamed to get_owner(). Property Owner is obsolete and will be removed in Q1 2009 release.

All CSS classes have been renamed to use Telerik's current naming convention. For migration of custom skins, please refer to: [Migrating RadCalendar Skins Created Before Q3 2008](DB34CABC-6850-4082-8C5C-2C01F9B7D886).

## Telerik RadCalendar for ASP.NET AJAX Q2 2008

RadCalendar for ASP.NET AJAX which is part of the Q2 2008 release is fully backwards compatible with its previous version (Q1 2008).
