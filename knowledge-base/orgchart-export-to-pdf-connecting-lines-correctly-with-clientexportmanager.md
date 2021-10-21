---
title: OrgChart export to PDF connecting lines correctly with ClientExportManager
description: OrgChart export to PDF connecting lines correctly with ClientExportManager. Check it now!
type: how-to
page_title: OrgChart export to PDF connecting lines correctly with ClientExportManager
slug: orgchart-export-to-pdf-connecting-lines-correctly-with-clientexportmanager
res_type: kb
---


## Problem

When using the ClientExportManager to export to PDF an OrgChart with render mode `Lightweight`, the connecting lines are missing in the exported file.

## Description

The connecting lines of the `Lightweight` OrgChart are rendered as styled `:before` and `:after` pseudo-elements. Due to the different rendering of the pseudo-element in the various browsers, the connecting lines are not exported in the PDF file.

## Solution

Adding the following styles will allow all browsers to export the lines. It relies on changing the styles before exporting, as explained in [Change the Exported Content before Export]({%slug clientexportmanager/how-to/change-the-exported-content-before-export%}) article.

````CSS
<style>
    .kendo-pdf-hide-pseudo-elements:after,
    .kendo-pdf-hide-pseudo-elements:before {
        display: none !important;
    }
 
 
    .k-pdf-export .rocNode:before {
        display: normal;
        height: 1px;
        max-width: 100%;
        background: black;
    }
 
    .k-pdf-export .rocGroup:before,
    .k-pdf-export .rocGroup:after,
    .k-pdf-export .rocNode:after,
    .k-pdf-export .rocItem:after {
        display: normal;
        max-height: 100%;
        width: 1px;
        background: black;
    }
</style>
````

## See also

- [ClientExportManager - Export RadOrgChart](https://demos.telerik.com/aspnet-ajax/client-export-manager/applicationscenarios/export-radorgchart/defaultcs.aspx?product=orgchart) online demo



