---
title: OnClientDeleting
page_title: OnClientDeleting | UI for ASP.NET AJAX Documentation
description: OnClientDeleting
slug: upload/client-side-programming/onclientdeleting
tags: onclientdeleting
published: True
position: 4
---

# OnClientDeleting



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The __OnClientDeleting__ client-side event occurs when a row is about to be deleted in response tothe __Remove__ button or a call to the __deleteFileInputAt()__ method.

>note This event does not occur when selected rows are deleted in response to the __Delete__ button or a call to the __deleteSelectedFileInputs()__ method.
>


The event handler receives two parameters:

1. The instance of the __RadUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __set_cancel__ lets you prevent the row from being deleted.

* __get_cancel__ returns whether the deletion has been cancelled.

* __get_fileInputField__ returns the file input field that is about to be deleted.

* __get_row__ returns the row that is about to be deleted (<LI> element)

* __get_rowIndex__ returns the index of the row

The following example uses the __OnClientDeleting__ event to confirm the deletion of rows where the file input field has a selected file:

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
