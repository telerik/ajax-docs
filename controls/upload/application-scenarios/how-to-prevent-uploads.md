---
title: How to Prevent Uploads
page_title: How to Prevent Uploads | UI for ASP.NET AJAX Documentation
description: How to Prevent Uploads
slug: upload/application-scenarios/how-to-prevent-uploads
tags: how,to,prevent,uploads
published: True
position: 5
---

# How to Prevent Uploads



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

__RadUpload__(and any other control that uses __<input type=file>__ HTML elements for file selection and upload) automatically uploads all selected files when the user performs a postback. To prevent the automatic upload that occurs on a postback (for example in response to the click of another button on the Web page), you must clear the selected files before the postback occurs.

The following example demonstrates this approach, using the __OnClientSubmitting__ event handler.

>note The example below works only with __LinkButton__ or other controls that use the ____doPostBack__ function to initiate postback, such as __DropDownList__ or __CheckBox__ with __AutoPostBack=true__ . It will not work with a regular __ASP:Button__ . If you need to use __ASP:Button__ , you must set its __UseSubmitBehavior__ property to __false__ .
>


````ASPNET
	    <script type="text/javascript">
	        function onClientSubmitting(progressManager, args)
	        {
	          var eventTarget = document.getElementById('__EVENTTARGET');
	          if (eventTarget.value == '<%= ButtonCancel.UniqueID %>'
	                || eventTarget.value == '<%= OtherButtonWhichShouldNotUploadFiles.UniqueID %>') {
	              //Clear the file inputs
	              var upload = $find("<%= RadUpload1.ClientID %>");
	
	              var fileInputs = upload.getFileInputs();
	              for (var i = 0; fileInputs.length > i; i++) {
	                  upload.clearFileInputAt(i);
	              }
	          }
	      }
	
	    </script>
	
	    <telerik:radprogressmanager runat="server" id="RadProgressManager1" onclientsubmitting="onClientSubmitting" />
	    <telerik:radupload runat="server" id="RadUpload1" />
	    <asp:LinkButton runat="server" ID="ButtonUpload" Text="Upload" />
	    <asp:LinkButton runat="server" ID="ButtonCancel" Text="Cancel" />
	    <asp:LinkButton runat="server" ID="OtherButtonWhichShouldNotUploadFiles" Text="Other Button Which Should Not Upload Files" />
````



# See Also

 * [OnClientSubmitting]({%slug upload/client-side-programming/onclientsubmitting%})
