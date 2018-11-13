---
title: Viewport Breakpoints
page_title: Viewport Breakpoints | RadPageLayout for ASP.NET AJAX Documentation
description: Viewport Breakpoints
slug: pagelayout/creating-responsive-design/viewport-breakpoints
tags: viewport,breakpoints
published: True
position: 2
---

# Viewport Breakpoints



The following article describes the meaning of the **viewport breakpoints** for **RadPageLayout** and their usage.


In responsive web design, **viewport breakpoints** are browser dimensions (usually just widths) that set the active range of a given media query. Once the browser dimensions are within that range, the styles associated with that media query will apply. In other words, without the breakpoints (and media queries) sites could be just fluid, but with breakpoints (and media queries), we can change the actual layout.

**RadPageLayout** uses the following 5 breakpoints:

* extra small resolutions (or xs)

* small resolutions (or sm)

* medium resolutions (or md)

* large resolutions (or lg)

* extra large resolutions (or xl)

The notion of **viewport breakpoints** is not just within the media queries, but is used throughout the control. All responsive properties have a suffix that's actually the media query it applies for: **SpanXS** means the span for extra small resolutions; **HiddenLG** means hidden on large resolutions and so on.

The following table describes the resolutions and the corresponding viewport breakpoints (note that they are generalized and approximage).


| Resolution | Screen size | Device type |
| ------ | ------ | ------ |
|max-width: 360px|extra small resolutions (or xs)|mobile phone (viewed in portrait)|
|min-width: 361px / max-width: 768px|small resolutions (or sm)|mobile phone (viewed in landscape) / tablet (viewed in portrait)|
|min-width: 769px / max-width: 1024px|medium resolutions (or md)|tablet (viewed in landscape)|
|min-width: 1025px / max-width: 1280px|large resolutions (or lg)|laptop|
|min-width: 1281px|extra large resolutions (or xl)|desktop|


>note You must add the following meta tag to your page so the browser can apply `@media (max-width)` CSS queries, on which the RadPageLayout breakpoints rely: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`.

