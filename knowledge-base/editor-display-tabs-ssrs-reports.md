---
title: Displaying Tabs in SSRS Reports from Telerik RadEditor Content
description: Learn how to ensure tabs entered in Telerik RadEditor are visible in SSRS reports by converting them to spaces.
type: how-to
page_title: How to Make Tabs Visible in SSRS Reports Using Telerik RadEditor Content
slug: editor-display-tabs-ssrs-reports
tags: radeditor, ssrs, html, asp.net-ajax, white-space, database
res_type: kb
category: knowledge-base
ticketid: 1646990
---

## Environment

| Product                  | Version           |
|--------------------------|-------------------|
| RadEditor for ASP.NET AJAX | Any |

## Description

When using the Telerik [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) to enter content that includes tabs, and saving this content in an MS-SQL database, the tabs are not visible in the generated SSRS reports. The RadEditor saves tabs in HTML format using the `<span style="white-space:pre;">	</span>` tag. However, the SSRS report does not render the tabs as expected.

This KB article also answers the following questions:
- How can I ensure that tabs from RadEditor content appear in SSRS reports?
- What method should I use to convert tabs into spaces for SSRS report visibility?
- Is there a way to make white-space preserved in HTML content visible in SSRS reports?

## Solution

To resolve the issue of tabs not being displayed in SSRS reports, convert the tabs into a specific number of spaces before saving the content to the database. This conversion ensures that SSRS, which may not fully support the `white-space: pre;` CSS property, can correctly display the spaces in place of tabs.

Here is a step-by-step approach to replace tabs with spaces in the RadEditor's content:

1. Identify the HTML content in RadEditor that contains tabs. Usually, tabs are saved as `<span style="white-space: pre;">	</span>` in HTML.

2. Choose the number of spaces you wish to use to represent a tab. Commonly, four non-breaking spaces (`&nbsp;`) are used.

3. Use the following code snippet to replace the tab representation in HTML with your chosen number of spaces:

```csharp
// Assuming RadEditor1.Content contains the HTML content
// Define the replacement for the tab-span with a sequence of non-breaking spaces
string tabReplacement = "&nbsp;&nbsp;&nbsp;&nbsp;"; // Example: 4 non-breaking spaces

// Replace each occurrence of the tab-span with the tabReplacement string
RadEditor1.Content = RadEditor1.Content.Replace("<span style=\"white-space: pre;\">	</span>", tabReplacement);
```

4. Save the modified content back to the database.

5. The SSRS report should now display the spaces in place of tabs, ensuring the formatting is preserved as intended.

## Notes

- The solution provided here assumes that the RadEditor content is being processed server-side before being saved to the database.
- Adjust the number of non-breaking spaces based on your formatting requirements.

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [StackOverflow Discussion on Displaying Tabs in SSRS](https://stackoverflow.com/questions/3048949/can-i-get-a-tab-to-display-in-a-rendered-report)
 
