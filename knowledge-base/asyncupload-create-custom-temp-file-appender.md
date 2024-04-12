---
title: Create custom Temp File Appender for AsyncUpload
description: Create custom Temp File Appender for AsyncUpload by using System Reflection and custom Upload Handler.
type: how-to
page_title: Create custom Temp File Appender | RadAsyncUpload
slug: asyncupload-create-custom-temp-file-appender
position: 
tags: asyncupload, custom, handler, tempfileappender, reflection
ticketid: 1644858
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadAsyncUpload for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Create custom Temp File Appender for AsyncUpload by using [Reflection](https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection) that will access the internal properties and invoke the instance constructors.

This approach can be used to change the chunk sizes that are appended at once when uploading large files, thus, improving the Input/output Operations per Second (IOPS).

## Solution

This scenario requires the following:

- [Custom Temp File Appender](#custom-temp-file-appender)
- [Custom Upload Handler](#custom-upload-handler)

### Custom Temp File Appender

At first, create a class that will implement the `ITempFileAppender` interface. Here you can change the buffer size (chunk size) to append at once when uploading the files.

````C#
using System.IO;
using Telerik.Web.UI.AsyncUpload;

public class CustomTempFileAppender : ITempFileAppender
{
    private readonly Stream _content;
    private const int MaxRetries = 10;
    public static long ContentLength { get; set; }
    public long AppendedContentLength
    {
        get
        {
            return ContentLength;
        }
    }

    public CustomTempFileAppender() { }
    public CustomTempFileAppender(Stream stream)
    {
        _content = stream;
    }

    public void AppendTo(string fullPath)
    {
        AppendToFile(fullPath, _content);
    }

    private void AppendToFile(string fullPath, Stream content, int retries = 1)
    {
        try
        {
            using (FileStream stream = new FileStream(fullPath, FileMode.Append, FileAccess.Write, FileShare.ReadWrite))
            {
                using (content)
                {
                    ContentLength = (stream.Length + content.Length);

                    int kiloByte = 1024; // 1KB
                    int megaByte = 1000 * kiloByte; // 1MB


                    int bufferSize = 4 * kiloByte; // 4KB chunks (Recommended for most cases)

                    bufferSize = megaByte; // 1MB chunks (increase the buffer size if necessary)

                    content.CopyTo(stream, bufferSize);
                }
            }
        }
        catch (IOException ex)
        {
            if (retries < MaxRetries)
            {
                AppendToFile(fullPath, content, retries + 1);
                return;
            }
            throw ex;
        }
    }
}
````
````VB
Imports Microsoft.VisualBasic
Imports System.IO
Imports Telerik.Web.UI.AsyncUpload

Public Class CustomTempFileAppender
    Inherits ITempFileAppender

    Private ReadOnly _content As Stream
    Private Const MaxRetries As Integer = 10
    Public Shared Property ContentLength As Long

    Public ReadOnly Property AppendedContentLength As Long
        Get
            Return ContentLength
        End Get
    End Property

    Public Sub New()
    End Sub

    Public Sub New(ByVal stream As Stream)
        _content = stream
    End Sub

    Public Sub AppendTo(ByVal fullPath As String)
        AppendToFile(fullPath, _content)
    End Sub

    Private Sub AppendToFile(ByVal fullPath As String, ByVal content As Stream, ByVal Optional retries As Integer = 1)
        Try

            Using stream As FileStream = New FileStream(fullPath, FileMode.Append, FileAccess.Write, FileShare.ReadWrite)

                Using content

                    ContentLength = (stream.Length + content.Length)

                    Dim kiloByte As Integer = 1024 ' 1KB
                    Dim megaByte As Integer = 1000 * kiloByte ' 1MB

                    Dim bufferSize As Integer = 4 * kiloByte ' 4KB chunks (Recommended for most cases)
                    bufferSize = megaByte ' 1MB chunks (increase the buffer size if necessary)

                    content.CopyTo(stream, bufferSize)

                End Using
            End Using

        Catch ex As IOException

            If retries < MaxRetries Then
                AppendToFile(fullPath, content, retries + 1)
                Return
            End If

            Throw ex
        End Try
    End Sub
End Class
````

### Custom Upload Handler

To activate the Custom Temp File Appender, you will also need to create a [Custom Upload Handler]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}) and use it for the AsyncUpload.

In the Class constructor of the Custom Upload Handler you can access the AsyncUploadHandler Type instance, the instance properties and change their values to use the new [Custom Temp File Appender](#custom-temp-file-appender).

````C#
using System;
using System.Web;
using Telerik.Web.UI;
using Telerik.Web.UI.AsyncUpload;

public class CustomAsyncUploadHandler : AsyncUploadHandler
{
    public CustomAsyncUploadHandler() : base()
    {
        System.Reflection.Assembly a = System.Reflection.Assembly.Load("Telerik.Web.UI");
        Type t = a.GetType("Telerik.Web.UI.AsyncUpload.RequestData");

        System.Reflection.ConstructorInfo ctorInfo = t.GetConstructors()[1];

        IRequestData requestData = (IRequestData) ctorInfo.Invoke(new object[] { HttpContext.Current });

        ITempFileAppender tempFileAppender = new CustomTempFileAppender(requestData.UploadedFile.InputStream);

        this.GetType().GetProperty("FileAppender", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance).SetValue(this, tempFileAppender);
        this.GetType().GetProperty("RequestData", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance).SetValue(this, requestData);
    }

    public CustomAsyncUploadHandler(IRequestData requestData, IResponseWriter responseWriter, ITempFileAppender fileAppender) : base(requestData, responseWriter, new CustomTempFileAppender(requestData.UploadedFile.InputStream))
    {
    }
}
````
````VB
Imports Microsoft.VisualBasic
Imports System
Imports System.Web
Imports Telerik.Web.UI
Imports Telerik.Web.UI.AsyncUpload

Public Class CustomAsyncUploadHandler
    Inherits AsyncUploadHandler

    Public Sub New()
        MyBase.New()

        Dim a As System.Reflection.Assembly = System.Reflection.Assembly.Load("Telerik.Web.UI")

        Dim t As Type = a.[GetType]("Telerik.Web.UI.AsyncUpload.RequestData")

        Dim ctorInfo As System.Reflection.ConstructorInfo = t.GetConstructors()(1)

        Dim requestData As IRequestData = CType(ctorInfo.Invoke(New Object() {HttpContext.Current}), IRequestData)
        Dim tempFileAppender As ITempFileAppender = New CustomTempFileAppender(requestData.UploadedFile.InputStream)

        Me.[GetType]().GetProperty("FileAppender", System.Reflection.BindingFlags.NonPublic Or System.Reflection.BindingFlags.Instance).SetValue(Me, tempFileAppender)
        Me.[GetType]().GetProperty("RequestData", System.Reflection.BindingFlags.NonPublic Or System.Reflection.BindingFlags.Instance).SetValue(Me, requestData)
    End Sub

    Public Sub New(ByVal requestData As IRequestData, ByVal responseWriter As IResponseWriter, ByVal fileAppender As ITempFileAppender)
        MyBase.New(requestData, responseWriter, New CustomTempFileAppender(requestData.UploadedFile.InputStream))
    End Sub
End Class
````
 
 