---
title: OnClientDeletingSelected
page_title: OnClientDeletingSelected | RadUpload for ASP.NET AJAX Documentation
description: OnClientDeletingSelected
slug: upload/client-side-programming/onclientdeletingselected
tags: onclientdeletingselected
published: True
position: 3
---

# OnClientDeletingSelected



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **OnClientDeletingSelected** client-side event occurs when the selected rows are about to be deleted in response to the **Delete** button or a call to the **deleteSelectedFileInputs()** method.

The event handler receives two parameters:

1. The instance of the **RadUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the selected rows from being deleted.

	* **get_cancel** returns whether the deletion has been cancelled.

	* **get_fileInputFields** returns an array containing the file input fields that are about to be deleted.

	* **get_rows** returns an array containing the rows that are about to be deleted

	* **get_rowIndexes** returns an array containing the indexes of the rows to be deleted

The following example uses the **OnClientDeletingSelected** event to confirm the deletion of rows where at least one selected row has a selected file:

````ASPNET
<telerik:RadUpload runat="server" id="RadUpload1" onclientdeletingselected="confirmDeletions">
<telerik:RadUpload>
````



````JavaScript
function confirmDeletions(radUpload, eventArgs) {
    var inputs = eventArgs.get_fileInputFields();
    var filesSelected = false;
    for (i = 0; i<inputs.length; i++) {
        if (inputs[i].value.length > 0) {
            filesSelected = true;
            break;
        }
    }
    if (filesSelected) {
        eventArgs.set_cancel(!confirm("You have selected files that will not be uploaded if" +
            " you delete the selected controls. Do you want to continue anyway?"));
    }
}
````



# See Also

 * [OnClientDeleting]({%slug upload/client-side-programming/onclientdeleting%})
