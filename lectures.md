---
layout: page
title: Lectures
permalink: /lectures/
---

<!-- Lecture list rendered from the per-year _2026 collection. -->

<ul>
{% assign lectures = site['2026'] | sort: 'date' %}
{% for lecture in lectures %}
  <li>
    <strong>{{ lecture.date | date: '%-m/%-d/%y' }}</strong>:
    {% if lecture.ready %}<a href="{{ lecture.url | relative_url }}">{{ lecture.title }}</a>{% else %}{{ lecture.title }}{% endif %}
  </li>
{% endfor %}
</ul>
