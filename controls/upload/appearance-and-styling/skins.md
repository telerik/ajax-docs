---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: upload/appearance-and-styling/skins
tags: skins
published: True
position: 3
---

# Skins



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


__RadUpload__ and __RadProgressArea__ use __skins__ to controltheir overall look-and-feel. A skin is a set of images and a CSS stylesheet that can be applied to the control elements (items,images, etc.) and defines their look and feel. To apply a skin to a __RadUpload__ or__RadProgressArea__ control, set its __Skin__ property, either using the propertiespane or the control's [Smart Tag]({%slug upload/design-time%}).

__RadUpload__ and __RadProgressArea__ are installed with a number of preset skins:

![Skins Thumb](images/upload_skins_thumb.png)

>note Since Q1 2013 three new skins have been added for RadUpload(BlackMetroTouch, Glow and Silk).
>


## Not using skins

If you do not set the __Skin__ property, __RadUpload__ and __RadProgressArea__automatically use the "Default" skin. If you do not want to use a skin with your control, set its __Skin__ property to anempty string and set the __EnableEmbeddedSkins__ property to __False__.

On __RadUpload__, you can also eliminate the skin from the file input area alone by setting the__EnableFileInputSkinning__ property. For information about this property, see[File Input Appearance]({%slug upload/appearance-and-styling/file-input-appearance%}).

## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a stylesheet. When creating your own,it is a good idea to start with the stylesheet for an existing skin and alter that. See [Tutorial:Creating a Custom Skin]({%slug upload/appearance-and-styling/tutorial-on-creating-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the control to __False__.

The stylesheet for a __RadUpload__ skin has the name __Upload.[SkinName].css__ and can befound in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/Upload__directory. For example, the stylesheet for the "Black" skin is called Upload.Black.css and is located in the ...Skins/Black directory.The images are found in the ...Skins/Black/Upload directory. The images are referenced by name from within the stylesheet.

For more information on the CSS File structure, see [Understanding the Skin CSS File]({%slug upload/appearance-and-styling/understanding-the-skin-css-file%}).
