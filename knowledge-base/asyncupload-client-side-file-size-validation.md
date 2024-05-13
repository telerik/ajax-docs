---
title: Client-Side file size validation
description: Client-Side file size validation. Check it now!
type: how-to
page_title: Client-Side file size validation. | RadAsyncUpload
slug: asyncupload-client-side-file-size-validation
res_type: kb
tags: asyncupload, validation, client side validation, async upload client side validation, telerik, telerik ajax
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms AsyncUpload for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

The aim of the article is to gain some kind of client side validation to restrict users from adding more than a pre-determined limit of files based upon total size of all uploaded files, not just each file or number of files.

## Solution

This JavaScript code enforces client-side validation to prevent users from uploading more files than a preset limit based on the total size of all files uploaded, handling duplicate file detection and exceeding total size limits while providing real-time feedback during the upload process.

````ASP.NET
<table>
    <tr>
        <td colspan="2">You may attach up to 20mb in files to the Email.</td>
    </tr>
    <tr>
        <td>Select File(s):</td>
        <td>
            <telerik:RadAsyncUpload ID="RadAsyncUpload1"
                OnClientFileSelected="OnFileSelected"
                OnClientFileUploadFailed="OnFileUploadFailed"
                OnClientFilesUploaded="OnFilesUploaded"
                OnClientProgressUpdating="OnProgressUpdating"
                OnClientFileUploaded="OnFileUploaded"
                OnClientFileUploadRemoved="OnFileUploadRemoved"
                runat="server">
            </telerik:RadAsyncUpload>
        </td>
    </tr>
</table>
````

````JavaScript
var uploadsInProgress = 0;
var MAX_TOTAL_BYTES = 20971520;
var filesSize = new Array();
var OVERSIZE_MESSAGE = "You are only allowed to add up to 20mb of files total";
var isDuplicateFile = false;

function OnFileSelected(sender, args) {
    for (var fileindex in sender._uploadedFiles) {
        if (sender._uploadedFiles[fileindex].fileInfo.FileName == args.get_fileName()) {
            isDuplicateFile = true;
        }
    }

    if (!uploadsInProgress) {
        $("input[id$=btnSave]").attr("disabled", "disabled");
    }
    uploadsInProgress++;
}

function OnFilesUploaded(sender, args) {
    if (sender._uploadedFiles.length == 0) {
        filesSize = new Array();
        uploadsInProgress = 0;
        $("input[id$=btnSave]").removeAttr("disabled");
    }

    if (uploadsInProgress > 0) {
        DecrementUploadsInProgress();
    }
}

function OnProgressUpdating(sender, args) {
    filesSize[args.get_data().fileName] = args.get_data().fileSize;
}

function OnFileUploadFailed(sender, args) {
    DecrementUploadsInProgress();
}

function OnFileUploaded(sender, args) {
    DecrementUploadsInProgress();
    var totalBytes = 0;
    var numberOfFiles = sender._uploadedFiles.length;

    if (isDuplicateFile) {
        sender.deleteFileInputAt(numberOfFiles - 1);
        isDuplicateFile = false;
        sender.updateClientState();
        alert("You can't add the same file twice");
        return;
    }

    for (var index in filesSize) {
        totalBytes += filesSize[index];
    }

    if (totalBytes > MAX_TOTAL_BYTES) {
        sender.deleteFileInputAt(numberOfFiles - 1);
        sender.updateClientState();
        alert(OVERSIZE_MESSAGE);
    }
}

function OnFileUploadRemoved(sender, args) {
    if (args.get_fileName() != null) {
        if (!isDuplicateFile) {
            delete filesSize[args.get_fileName()];
        }
    }
}

function DecrementUploadsInProgress() {
    uploadsInProgress--;
    if (!uploadsInProgress) {
        $("input[id$=btnSave]").removeAttr("disabled");
    }
}
````

   