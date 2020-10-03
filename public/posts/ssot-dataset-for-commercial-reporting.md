---
title: Why we needed an SSOT dataset for commercial reporting, and how we built it with Python and SQL
description: 
createdAt: 2020-10-03
coverImage: /images/vandebron_thuis.jpg
tags: python, sql, ssot, dataset, tsql, pandas, single source of truth
author: Pieter Custers
---

### Notes

#### Topics to touch upon
* Traceability (SignupRequestId etc.)
* Reproducability (past-tables)
* Discussion should be about the content, not the data (statuspage.io, funnel, logging, show graph of evolution of sales on specific date)
* Maintainability ("unittests", cleaning)
* Reliability (transparent, consistent, statuspage.io/monitoring)
* Scaleability?

#### Evolutionary phases of a BI/DA team
1. The beginning: all knowledge centralized in small but dedicated BI team (or person)
2. Start-up phase: demand quickly becomes too high; decentralized DIY data culture with lots of different SOT's; BI-team focused on most urgent topics (maybe an intern to do some dashboarding)
3. Scale-up phase: centralization effort to meet need for SSOT
4. CoE-phase: demand again becomes too high... DA-team maintains SSOT!

#### Story line
0. Intro
- this applies to you if: ...
- read on if you want to know how Vandebron solved this

1. Realization of the problem
- evolutionary phases of DA team
- we got questions like: ...
- the discussion was about the data (and in sales that works demotivating!)
- to shift the discussion to the content, we needed: ... traceability, reproducability, maintainability, transparency, and above all: single source

2. Reveal of the takeaway
- the solution: SSOT datasets
- examples of applications (dashboarding, reporting, forecast models)
- not suited for: other than analytics

3. Applying the takeaway
- map the sales funnel and determine stages
- make sure to measure everything
- gather the data from all sources (incl. traceability)
- clean the data according to business rules (review these regularly)
- use a maintainable and transparent script for cleaning ("unittests")
- sync incrementally (mirror-table, past-table, lastmodifieddate per customer)
- enrich the data (scg, ffbi)

# Article

You know the company you work for is outgrowing its start-up phase the moment somebody drops the line "It looks like we are actually becoming a real company" without smiling. The data department should be ahead of this. Because when the business grows fast, the need for more reliable data grows faster, and you can't afford lagging behind events.

Looking back at the process within Vandebron, I conclude we would not have done things differently. However with the insights of today, I'd have argued to do things earlier (and so I advise you: start today).

We spent tons of valuable time on questions like: 
* We made 10 sales yesterday, why does the dashboard show only 9?
* Previous time you reported 1000 sales for last January, why do you report 970 sales for January now? 
* The dashboard shows no data, what's going on?

And we would have avoided that by early-on creating a dataset that serves as a Single-Source-Of-Truth (SSOT).

Still, after outgrowing the start-up and scale-up phase, - as a data team we can now focus on predictive modelling instead of historical reporting for most of our time - these datasets are the essential basis of our commercial dashboards, reports and models.

## SSOT dataset for commercial reporting

A well designed dataset meet the following requirements:
* 


