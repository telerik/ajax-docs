---
title: How to Manipulate the Uploaded Files
page_title: How to Manipulate the Uploaded Files - RadAsyncUpload
description: Check our Web Forms article about How to Manipulate the Uploaded Files.
slug: asyncupload/how-to/how-to-manipulate-the-uploaded-files
tags: how,to,manipulate,the,uploaded,files
published: True
position: 5
---

# How to Manipulate the Uploaded Files

If you need to perform additional actions on uploaded files before saving them (for example, if you are using [custom fields]({%slug upload/how-to/adding-information-to-uploaded-files%})), or if you want to manipulate them in memory without saving them, you can use the **RadAsyncUpload** server-side API. It will allow you to rename uploaded files or save them into a database or other storage media.

In this article, you can find the API that RadAsyncUpload provides for managing files and a [few examples](#examples) that demonstrate common scenarios.

**RadAsyncUpload** provides the **UploadedFiles**  collection that contains all valid uploaded files.

The **UploadedFiles** property is of type **Telerik.Web.UI.UploadedFileCollection**. Each file in the collection is an instance of the **UploadedFile** class. **Table 1** lists the members of the **UploadedFile** class.

>caption Table 1: UploadedFile Server-side API

| Property or Method | Type (Return Type) | Description |
| ------ | ------ | ------ |
| **Properties** |||
|ContentLength|Int64|The size of the uploaded file, in bytes.|
|ContentType|string|The MIME type of the uploaded file.|
|FileName|string|The fully qualified name of the file on the client. (IE6 and some older browsers only). To get a file name that is the same for all browsers, use the **GetName()** method instead.|
|InputStream|System.IO.Stream|A stream object that can be used to read the file contents. Note: As of R2 2017 SP2 the temporary files saved to the disk have the .tmp extension. This is due to the security improvement discussed in the [Insecure Direct Object Reference](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/insecure-direct-object-reference) article.|
| **Methods** |||
|GetName()|string|Returns the name of the uploaded file.|
|GetNameWithoutExtension()|string|Returns the name of the uploaded file, without the file extension.|
|GetExtension()|string|Returns the extension of the uploaded file, including the leading dot (".")|
|SaveAs(string, [bool])|none|Save the file to the location specified by the first parameter. The optional second parameter specifies whether to overwrite an existing file if it is found.|
|GetFieldValue(string)|string|Retrieves a [custom field]({%slug upload/how-to/adding-information-to-uploaded-files%}) added to the uploaded file.|
|GetIsFieldChecked(string)|boolean|Retrieves whether a [custom check box]({%slug upload/how-to/adding-information-to-uploaded-files%}) added to the uploaded file was checked.|

>caution Use either the **TargetFolder** property or the server-side API. If you first set the **TargetFolder** property and then use the server-side API to manipulate the uploaded files, you may experience the following issues:
>
> * Two copies of the uploaded files are saved. Any valid files will already be saved to the target folder.
> * An error appears when attempting a custom `.SaveAs()` call on an uploaded file. The error points to the temporary folder of the RadAsyncUpload, for example, `Could not find file '<physical path to your app>\App_Data\RadUploadTemp\some-uploaded-file.png.tmp'`. This is caused by the fact that that the control moved the file to the target folder. The solution is to remove the `TargetFolder` property and save the files only with your own code.
>   * A similar error can appear if antivirus software or other code deletes the temporary file(s) before the `FileUploaded` event is fired. Thus, you may want to have a `try-catch` block around the `.SaveAs` call. RadAsyncUpload handles this internally only when saving to the `TargetFolder`.

## Examples

### Saving Uploaded Files

The following example illustrates how to save uploaded files to a location of your choice, in the postback event of another control like a button:

````ASP.NET
<telerik:RadAsyncUpload RenderMode="Lightweight" id="RadAsyncUpload1" runat="server" />
<asp:Button runat="server" ID="Button1" Text="Submit" OnClick="Button1_Click" />
````

````C#
protected void Button1_Click(object sender, System.EventArgs e)
{
  foreach (UploadedFile f in RadAsyncUpload1.UploadedFiles)
  {
      f.SaveAs( "c:\\uploaded files\\" + f.GetName(), true);
  }
}
````
````VB.NET	
Imports Telerik.Web.UI...
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) _
  Handles Button1.Click
    For Each f As UploadedFile In RadAsyncUpload1.UploadedFiles
        f.SaveAs("c:\my files\" & f.GetName, True)
    Next
End Sub 
````

### Saving Uploaded Files in the Control's OnFileUploaded Event

The following example illustrates how to save uploaded files to a location of your choice in OnFileUpload event:

>note The **OnFileUpload** event will be fired for every file in the **UploadedFiles** collection after postback.

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" id="RadAsyncUpload1" runat="server" OnFileUploaded="RadAsyncUpload1_FileUploaded1"/>
<asp:Button runat="server" ID="Button2" Text="Submit" />
````

````C#
protected void RadAsyncUpload1_FileUploaded1(object sender, FileUploadedEventArgs e)
{
    string path = Server.MapPath("~/Uploads/");
    e.File.SaveAs(path + e.File.GetName());
}
````
````VB.NET
Imports Telerik.Web.UI...
Protected Sub RadAsyncUpload1_FileUploaded(sender As Object, e As FileUploadedEventArgs)
    Dim Path As String
    Path = Server.MapPath("~/Uploads/")
    e.File.SaveAs(Path + e.File.GetName())
End Sub
````

### Using the InputStream Property

You can use the **InputStream** property to access the content of the uploaded files without saving them to a temporary location. This property is useful when you want to insert the file into a database, or process its contents without saving.

The following example demonstrates how to insert the uploaded files into a database using OleDb:

````C#	    
using System.Data.OleDb;
using Telerik.Web.UI;
...
protected void Button1_Click(object sender, System.EventArgs e)
{
  foreach (UploadedFile file in RadAsyncUpload1.UploadedFiles)
  {
      byte[] bytes = new byte[file.ContentLength];
      file.InputStream.Read(bytes, 0, bytes.Length);
      OleDbConnection connection = CreateConnection();
      try
{
           OleDbCommand command = new OleDbCommand(
               "INSERT INTO Images ([Name], [Size], [Content]) VALUES (?, ?, ?)",
              connection);
          command.Parameters.AddWithValue( "@Name", file.GetName());
          command.Parameters.AddWithValue( "@Size", bytes.Length);
          command.Parameters.AddWithValue( "@Content", bytes);
          connection.Open();
          command.ExecuteNonQuery();
      }
       finally
      {
           if (connection.State == Data.ConnectionState.Open)
          {
              connection.Close();
          }
      }
  }
} 
````
````VB.NET
Imports System.Data.OleDb
Imports Telerik.Web.UI
...
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) _
     Handles Button1.Click
    For Each file As UploadedFile In RadAsyncUpload1.UploadedFiles
        Dim bytes(file.ContentLength - 1) As Byte
        file.InputStream.Read(bytes, 0, bytes.Length)
        Dim connection As OleDbConnection = CreateConnection()
        Try
            Dim command As New OleDbCommand("INSERT INTO Images ([Name], [Size], [Content]) VALUES (?, ?, ?)", connection)
            command.Parameters.AddWithValue("@Name", file.GetName())
            command.Parameters.AddWithValue("@Size", bytes.Length)
            command.Parameters.AddWithValue("@Content", bytes)
            connection.Open()
            command.ExecuteNonQuery()
        Finally
            If connection.State = Data.ConnectionState.Open Then
                connection.Close()
            End If
        End Try
    Next
End Sub
````

The InputStream property is also showcased in the [Access temporary file name and manually delete tempfile from RadAsyncUpload](%slug knowledge-base/asyncupload-access-temporary-file%}) how-to article.

# See Also

 * [How to Extend the RadAsyncUpload handler]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})
 * [Access temporary file name and manually delete tempfile from RadAsyncUpload](%slug knowledge-base/asyncupload-access-temporary-file%})

