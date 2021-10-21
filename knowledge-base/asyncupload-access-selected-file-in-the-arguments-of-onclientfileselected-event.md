---
title: Access selected file in the arguments of OnClientFileSelected event of AsyncUpload
description: Access selected file in the arguments of OnClientFileSelected event of AsyncUpload. Check it now!
type: how-to
page_title: Access selected file in the arguments of OnClientFileSelected event of AsyncUpload
slug: asyncupload-access-selected-file-in-the-arguments-of-onclientfileselected-event
res_type: kb
---


## Problem

Files are not available in the [OnClientFileSelected]({%slug asyncupload/client-side-programming/onclientfileselected%}) event of the **RadAsyncUpload**.

## Description

Having the files available in the arguments of the event could be useful when the file is needed for some processing on the client before uploading. Few examples are:
 - Preview an image prior uploading;
 
 - Additional validation to determine should the upload of the file should be terminated.


## Solution

Overriding the private *\_onFileSelected* function to pass the file would make it accessible in the OnClientFileSelected event handler via *args.get\_file()* method.

Placing the following workaround below the ScriptManager should enable the file access via the arguments:

````JavaScript
var $ = $ || $telerik.$;
Telerik.Web.UI.RadAsyncUpload.prototype._onFileSelected = function (row, fileInput, fileName, shouldAddNewInput, file) {
    var args = {
        row: row,
        fileInputField: fileInput,
        file: file
    };
  
    args.rowIndex = $(row).index();
    args.fileName = fileName;
    this._selectedFilesCount++;
  
    shouldAddNewInput = shouldAddNewInput &&
        (this.get_maxFileCount() == 0 || this._selectedFilesCount < this.get_maxFileCount());
  
    this._marshalUpload(row, fileName, shouldAddNewInput);
  
    var labels = $("label", row);
    if (labels.length > 0)
        labels.remove();
  
    $.raiseControlEvent(this, "fileSelected", args);
}
````

Then, in the OnClientFileSelected event, the file should be accessible as follows:

````ASPX
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileSelected="OnClientFileSelected" />
<script>   
    function OnClientFileSelected(sender, args) {
        var file = args.get_file();
        if (file) {
            // use the file
        }
    }
</script>
````


 