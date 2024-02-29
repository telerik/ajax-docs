---
title: A Guide to Diagnosing and Fixing HTTP 403 Forbidden Issues
description: Discover how to troubleshoot and resolve HTTP 403 Forbidden errors triggered by underlining text in RadEditor, often caused by stringent firewall rules.
type: troubleshooting
page_title: How to Fix RadEditor Underline Text Error Leading to HTTP 403 Forbidden
slug: editor-fixing-underline-text-error-http-403
tags: radeditor, error, underline, content
res_type: kb
---
# Description
When using RadEditor to enter notes, an error occurs when underlining content. The error log indicates a server-side error with HTTP status 403 Forbidden. 

# Steps to Reproduce
1. Use RadEditor to enter text.
2. Apply the underline format to the text.
3. Save or submit the content.

# Cause
The error is caused by aggressive AWS firewall rules, specifically the CrossSiteScripting_BODY rule, which blocks the request made by RadEditor when underlining content.

# Solution
To resolve this error and restore full functionality to RadEditor, follow the steps outlined below:

1. Identify the Firewall Settings: Understand the firewall settings in your environment. In cases reported, AWS firewall rules were found to be the cause.
2. Adjust Firewall Rules: Locate and disable the `CrossSiteScripting_BODY` rule or similar rules that could be incorrectly identifying RadEditor's underline function as a threat. This action should be performed with caution to ensure that disabling these rules does not inadvertently lower your site's security posture.
3. Verify Configuration Changes: After adjusting the firewall settings, repeat the steps to reproduce the error to ensure that the issue has been resolved.

  


