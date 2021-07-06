---
title: Export from Tooltip
description: Learn how to export from RadTooltip. Check it now!
type: how-to
page_title: Export from Tooltip
slug: tooltip-export-from-tooltip
res_type: kb
---


## HOW TO

Export or send a file from a tooltip.

The sample below applies when content is loaded on demand through the AjaxRequest event of a tooltip manager. There are a few other alternatives that you may find useful as well.

## DESCRIPTION

The tooltip manager only recreates its controls during a partial postback, because this is when they will be shown by it. A full postback means the page is being refreshed and no tooltip will be shown, so loading content for it is not needed. An export operation (sending a file) requires a full postback, however.

## SOLUTIONS

There are several approaches you can take:

- If you have content large enough to require complex export, you may want to show such details in a RadWindow. You can find a similar example in the [Window - Edit Dialog for RadGrid](https://demos.telerik.com/aspnet-ajax/controls/examples/integration/gridandwindow/defaultcs.aspx?product=window) live demo.
- If you do not have many targets with varying content but still want the tooltip appearance, you can use a standalone tooltip without an UpdatePanel inside. This will have the content load on the initial page load as it is part of its markup.
- If you will be exporting the contents to a PDF, you can do that on the client, see the [ClientExportManager - Export HTML Elements](https://demos.telerik.com/aspnet-ajax/client-export-manager/functionality/export-html-elements/defaultcs.aspx) live demo.
- Raise a ViewState flag that a tooltip is opened that holds its Value. Use it to re-create its contents when a button is clicked. Make sure the button is added as a postback control. You can find an example of this below.

## Project files

You can download the sample project files from [here](files/tooltip-send-file-from-tooltip.zip).

## SEE ALSO

Here are some relevant resources that showcase how the tooltip manager works and how to load data in it on demand, and how to troubleshoot some common issues you may encounter:

- [Loading content with AJAX](https://docs.telerik.com/devtools/aspnet-ajax/controls/tooltip/radtooltipmanager/load-content-on-demand#loading-content-with-ajax)
- [Common issues](https://docs.telerik.com/devtools/aspnet-ajax/controls/tooltip/troubleshooting/common-issues)
- [Using RadToolTipManager in MS AJAX UpdatePanels](https://docs.telerik.com/devtools/aspnet-ajax/controls/tooltip/troubleshooting/using-radtooltipmanager-in-ms-ajax-updatepanels)
- [Live demo: loading content with AJAX](https://demos.telerik.com/aspnet-ajax/tooltip/examples/targetcontrolsandajax/defaultcs.aspx?product=tooltip)



