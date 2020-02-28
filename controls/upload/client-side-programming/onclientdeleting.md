---
title: OnClientDeleting
page_title: OnClientDeleting | RadUpload for ASP.NET AJAX Documentation
description: OnClientDeleting
slug: upload/client-side-programming/onclientdeleting
tags: onclientdeleting
published: True
position: 4
---

# OnClientDeleting



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **OnClientDeleting** client-side event occurs when a row is about to be deleted in response to the **Remove** button or a call to the **deleteFileInputAt()** method.

>note This event does not occur when selected rows are deleted in response to the **Delete** button or a call to the **deleteSelectedFileInputs()** method.
>


The event handler receives two parameters:

1. The instance of the **RadUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the row from being deleted.

	* **get_cancel** returns whether the deletion has been cancelled.

	* **get_fileInputField** returns the file input field that is about to be deleted.

	* **get_row** returns the row that is about to be deleted (`<LI>` element)

	* **get_rowIndex** returns the index of the row

The following example uses the **OnClientDeleting** event to confirm the deletion of rows where the file input field has a selected file:

````ASPNET
<telerik:radupload runat="server" id="RadUpload1" onclientdeleting="confirmDeletion" />
<script type="text/javascript">
    function confirmDeletion(radUpload, eventArgs) {
        var input = eventArgs.get_fileInputField();
        if (input.value.length > 0) {
            var msg = "Deleting this input means that the file '" + input.value + "' will not be uploaded. Do you want to continue?";
            eventArgs.set_cancel(!confirm(msg));
        }
    }
</script>
````





# See Also

 * [OnClientDeletingSelected]({%slug upload/client-side-programming/onclientdeletingselected%})
