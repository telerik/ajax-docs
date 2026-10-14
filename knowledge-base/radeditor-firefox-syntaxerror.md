```markdown
---
title: RadEditor Unusable in Firefox Due to SyntaxError in Combined Script Bundle
description: Resolving the issue of RadEditor becoming unresponsive in Firefox due to a SyntaxError in the combined script bundle.
type: troubleshooting
page_title: Fix for RadEditor Not Working in Firefox After Update
meta_title: Fix for RadEditor Not Working in Firefox After Update
slug: radeditor-firefox-syntaxerror
tags: radeditor, ui for asp.net ajax, syntaxerror, combined script bundle, firefox
res_type: kb
ticketid: 1719667
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Editor for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

RadEditor becomes completely unresponsive when used in Firefox after upgrading to Telerik UI for ASP.NET AJAX 2026.3.812.462. The controls visually load but do not accept text input, and other controls on the page become unresponsive. The issue does not occur in browsers like Microsoft Edge. 

The following errors are logged in the Firefox browser console:

- `SyntaxError: expected expression, got '.'`
- `ReferenceError: Sys is not defined`
- `ReferenceError: $get is not defined`
- `ReferenceError: $find is not defined`

The `SyntaxError` points to the combined Telerik script bundle (`_TSM_CombinedScripts_`). This error prevents the Microsoft AJAX framework from initializing, leading to cascading issues across the page.

## Cause

This issue occurs because the older version of Firefox used in the environment does not support modern JavaScript syntax (e.g., optional chaining) included in the Telerik script files. Firefox versions released before 2020 do not interpret this syntax correctly, causing the error.

## Solution

To resolve the issue, follow these steps:

1. **Update Firefox**:
   - Upgrade Firefox to the latest version. Modern Telerik scripts rely on up-to-date JavaScript standards, which older browser versions do not support. Upgrading ensures compatibility and future-proofing.

2. **Rollback Telerik Version (Temporary Measure)**:
   - If an immediate Firefox update is not feasible, downgrade Telerik UI for ASP.NET AJAX to a release prior to the affected version. Ensure all assemblies are consistently matched to the downgraded version. Refer to the [manual upgrade instructions](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade) or use the [automatic upgrade tool](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#automatic-upgrade).

   - Note: This is a temporary solution. Modern JavaScript syntax will continue to be used in future Telerik updates, so updating the browser is the sustainable solution.

## See Also

- [RadEditor Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [Browser Support Policy for Telerik UI for ASP.NET AJAX](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/prerequisites/browser-support)
- [Manual Upgrade Instructions](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade)
- [Automatic Upgrade Tool](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#automatic-upgrade)
```
