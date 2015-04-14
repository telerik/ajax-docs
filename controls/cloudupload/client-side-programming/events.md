---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: cloudupload/client-side-programming/events
tags: events
published: True
position: 0
---

# Events



**RadCloudUpload** also supports a number of client-side events that helps you further customize the behavior of the control. Below you can find a list of the available ones that you can use.

## RadCloudUpload

* [OnClientLoad]({%slug cloudupload/client-side-programming/events/onclientload%}) - Occurs after the **RadCloudUpload** has been fully initialized on the client-side

* [OnClientFilesSelecting]({%slug cloudupload/client-side-programming/events/onclientfilesselecting%}) - Occurs when the files are just about to be processed.

* [OnClientFileSelected]({%slug cloudupload/client-side-programming/events/onclientfileselected%}) - Occurs when a file is selected.

* [OnClientFileUploading]({%slug cloudupload/client-side-programming/events/onclientfileuploading%}) - Occurs when the **RadCloudUpload** starts to upload the specified file to the Cloud Storage Provider.

* [OnClientFileUploaded]({%slug cloudupload/client-side-programming/events/onclientfileuploaded%}) - Occurs when a file has finished uploading to the Cloud Storage Provider.

* [OnClientFilesUploaded]({%slug cloudupload/client-side-programming/events/onclientfilesuploaded%}) - Occurs when the files has finished uploading to the Cloud Storage Provider.

* [OnClientFileUploadFailed]({%slug cloudupload/client-side-programming/events/onclientuploadfailed%}) - Occurs when a file upload has failed due to a server-side error.

* [OnClientFileUploadRemoving]({%slug cloudupload/client-side-programming/events/onclientfileuploadremoving%}) - Occurs when a file is about to be removed from the **FileListPanel**.

* [OnClientFileUploadRemoved]({%slug cloudupload/client-side-programming/events/onclientfileuploadremoved%}) - Occurs when an uploaded file is removed from the **FileListPanel**.

* [OnClientValidationFailed]({%slug cloudupload/client-side-programming/events/onclientvalidationfailed%}) - Occurs when a validation has failed for the selected file.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the corresponding property:
