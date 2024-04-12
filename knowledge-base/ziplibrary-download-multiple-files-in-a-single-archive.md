---
title: Download Multiple Files in a Single Archive
description: Sometimes, you might want to download multiple files in a aingle archive. Check out the solution to see how.
type: how-to
page_title: Download Multiple Files in a Single Archive. | RadZipLibrary
slug: ziplibrary-download-multiple-files-in-a-single-archive
tags: ziplibrary, radziplibrary, multiple fileas download, telerik
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

This sample demonstrates how to download multiple files from various formats within a single .zip archive by making avail of the ZipLibrary control. In order to use this zip library, you can include the required assemblies as explained in the [Included Assemblies]({%slug introduction/installation/included-assemblies%}) article

You can find the original more advanced version of this implementation in the [RadZipLibrary demo](https://demos.telerik.com/aspnet-ajax/ziplibrary/examples/overview/defaultcs.aspx)

![Download Multiple Files in a Single Archive](images/ziplibrary-download-multiple-files-in-a-single-archive.gif)

## Solution

Suppose you have several files in a folder, each of different type (.png, .gif, .pdf, etc.). 
By clicking on the **Download All Files** button, we'll create a **ZipArchiveEntry**, which will be responsible for downloading all the files. 

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
    using (ZipArchive archive = new ZipArchive(memStream, ZipArchiveMode.Create, true, null))
    {
        string path = HttpContext.Current.Server.MapPath("~/Files");

        foreach (string docFile in Directory.GetFiles(path))
        {
            string fileName = Path.GetFileName(docFile);
            ZipArchiveEntry entry = archive.CreateEntry(fileName);

            using (BinaryWriter writer = new BinaryWriter(entry.Open()))
            {
                writer.Write(File.ReadAllBytes(docFile));
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
    Using archive As New ZipArchive(memStream, ZipArchiveMode.Create, True, Nothing)
        For Each docFile As String In Directory.GetFiles(HttpContext.Current.Server.MapPath("~/Files"))
            Dim fileName As String = Path.GetFileName(docFile)
            Dim entry As ZipArchiveEntry = archive.CreateEntry(fileName)
            Using writer As BinaryWriter = New BinaryWriter(entry.Open())
                writer.Write(File.ReadAllBytes(docFile))
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

 
  
   