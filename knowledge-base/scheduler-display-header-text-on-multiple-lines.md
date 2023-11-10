---
title: Dsipaly header text on multiple lines
description: Display the RadScheduler header text in multiple lines by wrapping the text using the white-space CSS property
type: how-to
page_title: Dsipaly header text on multiple lines
slug: scheduler-display-header-text-on-multiple-lines
res_type: kb
---

## Description

Display the RadScheduler header text in multiple lines by wrapping the text using the white-space CSS property. 

!["Example scheduler with header text on multiple lines"](images/scheduler-header-text-on-multiple-lines.png "Example scheduler with header text on multiple lines")

## Solution

The solution is to allow text wrap inside the  `.rsMainHeader` class:

````CSS
<style>
    html body .rsMainHeader {
        white-space: normal; /* Allow text to wrap */
    }
</style>
````

Additional resources: 

- [overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
- [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
- [hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)

  