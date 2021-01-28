---
title: Exporting Pseudo Elements
page_title: Exporting Pseudo Elements - RadClientExportManager
description: Check our Web Forms article about Exporting Pseudo Elements.
slug: clientexportmanager/troubleshooting/exporting-pseudo-elements
tags: exporting,pseudo,elements
published: True
position: 4
---

# Exporting Pseudo Elements


As of R2 2016 Release in order for pseudo elements to be properly exported the following CSS rule needs to be applied:

````CSS
.kendo-pdf-hide-pseudo-elements:after,
.kendo-pdf-hide-pseudo-elements:before {
    display: none !important;
}
````

# See Also
