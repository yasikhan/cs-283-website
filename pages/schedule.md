---
layout: page
title: Schedule
permalink: /schedule/
wide: true
description: Course calendar — every lecture date, slides, and deadline for the quarter.
---

Slides are posted as each lecture is delivered. Reading lists live on the
[lecture pages]({{ '/lectures/' | relative_url }}) and may be updated up until two
weeks before a lecture.

<!-- One table for the whole quarter. Each _modules doc contributes a <tbody>
     (see _layouts/module.html), filtered to the current offering. -->

<div class="cal-scroll">
<table class="cal">
  <thead>
    <tr>
      <th scope="col" class="cal-date">Date</th>
      <th scope="col" class="cal-topic">Lecture</th>
      <th scope="col" class="cal-slides">Slides</th>
      <th scope="col" class="cal-deadline">Deadlines</th>
    </tr>
  </thead>
  {% assign modules = site.modules | where: "year", site.current_year | sort: "order" %}
  {% for module in modules %}{{ module }}{% endfor %}
</table>
</div>
