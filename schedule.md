---
layout: page
title: Schedule
permalink: /schedule/
description: Course calendar — weekly topics, sections, and due dates.
---

<!-- Calendar rendered from the _modules collection (Just the Class pattern),
     filtered to the current offering. Real weeks/content added collaboratively. -->

{% assign modules = site.modules | where: "year", site.current_year | sort: "order" %}
{% for module in modules %}
{{ module }}
{% endfor %}
