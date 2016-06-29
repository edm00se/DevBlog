---
layout: post
type: post
title: "IoT and Raspberry Pi"
description: "and cloud services, and..."
category: iot-pi
tags: [node, raspberry-pi, ibm, watson, cloud, iot]
modified: 2016-05-20
comments: false
share: true
---

### Intro

In my last post on this blog, I mentioned the variety of other projects of somewhat larger scale I'm working on. They are all competing for my time, which is a subset of my personal (non-work) time, combined with the amount of my personal time I allocate for such things. Today I'm announcing the launch of a bit of a side project that will require more of a "slow burn", as it will likely be over a year in the making, once all said and done.

### What Is It?

I'm launching a series of mini-projects revolving entirely around the concepts of:

* [Node.js](https://nodejs.org/)
* [Rasperrby Pi (3)](https://www.raspberrypi.org/)
* IoT / "smart devices" / cloud services

### Why?

Thanks to spotting a tweet about a giveaway from IBM in relation to their Watson services on Bluemix and their Watson IoT platform, I wound up with a Raspberry Pi 3 courtesy of Big Blue. It's everything I love about the Raspberry Pi, but with baked in bluetooth and wifi. If you're looking to learn more about [IBM's Watson IoT platform and Raspberry Pi, check out their link](http://www.ibm.com/internet-of-things/ecosystem/devices/raspberry-pi/).

<blockquote class="twitter-tweet center-block" data-lang="en"><p lang="en" dir="ltr">Did you see we&#39;re giving away 1000 <a href="https://twitter.com/hashtag/RaspberryPi?src=hash">#RaspberryPi</a> &amp; a free trial of IBM Watson <a href="https://twitter.com/hashtag/IoT?src=hash">#IoT</a> Platform? <a href="https://t.co/V2CvZCaIfD">https://t.co/V2CvZCaIfD</a> <a href="https://t.co/LZ8mRyv42W">pic.twitter.com/LZ8mRyv42W</a></p>&mdash; Chris O&#39;Connor (@ChrisROConnor) <a href="https://twitter.com/ChrisROConnor/status/704371556156207104">February 29, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

At the base level, the Raspberry Pi is a great device for IoT application. It runs a true linux distribution (usually a Debian fork made for the Raspberry Pi, called Raspbian) making it immediately familiar to anyone with *nix experience, is greatly, and consistently (across devices), extensible, via their 40-pin GPIO (general purpose input-output) connector, requires low power (a decent phone charger will suffice) to run, runs from a micro-SD card, has USB ports (even more in the recent models), and connects natively to HDMI for convenience (and can use an adapter cable to connect to RCA component). All in all, it's no wonder it's done quite well as a device. I've even [built a couple of projects using them before](https://github.com/samuelclay/Raspberry-Pi-Photo-Frame/pull/6), to great success.

So, in keeping with the intention behind the giveaway, I'm going to do a few neat things with this new found hardware. I'll start with some basic ones and work my way up to more complex applications.

### Where Can I Find This Amazing Thing?

There are two places, the first of mention is the micro-blog. It's a blog, but it will be a bit less frequently updated, with a more in-depth approach for each of the mini-projects/"experiments" in the series. You can find that here: [https://edm00se.github.io/iot-pi/](https://edm00se.github.io/iot-pi/).

As for the other place, once the "experimensts" are published, you can find those in the corresponding GitHub project repository; [edm00se/iot-pi](https://github.com/edm00se/iot-pi).

#### [edm00se.github.io/iot-pi](https://edm00se.github.io/iot-pi)

#### [github.com/edm00se/iot-pi/issues](https://github.com/edm00se/iot-pi/issues?q=is%3Aissue+label%3Aquestion)

### What You Can Do!

Participate! In my [latest post on the micro blog](https://edm00se.github.io/iot-pi/2016/05/thoughts-on-what-to-build/), I'm asking for some audience participation to help drive the direction of this project. All you need to participate is a GitHub account, which I assume most developers either have or would be more than willing to have. Please try to be constructive and thoughtful.

### Summary

All in all, it's the start of something new that I'll keep working on the side. I think it's an interesting project with a fair amount of promise to keep myself striving to learn, adapt, and develop better applications over time. Please feel free to participate in [the exploratory questions on the GitHub repo's issue tracker](https://github.com/edm00se/iot-pi/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aquestion+). :beers: