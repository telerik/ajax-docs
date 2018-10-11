---
title: OnClientAdding
page_title: OnClientAdding | RadUpload for ASP.NET AJAX Documentation
description: OnClientAdding
slug: upload/client-side-programming/onclientadding
tags: onclientadding
published: True
position: 7
---

# OnClientAdding



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **OnClientAdding** client-side event occurs when a new row is about to be added to the **RadUpload** control.

>tip This event occurs for the initial rows that are added when the **RadUpload** control is first loaded, as well as any rows added in response to the **Add** button or client-side methods such as **addFileInput()** .
>


The event handler receives two parameters:

1. The instance of the **RadUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the **RadUpload** control from adding a new row.

	* **get_cancel** returns a boolean value indicating whether the addition of a row was cancelled.

	* **get_row** returns the row that is about to be added (`<LI>` element)

	* **get_rowIndex** returns the index of the row

The following example uses the **OnClientAdding** event to confirm the addition of new rows beyond the initial file inputs:

````ASPNET
	     
<telerik:RadUpload  runat="server"  id="RadUpload1"  OnClientAdding="confirmAddition" />
<script type="text/javascript">
    function confirmAddition(upload, args) {
        if (upload.getFileInputs().length >= upload.get_initialFileInputsCount())
            args.set_cancel(!confirm("Are you sure you want to add a new file input?"));
    } 

</script>
				
````



# See Also

 * [OnClientAdded]({%slug upload/client-side-programming/onclientadded%})
