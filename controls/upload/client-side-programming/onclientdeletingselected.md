---
title: OnClientDeletingSelected
page_title: OnClientDeletingSelected | UI for ASP.NET AJAX Documentation
description: OnClientDeletingSelected
slug: upload/client-side-programming/onclientdeletingselected
tags: onclientdeletingselected
published: True
position: 3
---

# OnClientDeletingSelected



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The __OnClientDeletingSelected__ client-side event occurs when the selected rows are about to be deleted in response to the __Delete__ button or a call to the __deleteSelectedFileInputs()__ method.

The event handler receives two parameters:

1. The instance of the __RadUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __set_cancel__ lets you prevent the selected rows from being deleted.

* __get_cancel__ returns whether the deletion has been cancelled.

* __get_fileInputFields__ returns an array containing the file input fields that are about to be deleted.

* __get_rows__ returns an array containing the rows that are about to be deleted

* __get_rowIndexes__ returns an array containing the indexes of the rows to be deleted

The following example uses the __OnClientDeletingSelected__ event to confirm the deletion of rows where at least one selected row has a selected file:

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
