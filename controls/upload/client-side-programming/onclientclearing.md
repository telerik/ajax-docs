---
title: OnClientClearing
page_title: OnClientClearing | UI for ASP.NET AJAX Documentation
description: OnClientClearing
slug: upload/client-side-programming/onclientclearing
tags: onclientclearing
published: True
position: 8
---

# OnClientClearing



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The __OnClientClearing__ client-side event occurs when the value of a file input is about to be cleared.

The event handler receives two parameters:

1. The instance of the __RadUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __set_cancel__ lets you prevent the file input from being cleared.

* __get_cancel__ returns whether the clearing of the file input has been cancelled.

* __get_fileInputField__ returns the file input field that is about to be cleared.

* __get_row__ returns the row that is about to be cleared (<LI> element)

* __get_rowIndex__ returns the index of the row

The following example uses the __OnClientClearing__ event to display a confirmation dialog:

````ASPNET
	    <telerik:radupload runat="server" id="RadUpload1" onclientclearing="confirmClear" />
	    <script type="text/javascript">
	        function confirmClear(radUpload, eventArgs) {
	            //Check if the input field to be cleared has a file selected    
	            if (eventArgs.get_fileInputField().value.length > 0) {
	                eventArgs.set_cancel(!confirm("Are you sure you want to clear this field?"));
	            }
	        }
	    </script>
````


