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
* Reliability (transparent, consistent, statuspage.io)
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

