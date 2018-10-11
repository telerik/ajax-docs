---
title: Render Mode
page_title: Render Mode | RadDatePicker for ASP.NET AJAX Documentation
description: Render Mode
slug: datepicker/mobile-support/render-mode
tags: render,mode
published: True
position: 0
---

# Render Mode



## Overview

**RadDatePicker** exposes the **RenderMode** property, which accepts the following values: **Classic**, **Lightweight**, **Native**.

>caution 
The same mode should be selected for all RadDatePicker controls on the entire page. Otherwise, RadDatePicker layout will be damaged due to confusion over the multiple CSS classes on the page.
>


## Classic render mode

**RadDatePicker** is rendered in **Classic** mode by default.

Rendering: (*Silk skin*)

````HTML
<div id="RadDatePicker1_wrapper" class="RadPicker RadPicker_Silk" style="display:inline-block;width:160px;">
	<input style="visibility:hidden;display:block;float:right;margin:0 0 -1px -1px;width:1px;height:1px;overflow:hidden;border:0;padding:0;" id="RadDatePicker1" name="RadDatePicker1" type="text" class="rdfd_ radPreventDecorate" value="" title="Visually hidden input created for functionality purposes." /><table cellspacing="0" class="rcTable rcSingle" summary="Table holding date picker control for selection of dates." style="width:100%;">
		<caption style="display:none;">
			RadDatePicker
		</caption>
        <thead style="display:none;">
			<tr>
				<th scope="col">RadDatePicker</th>
			</tr>
		</thead>
        <tbody>
			<tr>
				<td class="rcInputCell" style="width:100%;"><span id="RadDatePicker1_dateInput_wrapper" class="riSingle RadInput RadInput_Silk" style="display:block;width:100%;"><input id="RadDatePicker1_dateInput" name="RadDatePicker1$dateInput" class="riTextBox riEnabled" type="text" /><input id="RadDatePicker1_dateInput_ClientState" name="RadDatePicker1_dateInput_ClientState" type="hidden" /></span></td>
                <td><a title="Open the calendar popup." href="#" id="RadDatePicker1_popupButton" class="rcCalPopup">Open the calendar popup.</a>
                <div id="RadDatePicker1_calendar_wrapper" style="display:none;">
					<table id="RadDatePicker1_calendar" summary="Calendar control which enables the selection of dates." cellspacing="0" class="RadCalendar RadCalendar_Silk">
						<caption>
							<span style='display:none;'>Calendar</span>
						</caption>
                        <thead>
							<tr>
								<td class="rcTitlebar"><table cellspacing="0" summary="Title and navigation which can change and show the current year and month.">
									<caption>
										<span style='display:none;'>Title and navigation</span>
									</caption><thead>
										<tr style="display:none;">
											<th scope="col">Title and navigation</th>
										</tr>
									</thead>
                                    <tbody>
                                    	<tr>
                                        <td><a id="RadDatePicker1_calendar_FNP" class="rcFastPrev" title="&lt;&lt;" href="#">&lt;&lt;</a></td><td><a id="RadDatePicker1_calendar_NP" class="rcPrev" title="&lt;" href="#">&lt;</a></td><td id="RadDatePicker1_calendar_Title" class="rcTitle">October 2015</td><td><a id="RadDatePicker1_calendar_NN" class="rcNext" title=">" href="#">&gt;</a></td><td><a id="RadDatePicker1_calendar_FNN" class="rcFastNext" title=">>" href="#">&lt;&lt;</a></td>
                                        </tr>
                                    </tbody>
								</table></td>
							</tr>
						</thead>
                        <tbody>
                        	<tr>
                            		<td class="rcMain">
                                    <table id="RadDatePicker1_calendar_Top" class="rcMainTable" cellspacing="0" summary="Table containing all dates for the currently selected month.">
                                    	<caption>
                                        		<span style='display:none;'>October 2015</span>
                                        </caption>
                                        <thead>
                                        		<tr class="rcWeek">
                                                			<th class="rcViewSel" scope="col">&nbsp;</th><th id="RadDatePicker1_calendar_Top_cs_1" title="Sunday" scope="col" abbr="Sun">S</th><th id="RadDatePicker1_calendar_Top_cs_2" title="Monday" scope="col" abbr="Mon">M</th><th id="RadDatePicker1_calendar_Top_cs_3" title="Tuesday" scope="col" abbr="Tue">T</th><th id="RadDatePicker1_calendar_Top_cs_4" title="Wednesday" scope="col" abbr="Wed">W</th><th id="RadDatePicker1_calendar_Top_cs_5" title="Thursday" scope="col" abbr="Thu">T</th><th id="RadDatePicker1_calendar_Top_cs_6" title="Friday" scope="col" abbr="Fri">F</th><th id="RadDatePicker1_calendar_Top_cs_7" title="Saturday" scope="col" abbr="Sat">S</th>
                                        		</tr>
                                    	</thead>
                                        <tbody>
                                        		<tr class="rcRow">
                                                			<th id="RadDatePicker1_calendar_Top_rs_1" scope="row">40</th>
                                                            <td class="rcOtherMonth" title="Sunday, September 27, 2015"><a href="#">27</a></td>
                                                            <!-- || -->
                                        		</tr>
                                                <!-- || -->
	                                    </tbody>
                                    </table>
                                    </td>
                            </tr>
                        </tbody>
					</table>
                    <input type="hidden" name="RadDatePicker1_calendar_SD" id="RadDatePicker1_calendar_SD" value="[]" />
                    <input type="hidden" name="RadDatePicker1_calendar_AD" id="RadDatePicker1_calendar_AD" value="[[1980,1,1],[2099,12,30],[2015,10,13]]" />
				</div>
                </td>
			</tr>
		</tbody>
	</table><input id="RadDatePicker1_ClientState" name="RadDatePicker1_ClientState" type="hidden" />
</div>
````



## Lightweight render mode

**Lighweight** rendering yields completely different markup making maximum use of CSS 3 and semantic html. This means that we no longer use table elements for building the layout of **RadCalendar**. Thus, some table elements are dropped from the rendered mark-up in favor of improved performance and decreased amount of data requested from the client browser. This enhancement favors especially the mobile experience.

>tip 
Not all controls support **Lightweight** render mode.
>


Rendering: (*Silk skin*)

````HTML
<div id="RadDatePicker1_wrapper" class="RadPicker RadPicker_Silk">
	<input style="visibility:hidden;display:block;float:right;margin:0 0 -1px -1px;width:1px;height:1px;overflow:hidden;border:0;padding:0;" id="RadDatePicker1" name="RadDatePicker1" type="text" class="rdfd_ radPreventDecorate" value="" title="Visually hidden input created for functionality purposes." /><div id="RadDatePicker1_dateInput_wrapper" class="RadInput RadInput_Silk">
		<input id="RadDatePicker1_dateInput" name="RadDatePicker1$dateInput" class="riTextBox riEnabled" type="text" /><div class="rcSelect">
			<a title="Open the calendar popup." href="#" id="RadDatePicker1_popupButton" class="rcCalPopup">Open the calendar popup.</a><div id="RadDatePicker1_calendar" class="RadCalendar RadCalendar_Silk" style="display:none;">
				<div class="rcTitlebar">
					<!-- Navigation -->
				</div><div class="rcMain">
					<table id="RadDatePicker1_calendar_Top" class="rcMainTable" cellspacing="0" summary="Table containing all dates for the currently selected month.">
						<caption>
							<span style='display:none;'>October 2015</span>
						</caption>
                        <thead>
							<tr class="rcWeek">
								<th class="rcViewSel" scope="col">&nbsp;</th>
                                <th id="RadDatePicker1_calendar_Top_cs_1" title="Sunday" scope="col" abbr="Sun">S</th>
                                <!-- || -->
							</tr>
						</thead><tbody>
							<tr class="rcRow">
								<th id="RadDatePicker1_calendar_Top_rs_1" scope="row">40</th>
                                <td class="rcOtherMonth" title="Sunday, September 27, 2015"><a href="#">27</a></td>
                                <!-- || -->
							</tr>
                            <!-- || -->
						</tbody>
					</table>
				</div>
                <input type="hidden" name="RadDatePicker1_calendar_SD" id="RadDatePicker1_calendar_SD" value="[]" />
                <input type="hidden" name="RadDatePicker1_calendar_AD" id="RadDatePicker1_calendar_AD" value="[[1980,1,1],[2099,12,30],[2015,10,13]]" />
			</div>
		</div>
        <input id="RadDatePicker1_dateInput_ClientState" name="RadDatePicker1_dateInput_ClientState" type="hidden" />
	</div>
    <input id="RadDatePicker1_ClientState" name="RadDatePicker1_ClientState" type="hidden" />
</div>
````



## Native render mode

The **Native** render mode option is inherited directly from **RenderMode** which is a global property for Telerik controls. However, since **RadDatePicker** does not have a similar HTML element, the **Native** render mode will not have any effect.


