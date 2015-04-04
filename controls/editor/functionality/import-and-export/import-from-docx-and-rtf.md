---
title: Import from DOCX and RTF
page_title: Import from DOCX and RTF | UI for ASP.NET AJAX Documentation
description: Import from DOCX and RTF
slug: editor/functionality/import-and-export/import-from-docx-and-rtf
tags: import,from,docx,and,rtf
published: True
position: 3
---

# Import from DOCX and RTF



This help article explains how to import Word content to the __Telerik ASP.NET AJAX Editor__	using its built-in integration with the __Telerik document processing libraries__.

Since __Q3 2014__ the import feature of the __RadEditor__ control supports DOCX and RTF files.

>important The __Telerik document processing libraries__ support __.NET Framework__ versions __4.0__ and above.As of __Q3 2014__ the __RadEditor__ export/import to RTF is not supported under __.NET 3.5__ .
>


If you are interested in the Import from MS Word functionality, navigate to the [Export to DOCX and RTF]({%slug editor/functionality/import-and-export/export-to-docx-and-rtf%}) article.

Quick navigation:

1. [Enabling the Import Feature for DOCX and RTF](#enabling-the-import-feature-for-docx-and-rtf)

1. [Importing from Word document](#importing-from-word-document)

1. [Defining Import Settings](#defining-import-settings)

1. [Modifying the Imported Content](#modifying-the-imported-content)

## Enabling the Import Feature for DOCX and RTF

The built-in implementation of this feature depends on the __Telerik document processing libraries__.Since the __Q2 2014__ release, it comes with the installation of the __Telerik UI for ASP.NET AJAX__ suite.You can see how to obtain the needed assemblies in the [](65112864-d4c8-4ad6-8e5a-26f28c32ea8f) article.

To use the built-in __document processing libraries__ integration with the __RadEditor__ Export to Word feature,you need to add references to the following assemblies in your project:

* __Telerik.Windows.Documents.Core.dll__

* __Telerik.Windows.Documents.Flow.dll__

* __Telerik.Windows.Zip.dll__

## Importing from Word document

You can import Word documents using the __LoadDocxContent()__ method for DOCX content and __LoadRtfContent()__ for RTF.

These methods can be used with different overloads to best fit the application scenario:

* __LoadDocxContent(Stream docxStream)__–loads DOCX content from a Stream.

* __LoadDocxContent(string docxText)__–loads DOCX content from a String.

* __LoadRtfContent(Stream rtfStream)__–loads RTF content from a Stream.

* __LoadRtfContent(string rtfText)__–loads RTF content from a String.

[You can modify the imported content during runtime by handling the OnImportContent event.](#modifying-the-imported-content)

__Example 1__: Importing DOCX content using a Stream

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1">
			</telerik:RadEditor>
````
````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			using (FileStream fileStream = new FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read))
			{
				RadEditor1.LoadDocxContent(fileStream);
			}
		}
````
````VB.NET
	Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
		Using fileStream As New FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read)
			RadEditor1.LoadDocxContent(fileStream)
		End Using
	End Sub
````
>end

## Defining Import Settings

You can fine tune the importing functionality by using the __ImportSettings__ inner tag of the __RadEditor__ control.The available configuration options are located in the __Docx__ inner tag (for importing DOCX) and the __Rtf__ one(for importing RTF).

These setting are designed and implemented in the document processing libraries and more details about them are available in the[](d8c19145-c148-435a-9e1b-ef0633785267)	article of __HtmlFormatProvider__ class.If you need more advanced control over the settings of the__HtmlFormatProvider__ instance, you can use the __ImportContent__ RadEditor event to implement the desired configurations.You can find an example in the [OnImportContent Event]({%slug editor/server-side-programming/events/onimportcontent%}) help article.

These lists explain the basics of the Import Settings RadEditor exposes:



__Options related to the document level:__

* __DocumentLevel__—specifies the export scope of the document. By default, the generated HTML content is not a full HTML page (i.e., it does not begin with the <html>tag, but with generic tags like <p>). The available options are available through the __DocumentExportLevel__ enumeration:

* __Fragment__—this is the default value. Imports a fragment of the HTML document with—only the <body> tag of the content area.

* __Document__—imports full HTML document. You can get a[full HTML page](http://idjemerenov/telerik.web.examples.dev/editor/examples/completehtmlsupport/defaultcs.aspx)in the editor (i.e., content that begins with the <html> tag)



__Options related to the images:__

* __ImagesMode__—controls how images are imported. The available options are as external file(s) or as embedded images.The embedded images are represented as[base64 images](http://en.wikipedia.org/wiki/Base64). As for the external images, they are automatically generated image files that are exported into a folder,defined via the __ImagesFolderPath__ and __ImagesSourceBasePath__.

* __ImagesFolderPath__—this property is used only when__ImagesMode__ is set to __External__. It specifies the folderpath where external images should be exported/uploaded.

* __ImagesSourceBasePath__—this property is used only when the __ImagesMode__ is set to __External__.It specifies the base path for the "src" attribute of the imported image tags.



__Options related to the styles:__

* __StylesMode__—specifies the import mode for the CSS styles in the document.	By default styling is added in the document trough a <style> tag.	The available options are available through the __StylesExportMode__ enumeration:

* __Embedded__—the styles are embedded into the HTML in a 'style' element. This is the default value of the property.

* __External__—the styles are exported in external stylesheet file. You need to set the__StylesFilePath__ and __StylesSourcePath__ properties to define where the files should be stored.

* __Inline__—all styling is exported in the 'style' attribute of the HTML elements.This ensures maximum compatibility with some applications that do not support external or embedded styles, e.g., some email clients.

* __None__—styling is not imported.

* __StylesFilePath__—specifies the file path where the external styles should be imported.

* __StylesSourcePath__—specifies the base path for the "href" attribute of the "link" element that points to the file containing the external styles.

## Modifying the Imported Content

Importing content in the Editor raises the __ImportContent__ event that can be handled to accommodatethe concrete application requirements. Additional information about the event arguments and how you can use them to interact with the import functionality is available in the [OnImportContent Event]({%slug editor/server-side-programming/events/onimportcontent%}) article.

__Example 2__: Adding an additional paragraph to the [RadFlowDocument](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e) through the __OnImportContent__ event

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" OnImportContent="RadEditor1_ImportContent">
			</telerik:RadEditor>
			<asp:Button runat="server" ID="Button1" Text="Import DOCX" OnClick="Button1_Click" />
````
````C#
	using System.IO;
	using Telerik.Web.UI;
	using Telerik.Windows.Documents.Flow.FormatProviders.Html;
	
	public partial class DefaultCS : System.Web.UI.Page
	{
		protected void RadEditor1_ImportContent(object sender, EditorImportingArgs e)
		{
			RadFlowDocument document = e.RadFlowDocument as RadFlowDocument;
	
			Paragraph paragraph = new Paragraph(document);
			paragraph.TextAlignment = Alignment.Center;
	
			Run run = paragraph.Inlines.AddRun("This paragraph is added through the ImportContent event!");
			run.FontSize = 26;
	
			Section firstSection = (Section)document.Sections.First();
			firstSection.Blocks.Insert(0, paragraph);
		}
	
		protected void Button1_Click(object sender, EventArgs e)
		{
			FileStream fileStream = new FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read);
			RadEditor1.LoadDocxContent(fileStream);
		}
	}
````
````VB.NET
	Imports System.IO
	Imports System.Net
	Imports Telerik.Web.UI
	Imports Telerik.Windows.Documents.Flow.Model
	Imports Telerik.Windows.Documents.Flow.Model.Styles
	
	Partial Class DefaultVB
		Inherits System.Web.UI.Page
		Protected Sub RadEditor1_ImportContent(sender As Object, e As EditorImportingArgs)
			Dim document As RadFlowDocument = TryCast(e.RadFlowDocument, RadFlowDocument)
	
			Dim paragraph As New Paragraph(document)
			paragraph.TextAlignment = Alignment.Center
	
			Dim run As Run = paragraph.Inlines.AddRun("This paragraph is added through the ImportContent event!")
			run.FontSize = 26
	
			Dim firstSection As Section = DirectCast(document.Sections.First(), Section)
			firstSection.Blocks.Insert(0, paragraph)
		End Sub
	
		Protected Sub Button1_Click(sender As Object, e As EventArgs)
			Dim fileStream As New FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read)
			RadEditor1.LoadDocxContent(fileStream)
		End Sub
	End Class
````
>end

# See Also

 * [Import and Export to Word]({%slug editor/functionality/import-and-export/import-and-export-to-word%})

 * [Export to DOCX and RTF]({%slug editor/functionality/import-and-export/export-to-docx-and-rtf%})[](65112864-d4c8-4ad6-8e5a-26f28c32ea8f)

 * [Event: OnImportContent]({%slug editor/server-side-programming/events/onimportcontent%})[Telerik UI for WPF - RadFlowDocument](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e)[Telerik UI for WPF - HtmlFormatProvider](055c74e8-b87e-4c0f-b36c-b8210aab2055)

 * [Live demo: Import and Export to DOCX](http://demos.telerik.com/aspnet-ajax/editor/examples/export-and-import-to-docx/defaultcs.aspx)

 * [Live demo: Import and Export to RTF](http://demos.telerik.com/aspnet-ajax/editor/examples/rtfexport/defaultcs.aspx)
