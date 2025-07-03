---
title: Large RadGrid Export Causes Application Crash
description: Resolving System.OperationCanceledException during large RadGrid exports in Telerik UI for ASP.NET AJAX.
type: troubleshooting
page_title: Application Crash During Large RadGrid Export
meta_title: Application Crash During Large RadGrid Export
slug: large-radgrid-export-system-operation-canceled-exception
tags: radgrid, asp.net ajax, export, large-data, timeout, system.operationcanceledexception
res_type: kb
ticketid: 1691526
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2025.1.416</td>
</tr>
</tbody>
</table>

## Description

I encounter a `System.OperationCanceledException` when attempting to export large datasets from the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) in Telerik UI for ASP.NET AJAX. This issue occurs after upgrading to version 2025.1.416 or later, and the same export works without issues in version 2024.3.805.

## Cause

Starting with version 2025.1.416, a default timeout of 10 seconds is enforced during document import and export operations in the Document Processing Library (DPL). This timeout is intended to ensure consistent performance and mitigate security risks but may cause exceptions during large exports.

## Solution

To resolve the issue, modify the timeout setting for the DPL export functionality in the `web.config` file.

1. Open your `web.config` file.
2. Locate the `<appSettings>` section.
3. Add or update the following setting to increase the timeout:

```
<appSettings>
    <add key="Telerik.DplFormatProviderTimeout" value="90"/>
</appSettings>
```

4. Set the timeout value based on your export needs (e.g., 30, 60, 90 seconds, or more).
5. Save the file and test the export operation.

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Release Notes for Telerik UI for ASP.NET AJAX 2025 Q1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/telerik-ui-for-asp-net-ajax-2025-1-211-(2025-q1))
- [Security Best Practices for Telerik UI for ASP.NET AJAX](https://www.telerik.com/products/aspnet-ajax/documentation/security/security#general-security-best-practices)
