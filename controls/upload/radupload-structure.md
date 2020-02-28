---
title: RadUpload Structure
page_title: RadUpload Structure | RadUpload for ASP.NET AJAX Documentation
description: RadUpload Structure
slug: upload/radupload-structure
tags: radupload,structure
published: True
position: 3
---

# RadUpload Structure



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [ documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **RadUpload** control is laid out in rows, as shown below:

![Structure](images/upload_structure.png)

* The number of rows is controlled by the **InitialFileInputsCount** and **MaxFileInputsCount** properties.

* Each row always contains a **file input area**, which behaves like an HTML **input** element with **type** set to "file", but has a more customizable look and feel.

* To the left of the file input area appears an optional **check box**. The check box allows users to select a row for deletion. The check box appears if the **ControlObjectsVisibility** property includes "CheckBoxes".

* To the right of the file input area appear an optional **clear button** and/or **remove button**. The clear button deletes the current value in the file input area, and the remove button deletes the entire row. These buttons appear if the **ControlObjectsVisibility** property includes "ClearButtons" and/or "RemoveButtons".

* Below the rows appears the optional **add button**. The add button lets users add additional rows (up to **MaxFileInputsCount**). The add button appears if the **ControlObjectsVisibility** property includes "AddButton".

* Also below the rows appears the optional **delete selected button**. This button behaves like the remove buttons, except that it operates on all rows that are selected using the check boxes. The delete selected button appears if the **ControlObjectsVisibility** property include "DeleteSelectedButton"



# See Also

 * [Configure the UI of RadUpload]({%slug upload/how-to/configure-the-ui-of-radupload%})

 * [File Input Appearance]({%slug upload/appearance-and-styling/file-input-appearance%})
