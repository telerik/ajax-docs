---
title: Fonts
page_title: Fonts
description: Check our Web Forms article about Treats font size and family used in the built-in skins and render modes, how to set font icons size.
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/fonts
tags: font, font-size, font-family, font-weight, font-icon, font-style
published: True
position: 4
---

# Fonts

This article explains the how fonts are used by the Telerik® UI for ASP.NET AJAX controls skins. Below you can find information about:

* [how the `font-size`, `font-family`, `font-weight` and `font-style` rules used by the controls](#general-font-css-rules)

* [the list of skins that have a `font-family` predefined](#skins-with-predefined-font-family)

* [`font-weight` specifics](#font-weight-specifics)

* [font icons size](#font-icon-size)



## General Font CSS Rules

### Lightweight Render Mode

In the [Lightweight Render Mode]({%slug controls/render-modes%}) all UI for ASP.NET AJAX controls do not have a default font as of **Q1 2016 SP1**.

This means the controls do not have `font-size`, `font-family`, `font-weight` and `font-style` predefined and inherit the font-size of the `<body>` element if such is set. Otherwise, the default browser values apply. This provides all Telerik controls on the page with the same look and feel by making use of their [elastic design capabilities]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%}).

In case a Telerik control is placed in a container with explicit font set, the Telerik control will inherit this font or the font of the first wrapper element that has font specified.

>tip For best look and feel we recommend to set `font-size: 14px` and `font-family: "Segoe UI", Arial, Sans-serif;` (**Example 1**) for all skins except the [Skins with Predefined Font-family](#skins-with-predefined-font-family) where you should use their preferred font family.

>caption **Example 1**: Setting font for the page which will be inherited from Telerik controls.

```CSS
body {
    font-size: 14px;
    font-family: "Segoe UI", Arial, Sans-serif;
}
````
>note
The Bootstrap, Material, Metro and (Black)MetroTouch skins have `font-family` defined.

With the mentioned Release we have also improved the metrics of AJAX form controls. The ASP.NET AJAX skin palette is divided into three main categories: Default skins, Bootstrap skin and the Material skin. In each of the above there are established interrelated connections between width, height, font size (14px), line height (20px), paddings and borders. A dimension-orientated scheme based on line height and font size ratio is created—1.428571429 (20/14)—that keeps the main proportions of controls consistent with each other, used individually, combined in a complex data form or integrated in composite container controls. By changing just the font size, the layout of the controls can easily be adjusted to fulfill various needs. This provides convenient scalability.

### Classic Render Mode

The Classic Render Mode remains unchanged and uses the 12px font-size and the Segoe UI font that have always been used. A few skins have a font-family defined, however: [Skins with Predefined Font-family](#skins-with-predefined-font-family).



## Skins with Predefined Font-family

The skins listed below have predefined font-family as follows:

* Material—font-family: "Roboto", "Noto", sans-serif;

* Bootstrap—font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

* Metro—font-family: "Segoe UI", Arial, Helvetica, sans-serif;

>note The Material skin includes the **Roboto** font-file from the Google cloud. It will be used even if it is not installed on the user computer, but downloading it requires an active Internet connection.

The [Use Material Skin Without Active Internet Connection](https://www.telerik.com/support/kb/aspnet-ajax/details/use-material-skin-without-active-internet-connection) KB article explains a possible approach to avoid these requests.



## Font-weight Specifics

If you increase the `font-size` to 16px, 20px or even larger, we recommended you set `font-weight: 100` on the page. This applies particularly for **BlackMetroTouch** and **MetroTouch** skins.



## Font Icon Size

In **Lightweight** RenderMode of the controls font icons are used for better performance instead of image sprites for the tool icons, selection indicators, predefined badges, etc. These font-icons are designed in a **16px** grid base, so for best image quality the resizing should be in a 16-scalable size. The only exception is Material skin, in which the grid base of the icons is optimized for **18px**.

One of the greatest benefits of using font icons is the ability to scale them up and down with ease. However, if we would like to have crisp, sharp images, we need to deal with some technical limitations—especially in small sizes.

Although font icons consist of vector graphics, we should keep in mind that each icon is designed in a fixed pixel grid. A pixel grid is the minimum-scaled canvas in which our icon would look pixel-perfect. Every detail of the icon should be aligned to that grid system. Therefore, the final image-icon will have the best quality when its size equals the base pixel grid size or multiplies it.

If you'd like to use icons with a font size of 16px, 32px or 48px, you should use a font icon design in a base grid canvas scalable to 16x16. If you'd like to use an icon in 14px, 28px or 42px size, the base canvas should be 14x14, etc. So, when one uses a font with a pixel grid base of 16px and sets the font size to 17px, the browser is going to antialiase the semi-transparent pixels and render a blurred image. Have in mind that the bigger the font icon size is, the better quality the image will be.

## List of WebComponentsIcons icons

WebComponentsIcons is the font used for rendering iconography in the Telerik UI for ASP.NET AJAX framework. Below is a reference table that displays each specific icon along with its corresponding code:

<style>
@font-face {
    font-family: "WebComponentsIcons";
    src: url("https://d35islomi5rx1v.cloudfront.net/ajaxz/2024.4.1114/Common/WebComponentsIcons.woff") format("truetype");
    font-display: swap;
}

#fontcodes {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

#fontcodes span.icon {
    font-family: "WebComponentsIcons", monospace;
    font-size: 42px;
    color: black;
}

#fontcodes div {
    width: 100px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

#fontcodes div:last-child {
    margin-right: 0;
}

#fontcodes div.clear {
    width: 100%;
    height: 10px;
    margin: 20px 0;
    padding: 0;
    border: none;
    clear: both;
    display: block;
}
</style>

<div id="fontcodes">
  <div><span class="icon">&#xE000;</span><p><span>\e000</span></p></div>
  <div><span class="icon">&#xE001;</span><p><span>\e001</span></p></div>
  <div><span class="icon">&#xE002;</span><p><span>\e002</span></p></div>
  <div><span class="icon">&#xE003;</span><p><span>\e003</span></p></div>
  <div><span class="icon">&#xE004;</span><p><span>\e004</span></p></div>
  <div><span class="icon">&#xE005;</span><p><span>\e005</span></p></div>
  <div><span class="icon">&#xE006;</span><p><span>\e006</span></p></div>
  <div><span class="icon">&#xE007;</span><p><span>\e007</span></p></div>
  <div><span class="icon">&#xE008;</span><p><span>\e008</span></p></div>
  <div><span class="icon">&#xE009;</span><p><span>\e009</span></p></div>
  <div><span class="icon">&#xE00A;</span><p><span>\e00a</span></p></div>
  <div><span class="icon">&#xE00B;</span><p><span>\e00b</span></p></div>
  <div><span class="icon">&#xE00C;</span><p><span>\e00c</span></p></div>
  <div><span class="icon">&#xE00D;</span><p><span>\e00d</span></p></div>
  <div><span class="icon">&#xE00E;</span><p><span>\e00e</span></p></div>
  <div><span class="icon">&#xE00F;</span><p><span>\e00f</span></p></div>
  <div><span class="icon">&#xE010;</span><p><span>\e010</span></p></div>
  <div><span class="icon">&#xE011;</span><p><span>\e011</span></p></div>
  <div><span class="icon">&#xE012;</span><p><span>\e012</span></p></div>
  <div><span class="icon">&#xE013;</span><p><span>\e013</span></p></div>
  <div><span class="icon">&#xE014;</span><p><span>\e014</span></p></div>
  <div><span class="icon">&#xE015;</span><p><span>\e015</span></p></div>
  <div><span class="icon">&#xE016;</span><p><span>\e016</span></p></div>
  <div><span class="icon">&#xE017;</span><p><span>\e017</span></p></div>
  <div><span class="icon">&#xE018;</span><p><span>\e018</span></p></div>
  <div><span class="icon">&#xE019;</span><p><span>\e019</span></p></div>
  <div><span class="icon">&#xE01A;</span><p><span>\e01a</span></p></div>
  <div><span class="icon">&#xE01B;</span><p><span>\e01b</span></p></div>
  <div><span class="icon">&#xE01C;</span><p><span>\e01c</span></p></div>
  <div><span class="icon">&#xE01D;</span><p><span>\e01d</span></p></div>
  <div><span class="icon">&#xE01E;</span><p><span>\e01e</span></p></div>
  <div><span class="icon">&#xE01F;</span><p><span>\e01f</span></p></div>
  <div><span class="icon">&#xE020;</span><p><span>\e020</span></p></div>
  <div><span class="icon">&#xE021;</span><p><span>\e021</span></p></div>
  <div><span class="icon">&#xE022;</span><p><span>\e022</span></p></div>
  <div><span class="icon">&#xE023;</span><p><span>\e023</span></p></div>
  <div><span class="icon">&#xE024;</span><p><span>\e024</span></p></div>
  <div><span class="icon">&#xE025;</span><p><span>\e025</span></p></div>
  <div><span class="icon">&#xE026;</span><p><span>\e026</span></p></div>
  <div><span class="icon">&#xE027;</span><p><span>\e027</span></p></div>
  <div><span class="icon">&#xE028;</span><p><span>\e028</span></p></div>
  <div><span class="icon">&#xE029;</span><p><span>\e029</span></p></div>
  <div><span class="icon">&#xE02A;</span><p><span>\e02a</span></p></div>
  <div><span class="icon">&#xE02B;</span><p><span>\e02b</span></p></div>
  <div><span class="icon">&#xE02C;</span><p><span>\e02c</span></p></div>
  <div><span class="icon">&#xE02D;</span><p><span>\e02d</span></p></div>
  <div><span class="icon">&#xE02E;</span><p><span>\e02e</span></p></div>
  <div><span class="icon">&#xE02F;</span><p><span>\e02f</span></p></div>
  <div><span class="icon">&#xE030;</span><p><span>\e030</span></p></div>
  <div><span class="icon">&#xE031;</span><p><span>\e031</span></p></div>
  <div><span class="icon">&#xE032;</span><p><span>\e032</span></p></div>
  <div><span class="icon">&#xE033;</span><p><span>\e033</span></p></div>
  <div><span class="icon">&#xE034;</span><p><span>\e034</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE100;</span><p><span>\e100</span></p></div>
  <div><span class="icon">&#xE101;</span><p><span>\e101</span></p></div>
  <div><span class="icon">&#xE102;</span><p><span>\e102</span></p></div>
  <div><span class="icon">&#xE103;</span><p><span>\e103</span></p></div>
  <div><span class="icon">&#xE104;</span><p><span>\e104</span></p></div>
  <div><span class="icon">&#xE105;</span><p><span>\e105</span></p></div>
  <div><span class="icon">&#xE106;</span><p><span>\e106</span></p></div>
  <div><span class="icon">&#xE107;</span><p><span>\e107</span></p></div>
  <div><span class="icon">&#xE108;</span><p><span>\e108</span></p></div>
  <div><span class="icon">&#xE109;</span><p><span>\e109</span></p></div>
  <div><span class="icon">&#xE10A;</span><p><span>\e10a</span></p></div>
  <div><span class="icon">&#xE10B;</span><p><span>\e10b</span></p></div>
  <div><span class="icon">&#xE10C;</span><p><span>\e10c</span></p></div>
  <div><span class="icon">&#xE10D;</span><p><span>\e10d</span></p></div>
  <div><span class="icon">&#xE10E;</span><p><span>\e10e</span></p></div>
  <div><span class="icon">&#xE10F;</span><p><span>\e10f</span></p></div>
  <div><span class="icon">&#xE110;</span><p><span>\e110</span></p></div>
  <div><span class="icon">&#xE111;</span><p><span>\e111</span></p></div>
  <div><span class="icon">&#xE112;</span><p><span>\e112</span></p></div>
  <div><span class="icon">&#xE113;</span><p><span>\e113</span></p></div>
  <div><span class="icon">&#xE114;</span><p><span>\e114</span></p></div>
  <div><span class="icon">&#xE115;</span><p><span>\e115</span></p></div>
  <div><span class="icon">&#xE116;</span><p><span>\e116</span></p></div>
  <div><span class="icon">&#xE117;</span><p><span>\e117</span></p></div>
  <div><span class="icon">&#xE118;</span><p><span>\e118</span></p></div>
  <div><span class="icon">&#xE119;</span><p><span>\e119</span></p></div>
  <div><span class="icon">&#xE11A;</span><p><span>\e11a</span></p></div>
  <div><span class="icon">&#xE11B;</span><p><span>\e11b</span></p></div>
  <div><span class="icon">&#xE11C;</span><p><span>\e11c</span></p></div>
  <div><span class="icon">&#xE11D;</span><p><span>\e11d</span></p></div>
  <div><span class="icon">&#xE11E;</span><p><span>\e11e</span></p></div>
  <div><span class="icon">&#xE11F;</span><p><span>\e11f</span></p></div>
  <div><span class="icon">&#xE120;</span><p><span>\e120</span></p></div>
  <div><span class="icon">&#xE121;</span><p><span>\e121</span></p></div>
  <div><span class="icon">&#xE122;</span><p><span>\e122</span></p></div>
  <div><span class="icon">&#xE123;</span><p><span>\e123</span></p></div>
  <div><span class="icon">&#xE124;</span><p><span>\e124</span></p></div>
  <div><span class="icon">&#xE125;</span><p><span>\e125</span></p></div>
  <div><span class="icon">&#xE126;</span><p><span>\e126</span></p></div>
  <div><span class="icon">&#xE127;</span><p><span>\e127</span></p></div>
  <div><span class="icon">&#xE128;</span><p><span>\e128</span></p></div>
  <div><span class="icon">&#xE129;</span><p><span>\e129</span></p></div>
  <div><span class="icon">&#xE12A;</span><p><span>\e12a</span></p></div>
  <div><span class="icon">&#xE12B;</span><p><span>\e12b</span></p></div>
  <div><span class="icon">&#xE12C;</span><p><span>\e12c</span></p></div>
  <div><span class="icon">&#xE12D;</span><p><span>\e12d</span></p></div>
  <div><span class="icon">&#xE12E;</span><p><span>\e12e</span></p></div>
  <div><span class="icon">&#xE12F;</span><p><span>\e12f</span></p></div>
  <div><span class="icon">&#xE130;</span><p><span>\e130</span></p></div>
  <div><span class="icon">&#xE131;</span><p><span>\e131</span></p></div>
  <div><span class="icon">&#xE132;</span><p><span>\e132</span></p></div>
  <div><span class="icon">&#xE133;</span><p><span>\e133</span></p></div>
  <div><span class="icon">&#xE134;</span><p><span>\e134</span></p></div>
  <div><span class="icon">&#xE135;</span><p><span>\e135</span></p></div>
  <div><span class="icon">&#xE136;</span><p><span>\e136</span></p></div>
  <div><span class="icon">&#xE137;</span><p><span>\e137</span></p></div>
  <div><span class="icon">&#xE138;</span><p><span>\e138</span></p></div>
  <div><span class="icon">&#xE139;</span><p><span>\e139</span></p></div>
  <div><span class="icon">&#xE13A;</span><p><span>\e13a</span></p></div>
  <div><span class="icon">&#xE13B;</span><p><span>\e13b</span></p></div>
  <div><span class="icon">&#xE13C;</span><p><span>\e13c</span></p></div>
  <div><span class="icon">&#xE13D;</span><p><span>\e13d</span></p></div>
  <div><span class="icon">&#xE13E;</span><p><span>\e13e</span></p></div>
  <div><span class="icon">&#xE13F;</span><p><span>\e13f</span></p></div>
  <div><span class="icon">&#xE140;</span><p><span>\e140</span></p></div>
  <div><span class="icon">&#xE141;</span><p><span>\e141</span></p></div>
  <div><span class="icon">&#xE142;</span><p><span>\e142</span></p></div>
  <div><span class="icon">&#xE143;</span><p><span>\e143</span></p></div>
  <div><span class="icon">&#xE144;</span><p><span>\e144</span></p></div>
  <div><span class="icon">&#xE145;</span><p><span>\e145</span></p></div>
  <div><span class="icon">&#xE146;</span><p><span>\e146</span></p></div>
  <div><span class="icon">&#xE147;</span><p><span>\e147</span></p></div>
  <div><span class="icon">&#xE148;</span><p><span>\e148</span></p></div>
  <div><span class="icon">&#xE149;</span><p><span>\e149</span></p></div>
  <div><span class="icon">&#xE14A;</span><p><span>\e14a</span></p></div>
  <div><span class="icon">&#xE14B;</span><p><span>\e14b</span></p></div>
  <div><span class="icon">&#xE14C;</span><p><span>\e14c</span></p></div>
  <div><span class="icon">&#xE14D;</span><p><span>\e14d</span></p></div>
  <div><span class="icon">&#xE14E;</span><p><span>\e14e</span></p></div>
  <div><span class="icon">&#xE14F;</span><p><span>\e14f</span></p></div>
  <div><span class="icon">&#xE150;</span><p><span>\e150</span></p></div>
  <div><span class="icon">&#xE151;</span><p><span>\e151</span></p></div>
  <div><span class="icon">&#xE152;</span><p><span>\e152</span></p></div>
  <div><span class="icon">&#xE153;</span><p><span>\e153</span></p></div>
  <div><span class="icon">&#xE154;</span><p><span>\e154</span></p></div>
  <div><span class="icon">&#xE155;</span><p><span>\e155</span></p></div>
  <div><span class="icon">&#xE156;</span><p><span>\e156</span></p></div>
  <div><span class="icon">&#xE157;</span><p><span>\e157</span></p></div>
  <div><span class="icon">&#xE158;</span><p><span>\e158</span></p></div>
  <div><span class="icon">&#xE159;</span><p><span>\e159</span></p></div>
  <div><span class="icon">&#xE15A;</span><p><span>\e15a</span></p></div>
  <div><span class="icon">&#xE15B;</span><p><span>\e15b</span></p></div>
  <div><span class="icon">&#xE15C;</span><p><span>\e15c</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE200;</span><p><span>\e200</span></p></div>
  <div><span class="icon">&#xE201;</span><p><span>\e201</span></p></div>
  <div><span class="icon">&#xE202;</span><p><span>\e202</span></p></div>
  <div><span class="icon">&#xE203;</span><p><span>\e203</span></p></div>
  <div><span class="icon">&#xE204;</span><p><span>\e204</span></p></div>
  <div><span class="icon">&#xE205;</span><p><span>\e205</span></p></div>
  <div><span class="icon">&#xE206;</span><p><span>\e206</span></p></div>
  <div><span class="icon">&#xE207;</span><p><span>\e207</span></p></div>
  <div><span class="icon">&#xE208;</span><p><span>\e208</span></p></div>
  <div><span class="icon">&#xE209;</span><p><span>\e209</span></p></div>
  <div><span class="icon">&#xE20A;</span><p><span>\e20a</span></p></div>
  <div><span class="icon">&#xE20B;</span><p><span>\e20b</span></p></div>
  <div><span class="icon">&#xE20C;</span><p><span>\e20c</span></p></div>
  <div><span class="icon">&#xE20D;</span><p><span>\e20d</span></p></div>
  <div><span class="icon">&#xE20E;</span><p><span>\e20e</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE300;</span><p><span>\e300</span></p></div>
  <div><span class="icon">&#xE301;</span><p><span>\e301</span></p></div>
  <div><span class="icon">&#xE302;</span><p><span>\e302</span></p></div>
  <div><span class="icon">&#xE303;</span><p><span>\e303</span></p></div>
  <div><span class="icon">&#xE304;</span><p><span>\e304</span></p></div>
  <div><span class="icon">&#xE305;</span><p><span>\e305</span></p></div>
  <div><span class="icon">&#xE306;</span><p><span>\e306</span></p></div>
  <div><span class="icon">&#xE307;</span><p><span>\e307</span></p></div>
  <div><span class="icon">&#xE308;</span><p><span>\e308</span></p></div>
  <div><span class="icon">&#xE309;</span><p><span>\e309</span></p></div>
  <div><span class="icon">&#xE30A;</span><p><span>\e30a</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE400;</span><p><span>\e400</span></p></div>
  <div><span class="icon">&#xE401;</span><p><span>\e401</span></p></div>
  <div><span class="icon">&#xE402;</span><p><span>\e402</span></p></div>
  <div><span class="icon">&#xE403;</span><p><span>\e403</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE500;</span><p><span>\e500</span></p></div>
  <div><span class="icon">&#xE501;</span><p><span>\e501</span></p></div>
  <div><span class="icon">&#xE502;</span><p><span>\e502</span></p></div>
  <div><span class="icon">&#xE503;</span><p><span>\e503</span></p></div>
  <div><span class="icon">&#xE504;</span><p><span>\e504</span></p></div>
  <div><span class="icon">&#xE505;</span><p><span>\e505</span></p></div>
  <div><span class="icon">&#xE506;</span><p><span>\e506</span></p></div>
  <div><span class="icon">&#xE507;</span><p><span>\e507</span></p></div>
  <div><span class="icon">&#xE508;</span><p><span>\e508</span></p></div>
  <div><span class="icon">&#xE509;</span><p><span>\e509</span></p></div>
  <div><span class="icon">&#xE50A;</span><p><span>\e50a</span></p></div>
  <div><span class="icon">&#xE50B;</span><p><span>\e50b</span></p></div>
  <div><span class="icon">&#xE50C;</span><p><span>\e50c</span></p></div>
  <div><span class="icon">&#xE50D;</span><p><span>\e50d</span></p></div>
  <div><span class="icon">&#xE50E;</span><p><span>\e50e</span></p></div>
  <div><span class="icon">&#xE50F;</span><p><span>\e50f</span></p></div>
  <div><span class="icon">&#xE510;</span><p><span>\e510</span></p></div>
  <div><span class="icon">&#xE511;</span><p><span>\e511</span></p></div>
  <div><span class="icon">&#xE512;</span><p><span>\e512</span></p></div>
  <div><span class="icon">&#xE513;</span><p><span>\e513</span></p></div>
  <div><span class="icon">&#xE514;</span><p><span>\e514</span></p></div>
  <div><span class="icon">&#xE515;</span><p><span>\e515</span></p></div>
  <div><span class="icon">&#xE516;</span><p><span>\e516</span></p></div>
  <div><span class="icon">&#xE517;</span><p><span>\e517</span></p></div>
  <div><span class="icon">&#xE518;</span><p><span>\e518</span></p></div>
  <div><span class="icon">&#xE519;</span><p><span>\e519</span></p></div>
  <div><span class="icon">&#xE51A;</span><p><span>\e51a</span></p></div>
  <div><span class="icon">&#xE51B;</span><p><span>\e51b</span></p></div>
  <div><span class="icon">&#xE51C;</span><p><span>\e51c</span></p></div>
  <div><span class="icon">&#xE51D;</span><p><span>\e51d</span></p></div>
  <div><span class="icon">&#xE51E;</span><p><span>\e51e</span></p></div>
  <div><span class="icon">&#xE51F;</span><p><span>\e51f</span></p></div>
  <div><span class="icon">&#xE520;</span><p><span>\e520</span></p></div>
  <div><span class="icon">&#xE521;</span><p><span>\e521</span></p></div>
  <div><span class="icon">&#xE522;</span><p><span>\e522</span></p></div>
  <div><span class="icon">&#xE523;</span><p><span>\e523</span></p></div>
  <div><span class="icon">&#xE524;</span><p><span>\e524</span></p></div>
  <div><span class="icon">&#xE525;</span><p><span>\e525</span></p></div>
  <div><span class="icon">&#xE526;</span><p><span>\e526</span></p></div>
  <div><span class="icon">&#xE527;</span><p><span>\e527</span></p></div>
  <div><span class="icon">&#xE528;</span><p><span>\e528</span></p></div>
  <div><span class="icon">&#xE529;</span><p><span>\e529</span></p></div>
  <div><span class="icon">&#xE52A;</span><p><span>\e52a</span></p></div>
  <div><span class="icon">&#xE52B;</span><p><span>\e52b</span></p></div>
  <div><span class="icon">&#xE52C;</span><p><span>\e52c</span></p></div>
  <div><span class="icon">&#xE52D;</span><p><span>\e52d</span></p></div>
  <div><span class="icon">&#xE52E;</span><p><span>\e52e</span></p></div>
  <div><span class="icon">&#xE52F;</span><p><span>\e52f</span></p></div>
  <div><span class="icon">&#xE530;</span><p><span>\e530</span></p></div>
  <div><span class="icon">&#xE531;</span><p><span>\e531</span></p></div>
  <div><span class="icon">&#xE532;</span><p><span>\e532</span></p></div>
  <div><span class="icon">&#xE533;</span><p><span>\e533</span></p></div>
  <div><span class="icon">&#xE534;</span><p><span>\e534</span></p></div>
  <div><span class="icon">&#xE535;</span><p><span>\e535</span></p></div>
  <div><span class="icon">&#xE536;</span><p><span>\e536</span></p></div>
  <div><span class="icon">&#xE537;</span><p><span>\e537</span></p></div>
  <div><span class="icon">&#xE538;</span><p><span>\e538</span></p></div>
  <div><span class="icon">&#xE539;</span><p><span>\e539</span></p></div>
  <div><span class="icon">&#xE53A;</span><p><span>\e53a</span></p></div>
  <div><span class="icon">&#xE53B;</span><p><span>\e53b</span></p></div>
  <div><span class="icon">&#xE53C;</span><p><span>\e53c</span></p></div>
  <div><span class="icon">&#xE53D;</span><p><span>\e53d</span></p></div>
  <div><span class="icon">&#xE53E;</span><p><span>\e53e</span></p></div>
  <div><span class="icon">&#xE53F;</span><p><span>\e53f</span></p></div>
  <div><span class="icon">&#xE540;</span><p><span>\e540</span></p></div>
  <div><span class="icon">&#xE541;</span><p><span>\e541</span></p></div>
  <div><span class="icon">&#xE542;</span><p><span>\e542</span></p></div>
  <div><span class="icon">&#xE543;</span><p><span>\e543</span></p></div>
  <div><span class="icon">&#xE544;</span><p><span>\e544</span></p></div>
  <div><span class="icon">&#xE545;</span><p><span>\e545</span></p></div>
  <div><span class="icon">&#xE546;</span><p><span>\e546</span></p></div>
  <div><span class="icon">&#xE547;</span><p><span>\e547</span></p></div>
  <div><span class="icon">&#xE548;</span><p><span>\e548</span></p></div>
  <div><span class="icon">&#xE549;</span><p><span>\e549</span></p></div>
  <div><span class="icon">&#xE54A;</span><p><span>\e54a</span></p></div>
  <div><span class="icon">&#xE54B;</span><p><span>\e54b</span></p></div>
  <div><span class="icon">&#xE54C;</span><p><span>\e54c</span></p></div>
  <div><span class="icon">&#xE54D;</span><p><span>\e54d</span></p></div>
  <div><span class="icon">&#xE54E;</span><p><span>\e54e</span></p></div>
  <div><span class="icon">&#xE54F;</span><p><span>\e54f</span></p></div>
  <div><span class="icon">&#xE550;</span><p><span>\e550</span></p></div>
  <div><span class="icon">&#xE551;</span><p><span>\e551</span></p></div>
  <div><span class="icon">&#xE552;</span><p><span>\e552</span></p></div>
  <div><span class="icon">&#xE553;</span><p><span>\e553</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE600;</span><p><span>\e600</span></p></div>
  <div><span class="icon">&#xE601;</span><p><span>\e601</span></p></div>
  <div><span class="icon">&#xE602;</span><p><span>\e602</span></p></div>
  <div><span class="icon">&#xE603;</span><p><span>\e603</span></p></div>
  <div><span class="icon">&#xE604;</span><p><span>\e604</span></p></div>
  <div><span class="icon">&#xE605;</span><p><span>\e605</span></p></div>
  <div><span class="icon">&#xE606;</span><p><span>\e606</span></p></div>
  <div><span class="icon">&#xE607;</span><p><span>\e607</span></p></div>
  <div><span class="icon">&#xE608;</span><p><span>\e608</span></p></div>
  <div><span class="icon">&#xE609;</span><p><span>\e609</span></p></div>
  <div><span class="icon">&#xE60A;</span><p><span>\e60a</span></p></div>
  <div><span class="icon">&#xE60B;</span><p><span>\e60b</span></p></div>
  <div><span class="icon">&#xE60C;</span><p><span>\e60c</span></p></div>
  <div><span class="icon">&#xE60D;</span><p><span>\e60d</span></p></div>
  <div><span class="icon">&#xE60E;</span><p><span>\e60e</span></p></div>
  <div><span class="icon">&#xE60F;</span><p><span>\e60f</span></p></div>
  <div><span class="icon">&#xE610;</span><p><span>\e610</span></p></div>
  <div><span class="icon">&#xE611;</span><p><span>\e611</span></p></div>
  <div><span class="icon">&#xE612;</span><p><span>\e612</span></p></div>
  <div><span class="icon">&#xE613;</span><p><span>\e613</span></p></div>
  <div><span class="icon">&#xE614;</span><p><span>\e614</span></p></div>
  <div><span class="icon">&#xE615;</span><p><span>\e615</span></p></div>
  <div><span class="icon">&#xE616;</span><p><span>\e616</span></p></div>
  <div><span class="icon">&#xE617;</span><p><span>\e617</span></p></div>
  <div><span class="icon">&#xE618;</span><p><span>\e618</span></p></div>
  <div><span class="icon">&#xE619;</span><p><span>\e619</span></p></div>
  <div><span class="icon">&#xE61A;</span><p><span>\e61a</span></p></div>
  <div><span class="icon">&#xE61B;</span><p><span>\e61b</span></p></div>
  <div><span class="icon">&#xE61C;</span><p><span>\e61c</span></p></div>
  <div><span class="icon">&#xE61D;</span><p><span>\e61d</span></p></div>
  <div><span class="icon">&#xE61E;</span><p><span>\e61e</span></p></div>
  <div><span class="icon">&#xE61F;</span><p><span>\e61f</span></p></div>
  <div><span class="icon">&#xE620;</span><p><span>\e620</span></p></div>
  <div><span class="icon">&#xE621;</span><p><span>\e621</span></p></div>
  <div><span class="icon">&#xE622;</span><p><span>\e622</span></p></div>
  <div><span class="icon">&#xE623;</span><p><span>\e623</span></p></div>
  <div><span class="icon">&#xE624;</span><p><span>\e624</span></p></div>
  <div><span class="icon">&#xE625;</span><p><span>\e625</span></p></div>
  <div><span class="icon">&#xE626;</span><p><span>\e626</span></p></div>
  <div><span class="icon">&#xE627;</span><p><span>\e627</span></p></div>
  <div><span class="icon">&#xE628;</span><p><span>\e628</span></p></div>
  <div><span class="icon">&#xE629;</span><p><span>\e629</span></p></div>
  <div><span class="icon">&#xE62A;</span><p><span>\e62a</span></p></div>
  <div><span class="icon">&#xE62B;</span><p><span>\e62b</span></p></div>
  <div><span class="icon">&#xE62C;</span><p><span>\e62c</span></p></div>
  <div><span class="icon">&#xE62D;</span><p><span>\e62d</span></p></div>
  <div><span class="icon">&#xE62E;</span><p><span>\e62e</span></p></div>
  <div><span class="icon">&#xE62F;</span><p><span>\e62f</span></p></div>
  <div><span class="icon">&#xE630;</span><p><span>\e630</span></p></div>
  <div><span class="icon">&#xE631;</span><p><span>\e631</span></p></div>
  <div><span class="icon">&#xE632;</span><p><span>\e632</span></p></div>
  <div><span class="icon">&#xE633;</span><p><span>\e633</span></p></div>
  <div><span class="icon">&#xE634;</span><p><span>\e634</span></p></div>
  <div><span class="icon">&#xE635;</span><p><span>\e635</span></p></div>
  <div><span class="icon">&#xE636;</span><p><span>\e636</span></p></div>
  <div><span class="icon">&#xE637;</span><p><span>\e637</span></p></div>
  <div><span class="icon">&#xE638;</span><p><span>\e638</span></p></div>
  <div><span class="icon">&#xE639;</span><p><span>\e639</span></p></div>
  <div><span class="icon">&#xE63A;</span><p><span>\e63a</span></p></div>
  <div><span class="icon">&#xE63B;</span><p><span>\e63b</span></p></div>
  <div><span class="icon">&#xE63C;</span><p><span>\e63c</span></p></div>
  <div><span class="icon">&#xE63D;</span><p><span>\e63d</span></p></div>
  <div><span class="icon">&#xE63E;</span><p><span>\e63e</span></p></div>
  <div><span class="icon">&#xE63F;</span><p><span>\e63f</span></p></div>
  <div><span class="icon">&#xE640;</span><p><span>\e640</span></p></div>
  <div><span class="icon">&#xE641;</span><p><span>\e641</span></p></div>
  <div><span class="icon">&#xE642;</span><p><span>\e642</span></p></div>
  <div><span class="icon">&#xE643;</span><p><span>\e643</span></p></div>
  <div><span class="icon">&#xE644;</span><p><span>\e644</span></p></div>
  <div><span class="icon">&#xE645;</span><p><span>\e645</span></p></div>
  <div><span class="icon">&#xE646;</span><p><span>\e646</span></p></div>
  <div><span class="icon">&#xE647;</span><p><span>\e647</span></p></div>
  <div><span class="icon">&#xE648;</span><p><span>\e648</span></p></div>
  <div><span class="icon">&#xE649;</span><p><span>\e649</span></p></div>
  <div><span class="icon">&#xE64A;</span><p><span>\e64a</span></p></div>
  <div><span class="icon">&#xE64B;</span><p><span>\e64b</span></p></div>
  <div><span class="icon">&#xE64C;</span><p><span>\e64c</span></p></div>
  <div><span class="icon">&#xE64D;</span><p><span>\e64d</span></p></div>
  <div><span class="icon">&#xE64E;</span><p><span>\e64e</span></p></div>
  <div><span class="icon">&#xE64F;</span><p><span>\e64f</span></p></div>
  <div><span class="icon">&#xE650;</span><p><span>\e650</span></p></div>
  <div><span class="icon">&#xE651;</span><p><span>\e651</span></p></div>
  <div><span class="icon">&#xE652;</span><p><span>\e652</span></p></div>
  <div><span class="icon">&#xE653;</span><p><span>\e653</span></p></div>
  <div><span class="icon">&#xE654;</span><p><span>\e654</span></p></div>
  <div><span class="icon">&#xE655;</span><p><span>\e655</span></p></div>
  <div><span class="icon">&#xE656;</span><p><span>\e656</span></p></div>
  <div><span class="icon">&#xE657;</span><p><span>\e657</span></p></div>
  <div><span class="icon">&#xE658;</span><p><span>\e658</span></p></div>
  <div><span class="icon">&#xE659;</span><p><span>\e659</span></p></div>
  <div><span class="icon">&#xE65A;</span><p><span>\e65a</span></p></div>
  <div><span class="icon">&#xE65B;</span><p><span>\e65b</span></p></div>
  <div><span class="icon">&#xE65C;</span><p><span>\e65c</span></p></div>
  <div><span class="icon">&#xE65D;</span><p><span>\e65d</span></p></div>
  <div><span class="icon">&#xE65E;</span><p><span>\e65e</span></p></div>
  <div><span class="icon">&#xE65F;</span><p><span>\e65f</span></p></div>
  <div><span class="icon">&#xE660;</span><p><span>\e660</span></p></div>
  <div><span class="icon">&#xE661;</span><p><span>\e661</span></p></div>
  <div><span class="icon">&#xE662;</span><p><span>\e662</span></p></div>
  <div><span class="icon">&#xE663;</span><p><span>\e663</span></p></div>
  <div><span class="icon">&#xE664;</span><p><span>\e664</span></p></div>
  <div><span class="icon">&#xE665;</span><p><span>\e665</span></p></div>
  <div><span class="icon">&#xE666;</span><p><span>\e666</span></p></div>
  <div><span class="icon">&#xE667;</span><p><span>\e667</span></p></div>
  <div><span class="icon">&#xE668;</span><p><span>\e668</span></p></div>
  <div><span class="icon">&#xE669;</span><p><span>\e669</span></p></div>
  <div><span class="icon">&#xE66A;</span><p><span>\e66a</span></p></div>
  <div><span class="icon">&#xE66B;</span><p><span>\e66b</span></p></div>
  <div><span class="icon">&#xE66C;</span><p><span>\e66c</span></p></div>
  <div><span class="icon">&#xE66D;</span><p><span>\e66d</span></p></div>
  <div><span class="icon">&#xE66E;</span><p><span>\e66e</span></p></div>
  <div><span class="icon">&#xE66F;</span><p><span>\e66f</span></p></div>
  <div><span class="icon">&#xE670;</span><p><span>\e670</span></p></div>
  <div><span class="icon">&#xE671;</span><p><span>\e671</span></p></div>
  <div><span class="icon">&#xE672;</span><p><span>\e672</span></p></div>
  <div><span class="icon">&#xE673;</span><p><span>\e673</span></p></div>
  <div><span class="icon">&#xE674;</span><p><span>\e674</span></p></div>
  <div><span class="icon">&#xE675;</span><p><span>\e675</span></p></div>
  <div><span class="icon">&#xE676;</span><p><span>\e676</span></p></div>
  <div><span class="icon">&#xE677;</span><p><span>\e677</span></p></div>
  <div><span class="icon">&#xE678;</span><p><span>\e678</span></p></div>
  <div><span class="icon">&#xE679;</span><p><span>\e679</span></p></div>
  <div><span class="icon">&#xE67A;</span><p><span>\e67a</span></p></div>
  <div><span class="icon">&#xE67B;</span><p><span>\e67b</span></p></div>
  <div><span class="icon">&#xE67C;</span><p><span>\e67c</span></p></div>
  <div><span class="icon">&#xE67D;</span><p><span>\e67d</span></p></div>
  <div><span class="icon">&#xE67E;</span><p><span>\e67e</span></p></div>
  <div><span class="icon">&#xE67F;</span><p><span>\e67f</span></p></div>
  <div><span class="icon">&#xE680;</span><p><span>\e680</span></p></div>
  <div><span class="icon">&#xE681;</span><p><span>\e681</span></p></div>
  <div><span class="icon">&#xE682;</span><p><span>\e682</span></p></div>
  <div><span class="icon">&#xE683;</span><p><span>\e683</span></p></div>
  <div><span class="icon">&#xE684;</span><p><span>\e684</span></p></div>
  <div><span class="icon">&#xE685;</span><p><span>\e685</span></p></div>
  <div><span class="icon">&#xE686;</span><p><span>\e686</span></p></div>
  <div><span class="icon">&#xE687;</span><p><span>\e687</span></p></div>
  <div><span class="icon">&#xE688;</span><p><span>\e688</span></p></div>
  <div><span class="icon">&#xE689;</span><p><span>\e689</span></p></div>
  <div><span class="icon">&#xE68A;</span><p><span>\e68a</span></p></div>
  <div><span class="icon">&#xE68B;</span><p><span>\e68b</span></p></div>
  <div><span class="icon">&#xE68C;</span><p><span>\e68c</span></p></div>
  <div><span class="icon">&#xE68D;</span><p><span>\e68d</span></p></div>
  <div><span class="icon">&#xE68E;</span><p><span>\e68e</span></p></div>
  <div><span class="icon">&#xE68F;</span><p><span>\e68f</span></p></div>
  <div><span class="icon">&#xE690;</span><p><span>\e690</span></p></div>
  <div><span class="icon">&#xE691;</span><p><span>\e691</span></p></div>
  <div><span class="icon">&#xE692;</span><p><span>\e692</span></p></div>
  <div><span class="icon">&#xE693;</span><p><span>\e693</span></p></div>
  <div><span class="icon">&#xE694;</span><p><span>\e694</span></p></div>
  <div><span class="icon">&#xE695;</span><p><span>\e695</span></p></div>
  <div><span class="icon">&#xE696;</span><p><span>\e696</span></p></div>
  <div><span class="icon">&#xE697;</span><p><span>\e697</span></p></div>
  <div><span class="icon">&#xE698;</span><p><span>\e698</span></p></div>
  <div><span class="icon">&#xE699;</span><p><span>\e699</span></p></div>
  <div><span class="icon">&#xE69A;</span><p><span>\e69a</span></p></div>
  <div><span class="icon">&#xE69B;</span><p><span>\e69b</span></p></div>
  <div><span class="icon">&#xE69C;</span><p><span>\e69c</span></p></div>
  <div><span class="icon">&#xE69D;</span><p><span>\e69d</span></p></div>
  <div><span class="icon">&#xE69E;</span><p><span>\e69e</span></p></div>
  <div><span class="icon">&#xE69F;</span><p><span>\e69f</span></p></div>
  <div><span class="icon">&#xE6A0;</span><p><span>\e6a0</span></p></div>
  <div><span class="icon">&#xE6A1;</span><p><span>\e6a1</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE700;</span><p><span>\e700</span></p></div>
  <div><span class="icon">&#xE701;</span><p><span>\e701</span></p></div>
  <div><span class="icon">&#xE702;</span><p><span>\e702</span></p></div>
  <div><span class="icon">&#xE703;</span><p><span>\e703</span></p></div>
  <div><span class="icon">&#xE704;</span><p><span>\e704</span></p></div>
  <div><span class="icon">&#xE705;</span><p><span>\e705</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE800;</span><p><span>\e800</span></p></div>
  <div><span class="icon">&#xE801;</span><p><span>\e801</span></p></div>
  <div><span class="icon">&#xE802;</span><p><span>\e802</span></p></div>
  <div><span class="icon">&#xE803;</span><p><span>\e803</span></p></div>
  <div><span class="icon">&#xE804;</span><p><span>\e804</span></p></div>
  <div><span class="icon">&#xE805;</span><p><span>\e805</span></p></div>
  <div><span class="icon">&#xE806;</span><p><span>\e806</span></p></div>
  <div><span class="icon">&#xE807;</span><p><span>\e807</span></p></div>
  <div><span class="icon">&#xE808;</span><p><span>\e808</span></p></div>
  <div><span class="icon">&#xE809;</span><p><span>\e809</span></p></div>
  <div><span class="icon">&#xE80A;</span><p><span>\e80a</span></p></div>
  <div><span class="icon">&#xE80B;</span><p><span>\e80b</span></p></div>
  <div><span class="icon">&#xE80C;</span><p><span>\e80c</span></p></div>
  <div><span class="icon">&#xE80D;</span><p><span>\e80d</span></p></div>
  <div><span class="icon">&#xE80E;</span><p><span>\e80e</span></p></div>
  <div><span class="icon">&#xE80F;</span><p><span>\e80f</span></p></div>
  <div><span class="icon">&#xE810;</span><p><span>\e810</span></p></div>
  <div><span class="icon">&#xE811;</span><p><span>\e811</span></p></div>
  <div><span class="icon">&#xE812;</span><p><span>\e812</span></p></div>
  <div><span class="icon">&#xE813;</span><p><span>\e813</span></p></div>
  <div><span class="icon">&#xE814;</span><p><span>\e814</span></p></div>
  <div><span class="icon">&#xE815;</span><p><span>\e815</span></p></div>
  <div><span class="icon">&#xE816;</span><p><span>\e816</span></p></div>
  <div><span class="icon">&#xE817;</span><p><span>\e817</span></p></div>
  <div><span class="icon">&#xE818;</span><p><span>\e818</span></p></div>
  <div><span class="icon">&#xE819;</span><p><span>\e819</span></p></div>
  <div><span class="icon">&#xE81A;</span><p><span>\e81a</span></p></div>
  <div><span class="icon">&#xE81B;</span><p><span>\e81b</span></p></div>
  <div><span class="icon">&#xE81C;</span><p><span>\e81c</span></p></div>
  <div><span class="icon">&#xE81D;</span><p><span>\e81d</span></p></div>
  <div><span class="icon">&#xE81E;</span><p><span>\e81e</span></p></div>
  <div><span class="icon">&#xE81F;</span><p><span>\e81f</span></p></div>
  <div><span class="icon">&#xE820;</span><p><span>\e820</span></p></div>
  <div><span class="icon">&#xE821;</span><p><span>\e821</span></p></div>
  <div><span class="icon">&#xE822;</span><p><span>\e822</span></p></div>
  <div><span class="icon">&#xE823;</span><p><span>\e823</span></p></div>
  <div><span class="icon">&#xE824;</span><p><span>\e824</span></p></div>
  <div><span class="icon">&#xE825;</span><p><span>\e825</span></p></div>
  <div><span class="icon">&#xE826;</span><p><span>\e826</span></p></div>
  <div><span class="icon">&#xE827;</span><p><span>\e827</span></p></div>
  <div><span class="icon">&#xE828;</span><p><span>\e828</span></p></div>
  <div><span class="icon">&#xE829;</span><p><span>\e829</span></p></div>
  <div><span class="icon">&#xE82A;</span><p><span>\e82a</span></p></div>
  <div><span class="icon">&#xE82B;</span><p><span>\e82b</span></p></div>
  <div><span class="icon">&#xE82C;</span><p><span>\e82c</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xE900;</span><p><span>\e900</span></p></div>
  <div><span class="icon">&#xE901;</span><p><span>\e901</span></p></div>
  <div><span class="icon">&#xE902;</span><p><span>\e902</span></p></div>
  <div><span class="icon">&#xE903;</span><p><span>\e903</span></p></div>
  <div><span class="icon">&#xE904;</span><p><span>\e904</span></p></div>
  <div><span class="icon">&#xE905;</span><p><span>\e905</span></p></div>
  <div><span class="icon">&#xE906;</span><p><span>\e906</span></p></div>
  <div><span class="icon">&#xE907;</span><p><span>\e907</span></p></div>
  <div><span class="icon">&#xE908;</span><p><span>\e908</span></p></div>
  <div><span class="icon">&#xE909;</span><p><span>\e909</span></p></div>
  <div><span class="icon">&#xE90A;</span><p><span>\e90a</span></p></div>
  <div><span class="icon">&#xE90B;</span><p><span>\e90b</span></p></div>
  <div><span class="icon">&#xE90C;</span><p><span>\e90c</span></p></div>
  <div><span class="icon">&#xE90D;</span><p><span>\e90d</span></p></div>
  <div><span class="icon">&#xE90E;</span><p><span>\e90e</span></p></div>
  <div><span class="icon">&#xE90F;</span><p><span>\e90f</span></p></div>
  <div><span class="icon">&#xE910;</span><p><span>\e910</span></p></div>
  <div><span class="icon">&#xE911;</span><p><span>\e911</span></p></div>
  <div><span class="icon">&#xE912;</span><p><span>\e912</span></p></div>
  <div><span class="icon">&#xE913;</span><p><span>\e913</span></p></div>
  <div><span class="icon">&#xE914;</span><p><span>\e914</span></p></div>
  <div><span class="icon">&#xE915;</span><p><span>\e915</span></p></div>
  <div><span class="icon">&#xE916;</span><p><span>\e916</span></p></div>
  <div><span class="icon">&#xE917;</span><p><span>\e917</span></p></div>
  <div><span class="icon">&#xE918;</span><p><span>\e918</span></p></div>
  <div><span class="icon">&#xE919;</span><p><span>\e919</span></p></div>
  <div><span class="icon">&#xE91A;</span><p><span>\e91a</span></p></div>
  <div><span class="icon">&#xE91B;</span><p><span>\e91b</span></p></div>
  <div><span class="icon">&#xE91C;</span><p><span>\e91c</span></p></div>
  <div><span class="icon">&#xE91D;</span><p><span>\e91d</span></p></div>
  <div><span class="icon">&#xE91E;</span><p><span>\e91e</span></p></div>
  <div><span class="icon">&#xE91F;</span><p><span>\e91f</span></p></div>
  <div><span class="icon">&#xE920;</span><p><span>\e920</span></p></div>
  <div><span class="icon">&#xE921;</span><p><span>\e921</span></p></div>
  <div><span class="icon">&#xE922;</span><p><span>\e922</span></p></div>
  <div><span class="icon">&#xE923;</span><p><span>\e923</span></p></div>
  <div><span class="icon">&#xE924;</span><p><span>\e924</span></p></div>
  <div><span class="icon">&#xE925;</span><p><span>\e925</span></p></div>
  <div><span class="icon">&#xE926;</span><p><span>\e926</span></p></div>
  <div><span class="icon">&#xE927;</span><p><span>\e927</span></p></div>
  <div><span class="icon">&#xE928;</span><p><span>\e928</span></p></div>
  <div><span class="icon">&#xE929;</span><p><span>\e929</span></p></div>
  <div><span class="icon">&#xE92A;</span><p><span>\e92a</span></p></div>
  <div><span class="icon">&#xE92B;</span><p><span>\e92b</span></p></div>
  <div><span class="icon">&#xE92C;</span><p><span>\e92c</span></p></div>
  <div><span class="icon">&#xE92D;</span><p><span>\e92d</span></p></div>
  <div><span class="icon">&#xE92E;</span><p><span>\e92e</span></p></div>
  <div><span class="icon">&#xE92F;</span><p><span>\e92f</span></p></div>
  <div><span class="icon">&#xE930;</span><p><span>\e930</span></p></div>
  <div><span class="icon">&#xE931;</span><p><span>\e931</span></p></div>
  <div><span class="icon">&#xE932;</span><p><span>\e932</span></p></div>
  <div><span class="icon">&#xE933;</span><p><span>\e933</span></p></div>
  <div><span class="icon">&#xE934;</span><p><span>\e934</span></p></div>
  <div><span class="icon">&#xE935;</span><p><span>\e935</span></p></div>
  <div><span class="icon">&#xE936;</span><p><span>\e936</span></p></div>
  <div><span class="icon">&#xE937;</span><p><span>\e937</span></p></div>
  <div><span class="icon">&#xE938;</span><p><span>\e938</span></p></div>
  <div><span class="icon">&#xE939;</span><p><span>\e939</span></p></div>
  <div><span class="icon">&#xE93A;</span><p><span>\e93a</span></p></div>
  <div><span class="icon">&#xE93B;</span><p><span>\e93b</span></p></div>
  <div><span class="icon">&#xE93C;</span><p><span>\e93c</span></p></div>
  <div><span class="icon">&#xE93D;</span><p><span>\e93d</span></p></div>
  <div><span class="icon">&#xE93E;</span><p><span>\e93e</span></p></div>
  <div><span class="icon">&#xE93F;</span><p><span>\e93f</span></p></div>
  <div><span class="icon">&#xE940;</span><p><span>\e940</span></p></div>
  <div><span class="icon">&#xE941;</span><p><span>\e941</span></p></div>
  <div><span class="icon">&#xE942;</span><p><span>\e942</span></p></div>
  <div><span class="icon">&#xE943;</span><p><span>\e943</span></p></div>
  <div><span class="icon">&#xE944;</span><p><span>\e944</span></p></div>
  <div><span class="icon">&#xE945;</span><p><span>\e945</span></p></div>
  <div><span class="icon">&#xE946;</span><p><span>\e946</span></p></div>
  <div><span class="icon">&#xE947;</span><p><span>\e947</span></p></div>
  <div><span class="icon">&#xE948;</span><p><span>\e948</span></p></div>
  <div><span class="icon">&#xE949;</span><p><span>\e949</span></p></div>
  <div><span class="icon">&#xE94A;</span><p><span>\e94a</span></p></div>
  <div><span class="icon">&#xE94B;</span><p><span>\e94b</span></p></div>
  <div><span class="icon">&#xE94C;</span><p><span>\e94c</span></p></div>
  <div><span class="icon">&#xE94D;</span><p><span>\e94d</span></p></div>
  <div><span class="icon">&#xE94E;</span><p><span>\e94e</span></p></div>
  <div class="clear"></div>
  <div><span class="icon">&#xEA00;</span><p><span>\ea00</span></p></div>
  <div><span class="icon">&#xEA01;</span><p><span>\ea01</span></p></div>
  <div><span class="icon">&#xEA02;</span><p><span>\ea02</span></p></div>
  <div><span class="icon">&#xEA03;</span><p><span>\ea03</span></p></div>
  <div><span class="icon">&#xEA04;</span><p><span>\ea04</span></p></div>
  <div><span class="icon">&#xEA05;</span><p><span>\ea05</span></p></div>
  <div><span class="icon">&#xEA06;</span><p><span>\ea06</span></p></div>
  <div><span class="icon">&#xEA07;</span><p><span>\ea07</span></p></div>
  <div><span class="icon">&#xEA08;</span><p><span>\ea08</span></p></div>
  <div><span class="icon">&#xEA09;</span><p><span>\ea09</span></p></div>
  <div><span class="icon">&#xEA0A;</span><p><span>\ea0a</span></p></div>
  <div><span class="icon">&#xEA0B;</span><p><span>\ea0b</span></p></div>
  <div><span class="icon">&#xEA0C;</span><p><span>\ea0c</span></p></div>
  <div><span class="icon">&#xEA0D;</span><p><span>\ea0d</span></p></div>
  <div><span class="icon">&#xEA0E;</span><p><span>\ea0e</span></p></div>
  <div><span class="icon">&#xEA0F;</span><p><span>\ea0f</span></p></div>
  <div><span class="icon">&#xEA10;</span><p><span>\ea10</span></p></div>
  <div><span class="icon">&#xEA11;</span><p><span>\ea11</span></p></div>
  <div><span class="icon">&#xEA12;</span><p><span>\ea12</span></p></div>
  <div><span class="icon">&#xEA13;</span><p><span>\ea13</span></p></div>
  <div><span class="icon">&#xEA14;</span><p><span>\ea14</span></p></div>
  <div><span class="icon">&#xEA15;</span><p><span>\ea15</span></p></div>
  <div><span class="icon">&#xEA16;</span><p><span>\ea16</span></p></div>
  <div><span class="icon">&#xEA17;</span><p><span>\ea17</span></p></div>
  <div><span class="icon">&#xEA18;</span><p><span>\ea18</span></p></div>
  <div><span class="icon">&#xEA19;</span><p><span>\ea19</span></p></div>
  <div><span class="icon">&#xEA1A;</span><p><span>\ea1a</span></p></div>
  <div><span class="icon">&#xEA1B;</span><p><span>\ea1b</span></p></div>
  <div><span class="icon">&#xEA1C;</span><p><span>\ea1c</span></p></div>
  <div><span class="icon">&#xEA1D;</span><p><span>\ea1d</span></p></div>
  <div><span class="icon">&#xEA1E;</span><p><span>\ea1e</span></p></div>
  <div><span class="icon">&#xEA1F;</span><p><span>\ea1f</span></p></div>
  <div><span class="icon">&#xEA20;</span><p><span>\ea20</span></p></div>
  <div><span class="icon">&#xEA21;</span><p><span>\ea21</span></p></div>
</div>


## How to Use WebComponentsIcons
To use a specific icon from the WebComponentsIcons font in your project, you can define a CSS rule and use the `content` property with the corresponding Unicode value.

The following example demonstrates how to use the `@font-face` rule to load the WebComponentsIcons font and apply a **Star icon** as a styled element.

```CSS
<style>
    @font-face {
        font-family: "WebComponentsIcons";
        src: url("https://d35islomi5rx1v.cloudfront.net/ajaxz/2024.4.1114/Common/WebComponentsIcons.woff") format("truetype");
        font-display: swap;
    }

    .my-custom-icon:before {
        content: "\e303"; /* Replace with the actual Unicode value */
        font-family: 'WebComponentsIcons'; /* Ensure the font is loaded */
        font-size: 24px; /* Adjust the size as needed */
        color: #007bff; /* Customize the icon color */
    }
</style>
```

HTML
```HTML
<i class="my-custom-icon"></i>
```

# See Also

 * [Visual and Dimension Improvements in UI for ASP.NET AJAX](https://www.telerik.com/blogs/visual-and-dimension-improvements-in-ui-for-asp.net-ajax)
 * [Use Material Skin Without Active Internet Connection](https://www.telerik.com/support/kb/aspnet-ajax/details/use-material-skin-without-active-internet-connection)
