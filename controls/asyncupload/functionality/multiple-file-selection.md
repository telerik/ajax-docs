---
title: Multiple File Selection
page_title: Multiple File Selection | RadAsyncUpload for ASP.NET AJAX Documentation
description: Multiple File Selection
slug: asyncupload/functionality/multiple-file-selection
tags: multiple,file,selection
published: True
position: 5
---

# Multiple File Selection



## Multiple File Selection

With **RadAsyncUpload** it is possible to select multiple files. You can set the **MultipleFileSelection** property to "Automatic". Multiple file selection is possible only when you are using the FileApi, Silverlight or Flash [upload module]({%slug asyncupload/upload-modules%}).

When you set the **Multiple file selection**, the user can select more than one file from the File Upload dialog box by holding the Ctrl key or they can click on a file, then hold Shift down, and click on another file so all the files between them are selected(Apple computers support this using the Command key). The image below shows using the Ctrl key to choose several files.![asyncupload multiple File Selection 1](images/asyncupload_multipleFileSelection1.png)

## Succession of the client events

After the user selects files and clicks "Open", the [OnClientFilesSelected]({%slug asyncupload/client-side-programming/onclientfilesselected%}) event is invoked and after that the [OnClientFileSelected]({%slug asyncupload/client-side-programming/onclientfileselected%}) event is fired for every separate file.

If the first file passes validation, [OnClientFileUploading]({%slug asyncupload/client-side-programming/onclientfileuploading%}) is thrown and if the selected file is successfully uploaded, the [OnClientFileUploaded]({%slug asyncupload/client-side-programming/onclientfileuploaded%}) event is thrown. If the file upload fails, the [OnClientFileUploadFailed]({%slug asyncupload/client-side-programming/onclientfileuploadfailed%}) event is thrown instead. If the selected file does not pass the validation, [OnClientValidationFailed]({%slug asyncupload/client-side-programming/onclientvalidationfailed%}) is thrown instead of **OnClientFileUploading** event. In such case any other event that follows are not reached at all for this file.

This succession is repeating for each one or the selected files and after the last one is uploaded the [OnClientFilesUploaded]({%slug asyncupload/client-side-programming/onclientfilesuploaded%}) event is fired.

>note Currently setting **MultipleFileSelection=Automatic** and **MaxFileInputsCount** at the same time is not supported scenario with **RadAsyncUpload** .
>


>note In cases with **Mobile Devices** and **Tablets** if you want to have the ability to upload files from the camera by taking picture after the **Select** button is clicked the **MultipleFileSelection="Disabled"** should be set. Otherwise only the already existing files will be possible for upload.
>


## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Manual Upload]({%slug asyncupload/functionality/manual-upload%})

[Manipulating Query String Parameters In The Upload Handler]({%slug asyncupload/functionality/manipulating-query-string-parameters-in-the-upload-handler%})
