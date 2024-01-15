---
title: Converting Docx to PDF Throws Reference Required and RadFlowDocument is ambiguous in the namespace error
description: This article provides a solution to the "Reference required to assembly 'Telerik.Windows.Documents.Flow'" error that occurs when converting a Docx file to PDF using the PdfFormatProvider in Telerik UI for ASP.NET AJAX.
type: troubleshooting
page_title: Resolving Reference Required Error and RadFlowDocument is ambiguous in the namespace when Converting Docx to PDF
slug: common-resolving-reference-required-error-when-converting-docx-to-pdf
tags: telerik, asp.net-ajax, document-processing, conversion, docx, pdf
res_type: kb
---

## Environment

| Product | Progress Telerik UI for ASP.NET AJAX |
| ------- | ----------------------------------- |
| Version | all                         |

## Description

I receive the following error when trying to convert a Docx file to PDF using the PdfFormatProvider:

"Reference required to assembly 'Telerik.Windows.Documents.Flow, Version 2023.x.xxx.40, Culture=neutral, PublicKeyToken=5803cfa389c90ce7'"

After adding the reference, all commands related to Telerik.Windows.Documents.Flow gives me the following error:

"RadFlowDocument is ambiguous in the namespace 'Telerik.Windows.Documents.Flow.Model'"

or

"RadFlowDocument is ambiguous in the namespace 'Telerik.Windows.Documents.Flow.FormatProviders.Docx'"

## Solution

To resolve the issue with the Telerik assemblies, follow these steps:

1. Correct Document Processing Assemblies: There are two types of Document Processing assemblies – one for .NET Framework (Telerik.Windows.Documents.Flow) and another for .NET Core (Telerik.Documents.Flow). Confirm that your application references only the assemblies intended for the .NET Framework.
    - Learn from Similar Cases: A customer experiencing a similar issue found that their problem stemmed from an outdated reference, specifically Telerik.Documents.* instead of Telerik.Windows.Documents.*, with incorrect pathing. This might be worth checking in your case as well.
2. Check for Older Assembly References: Review your web.config file for any older references to the Telerik assemblies, specifically Telerik.Web.UI.dll and the Document Processing assemblies.
3. Examine Project Files: Open your .csproj or .vbproj files in a text editor to ensure they reference the correct versions of these assemblies.
4. Global Assembly Cache (GAC) Verification: Search the GAC for older versions of the assemblies, which could lead to conflicts.
5. Consistent Assembly Sources: Ensure that both Telerik.Web.UI.dll and the Document Processing assemblies originate from the same installation to avoid version mismatches.
6. Reinstall Telerik Assemblies: If necessary, remove the Telerik assemblies and their references from the Bin folder. Then, carefully re-add them as demonstrated in the attached video tutorial.

## Notes

- Make sure to update your code where you use Telerik.Windows.Documents.Flow to match the correct assembly reference.
- Double-check that the .NET Core assemblies are not being referenced in your project, as they can cause conflicts.


