---
title: Changes And Backwards Compatibility
page_title: Changes And Backwards Compatibility | UI for ASP.NET AJAX Documentation
description: Changes And Backwards Compatibility
slug: tooltip/changes-and-backwards-compatibility
tags: changes,and,backwards,compatibility
published: True
position: 1
---

# Changes And Backwards Compatibility



## 

Telerik RadToolTip for ASP.NET AJAX A complete list of all changes can be found on Release History page:

[http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## Telerik RadToolTip for ASP.NET AJAX Q3 2009 SP1

* From Q3 2009 SP1, __RadToolTip__ uses a base stylesheet file for its skins. If you want to use a custom (pre-Q3 2009 SP1) skin with the latest release, you need to set the __EnableEmbeddedBaseStylesheet__ property to __false__.

## Telerik RadToolTip for ASP.NET AJAX Q3 2009

RadToolTip for ASP.NET AJAX which is part of the Q3 2009 release is fully backwards compatible with its previous version (Q2 2009).

## Telerik RadToolTip for ASP.NET AJAX Q2 2009

RadToolTip for ASP.NET AJAX which is part of the Q2 2009 release is fully backwards compatible with its previous version (Q1 2009).

## Telerik RadToolTip for ASP.NET AJAX Q1 2009

* Total redesign of the skins, which aims for a uniformity of the appearance of all controls in the suite in the cases they are used to build RIAs

* Refactoring of the CSS code to achieve better understanding, easier maintenance and handle problems with global styles

* Changes to the CSS classes, so now all controls for ASP.NET AJAX comply with a common naming conventionFor examplewas:__radtooltip_Default__now:__RadToolTip_Default__

* The__ManualClose__and__Sticky__ properties are obsolete, a new property is introduced to control the event on which the tooltip should hide -__HideEvent.__ The __HideEvent__ property is an enum and can take the following values, which names describe the effect when they are set:

* __Default__

* __FromCode__

* __LeaveTargetAndToolTip__

* __LeaveToolTip__

* __ManualClose__

__An online demo about the HideEvent property is available below:__

__http://demos.telerik.com/aspnet-ajax/tooltip/examples/hideevent/defaultcs.aspxhttp://demos.telerik.com/aspnet-ajax/tooltip/examples/hideevent/defaultcs.aspx__

____

## Telerik RadToolTip for ASP.NET AJAX Q3 2008



* Fixed a problem with tooltip overflow the behavior when ContentScrolling is set changed and it is the correct one.



## Telerik RadToolTip for ASP.NET AJAX Q2 2008

* RadToolTipManager - Changed the AutoTooltipify property default value from true to false.

## Important - differences between RadToolTip for ASP.NET and RadToolTip for ASP.NET AJAX:



There was not a version of the RadToolTip control in the Telerik UI for ASP.NET AJAX suite - this control is new and it is part only of the Telerik UI for ASP.NET AJAX suite.
