---
title: Provide Good Color Contrasts for Content
page_title: Provide Good Color Contrasts for Content | UI for ASP.NET AJAX Documentation
description: Provide Good Color Contrasts for Content
slug: editor/accessibility-and-internationalization/creating-accessible-content/provide-good-color-contrasts-for-content
tags: provide,good,color,contrasts,for,content
published: True
position: 5
---

# Provide Good Color Contrasts for Content



## 

Accessibility is an important part of web design. By choosing the right colors, you can ensure that all visitors to your site can read your content. The user can change the color appearance of text in RadEditor"s content area using the ForeColor and BackColor tools. The W3C recommendations define three levels of conformance to their guidelines. Priority 1, 2 and 3. Their 2.0 color contrast algorithms utilize two of these-- Priority 2 (AA), and Priority 3 (AAA). Whether or not you need to reach an AAA conformance depends on your target audience.

You can find below examples of contents with various contrast ratios.

__Content with contrast ratio, which passes at 3:1__




>caption  

| Text Color HEX | Background color: #000033 | Contrast |
| ------ | ------ | ------ |
|#C00|Sample|3.40|
|#C03|Sample|3.45|
|#C06|Sample|3.59|
|#C09|Sample|3.84|
|#C0C|Sample|4.24|
|#C0F|Sample|4.78|

__Content with contrast ratio, which passes at 4.5:1__


>caption  

| Text Color HEX | Background color: #000033 | Contrast |
| ------ | ------ | ------ |
|#C60|Sample|5.22|
|#C63|Sample|5.26|
|#C66|Sample|5.40|
|#C69|Sample|5.66|
|#C6C|Sample|6.05|
|#C6F|Sample|6.60|

__Content with perfect color contrast ratio, which passes at 7:1__


>caption  

| Text Color HEX | Background color: #000033 | Contrast |
| ------ | ------ | ------ |
|#6F0|Sample|15.14|
|#6F3|Sample|15.19|
|#6F6|Sample|15.33|
|#6F9|Sample|15.58|
|#6FC|Sample|15.98|
|#6FF|Sample|16.52|

__Content demonstrating bad color contrast rating__


>caption  

| Text Color HEX | Background color: #000033 | Contrast |
| ------ | ------ | ------ |
|#000|Sample|1.05|
|#003|Sample|1.00|
|#006|Sample|1.14|
|#009|Sample|1.39|
|#00C|Sample|1.79|
|#00F|Sample|2.33|

Another way to apply color decoration to HTML content is through CSS stylesheet. Here is an example, which provides good color contrast based on CSS that can be applied to the content area of RadEditor:

````XML
	    <style type="text/css">
	        body
	        {
	            font-size: 18px;
	            color: #99ff99;
	            background-color: #333333;
	        }
	    </style>
````



The tag above should be inserted in HTML view mode of RadEditor.

More information on color contrast

[http://www.w3.org/TR/WCAG20-TECHS/G17](http://www.w3.org/TR/WCAG20-TECHS/G17)

[http://www.w3.org/TR/WCAG20-TECHS/G18.html](http://www.w3.org/TR/WCAG20-TECHS/G18.html)

[http://www.w3.org/TR/WCAG20-TECHS/G145.html](http://www.w3.org/TR/WCAG20-TECHS/G145.html)
