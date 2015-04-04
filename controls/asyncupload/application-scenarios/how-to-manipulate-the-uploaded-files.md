---
title: How to Manipulate the Uploaded Files
page_title: How to Manipulate the Uploaded Files | UI for ASP.NET AJAX Documentation
description: How to Manipulate the Uploaded Files
slug: asyncupload/application-scenarios/how-to-manipulate-the-uploaded-files
tags: how,to,manipulate,the,uploaded,files
published: True
position: 5
---

# How to Manipulate the Uploaded Files



If you need to perform additional actions on uploaded files before saving them (for example, if you are using [custom fields](D672F55D-06A8-4DDF-84CB-E16A1DED90FC)), or if you want to manipulate them in memory without saving them, you can use the __RadAsyncUpload__ server-side API. It will allow you to rename uploaded files or save them into a database, or other storage media.

>caution If you set the __TargetFolder__ or __TargetPhysicalFolder__ property and then use the server-side API to manipulate the uploaded files, you may end up with two copies of the uploaded files. Be aware that any valid files will already be saved to the target folder.
>


__RadAsyncUpload__ provides collection to access uploaded files:

* __UploadedFiles__ contains all valid uploaded files.

__UploadedFiles__ property is of type __Telerik.Web.UI.UploadedFileCollection__. Each file in the collection is an instance of the __UploadedFile__ class. The following table lists the members of the __UploadedFile__ class:


>caption  

| Property or Method | Type (Return Type) | Description |
| ------ | ------ | ------ |
| __Properties__ |||
|ContentLength|Int64|The size of the uploaded file, in bytes.|
|ContentType|string|The MIME type of the uploaded file.|
|FileName|string|The fully qualified name of the file on the client. (IE6 and some older browsers only). To get a file name that is the same for all browsers, use the __GetName()__ method instead.|
|InputStream|System.IO.Stream|A stream object that can be used to read the file contents.|
| __Methods__ |||
|GetName()|string|Returns the name of the uploaded file.|
|GetNameWithoutExtension()|string|Returns the name of the uploaded file, without the file extension.|
|GetExtension()|string|Returns the extension of the uploaded file, including the leading dot (".")|
|SaveAs(string, [bool])|none|Save the file to the location specified by the first parameter. The optional second parameter specifies whether to overwrite an existing file if it is found.|
|GetFieldValue(string)|string|Retrieves a[custom field](D672F55D-06A8-4DDF-84CB-E16A1DED90FC)added to the uploaded file.|
|GetIsFieldChecked(string)|boolean|Retrieves whether a[custom check box](D672F55D-06A8-4DDF-84CB-E16A1DED90FC)added to the uploaded file was checked.|

## Saving uploaded files

The following example illustrates how to save uploaded files to a location of your choice:

````ASPNET
	    <telerik:RadAsyncUpload id="RadAsyncUpload1" runat="server" />
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


## Saving uploaded files in control's OnFileUploaded event

The following example illustrates how to save uploaded files to a location of your choice in OnFileUpload event:

````ASPNET
	    <telerik:RadAsyncUpload id="RadAsyncUpload1" runat="server" OnFileUploaded="RadAsyncUpload1_FileUploaded1"/>
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


>note The __OnFileUpload__ event will be fired for every file in the __UploadedFiles__ collection after postback.
>


## Using the InputStream property

You can use the __InputStream__ property to access the content of the uploaded files without saving them to a temporary location. This property is useful when you want to insert the file into a database, or process its contents without saving.

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
	      file.InputStream.Read(bytes, 0, file.ContentLength);
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
	            file.InputStream.Read(bytes, 0, file.ContentLength)
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


# See Also

 * [How to Extend the RadAsyncUpload handler]({%slug asyncupload/application-scenarios/how-to-extend-the-radasyncupload-handler%})
