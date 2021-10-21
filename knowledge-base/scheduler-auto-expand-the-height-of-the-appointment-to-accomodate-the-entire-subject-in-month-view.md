---
title: Auto expand the height of the appointment to accomodate the entire subject in Month view
description: Auto expand the height of the appointment to accomodate the entire subject in Month view. Check it now!
type: how-to
page_title: Auto expand the height of the appointment to accomodate the entire subject in Month view
slug: scheduler-auto-expand-the-height-of-the-appointment-to-accomodate-the-entire-subject-in-month-view
res_type: kb
---

   
## HOW-TO
   
 Auto expand the height of the appointment to accomodate the entire subject in Month view  
   

   
## DESCRIPTION
   
 You can insert appointment with any subject length. The time slot cell and the entire table row will auto expand to accomodate the text. If no appoitnment is present for a given row, its height will be kept at minimum.   
   
## SOLUTION  
   
 The solution is achieved entirely with css:  
   
 ````CSS
.RadScheduler .rsMonthView .rsWrap,
.RadScheduler .rsMonthView .rsApt,
.RadScheduler .rsMonthView .rsAptOut,
.RadScheduler .rsMonthView .rsAptIn,
.RadScheduler .rsMonthView .rsAptMid,
.RadScheduler .rsMonthView .rsAptContent
{
      position: static !important;
      height: auto !important;
}
.RadScheduler .rsMonthView .rsWrap
{
      overflow: hidden;
      font-size: 0;
      line-height: 0;
}
.RadScheduler .rsMonthView .rsLastWrap
{
      height: 16px !important;
}
.RadScheduler .rsMonthView .rsAptContent
{
      position: relative !important;
      border-top: 0;
      border-bottom: 0;
      left: 0;
      top: 0;
}
* html .RadScheduler .rsMonthView .rsAptIn
{
      border-width: 0 1px;
      top: 0;
   margin-left: -1px;
   margin-right: -1px;
}
* html .RadScheduler .rsMonthView .rsAptMid
{
      top: 0;
      left: 1px;
      margin: 0 1px;
      border-width: 1px 0;
}
 ````
 
   
 You can maintain mininum height for the appointments, by adding the following css:  
 

````CSS
.RadScheduler .rsMonthView .rsWrap,
.RadScheduler .rsMonthView .rsAptContent
{
    min-height: 25px;
}
````  
 
   
 ## Limitations:  
 
 This approach doesn't work for multi-day appointments (e.g. Appointments which start in one day and end in another).  
   
   
   