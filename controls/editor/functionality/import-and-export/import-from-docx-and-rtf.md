---
title: Import from DOCX and RTF
page_title: Import from DOCX and RTF | RadEditor for ASP.NET AJAX Documentation
description: Import from DOCX and RTF
slug: editor/functionality/import-and-export/import-from-docx-and-rtf
tags: import,from,docx,and,rtf
published: True
position: 3
---

# Import from DOCX and RTF



This help article explains how to import Word content to the **Telerik ASP.NET AJAX Editor**	using its built-in integration with the **Telerik document processing libraries**.

Since **Q3 2014** the import feature of the **RadEditor** control supports DOCX and RTF files.

>important The **Telerik document processing libraries** support **.NET Framework** versions **4.0** and above.As of **Q3 2014** the **RadEditor** export/import to RTF is not supported under **.NET 3.5** .

If you are interested in the Import from MS Word functionality, navigate to the [Export to DOCX and RTF]({%slug editor/functionality/import-and-export/export-to-docx-and-rtf%}) article.

Quick navigation:

1. [Enabling the Import Feature for DOCX and RTF](#enabling-the-import-feature-for-docx-and-rtf)
1. [Importing from Word document](#importing-from-word-document)
1. [Defining Import Settings](#defining-import-settings)
1. [Modifying the Imported Content](#modifying-the-imported-content)

## Enabling the Import Feature for DOCX and RTF

The built-in implementation of this feature depends on the **Telerik document processing libraries**. Since the **Q2 2014** release, it comes with the installation of the **Telerik® UI for ASP.NET AJAX** suite. You can see how to obtain the needed assemblies in the [Included Assemblies]({% slug introduction/installation/included-assemblies %}) article.

To use the built-in **document processing libraries** integration with the **RadEditor** Export to Word feature,you need to add references to the following assemblies in your project:

* **Telerik.Windows.Documents.Core.dll**
* **Telerik.Windows.Documents.Flow.dll**
* **Telerik.Windows.Zip.dll**

## Importing from Word document

You can import Word documents using the **LoadDocxContent()** method for DOCX content and **LoadRtfContent()** for RTF.

These methods can be used with different overloads to best fit the application scenario:

* `LoadDocxContent(Stream docxStream)`—loads DOCX content from a Stream.
* `LoadDocxContent(string docxText)`—loads DOCX content from an ASCII-encoded String.
* `LoadRtfContent(Stream rtfStream)`—loads RTF content from a Stream.
* `LoadRtfContent(string rtfText)`—loads RTF content from an ASCII-encoded String.

[You can modify the imported content during runtime by handling the OnImportContent event.](#modifying-the-imported-content)

>caption Example 1: Importing DOCX content using a Stream


````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
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
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	Using fileStream As New FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read)
		RadEditor1.LoadDocxContent(fileStream)
	End Using
End Sub
````

>caption Example 2: Importing RTF content using a Stream


````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
</telerik:RadEditor>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	using (FileStream fileStream = new FileStream(Server.MapPath("RtfEditor.rtf"), FileMode.Open, FileAccess.Read))
	{
		RadEditor1.LoadRtfContent(fileStream);
	}
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	Using fileStream As New FileStream(Server.MapPath("RtfEditor.rtf"), FileMode.Open, FileAccess.Read)
		RadEditor1.LoadRtfContent(fileStream)
	End Using
End Sub
````

>tip If you have a string representing the document, but it is not in ASCII encoding, you can convert it to a stream first. For example, with Base64, `RadEditor1.LoadDocxContent(new MemoryStream(System.Convert.FromBase64String(rawData)));`


## Defining Import Settings

You can fine tune the importing functionality by using the **ImportSettings** inner tag of the **RadEditor** control.The available configuration options are located in the **Docx** inner tag (for importing DOCX) and the **Rtf** one(for importing RTF).

These setting are designed and implemented in the document processing libraries and more details about them are available in the [Settings](https://www.telerik.com/help/aspnet-ajax/radwordsprocessing-formats-and-conversion-html-settings.html) article of **HtmlFormatProvider** class. If you need more advanced control over the settings of the **HtmlFormatProvider** instance, you can use the **ImportContent** RadEditor event to implement the desired configurations. You can find an example in the [OnImportContent Event]({%slug editor/server-side-programming/events/onimportcontent%}) help article.

These lists explain the basics of the Import Settings RadEditor exposes:

**Options related to the document level:**

* **DocumentLevel**—specifies the export scope of the document. By default, the generated HTML content is not a full HTML page (i.e., it does not begin with the `<html>` tag, but with generic tags like `<p>`). The available options are available through the **DocumentExportLevel** enumeration:
* **Fragment**—this is the default value. Imports a fragment of the HTML document with—only the `<body>` tag of the content area.
* **Document**—imports full HTML document. You can get a [full HTML page](http://idjemerenov/telerik.web.examples.dev/editor/examples/completehtmlsupport/defaultcs.aspx) in the editor (i.e., content that begins with the `<html>` tag)


**Options related to the images:**

* **ImagesMode**—controls how images are imported. The available options are as external file(s) or as embedded images. The embedded images are represented as [base64 images](https://en.wikipedia.org/wiki/Base64). As for the external images, they are automatically generated image files that are exported into a folder, defined via the **ImagesFolderPath** and **ImagesSourceBasePath**.
* **ImagesFolderPath**—this property is used only when **ImagesMode** is set to **External**. It specifies the folder path where external images should be exported/uploaded.
* **ImagesSourceBasePath**—this property is used only when the **ImagesMode** is set to **External**.It specifies the base path for the "src" attribute of the imported image tags.

**Options related to the styles:**

* **StylesMode**—specifies the import mode for the CSS styles in the document.	By default styling is added in the document trough a `<style>` tag.	The available options are available through the **StylesExportMode** enumeration:
* **Embedded**—the styles are embedded into the HTML in a 'style' element. This is the default value of the property.
* **External**—the styles are exported in external stylesheet file. You need to set the **StylesFilePath** and **StylesSourcePath** properties to define where the files should be stored.
* **Inline**—all styling is exported in the 'style' attribute of the HTML elements.This ensures maximum compatibility with some applications that do not support external or embedded styles, e.g., some email clients.
* **None**—styling is not imported.
* **StylesFilePath**—specifies the file path where the external styles should be imported.
* **StylesSourcePath**—specifies the base path for the "href" attribute of the "link" element that points to the file containing the external styles.

## Modifying the Imported Content

Importing content in the Editor raises the **ImportContent** event that can be handled to accommodate the concrete application requirements. Additional information about the event arguments and how you can use them to interact with the import functionality is available in the [OnImportContent Event]({%slug editor/server-side-programming/events/onimportcontent%}) article.

>caption Example 3: Adding an additional paragraph to the [RadFlowDocument](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/model/radflowdocument.html) through the **OnImportContent** event

````ASPNET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnImportContent="RadEditor1_ImportContent">
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
````VB
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

## See Also

 * [Import and Export to Word]({%slug editor/functionality/import-and-export/import-and-export-to-word%})

 * [Export to DOCX and RTF]({%slug editor/functionality/import-and-export/export-to-docx-and-rtf%})

 * [Event: OnImportContent]({%slug editor/server-side-programming/events/onimportcontent%})

 * [Live demo: Import and Export to DOCX](https://demos.telerik.com/aspnet-ajax/editor/examples/import-export/docx-import-export/defaultcs.aspx)

 * [Live demo: Import and Export to RTF](https://demos.telerik.com/aspnet-ajax/editor/examples/import-export/rtf-import-export/defaultcs.aspx)
