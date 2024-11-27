---
title: Displaying Labels on Rating Stars in RadRating Control
description: Learn how to show labels above each star in the RadRating control to indicate their value using CSS and the title attribute.
type: how-to
page_title: How to Display Value Labels on Stars with RadRating for ASP.NET AJAX
slug: how-to-display-labels-on-rating-stars-radrating
tags: radrating, asp.net ajax, css, labels, stars, value display
res_type: kb
ticketid: 1671751
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadRating for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description
I want to use the [RadRating](https://docs.telerik.com/devtools/aspnet-ajax/controls/rating/overview) control but need to display a label showing the value of each star. This KB article also answers the following questions:
- How can I show the value of each rating star in the RadRating control?
- Is it possible to display labels above stars in the RadRating control?
- Can I customize the appearance of labels on rating stars in the RadRating control?

## Solution
To display a label for each star in the RadRating control, utilize the title attribute of each rating item. CSS can be used to show the value of each star above it. Here's a step-by-step guide on achieving this:

1. Apply the following CSS to display the value of the title attribute above each star:

```css
.RadRating {
    padding-top: 20px;
}

.RadRating .rrtItem a::after {
    content: attr(title);
    position: absolute;
    top: -15px;
    display: block;
    width: 24px;
    text-align: center;
}
```

2. Add the RadRating control to your page and specify the Title attribute for each RadRatingItem:

```aspx
<telerik:RadRating RenderMode="Lightweight" ID="RadRating2" runat="server" ItemCount="5" Value="3">
    <Items>
        <telerik:RadRatingItem Value="1" Title="1"></telerik:RadRatingItem>
        <telerik:RadRatingItem Value="2" Title="2"></telerik:RadRatingItem>
        <telerik:RadRatingItem Value="3" Title="3"></telerik:RadRatingItem>
        <telerik:RadRatingItem Value="4" Title="4"></telerik:RadRatingItem>
        <telerik:RadRatingItem Value="5" Title="5"></telerik:RadRatingItem>
    </Items>
</telerik:RadRating>
```

This setup ensures that the value of each star is displayed above it, providing a clear visual indicator of the rating value. You can customize the CSS to fit your design requirements, such as adjusting the font size, color, or positioning of the labels.

## See Also
- [RadRating Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/rating/overview)
- [CSS ::after Pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
