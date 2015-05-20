---
title: Tutorial - Creating a Custom Skin
page_title: Tutorial - Creating a Custom Skin | RadSlider for ASP.NET AJAX Documentation
description: Tutorial - Creating a Custom Skin
slug: slider/appearance-and-styling/tutorial-creating-custom-skin
tags: tutorial, creating,custom,skin,custom skin
published: True
position: 3
---

# Tutorial: Creating a Custom Skin

The following tutorial demonstrates creating a custom RadSlider skin, using the default skin as a base. This new skin will take the appearance of the slider from its default look: 

![](images/slider-appearance002.png)

...to the following:

![](images/slider-appearance003.png)

See [Understanding the Skin CSS File]({% slug slider/appearance-and-styling/understanding-the-skin-css-file %}) for more information on specific CSS file properties. 

## Prepare the Project

1. In a new AJAX enabled application web form, add a **RadSlider**. Set the **EnabledEmbeddedSkins** property to **false**.

1. In the Solution Explorer, create a new "MySkin" directory in your project.

1. Copy the default RadSlider skin files from the installation directory to the "MySkin" directory; copy both the \Slider directory that contains the images for this skin and the Slider.Default.css file that defines the skin styles.

	>note The file path will typically be similar to this example: _\Program Files\Telerik\<Your Version of Telerik UI for ASPNET>\Skins\Default_.
	
1. The solution should now look something like the screenshot below:
	
	![](images/slider-appearance006.png)
	
1. In the Solution Explorer, rename "Slider.Default.css" to "Slider.MySkin.css".

	![](images/slider-appearance007.png)
	
## Edit the Skin CSS File

1. Open "Slider.MySkin.css" for editing in Visual Studio.

1. Press **Control-H** to invoke the Find and Replace dialog. 

1. Set **Find what**: to "_Default", **Replace with**: to "_MySkin", and **Look in**: to **Current Document**.

1. Click the **Replace All** button. 

1. ![](images/slider-appearance009.png)

1. The style sheet should now look something like the example below.

1. ![](images/slider-appearance010.png)

1. From the Solution Explorer drag the "Slider.MySkin.css" to the design surface of the form. This step will automatically add a reference to the page `<head>` tag as a `<link>` as shown in the screenshot below.

	![](images/slider-appearance011.png)
	
1. Change the **Skin** property of your RadSlider control to "MySkin". 

1. Run the application. The new skin looks just like the Default skin:

	![](images/slider-appearance002.png)
	
1. **Modify the Graphics**

1. In MSPaint or other drawing tool of your choice, open the file "DragHandle.gif" for editing. This image contains the slider drag handle in three states. Change the coloring to use a blue color as a base and save the file. The coloring changes the image from this:

	![](images/slider-appearance004b.png)
	
1. ... to looking something like this:

	![](images/slider-appearance004.png)
		
1. Also edit the "Handles.gif" graphic to use blue coloring so that it changes from the starting appearance:

	![](images/slider-appearance008.png)
	
1. ...to looking something like this:

	![](images/slider-appearance008b.png)
	
## Edit the Skin CSS File

1. Run your application and notice the new handle colors:

	![](images/slider-appearance012.png)
	
1.  The selection and track areas are dark brown and white respectively. You will need to modify the stylesheet to alter the selection and track areas. Before starting to modifying the style sheet, take a look at this abbreviated DOM-tree of **RadSlider**:

	**HTML**
	
		<div class="RadSlider RadSlider_Default" id="RadSlider1">  
		   <div class="rslHorizontal" id="RadSliderWrapper_RadSlider1">  
			   ...   
			   <div class="rslTrack" id="RadSliderTrack_RadSlider1">           
				   <div class="rslSelectedregion" id="RadSliderSelected_RadSlider1"> </div>         
				   ...
			   </div>        
			   ...  
		   </div>
		</div>
		
	The classes that control the appearance for the selected region (to the left of the drag handle) and the track (visible on the right of the drag handle) are "rslSelectedregion" and "rslTrack" respectively. Change "rslSelectedregion" to use "Blue" for the background color.
	
	**CSS**
	
		.RadSlider_MySkin .rslHorizontal .rslSelectedregion
		{ 
			background:Blue none repeat scroll 0%; 
			height:6px;
		}

1. Change the "rslTrack" style to use "AliceBlue" for the background color, border-bottom to use "Blue" color and border-top to use "DarkBlue".

	**CSS**
		
		.RadSlider_MySkin .rslHorizontal .rslTrack
		{ 
			background:AliceBlue none repeat scroll 0%; 
			border-bottom:1px solid Blue; 
			border-top:1px solid DarkBlue; 
			height:3px; 
			left:12px; 
			margin-top:6px; 
			top:0pt;
		}
		
1. Press F5 to run the application. Notice that both the graphics and background colors have changed.

	![](images/slider-appearance003.png)
	
For more information about Cascading Style Sheets, see

* [World Wide Web Consortium CSS specifications](http://www.w3.org/Style/CSS/)
* [W3 Schools CSS tutorial](http://www.w3schools.com/css/default.asp)
* [Guide to Cascading Style Sheets](www.htmlhelp.com/reference/css/)

## See Also

* [Understanding the Skin CSS File]({%slug slider/appearance-and-styling/understanding-the-skin-css-file%})

* [CSS Classes]({%slug slider/appearance-and-styling/css-classes%})




 
