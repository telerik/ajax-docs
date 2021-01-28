---
title: HTML Output and CSS Styling
page_title: HTML Output and CSS Styling - RadDataForm
description: Check our Web Forms article about HTML Output and CSS Styling.
slug: dataform/appearance-and-styling/html-output-and-css-styling
tags: html,output,and,css,styling
published: True
position: 1
---

# HTML Output and CSS Styling



## 

In this help article you will find helpful information about the HTML Output and CSS styles that the **RadDataForm** generates.

By default the control has an elastic and fluid behavior and can be easily styled according to the preferences. Complimenting all that are threepredefined templates that can be used to align the labels and input elements inside that layout. Below you can find the HTML output, in view mode, of a simple **RadDataFom** generated through the designer.

````ASPNET
<div class="RadDataForm RadDataForm_Silk rdfRightAligned rdfNoFieldHint rdfNoFieldHint">
    <fieldset class="rdfFieldset rdfBorders">
        <legend class="rdfLegend">Product</legend>
        <div class="rdfRow">
            <span id="Span1" class="rdfLabel">Name:</span>
            <span id="Span2" class="rdfFieldValue">Chai</span>
        </div>
        <div class="rdfRow">
            <span id="Span3" class="rdfLabel">ProductID:</span>
            <span id="Span4" class="rdfFieldValue">1</span>
        </div>
        <div class="rdfCommandButtons">
            <hr class="rdfHr">
            <span class="RadButton RadButton_Silk rbLinkButton rbRounded" title="Insert"
                tabindex="0"><span class="rbText">Insert</span><input type="hidden" autocomplete="off"/></span>
            <span class="RadButton RadButton_Silk rbLinkButton rbRounded" title="Edit"
                tabindex="0"><span class="rbText">Edit</span><input type="hidden" autocomplete="off"/></span>
            <span class="RadButton RadButton_Silk rbLinkButton rbRounded" title="Delete"
                tabindex="0"><span class="rbText">Delete</span><input type="hidden" autocomplete="off"/></span>
        </div>
    </fieldset>
    <div class="rdfPager rdfPagerRight">
        <span>
            <input type="submit" class="rdfFirst" title="First"/>
            <input type="submit" class="rdfPrev" title="Previous"/>
        </span>
        <span>
            <input type="submit" class="rdfNext" title="Next"/>
            <input type="submit" class="rdfLast" title="Last"/>
        </span>
    </div>
</div>
````



As you can see from the above markup the layout consists of the following.

* A wrapping div element with a **RadDataForm** class.

* A fieldset that is used to semantically group the form elements.

* Rows, represented by div elements with a **rdfRow** class assigned to them.

* Span elements with a **rdfLabel** and **rdfFieldValue** classes thatdisplay the field name and value.

* Pager, containing four buttons each with a unique class.

In edit/insert mode the layout is similar with the slight difference that the rows contain a label and a span element holding an input.

````ASPNET
<div class="rdfRow">
  <label class="rdfLabel">Units:k</label>
  <span class="riSingle RadInput RadInput_Silk rdfInput" style="width:160px;">
      <input class="riTextBox riEnabled" value="39" type="text">
      ...
  </span>
</div>
````



## Controlling appearance

**RadDataForm** has predefined metrics that can be easily overwritten using CSS. For example if you want to changethe width of the control you can define the following style

````ASPNET
.RadDataForm {
    width:300px;
}
````



In the below table you can find the different rules that can be for styling the elements.


|  **Rule**  |  **Description**  |
| ------ | ------ |
| **.RadDataForm** |Can be used for controlling the **RadDataForm** styles|
| **.rdfFieldset** |Can be used for controlling the fieldset styles|
| **div.RadDataForm.rdfLeftAligned .rdfLegend** |Can be used for controlling the heading styles|
| **div.RadDataForm.rdfLeftAligned .rdfLabel** |Can be used for controlling the label styles|
| **div.RadDataForm.rdfRightAligned .rdfLabel** |Can be used for controlling the label styles|

Generally you can use CSS for styling almost every part of the control. For changing the pager position, for example, you can add/remove the **rdfPagerRight** class. Adding/removing borders follows the sample principle but here you should use the rdfBorders class. As for controlling the overall font-size you can use the below provided selector.

````ASPNET
div.RadDataForm .rdfFieldValue {
    font-size:25px;
}
````


