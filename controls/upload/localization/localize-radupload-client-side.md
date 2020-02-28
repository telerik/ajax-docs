---
title: Localize RadUpload Client-side
page_title: Localize RadUpload Client-side | RadUpload for ASP.NET AJAX Documentation
description: Localize RadUpload Client-side
slug: upload/localization/localize-radupload-client-side
tags: localize,radupload,client-side
published: True
position: 1
---

# Localize RadUpload Client-side



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

These examples show how to localize the **RadUpload** client-side.



Subscribe to the [OnClientAdded]({%slug upload/client-side-programming/onclientadded%}) event and define its handler as follows:

````JavaScript
		
function OnClientAddedHandler(upload, eventArgs) {
    if (upload.get_controlObjectsVisibility()) {
        var uploadElement = upload.get_element();
        var inputs = uploadElement.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var id = input.id;
            //customize the Add Button  
            if (id == upload.get_id() + "AddButton") {
                input.value = "Custom AddButton";
            }
            //customize the Remove button  
            if (id.indexOf(upload.get_id() + "remove") > -1) {
                input.value = "Delete it";
            }
            //customize the Clear button  
            if (id.indexOf(upload.get_id() + "clear") > -1) {
                input.value = "Clear it";
            }
            //customize the Select button                              
            if (input.className == "ruButton ruBrowse") {
                input.value = "Browse it";
            }
            //customize the Delete button  
            if (id == upload.get_id() + "DeleteButton") {
                input.value = "Custom Delete";
            }
        }
    }
}  
	 
````



In this way you can localize several RadUpload controls differently.
