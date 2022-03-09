---
title: VS Crashes If Microsoft Report Viewer Is Used When Designing Local Reports and Adding Datasets
page_title: Visual Studio Crashes If Microsoft Report Viewer Is Used When Designing Local Reports and Adding Datasets
description: "When working with Telerik UI for ASP.NET AJAX, Visual Studio crashes if the project uses Microsoft Report Viewer when designing a local report (.rdlc) and adding a dataset."
slug: vs-crashes-if-ms-report-viewer-used-for-local-reports-adding-datasets
tags: telerik, asp, net, ajax, troubleshooting, visual, studio, crashes, when, microsoft, report, viewer, used, for, designing, reports, and, adding, datasets
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Visual Studio crashes if the project uses Microsoft Report Viewer when designing a local report (`.rdlc`) and adding a dataset.

## Error Message

`System.IO.FileNotFoundException: Could not load file or assembly 'Microsoft.AnalysisServices.AdomdClient, Version=10.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91' or one of its dependencies. The system cannot find the file specified`

## Cause

You are required to refer the `Microsoft.AnalysisServices.AdomdClient` assembly with the `Version=10.0.0.0` specific version. If this assembly is not referenced by the solution or is not present in the GAC of the machine, Visual Studio cannot find it and it crashes. The required version comes with Microsoft SQL Server 2008 R2 SP2 Feature Pack, but the Microsoft SQL Server 2012 Feature Pack will install the `Microsoft.AnalysisServices.AdomdClient` assembly with `Version=11.0.0.0` and later versions are also available.

## Solution

Ensure that the machine has `Microsoft.AnalysisServices.AdomdClient Version=10.0.0.0` on it by installing the free Microsoft SQL Server 2008 R2 SP2 Feature Pack from [https://www.microsoft.com/en-us/download/details.aspx?id=30440](https://www.microsoft.com/en-us/download/details.aspx?id=30440).

You need only the following components from the available list. Make sure to select the correct processor architecture for your machine:

* `SQLSERVER2008_ASADOMD10`

* `SQLSERVER2008_ASAMO10`

Client reports indicate that for Telerik versions Q1 2016 and later on Windows 10, you also need to reference the `Telerik.Web.Spreadsheet.dll` assembly in your project.
