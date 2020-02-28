---
title: Changes and Backward Compatibility
page_title: Changes and Backward Compatibility | RadRating for ASP.NET AJAX Documentation
description: Changes and Backward Compatibility
slug: rating/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: True
position: 1
---

# Changes and Backward Compatibility

## Telerik RadRating for ASP.NET AJAX

* A complete list of all changes can be found on Release History page:[https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## RadRating for ASP.NET AJAX Q1 2010

**Breaking change:** Improved the precision of the Value property of the rating control by changing its type from double to decimal. The rating control uses values with precision one number after the decimal point. As a result, it cannot make use of the wider range that the double type provides. Additionally, as the double type uses a binary floating-point number representation, it achieves its greater range at the expense of precision. The decimal type on the other hand is a decimal floating-point type and that is why, by changing the type of the rating's Value property to decimal, we make sure that you work with the exact value of the rating control and not with an approximation to it, thus avoiding possible problems.

## RadRating for ASP.NET AJAX Q3 2009

This is the first version of the RadRating control.


