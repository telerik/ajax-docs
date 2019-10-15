---
title: Access temporary file name and manually delete tempfile from RadAsyncUpload
description: Accessing temporary files from UploadFile in RadAsyncUpload to get the name and remove the file manually
type: how-to
page_title: Accessing Temporary files - RadAsyncUpload | Telerik UI for ASP.NET AJAX
slug: asyncupload-access-temporary-file
position: 
tags: temporaryfile, asyncupload, manually, delete, delete temporary file, temporary file name
ticketid: 1430047
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.2.514</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadAsyncUpload for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The [temporary files](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview#temporary-files) used by the AsyncUpload reside in the temporary folder and have .tmp as extension. 
The uploaded files can be accessed via the UploadedFiles collection of the AsyncUpload or via the arguments of the FileUploaded event. The UploadedFile type provided by the AsyncUpload does not have a direct reference to the temporary file or temporary file name. The access can be done via the InputStream of the file. 

## Solution
The InputStream can be casted as FileStream in order to have access to the name of the temporary file. The casted stream should be closed after usage, otherwise it will cause "The file is being used from another process" error. Below you can find examples showing how to remove temporary files either in a button click or the FileUploaded event.

````ASPNET
<telerik:RadButton runat="server" ID="RadButton1" Text="Postback" AutoPostBack="true" OnClick="RadButton1_Click" />

<telerik:RadAsyncUpload runat="server" OnFileUploaded="RadAsyncUpload1_FileUploaded" ID="RadAsyncUpload1"></telerik:RadAsyncUpload>
````

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    foreach (UploadedFile file in RadAsyncUpload1.UploadedFiles)
    {
        bool isTempFileThere;
        string tempFileName = string.Empty;

        //accessing the Name property tests the file internally (the stream behavior), so we need to try-catch this
        //try adding a TargetFolder setting to the async upload and you will see the difference in behavior
        try
        {
            // when we cast the stream, we need to dispose in order to be able to manipulate the file
            // otherwise, "The file is being used from another process" error will appear
            using (var filestream = file.InputStream as System.IO.FileStream)
            {
                tempFileName = filestream.Name;
                isTempFileThere = System.IO.File.Exists(tempFileName);
            }

        }
        catch (System.IO.FileNotFoundException ex)
        {
            isTempFileThere = false;
        }
        if (isTempFileThere)
        {
            System.IO.File.Delete(tempFileName);
        }
    }
}

protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{
    //bool isTempFileThere;
    //string tempFileName = string.Empty;

    ////accessing the Name property tests the file internally (the stream behavior), so we need to try-catch this
    ////try adding a TargetFolder setting to the async upload and you will see the difference in behavior
    //try
    //{
    //    // when we cast the stream, we need to dispose in order to be able to manipulate the file
    //    // otherwise, "The file is being used from another process" error will appear
    //    using (var filestream = e.File.InputStream as System.IO.FileStream)
    //    {
    //        tempFileName = filestream.Name;
    //        isTempFileThere = System.IO.File.Exists(tempFileName);
    //    }

    //}
    //catch (System.IO.FileNotFoundException ex)
    //{
    //    isTempFileThere = false;
    //}
    //if (isTempFileThere)
    //{
    //    System.IO.File.Delete(tempFileName);
    //}
}
````


## See Also

* [Temporary files in AsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview#temporary-files)
* [How to Manipulate the Uploaded Files](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-manipulate-the-uploaded-files)
* [How to delete temporary file](https://www.telerik.com/forums/how-to-delete-temporary-file) forum thread
