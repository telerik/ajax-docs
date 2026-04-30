---
title: Download Multiple Files in a Single Archive
description: Learn how to download multiple files in a single zip archive using RadZipLibrary for ASP.NET AJAX, updated for the 2024 Q1+ API changes.
type: how-to
page_title: Download Multiple Files in a Single Archive. | RadZipLibrary
slug: ziplibrary-download-multiple-files-in-a-single-archive
tags: ziplibrary, radziplibrary, multiple files download, telerik
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>Telerik WebForms ZipLibrary for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description

This sample demonstrates how to download multiple files from various formats within a single .zip archive by making use of the ZipLibrary. In order to use this zip library, you can include the required assemblies as explained in the [Included Assemblies]({%slug introduction/installation/included-assemblies%}) article.

You can find the original more advanced version of this implementation in the [RadZipLibrary demo](https://demos.telerik.com/aspnet-ajax/ziplibrary/examples/overview/defaultcs.aspx).

![Download Multiple Files in a Single Archive](images/ziplibrary-download-multiple-files-in-a-single-archive.gif)

## Important: Breaking Change in 2024 Q1

Starting with the **2024 Q1** release, the `ZipArchive` constructors have been **made obsolete** and are no longer accessible. You must use the new static factory methods instead:

| Old Constructor | New Factory Method |
|---|---|
| `new ZipArchive(stream, ZipArchiveMode.Create, ...)` | `ZipArchive.Create(stream)` |
| `new ZipArchive(stream, ZipArchiveMode.Read, ...)` | `ZipArchive.Read(stream)` |
| `new ZipArchive(stream, ZipArchiveMode.Update, ...)` | `ZipArchive.Update(stream)` |

Additionally, the `ZipArchiveEntry` must be wrapped in a `using` statement to ensure the entry is properly finalized. The `BinaryWriter` should **not** be wrapped in its own `using` block — instead, call `writer.Flush()` before the entry is disposed. Failing to follow this pattern results in a corrupt archive where all file entries show 0 bytes.

## Solution

Suppose you have several files in a folder, each of different type (.png, .gif, .pdf, etc.). 
By clicking on the **Download All Files** button, we'll create a **ZipArchiveEntry** for each file, which will be responsible for adding the files to the archive. 

````ASP.NET
<telerik:RadButton ID="RadButton1" runat="server"
    Text="Download All Files" OnClick="RadButton1_Click">
    <Icon PrimaryIconCssClass="rbDownload" />
</telerik:RadButton>
````

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    MemoryStream memStream = new MemoryStream();
    using (ZipArchive archive = ZipArchive.Create(memStream))
    {
        string path = HttpContext.Current.Server.MapPath("~/Files");

        foreach (string docFile in Directory.GetFiles(path))
        {
            string fileName = Path.GetFileName(docFile);

            using (ZipArchiveEntry entry = archive.CreateEntry(fileName))
            {
                BinaryWriter writer = new BinaryWriter(entry.Open());
                writer.Write(File.ReadAllBytes(docFile));
                writer.Flush();
            }
        }
    }

    SendZipToClient(memStream);
}

private void SendZipToClient(MemoryStream memStream)
{
    memStream.Seek(0, SeekOrigin.Begin);

    if (memStream != null && memStream.Length > 0)
    {
        Response.Clear();
        Response.AddHeader("content-disposition", "attachment; filename=files.zip");
        Response.ContentType = "application/zip";
        Response.BinaryWrite(memStream.ToArray());
        Response.End();
    }
}
````

````VB
Protected Sub RadButton1_Click(sender As Object, e As EventArgs)
    Dim memStream As New MemoryStream()
    Using archive As ZipArchive = ZipArchive.Create(memStream)
        For Each docFile As String In Directory.GetFiles(HttpContext.Current.Server.MapPath("~/Files"))
            Dim fileName As String = Path.GetFileName(docFile)
            Using entry As ZipArchiveEntry = archive.CreateEntry(fileName)
                Dim writer As New BinaryWriter(entry.Open())
                writer.Write(File.ReadAllBytes(docFile))
                writer.Flush()
            End Using
        Next
    End Using

    SendZipToClient(memStream)
End Sub

Private Sub SendZipToClient(memStream As MemoryStream)
    memStream.Seek(0, SeekOrigin.Begin)

    If memStream IsNot Nothing AndAlso memStream.Length > 0 Then
        Response.Clear()
        Response.AddHeader("content-disposition", "attachment; filename=files.zip")
        Response.ContentType = "application/zip"
        Response.BinaryWrite(memStream.ToArray())
        Response.[End]()
    End If
End Sub
````
