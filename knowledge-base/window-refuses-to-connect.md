---
title: Troubleshooting RadWindow Refusing to Connect
description: Learn why RadWindow may refuse to connect to certain websites and how to resolve the issue.
type: troubleshooting
page_title: RadWindow Refuses to Connect
slug: window-refuses-to-connect
tags: radwindow, connection, refused, troubleshooting
res_type: kb
---

## Environment
| **Product**   | RadWindow for ASP.NET AJAX |

## Description
When using RadWindow in an ASP.NET AJAX application, you may experience issues where the RadWindow refuses to connect to certain websites, such as Google.com or Telerik.com. This can be observed through error messages like "www.google.com refused to connect" or "www.telerik.com refused to connect".

## Solution
This issue occurs because the Telerik.com and Google.com web sites are configured with the `X-Frame-Options` header set to `SAMEORIGIN`. This header restricts the display of the page in a frame to only pages with the same origin.

To resolve this issue, you can follow these steps:

1. Open the DevTools console in your browser.
2. Look for the error message similar to: `Refused to display 'https://www.google.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'`.
3. To display the restricted page in the RadWindow, you need to ensure that the page is loaded within a frame that has the same origin.
4. If you have control over the website being loaded, you can modify the `X-Frame-Options` header to allow embedding the page in a frame from a different origin. However, please note that this is not recommended for security reasons.
5. Alternatively, you can load the website in a separate browser window or tab instead of within the RadWindow.

Please note that modifying the `X-Frame-Options` header of external websites is not within your control. Therefore, if the website has this header set to `SAMEORIGIN`, you will not be able to display it within the RadWindow.
