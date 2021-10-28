---
title: CSS Validation issues in Telerik UI for ASP.NET AJAX stylesheets
description: CSS Validation issues in Telerik UI for ASP.NET AJAX stylesheets. Check it now!
type: how-to
page_title: CSS Validation issues in Telerik UI for ASP.NET AJAX stylesheets
slug: css-validation-issues-in-telerik-ui-for-asp-net-ajax-stylesheets
res_type: kb
---


### PROBLEM

CSS validation over the Telerik UI for ASP.NET AJAX stylesheets fails and finds invalid values or non-existing rules.

### DESCRIPTION

Sometimes tools like **ReSharper** or the **w3.org CSS validator** are used to validate the CSS on a site and that includes the stylesheets for the Telerk controls.

Invalid values or non-existing rules are often reported, because our stylesheets contain a number of browser hacks or vendor-specific rules that are necessary to work around browser issues so the controls can look as expected.

You can find the majority of the flagged rules in sites like [http://http//browserhacks.com/](http://http://browserhacks.com/)

Thus, while the values are technically invalid, the browsers that need to understand them will work with them as expected, and **you can ignore such warnings for CSS validation issues stemming from the Telerik UI for ASP.NET AJAX suite**.


