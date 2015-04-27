---
title: Maximum Length Exceeded Error in WebService Data Binding
page_title: Maximum Length Exceeded Error in WebService Data Binding | RadTreeView for ASP.NET AJAX Documentation
description: Maximum Length Exceeded Error in WebService Data Binding
slug: treeview/troubleshooting/maximum-length-exceeded-error-in-webservice-data-binding
tags: maximum,length,exceeded,error,in,webservice,data,binding
published: True
position: 9
---

# Maximum Length Exceeded Error in WebService Data Binding



## Problem

When you load a lot of nodes via WebService you receive an
error "**Maximum length exceeded**".



## Solution

Extend the **maxJsonLength** property, by adding the following
section to your web.config file, at the configuration level, after the
system.web node:



````XML
	     
	
	        
	        <system.web.extensions>
	            <scripting>
	                <webServices>
	
	        <jsonSerialization maxJsonLength="5000000" />
	                </webServices>
	            </scripting>
	        </system.web.extensions>
	
				
````




