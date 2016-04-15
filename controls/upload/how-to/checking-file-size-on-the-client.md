---
title: Checking File Size on the Client
page_title: Checking File Size on the Client | RadUpload for ASP.NET AJAX Documentation
description: Checking File Size on the Client
slug: upload/how-to/checking-file-size-on-the-client
tags: checking,file,size,on,the,client
published: True
position: 3
---

# Checking File Size on the Client



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

When [validating selected files in client-side code]({%slug upload/validation/client-side-validation%}), you can only check the file extensions. Information about the file sizes is not available on the client until files are uploaded. Once the upload begins, however, **RadProgressManager** relays to **RadProgressArea** information from the sever,including the combined file size.

While it is not possible to check the file size before upload begins, you can use the client-side **OnClientProgressUpdating** event to access information about the file size when it first becomes available.

>note You may need to set [maxRequestLength]({%slug upload/uploading-files/uploading-large-files%}) to a large value so that the user does not get "Page not found" errors, which cannot be handled, when selecting very large files
>


The following example illustrates how to use **OnClientProgressUpdating** to check the size of uploaded files (in bytes) after the upload process starts. This event occurs every time the **RadProgressArea** updates, so you need to use a custom variable to flag when the check has already occurred.

>caution When the upload request is cancelled, the page refreshes and all information entered in the **RadUpload** control is lost.
>


````ASPNET
	     
<script type="text/javascript">  
function checkUploadedFilesSize(progressArea, args)  {
    //progressArea.confirmed is a custom variable,    
    // you can use another if you want to    
    if (!progressArea.confirmed &&
    args.get_progressData().RadUpload.RequestSize > 1000000) {
        if (confirm("The total size of the selected files" +
                          " is more than the limit." +
                                            " Do you want to cancel the upload?")) {
            progressArea.cancelRequest();
        }
        else {
            progressArea.confirmed = "confirmed";
        }
    }
}
</script>
<telerik:RadUpload runat="server" id="RadUpload1" />
<telerik:RadProgressArea RenderMode="Lightweight" runat="server" id="RadProgressArea1"  OnClientProgressUpdating ="checkUploadedFilesSize" />
<telerik:RadProgressManager runat="server" id="RadProgressManager1" />
<asp:Button runat="server" id="Button1" text="Upload" />
				
````



>caution The current mechanism for canceling a file upload sometimes does not notify the server for the performed action and the latter continues toprocess the upload request. This often happens on Windows 2003 Server with a browser other than IE6.
>Furthermore, while the confirmation dialog is displayed, the form submission continues, which means that the file is still being uploaded.
>

