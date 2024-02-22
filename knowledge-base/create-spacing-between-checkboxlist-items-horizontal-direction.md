---
title: Creating Spacing Between CheckBoxList Items in Horizontal Direction
description: Learn how to create spacing between items in a RadCheckBoxList when using the Horizontal direction.
type: how-to
page_title: How to Create Spacing Between CheckBoxList Items in Horizontal Direction
slug: create-spacing-between-checkboxlist-items-horizontal-direction
tags: checkboxlist, spacing, horizontal, items, css
res_type: kb
---

## Environment

| Product             | RadCheckBox for ASP.NET AJAX |
|---------------------|-----------------------------|
| Version             | all                  |

## Description

When using the RadCheckBoxList control with the Horizontal direction, you may want to create spacing between the items. By default, the items are displayed without any spacing. This article will guide you through the steps to achieve the desired spacing.

## Solution

To create spacing between the items in a RadCheckBoxList with the Horizontal direction, follow these steps:

1. Apply the following CSS class to the RadCheckBoxList control:

```css
.rbHorizontalList .RadButton, .rbColumnList {
    padding: 0 10px 0 10px;
}
```

This CSS class adds a padding of 10 pixels on both sides of each item in the RadCheckBoxList, creating the desired spacing.

That's it! The spacing between the items in the RadCheckBoxList should now be visible when using the Horizontal direction.

## Notes

- You can adjust the value of the padding property in the CSS class to increase or decrease the spacing between the items as needed.

## See Also

- [RadCheckBoxList Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/checkboxlist/overview)
