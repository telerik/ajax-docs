---
title: OnClientFileSelected
page_title: OnClientFileSelected | UI for ASP.NET AJAX Documentation
description: OnClientFileSelected
slug: upload/client-side-programming/onclientfileselected
tags: onclientfileselected
published: True
position: 5
---

# OnClientFileSelected



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The __OnClientFileSelected__ client-side event occurs when a file is selected in a file input control: either when the control loses focus after the user types in a value, or when the user selects a file using the browser.

The event handler receives two parameters:

1. The instance of the __RadUpload__ control firing the event.

1. An eventArgs parameter containing the following method:

* __get_fileInputField__ returns the file input field for the file that was just selected.

* __get_row__ returns the row containing the file input field for the file that wasjust selected (<LI> element)

* __get_rowIndex__ returns the index of the row

The following example clears the file input field if the selected file has an invalid extension:

````ASPNET
	    <telerik:radupload id="RadUpload1" runat="server" allowedfileextensions=".zip,.txt"
	        onclientfileselected="checkExtension" />
	    <script type="text/javascript">
	
	        function checkExtension(radUpload, eventArgs) {
	            var input = eventArgs.get_fileInputField();
	            if (!radUpload.isExtensionValid(input.value)) {
	                var inputs = radUpload.getFileInputs();
	                for (i = 0; inputs.length > i; i++) {
	                    if (inputs[i] == input) {
	                        alert(input.value + " does not have a valid extension.");
	                        radUpload.clearFileInputAt(i);
	                        break;
	                    }
	                }
	            }
	        }
	    
	    </script>
````


