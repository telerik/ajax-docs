---
title: Events
page_title: Events - RadAsyncUpload
description: Check our Web Forms article about Events.
slug: asyncupload/client-side-programming/events
tags: events
published: True
position: 2
---

# Events



**RadAsyncUpload** supports the following client-side events:

## RadAyncUpload

* [OnClientAdded]({%slug asyncupload/client-side-programming/onclientadded%}) - Occurs when a row has just been added to the **RadAsyncUpload** control.

* [OnClientFileDropped]({%slug asyncupload/client-side-programming/onclientfiledropped%}) -Occurs when file(s) are dropped on some of the drop zones of **RadAsyncUpload**.

* [OnClientFilesSelected]({%slug asyncupload/client-side-programming/onclientfilesselected%}) - Occurs when the files are selected immediately after pressing the "Open" button.

* [OnClientFileSelected]({%slug asyncupload/client-side-programming/onclientfileselected%}) - Occurs when a file is selected using the file input.

* [OnClientFileUploading]({%slug asyncupload/client-side-programming/onclientfileuploading%}) -Occurs when a file upload has commenced.

* [OnClientFileUploaded]({%slug asyncupload/client-side-programming/onclientfileuploaded%}) - Occurs when a file has finished uploading.

* [OnClientFilesUploaded]({%slug asyncupload/client-side-programming/onclientfilesuploaded%}) -Occurs when all files have finished uploading.

* [OnClientValidation]({%slug asyncupload/client-side-programming/onclientvalidationfailed%}) -Occurs when a uploaded file is about to be removed from the uploaded files collection.

* [OnClientFileUploadRemoving]({%slug asyncupload/client-side-programming/onclientfileuploadremoving%}) - Occurs when a uploaded file is about to be removed from the uploaded files collection.

* [OnClientFileUploadRemoved]({%slug asyncupload/client-side-programming/onclientfileuploadremoved%}) -Occurs when a uploaded file is removed from the uploaded files collection.

* [OnClientValidationFailed]({%slug asyncupload/client-side-programming/onclientvalidationfailed%}) - Occurs when a client-side validation has failed for the selected file. A file is validated onthe client by extension and/or file size.

* [OnClientFileUploadFailed]({%slug asyncupload/client-side-programming/onclientfileuploadfailed%}) - Occurs when a file upload has failed due to an HTTP or server-side error.

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the corresponding property:

````ASPNET
<telerik:radupload id="RadUpload1" runat="server" onclientfileuploadremoving="confirmDeletes"></telerik:radupload>
````

You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard Microsoft AJAX convention:

````JavaScript
<script type="text/javascript">

	function confirmDeletes(sender, eventArgs) {
		if (!confirm("Are you sure you want to delete the selected row?")) eventArgs.set_cancel(true); 
	}
	 
	function onAddedHandler1() {
		alert("First handler called");
	}

	function onAddedHandler2() {
		alert("Second handler called"); 
	}

	function pageLoad() {
		var upload = $find("<%= RadUpload1.ClientID %>");
		upload.add_added(onAddedHandler1);
		upload.add_added(onAddedHandler2); 
	}
 </script>
````

Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
<script type="text/javascript">
	function removeOnAdded2() {
		var upload = $find("<%= RadUpload1.ClientID %>");
		upload.remove_added(onAddedHandler2); 
	}
</script>
````

Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondence between client-side and server-side names:


>caption  

| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientAdded|added|add_added, remove_added|
|OnClientFileSelected|fileSelected|add_fileSelected, remove_fileSelected|
|OnClientFileUploading|fileUploading|add_fileUploading, remove_fileUploading|
|OnClientFileUploaded|fileUploaded|add_fileUploaded, remove_fileUploaded|
|OnClientFilesUploaded|filesUploaded|add_filesUploaded, remove_filesUploaded|
|OnClientProgressUpdating|progressUpdating|add_progressUpdating, remove_progressUpdating|
|OnClientValidationFailed|validationFailed|add_validationFailed, remove_validationFailed|
|OnClientFileUploadFailed|fileUploadFailed|add_fileUploadFailed, remove_fileUploadFailed|
|OnClientFileUploadRemoving|fileUploadRemoving|add_fileUploadRemoving, remove_fileUploadRemoving|
|OnClientFileUploadRemoved|fileUploadRemoved|add_fileUploadRemoved, remove_fileUploadRemoved|

## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Client-Side Basics]({%slug asyncupload/client-side-programming/overview%})

[OnClientAdded]({%slug asyncupload/client-side-programming/onclientadded%})
