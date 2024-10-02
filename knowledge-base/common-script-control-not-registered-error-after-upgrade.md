---
title: Getting "Script control is not a registered script control" error
description: This article provides a solution for the "Script control is not a registered script control" error when using the Telerik UI for ASP.NET AJAX controls.
type: troubleshooting
page_title: Troubleshooting "Script control is not a registered script control" Error 
slug: common-script-control-not-registered-error-after-upgrade
tags: script-control, error, upgrade, Telerik UI for ASP.NET AJAX
res_type: kb
---

## Description
Users utilizing Telerik UI for ASP.NET AJAX might encounter script control registration errors during development or runtime. These errors are typically presented as "Script control 'TelerikControlID' is not a registered script control. Script controls must be registered using RegisterScriptControl() before calling RegisterScriptDescriptors()." Such issues are prevalent in scenarios where asynchronous patterns, like using Async="true" in the page directive or employing asynchronous task methods in the code-behind, are applied alongside Telerik UI controls.

The core of these problems lies in the incompatibility or specific challenges of using the async-await pattern within WebForms that include Telerik UI for ASP.NET AJAX controls. While the async-await pattern is highly beneficial for creating responsive applications by performing non-blocking operations, its integration with certain UI controls requires careful handling to prevent runtime errors and ensure smooth operation.

## Solution

1. Remove or disable async operations in the page directive and the code-behind. Specifically, set Async="false" in the page directive (if present) and convert asynchronous task methods back to synchronous methods where Telerik controls are involved. This change addresses the immediate issue by avoiding the async-await pattern that Telerik UI for ASP.NET AJAX controls struggle with. You can find more information [here](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-errors-when-page-async-is-true-for-the-async-await-pattern).

2. Ensure that the AJAX manager is not placed in a UserControl. You can find more information in this [forum thread](https://www.telerik.com/forums/script-control-radajaxmanager1-is-not-a-registered-script-control#3HI7KXuExEmuqFulcpNFsw).

3. Check if the visibility of any control is changed at the wrong stage of the page life cycle. This can often cause the error. Refer to this [Stack Overflow post](https://stackoverflow.com/questions/8517136/script-control-is-not-a-registered-script-control/13262496) for more information.

4. Temporarily disable AJAX and check for any hidden script errors using the instructions provided in this [documentation](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-get-more-descriptive-errors-by-disabling-ajax).

5. If you are using the `asp:ScriptManager`, replace it with a Telerik `RadScriptManager`.

6. Disable the `RegisterWithScriptManager` property. Refer to this [Stack Overflow post](https://stackoverflow.com/a/13262496/6509119) for more information.

7. You can also try the steps provided in this [forum thread](https://www.telerik.com/forums/grid-pdf-export-with-strange-characters-in-azure#aM8-OlGXJUusndSAv6epbQ) for resolving a similar error.

8. Set the `Exportable` property to `false` for all columns that should be excluded from the export and remove any lines in the `ItemCommand` event where their visibility is disabled.


If none of these solutions resolve the issue, isolate it in a simple runnable project and contact our support team for further assistance.
  
