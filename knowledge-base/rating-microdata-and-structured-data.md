---
title: Microdata and Structured Data
description: Microdata and Structured Data - RadRating
type: how-to
page_title: Microdata and Structured Data
slug: microdata-and-structured-data
res_type: kb
---

## DESCRIPTION

When I use RadRating I need to generate also [microformats](https://webdesign.tutsplus.com/articles/an-introduction-to-structured-data-markup--webdesign-8577) ([structured data](https://developers.google.com/search/docs/guides/intro-structured-data)).

RadRating is a user interface control, which means it renders markup and provides functionality for the end user visiting the current page it is on.   
  
 Rating details from structured data are rendered on the google search results page and thus RadRating cannot render there.  
  
 As to the structured data itself that is used to provide those ratings - RadRating does not generate such markup - it is simply too diverse and subject to change at any time, while not serving (only and precisely) the purpose of a rating UI in the page. It may also require that you tamper with many elements, like the &lt;html&gt; element, which is not a good practice for a UI component instance.   
  
 Thus, adding structured data and microdata to the page is up to the developer entirely.

## SOLUTION

Render the desired data and/or markup through code unrelated to RadRating on your page for Google to crawl.

To store rating details from your users, use the events RadRating provides (either [server-side](https://demos.telerik.com/aspnet-ajax/rating/examples/databinding/defaultcs.aspx), or [client-side](https://demos.telerik.com/aspnet-ajax/rating/examples/clientsidefunctionality/defaultcs.aspx), depending on your application architecture, and store the necessary information in a database of your choice).
 
 