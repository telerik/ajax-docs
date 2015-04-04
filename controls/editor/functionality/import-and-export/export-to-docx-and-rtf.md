---
title: Export to DOCX and RTF
page_title: Export to DOCX and RTF | UI for ASP.NET AJAX Documentation
description: Export to DOCX and RTF
slug: editor/functionality/import-and-export/export-to-docx-and-rtf
tags: export,to,docx,and,rtf
published: True
position: 2
---

# Export to DOCX and RTF



This help article explains how to export the __Telerik ASP.NET AJAX Editor__ content to an MS Word	document by using its built-in integration with the __Telerik document processing libraries__.

Since __Q3 2014__ the export feature of the __RadEditor__ control supports DOCX and RTF files.

>important The __Telerik document processing libraries__ support __.NET Framework__ versions __4.0__ and above.As of __Q3 2014__ the __RadEditor__ export/import to RTF is not supported under __.NET 3.5__ .
>


If you are interested in the Import from MS Word functionality, navigate to the [Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%}) article.

Quick navigation:

1. [Enabling the Export Feature for DOCX and RTF](#enabling-the-export-feature-for-docx-and-rtf)

1. [Exporting to an MS Word Document](#exporting-to-an-ms-word-document)

1. [Defining Export Settings](#defining-export-settings)

1. [Export the File to the Server and Prevent it from Being Sent to the Client.]({%slug editor/server-side-programming/events/onexportcontent%})

1. [Modifying the Exported Content](#modifying-the-exported-content)

1. [Known Limitations](#known-limitations)

## Enabling the Export Feature for DOCX and RTF

The built-in implementation of this feature depends on the __Telerik document processing libraries__.Since the __Q2 2014__ release, it comes with the installation of the __Telerik UI for ASP.NET AJAX__ suite.You can see how to obtain the needed assemblies in the [](65112864-d4c8-4ad6-8e5a-26f28c32ea8f) article.

To use the built-in __document processing libraries__ integration with the __RadEditor__ Export to Word feature,you need to add references to the following assemblies in your project:

* __Telerik.Windows.Documents.Core.dll__

* __Telerik.Windows.Documents.Flow.dll__

* __Telerik.Windows.Zip.dll__

## Exporting to an MS Word Document

You can trigger an export to Word file action by calling the server-side __ExportToDocx()__method for DOCX __ExportToRtf()__ method for RTF. __Example 1__ illustrates their use.

The default name of the exported file will be *RadEditorExport.docx* or *RadEditorExport.rtf*.Optionally, you can define it via the __FileName__ property in the __ExportSettings__ inner tag.You can read more about the available customization options in the [Defining Export Settings](#defining-export-settings) and [Using the Export Event](#using-export-event) sections.

You can [modify the exported content](#modifying-the-exported-content)when the [OnExportContent]({%slug editor/server-side-programming/events/onexportcontent%}) event is raised.

>note The default export functionality requires a full postback because it has to send a file to the client and this is not possible during an AJAX request.
>


>note For correct export of HTML table elements, the[PdfExportFilter content filter]({%slug editor/managing-content/content-filters%})must be enabled
>


__Example 1__: Exporting the __RadEditor__ content to Word documents by using two simple ASP Button controls for __*.docx__ and __*.rtf__

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" ContentFilters="PdfExportFilter, DefaultFilters">
				<Content>
					<h1>Heading</h1>
					<p>Some content</p>
				</Content>
			</telerik:RadEditor>
	
			<asp:Button Text="Export to RTF" runat="server" ID="ExportRTF" OnClick="ExportRtf_Click" />
			<asp:Button Text="Export to DOCX" runat="server" ID="ExportDOCX" OnClick="ExportDocx_Click"/>
````
````C#
	protected void ExportRtf_Click(object sender, EventArgs e)
	{
		RadEditor1.ExportToRtf();
	}
	
	protected void ExportDocx_Click(object sender, EventArgs e)
	{
		RadEditor1.ExportToDocx();
	}
	
````
````VB.NET
	Protected Sub ExportRtf_Click(sender As Object, e As EventArgs)
		RadEditor1.ExportToRtf()
	End Sub
	
	Protected Sub ExportDocx_Click(sender As Object, e As EventArgs)
		RadEditor1.ExportToDocx()
	End Sub
	
````
>end

## Defining Export Settings

Optionally, you can configure the export settings via the __Docx__ (for DOCX documents)or __Rtf__ (for RTF documents) inner tag, located in the __ExportSettings__ inner tag of the __RadEditor__ control.

The available options are:

* __DefaultFontName__—sets the default font name for the Word document.

* __DefaultFontSizeInPoints__—sets the default font size for the Word document.

* __PageHeader__—defines a header text for the exported document.

* __HeaderFontSizeInPoints__—sets the font size for the header element.

__Example 2__: Using the __ExportSettings__ options of the DOCX and RTF exporting functionality

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" ContentFilters="PdfExportFilter, DefaultFilters">
				<ExportSettings>
					<Docx DefaultFontName="Arial" DefaultFontSizeInPoints="12" HeaderFontSizeInPoints="8" PageHeader="Some header text for DOCX documents" />
					<Rtf DefaultFontName="Times New Roman" DefaultFontSizeInPoints="13" HeaderFontSizeInPoints="9" PageHeader="Some header text for RTF documents" />
				</ExportSettings>
				<Content>
					<h1>Heading</h1>
					<p>Some content</p>
				</Content>
			</telerik:RadEditor>
````



## Modifying the Exported Content

Exporting content from the Editor raises the __ExportContent__ event that can be handled toaccommodate the concrete application requirements. Additional information about the event arguments and how they can be used tointeract with the content is available in the [OnExportContent]({%slug editor/server-side-programming/events/onexportcontent%}) article.

__Example 3__: Dynamically adding header and footer elements to the exported document via the __ExportContent__ event

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" OnExportContent="RadEditor1_ExportContent" ContentFilters="DefaultFilters, PdfExportFilter"></telerik:RadEditor>
			<asp:Button runat="server" ID="Button1" Text="Export to DOCX" OnClick="Button1_Click" />
````
````C#
	using System.Linq;
	using System.Text;
	using Telerik.Web.UI;
	using Telerik.Windows.Documents.Flow.FormatProviders.Docx;
	using Telerik.Windows.Documents.Flow.Model;
	using Telerik.Windows.Documents.Flow.Model.Styles;
	
	public partial class DefaultCS : System.Web.UI.Page
	{
		protected void RadEditor1_ExportContent(object sender, EditorExportingArgs e)
		{
			ExportType exportType = e.ExportType;
	
			if (exportType == ExportType.Word)
			{
				string exportedOutput = e.ExportOutput;
	
				Byte[] output = Encoding.Default.GetBytes(exportedOutput);
	
				DocxFormatProvider docxProvider = new DocxFormatProvider();
				RadFlowDocument document = docxProvider.Import(output);
	
				Header defaultHeader = document.Sections.First().Headers.Add();
				Paragraph defaultHeaderParagraph = defaultHeader.Blocks.AddParagraph();
				defaultHeaderParagraph.TextAlignment = Alignment.Right;
				defaultHeaderParagraph.Inlines.AddRun("This is a sample header.");
	
				Footer defaultFooter = document.Sections.First().Footers.Add();
				Paragraph defaultFooterParagraph = defaultFooter.Blocks.AddParagraph();
				defaultFooterParagraph.TextAlignment = Alignment.Right;
				defaultFooterParagraph.Inlines.AddRun("This is a sample footer.");
	
				Byte[] modifiedOutput = docxProvider.Export(document);
				string finalOutput = Encoding.Default.GetString(modifiedOutput, 0, modifiedOutput.Length);
	
				e.ExportOutput = finalOutput;
			}
		}
	
		protected void Button1_Click(object sender, EventArgs e)
		{
			RadEditor1.ExportToDocx();
		}
	}
````
````VB.NET
	Imports Telerik.Web.UI
	Imports Telerik.Windows.Documents.Flow.FormatProviders.Docx
	Imports Telerik.Windows.Documents.Flow.Model
	Imports Telerik.Windows.Documents.Flow.Model.Styles
	
	Partial Class DefaultVB
		Inherits System.Web.UI.Page
	
		Protected Sub RadEditor1_ExportContent(sender As Object, e As EditorExportingArgs)
			Dim exportType__1 As ExportType = e.ExportType
	
			If exportType__1 = ExportType.Word Then
				Dim exportedOutput As String = e.ExportOutput
	
				Dim output As [Byte]() = Encoding.[Default].GetBytes(exportedOutput)
	
				Dim docxProvider As New DocxFormatProvider()
				Dim document As RadFlowDocument = docxProvider.Import(output)
	
				Dim defaultHeader As Header = document.Sections.First().Headers.Add()
				Dim defaultHeaderParagraph As Paragraph = defaultHeader.Blocks.AddParagraph()
				defaultHeaderParagraph.TextAlignment = Alignment.Right
				defaultHeaderParagraph.Inlines.AddRun("This is a sample header.")
	
				Dim defaultFooter As Footer = document.Sections.First().Footers.Add()
				Dim defaultFooterParagraph As Paragraph = defaultFooter.Blocks.AddParagraph()
				defaultFooterParagraph.TextAlignment = Alignment.Right
				defaultFooterParagraph.Inlines.AddRun("This is a sample footer.")
	
				Dim modifiedOutput As [Byte]() = docxProvider.Export(document)
				Dim finalOutput As String = Encoding.[Default].GetString(modifiedOutput, 0, modifiedOutput.Length)
	
				e.ExportOutput = finalOutput
			End If
		End Sub
	
		Protected Sub Button1_Click(sender As Object, e As EventArgs)
			RadEditor1.ExportToDocx()
		End Sub
	End Class
````
>end

## Known Limitations

* Lists cannot be exported.

* The CSS[page-break-after](https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after) property is not exported.

* Image borders are not exported.

# See Also

 * [Import and Export to Word]({%slug editor/functionality/import-and-export/import-and-export-to-word%})

 * [Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})[](65112864-d4c8-4ad6-8e5a-26f28c32ea8f)

 * [Event: OnExportContent]({%slug editor/server-side-programming/events/onexportcontent%})[Telerik UI for WPF - RadFlowDocument](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e)

 * [Live demo: Import and Export to DOCX](http://demos.telerik.com/aspnet-ajax/editor/examples/export-and-import-to-docx/defaultcs.aspx)

 * [Live demo: Import and Export to RTF](http://demos.telerik.com/aspnet-ajax/editor/examples/rtfexport/defaultcs.aspx)
