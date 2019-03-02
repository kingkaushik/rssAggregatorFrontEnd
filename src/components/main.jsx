import React, { Component } from 'react';
import Title from './title';
import Image from './image';
import Date from './date';
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
    state={
        js:[
            {
                "title": "Google Duo 48 preps ‘precall’ contacts interface, ‘Engagement Rewards by Google’ [APK Insight]",
                "link": "https://9to5google.com/2019/02/20/google-duo-48-apk-insight-teardown/",
                "date": "Thu, 21 Feb 2019 04:45:11 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/APK-Insight-Google-Duo-48.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>After adding a fun effect for <a href=\"https://9to5google.com/2019/02/12/google-duo-valentines-day-heart-effect/\">Valentine&#8217;s Day</a> that <a href=\"https://twitter.com/juberti/status/1096145913569959937\">leverages</a> hardware-accelerated on-device inferencing, the latest version of Google&#8217;s consumer video calling service is rolling out. Google Duo 48 details work on a &#8220;precall&#8221; interface that&#8217;s essentially an improved contacts screen, and &#8220;Engagement Rewards.&#8221;</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/google-duo-48-apk-insight-teardown/#more-272896\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/google-duo-48-apk-insight-teardown/\">Google Duo 48 preps &#8216;precall&#8217; contacts interface, &#8216;Engagement Rewards by Google&#8217; [APK Insight]</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Gboard 8.0 preps Clipboard w/ one hour history & pausing, sharing languages, more [APK Insight]",
                "link": "https://9to5google.com/2019/02/20/gboard-8-0-apk-insight-teardown/",
                "date": "Thu, 21 Feb 2019 02:42:11 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/APK-Insight-Google-Gboard-8-0.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Gboard 8.0 is now in the beta channel and continues work on the built-in Clipboard manager by refining the feature ahead of launch. The Google keyboard is also working on a sharing capability that includes the language you&#8217;re using, as well as exporting the personal dictionary.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/gboard-8-0-apk-insight-teardown/#more-272872\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/gboard-8-0-apk-insight-teardown/\">Gboard 8.0 preps Clipboard w/ one hour history &amp; pausing, sharing languages, more [APK Insight]</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Galaxy Watch Active tidbits: Downgraded charger, blood pressure details, colors, more",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-tidbits/",
                "date": "Thu, 21 Feb 2019 01:50:30 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung_galaxy_watch_active_1-1.jpg?quality=82&#038;strip=all&#038;w=1500\"></p>\n<p>Samsung&#8217;s Unpacked 2019 event occurred today, with the company unveiling all of its latest phones, wearables, and accessories. Their latest and most affordable smart watch, the Galaxy Watch Active, didn&#8217;t get quite the full amount of attention it deserved on stage today. So here are some extras you may have missed.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-tidbits/#more-272842\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-tidbits/\">Galaxy Watch Active tidbits: Downgraded charger, blood pressure details, colors, more</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Google reorganizes Public Policy division with eye towards tech regulation, international growth",
                "link": "https://9to5google.com/2019/02/20/google-public-policy-reorg/",
                "date": "Thu, 21 Feb 2019 01:31:01 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/10/google_logo_nyc_2.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>As technology&#8217;s role, reach, and impact grows in the coming years, it will face a great deal of public scrutiny and government regulation. As one of the biggest companies, Google will face a significant amount of attention, and is reorganizing the division responsible for policy and government relations.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/google-public-policy-reorg/#more-272861\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/google-public-policy-reorg/\">Google reorganizes Public Policy division with eye towards tech regulation, international growth</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung Galaxy S10 tidbits: Bixby button remapping, RIP notification LED, colors, more",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-s10-tidbits/",
                "date": "Wed, 20 Feb 2019 23:53:29 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung_galaxy_s10_3.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>After several weeks full of rumors, reports, and leaks, Samsung <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-specs-price-release-date/\">officially unpacked the Galaxy S10 and S10+ today</a> at a San Francisco event. The company&#8217;s new lineup brings a ton to the table, and a lot of the exciting bits and pieces about the device didn&#8217;t make it to the presentation on stage. Here are a few Galaxy S10 details you might have missed.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-tidbits/#more-272712\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-tidbits/\">Samsung Galaxy S10 tidbits: Bixby button remapping, RIP notification LED, colors, more</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Download the official Samsung Galaxy S10 and S10+ wallpapers right here [Gallery]",
                "link": "https://9to5google.com/2019/02/20/galaxy-s10-wallpapers-download/",
                "date": "Wed, 20 Feb 2019 22:51:02 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung_galaxy_s10e.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Now that Samsung&#8217;s <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-specs-price-release-date/\">Galaxy S10 and Galaxy S10+ have gone official</a>, we&#8217;re getting every last detail out of the company&#8217;s new devices. That now includes a full collection of all of the Galaxy S10 wallpapers available for download for use on your device&#8230;</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/galaxy-s10-wallpapers-download/#more-272818\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/galaxy-s10-wallpapers-download/\">Download the official Samsung Galaxy S10 and S10+ wallpapers right here [Gallery]</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "9to5Google Daily 227: Samsung Unpacked brings Galaxy S10, Fold, Watch Active more",
                "link": "https://9to5google.com/2019/02/20/9to5google-daily-227/",
                "date": "Wed, 20 Feb 2019 22:37:37 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/01/9to5google_daily_16-9-1.png?w=1600\"></p>\n<p>Listen to a recap of all the top 9to5Google stories of the day. 9to5Google Daily is available on <a href=\"https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&amp;isi=691797987&amp;ius=googleplaymusic&amp;apn=com.google.android.music&amp;link=https://play.google.com/music/m/Ibido5ts247xvlwttf23mz3tdum?t%3D9to5Google_Daily%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16\">Google Play</a>, <a href=\"https://itunes.apple.com/us/podcast/9to5google-daily/id1341940321?mt=2\" target=\"_blank\" rel=\"noopener noreferrer\">iTunes and Apple’s Podcasts app</a>, <a href=\"https://www.stitcher.com/podcast/9to5google-daily?refid=stpr\">Stitcher</a>, or through our <a href=\"http://feeds.feedburner.com/9to5googleDaily\">dedicated RSS feed</a> for Pocket Casts and other podcast players.</p>\n<p><!--[if lt IE 9]><script>document.createElement('audio');</script><![endif]--><br />\n<audio class=\"wp-audio-shortcode\" id=\"audio-272814-1\" preload=\"none\" style=\"width: 100%;\" controls=\"controls\"><source type=\"audio/mpeg\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/9to5google-daily-227.mp3?_=1\" /><a href=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/9to5google-daily-227.mp3\">https://9to5google.com/wp-content/uploads/sites/4/2019/02/9to5google-daily-227.mp3</a></audio></p>\n<p> <a href=\"https://9to5google.com/2019/02/20/9to5google-daily-227/#more-272814\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/9to5google-daily-227/\">9to5Google Daily 227: Samsung Unpacked brings Galaxy S10, Fold, Watch Active more</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung Galaxy Watch Active goes official w/ no rotating bezel, blood pressure monitoring, $200",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-price-release-date-specs/",
                "date": "Wed, 20 Feb 2019 20:08:16 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung_galaxy_watch_active.jpg?quality=82&#038;strip=all&#038;w=1300\"></p>\n<p>The <a href=\"https://9to5google.com/2019/02/13/wear-os-smartwatch-market-report/\">smartwatch market is growing</a>, and as far as Android is concerned, Samsung is the best-selling option around. Today, the company has <a href=\"https://news.samsung.com/global/samsung-introduces-three-new-wearables-for-balanced-and-connected-living\">officially announced</a> the Samsung Galaxy Watch Active as a successor to its Gear Sport from 2017. Here&#8217;s what you need to know.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-price-release-date-specs/#more-272382\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-price-release-date-specs/\">Samsung Galaxy Watch Active goes official w/ no rotating bezel, blood pressure monitoring, $200</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung’s first 5G smartphone is a super-charged Galaxy S10 w/ 6.7-inch display, 4,500 mAh battery",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-s10-5g/",
                "date": "Wed, 20 Feb 2019 19:57:43 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung_galaxy_s10_5g_1.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Samsung just took the <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-specs-price-release-date/\">wraps off of the Galaxy S10 this morning</a>, and that announcement also came with the reveal of a special edition Galaxy S10 5G. Samsung&#8217;s first 5G phone doesn&#8217;t hold anything back, so let&#8217;s take a look at this monster.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-5g/#more-272672\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-5g/\">Samsung&#8217;s first 5G smartphone is a super-charged Galaxy S10 w/ 6.7-inch display, 4,500 mAh battery</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung announces their latest truly wireless earbuds, the Galaxy Buds",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-buds-announcement/",
                "date": "Wed, 20 Feb 2019 19:50:52 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/galaxy-buds-header.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Samsung is no stranger to the trend of truly wireless earbuds, having released two editions of the <a href=\"https://9to5google.com/2018/01/31/samsung-gear-icon-x-2018-review/\">Samsung Gear IconX</a>, but have yet to reach the level of greatness seemingly achieved by Apple&#8217;s AirPods. At Unpacked 2019, Samsung announced their latest attempt, the Galaxy Buds.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-buds-announcement/#more-272514\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-buds-announcement/\">Samsung announces their latest truly wireless earbuds, the Galaxy Buds</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung’s Galaxy Fit is a dedicated fitness tracker with week-long battery life",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-fit-announcement/",
                "date": "Wed, 20 Feb 2019 19:47:18 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung-galaxy-fit-cover.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>While the <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-watch-active-price-release-date-specs/\">Galaxy Active</a> is the star wearable of Unpacked 2019, Samsung today announced a less-powerful follow-up to the <a href=\"https://9to5google.com/2017/08/30/samsung-gear-fit-2-official/\">Gear Fit 2 Pro</a>. The Samsung Galaxy Fit brings the &#8220;Galaxy&#8221; brand to the company&#8217;s line of fitness trackers.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-fit-announcement/#more-272109\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-fit-announcement/\">Samsung&#8217;s Galaxy Fit is a dedicated fitness tracker with week-long battery life</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung announces the Galaxy S10e, the first ‘budget’ Galaxy S device",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-s10e-announcement/",
                "date": "Wed, 20 Feb 2019 19:40:27 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/s10e-header.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Many companies are eyeing the market for more budget-friendly devices and releasing slightly lesser versions of their premium flagship phones. At Unpacked 2019, Samsung is the latest to try and tap into the success found by the iPhone XR, with the Galaxy S10e, the first budget-friendly phone in the Galaxy S series.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10e-announcement/#more-272518\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10e-announcement/\">Samsung announces the Galaxy S10e, the first &#8216;budget&#8217; Galaxy S device</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung Galaxy S10, S10+ go official w/ ‘Infinity-O’ display, triple cameras, Snapdragon 855, $900",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-s10-specs-price-release-date/",
                "date": "Wed, 20 Feb 2019 19:29:20 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung_galaxy_s10_announcement_1.png?w=1600\"></p>\n<p>At its latest Unpacked event today in San Francisco, Samsung has officially debuted its latest flagship smartphones. Following months of leaks, the Samsung Galaxy S10 and Galaxy S10+ are official. Here&#8217;s what you need to know.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-specs-price-release-date/#more-272381\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-s10-specs-price-release-date/\">Samsung Galaxy S10, S10+ go official w/ &#8216;Infinity-O&#8217; display, triple cameras, Snapdragon 855, $900</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Samsung’s Galaxy Fold is the first Android Foldable, available this April for $1,980",
                "link": "https://9to5google.com/2019/02/20/samsung-galaxy-fold-android-foldable/",
                "date": "Wed, 20 Feb 2019 19:08:53 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/samsung-galaxy-fold-3.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>When Samsung <a href=\"https://9to5google.com/2018/11/07/samsung-infinity-flex-display-prototype/\">showed off</a> its first <a href=\"https://9to5google.com/2018/11/07/google-android-foldables-support/\">Android Foldable</a> last November, it mostly focussed on the display technology and &#8220;disguised elements of the design.&#8221; At Unpacked 2019, this device was officially introduced as the Samsung Galaxy Fold.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/samsung-galaxy-fold-android-foldable/#more-272121\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/samsung-galaxy-fold-android-foldable/\">Samsung&#8217;s Galaxy Fold is the first Android Foldable, available this April for $1,980</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Digital Wellbeing integration coming to Chrome on Android Q devices",
                "link": "https://9to5google.com/2019/02/20/chrome-android-q-digital-wellbeing/",
                "date": "Wed, 20 Feb 2019 18:32:48 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/12/Google-Home-Hub-Google-Assistant-Digital-wellbeing.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Google&#8217;s Digital Wellbeing app, currently an exclusive to Pixel phones, allows you to set usage timers for your apps, which block you out of the app when they expire. A similar usage timer feature is coming for Android Q devices in Google Chrome&#8217;s first Digital Wellbeing integration.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/chrome-android-q-digital-wellbeing/#more-272591\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/chrome-android-q-digital-wellbeing/\">Digital Wellbeing integration coming to Chrome on Android Q devices</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "[Update: Now on iOS] Google Maps adding ‘Follow’ button to get store updates, deals in ‘For you’ tab",
                "link": "https://9to5google.com/2019/02/20/google-maps-follow-button-for-you/",
                "date": "Wed, 20 Feb 2019 18:30:14 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/10/google_maps_4.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>In recent months, Google Maps has added a number of features from a complete Material Theme redesign to <a href=\"https://9to5google.com/2018/10/18/google-maps-trip-sharing-android-ios/\">revamped trip sharing</a>. The <a href=\"https://www.blog.google/products/maps/fresh-ways-stay-date-your-favorite-places-and-find-new-ones/\">latest update</a> adds a new feature to the &#8220;For you&#8221; tab that allows users to follow stores and get updates.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/google-maps-follow-button-for-you/#more-252990\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/google-maps-follow-button-for-you/\">[Update: Now on iOS] Google Maps adding &#8216;Follow&#8217; button to get store updates, deals in &#8216;For you&#8217; tab</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Google displaying AMP-based ads that are faster and more secure on regular web pages",
                "link": "https://9to5google.com/2019/02/20/google-amp-ads-regular-web/",
                "date": "Wed, 20 Feb 2019 17:49:31 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/09/google_amp_1.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>With <a href=\"https://9to5google.com/2016/09/20/amp-mobile-search-results/\">Accelerated Mobile Pages</a>, Google set out to deliver a faster web experience on Android and iOS. Developing advertising that worked in a similar fashion was an important step to <a href=\"https://9to5google.com/2016/01/26/amp-ads-support/\">boost adoption</a>, with Google <a href=\"https://www.blog.google/products/ads/making-display-ads-safer-faster-and-better/\">now displaying</a> AMPHTML ads on non-AMP pages.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/google-amp-ads-regular-web/#more-272599\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/google-amp-ads-regular-web/\">Google displaying AMP-based ads that are faster and more secure on regular web pages</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Slack for Android picks up support for Google Smart Lock in beta, enables easier sign-in",
                "link": "https://9to5google.com/2019/02/20/slack-android-google-smart-lock-beta/",
                "date": "Wed, 20 Feb 2019 17:45:50 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/01/slack_1.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>If you work in the digital world at all, <a href=\"https://9to5google.com/2019/01/16/slack-new-logo/\">Slack is probably</a> your go-to app for communicating with co-workers. For many, signing into multiple Slack accounts is required, and in its latest beta update, it&#8217;s going to get a lot easier to do that with Google Smart Lock support.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/slack-android-google-smart-lock-beta/#more-272610\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/slack-android-google-smart-lock-beta/\">Slack for Android picks up support for Google Smart Lock in beta, enables easier sign-in</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Here’s where to watch Samsung Unpacked live w/ Galaxy S10, Galaxy Fold unveiling [Video]",
                "link": "https://9to5google.com/2019/02/20/how-to-watch-samsung-galaxy-s10-event/",
                "date": "Wed, 20 Feb 2019 17:37:21 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/galaxy_s10_plus_leak_11.jpg?quality=82&#038;strip=all&#038;w=1100\"></p>\n<p>Samsung is set to host one of its biggest Unpacked events in years today. Live from San Francisco, the company is getting ready to <a href=\"https://9to5google.com/2019/02/19/samsung-galaxy-s10-ad-leaks-video/\">unveil the Galaxy S10 family</a>, show off the <a href=\"https://9to5google.com/2019/01/10/samsung-foldable-galaxy-unpacked/\">new Galaxy Fold</a>, and launch a plethora of other products. Here&#8217;s how to watch the Samsung Galaxy S10 event live.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/how-to-watch-samsung-galaxy-s10-event/#more-272581\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/how-to-watch-samsung-galaxy-s10-event/\">Here&#8217;s where to watch Samsung Unpacked live w/ Galaxy S10, Galaxy Fold unveiling [Video]</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "9to5Toys Last Call: Pixel 3/XL Refurb from $550, Chromecast $28, Amazon Storage & Networking Sale from $8, more",
                "link": "https://9to5google.com/2019/02/20/9to5toys-google-chromecast-amazon-more/",
                "date": "Wed, 20 Feb 2019 17:31:22 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/07/9to5toys-lunch.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>9to5Toys <a href=\"https://9to5toys.com/2018/09/20/9to5toys-ios-app-now-available/\">now has a new app! </a>Download it to stay up to date on the best gear and deals on the web. Plus don&#8217;t forget to <a href=\"https://apple.news/TkuTewXR-QbyYs-mKwCr8tQ\">check us out on Apple News</a>and <em><strong><a href=\"http://9to5toys.com/9to5toys-newsletter-signup/\" target=\"_blank\" rel=\"noopener noreferrer\">sign up for the 9to5Toys Newsletter</a></strong></em>. Also, be sure to check us out on: <a href=\"http://twitter.com/9to5toys\">Twitter</a>, <a href=\"http://9to5toys.com/feed\">RSS Feed</a>, <a href=\"http://www.facebook.com/pages/9to5toyscom/228249133858390\">Facebook</a>, <a href=\"https://plus.google.com/b/105878626736210310777/105878626736210310777/posts\" target=\"_blank\" rel=\"noopener noreferrer\">Google+</a> and <a href=\"https://9to5mac.com/2013/12/11/safari-push-notifications-are-liave-on-all-9to5-sites/\" target=\"_blank\" rel=\"noopener noreferrer\">Safari push notifications</a>.</p>\n<h3>Listen to the new 9to5Toys Daily Podcast:</h3>\n<p><audio class=\"wp-audio-shortcode\" id=\"audio-272596-2\" preload=\"none\" style=\"width: 100%;\" controls=\"controls\"><source type=\"audio/mpeg\" src=\"https://9to5toys.com/wp-content/uploads/sites/5/2019/02/9to5Toys-Daily-2-20-2019.mp3?_=2\" /><a href=\"https://9to5toys.com/wp-content/uploads/sites/5/2019/02/9to5Toys-Daily-2-20-2019.mp3\">https://9to5toys.com/wp-content/uploads/sites/5/2019/02/9to5Toys-Daily-2-20-2019.mp3</a></audio></p>\n<p> <a href=\"https://9to5google.com/2019/02/20/9to5toys-google-chromecast-amazon-more/#more-272596\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/9to5toys-google-chromecast-amazon-more/\">9to5Toys Last Call: Pixel 3/XL Refurb from $550, Chromecast $28, Amazon Storage &amp; Networking Sale from $8, more</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Official-looking Nokia 9 PureView renders leak w/ Android One branding, five-camera setup",
                "link": "https://9to5google.com/2019/02/20/nokia-9-pureview-leak-android-one/",
                "date": "Wed, 20 Feb 2019 15:25:16 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/nokia_9_pureview_leak_1.jpg?quality=82&#038;strip=all&#038;w=1400\"></p>\n<p>It&#8217;s been rumored for months now that Nokia <a href=\"https://9to5google.com/2019/02/07/nokia-9-pureview-leaked-press-renders/\">is preparing to launch</a> a phone with not two, not three, but a whopping five cameras on the back. Today, official-looking renders of the Nokia 9 PureView have just hit the web.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/nokia-9-pureview-leak-android-one/#more-272571\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/nokia-9-pureview-leak-android-one/\">Official-looking Nokia 9 PureView renders leak w/ Android One branding, five-camera setup</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Vivo V15 Pro goes official w/ pop-up 32MP selfie camera, Snapdragon 675, inexplicable microUSB port",
                "link": "https://9to5google.com/2019/02/20/vivo-v15-pro-specs-price/",
                "date": "Wed, 20 Feb 2019 15:02:12 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/vivo_v15_pro_1.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Ahead of MWC 2019, the Vivo V15 Pro has been officially announced. The device brings in some of the more advanced features we&#8217;ve been seeing on the company&#8217;s NEX devices, but this time on a mainstream product. Here&#8217;s what you need to know.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/vivo-v15-pro-specs-price/#more-272553\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/vivo-v15-pro-specs-price/\">Vivo V15 Pro goes official w/ pop-up 32MP selfie camera, Snapdragon 675, inexplicable microUSB port</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Nest Secure microphone was ‘never supposed to be a secret,’ meant for detection features",
                "link": "https://9to5google.com/2019/02/20/nest-secure-microphone-error/",
                "date": "Wed, 20 Feb 2019 14:51:42 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2018/07/Nest-Secure-Alarm-system.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Earlier this month, Google announced that the <a href=\"https://9to5google.com/2017/09/20/nest-secure-home-security/\">Nest Secure</a> can <a href=\"https://9to5google.com/2019/02/04/nest-secure-google-assistant/\">double as a Google Assistant device</a> for quick voice commands. This is due to the Nest Guard featuring an on-device microphone that was previously — and accidentally — not disclosed, with some criticizing Google for its &#8220;error.&#8221;</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/nest-secure-microphone-error/#more-272545\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/nest-secure-microphone-error/\">Nest Secure microphone was ‘never supposed to be a secret,’ meant for detection features</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Xiaomi Mi 9 goes official w/ Snapdragon 855, triple-camera, 20W wireless charging, $445",
                "link": "https://9to5google.com/2019/02/20/xiaomi-mi-9-specs-release-date-price/",
                "date": "Wed, 20 Feb 2019 14:31:10 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/xiaomi_mi_9_31.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Following some teasers in the past few days, Xiaomi has today officially launched its first flagship of 2019, the Xiaomi Mi 9. The new device doubles down on competitive pricing, offering specs we simply don&#8217;t see at the same price point anywhere else. Here&#8217;s what you need to know.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/xiaomi-mi-9-specs-release-date-price/#more-272542\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/xiaomi-mi-9-specs-release-date-price/\">Xiaomi Mi 9 goes official w/ Snapdragon 855, triple-camera, 20W wireless charging, $445</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            },
            {
                "title": "Unreleased Google device passes through FCC certification, likely new Google Wifi",
                "link": "https://9to5google.com/2019/02/20/new-google-wifi-fcc/",
                "date": "Wed, 20 Feb 2019 08:07:54 +0000",
                "category": "Google",
                "description": "<p><img class=\"type:primaryImage\" src=\"https://9to5google.com/wp-content/uploads/sites/4/2019/02/new-google-wifi-fcc-clearance.jpg?quality=82&#038;strip=all&#038;w=1600\"></p>\n<p>Before products can be sold to consumers, most countries require that electronic devices get approved by the national regulatory agency. Late this evening, A4R-1701AA1 passed through the FCC as a possible new <a href=\"https://9to5google.com/2016/12/06/google-wifi-review/\">Google Wifi</a> router.</p>\n<p> <a href=\"https://9to5google.com/2019/02/20/new-google-wifi-fcc/#more-272524\" class=\"more-link\">more&#8230;</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://9to5google.com/2019/02/20/new-google-wifi-fcc/\">Unreleased Google device passes through FCC certification, likely new Google Wifi</a> appeared first on <a rel=\"nofollow\" href=\"https://9to5google.com\">9to5Google</a>.</p>\n"
            }
        ]
    }
    fetchData(){
      const that=this;
      console.log('fetchData');
        // console.log('I am called');
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this);
            // console.log(typeof(this.responseText));
            // console.log(JSON.parse(this.responseText));
            console.log(that);
          }
        });

        xhr.open("GET", "http://localhost:4000");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "0a65afe3-caa1-4740-b2b1-8895853113a0");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Access-Control-Allow-Headers", "X-PINGOTHER");
        xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0");
        xhr.send(data);
    }
    componentDidMount(){
      this.fetchData();
      // console.log(typeof(this.fetchData));
    }
    render()
    {


        /*<li dangerouslySetInnerHTML={ {__html: x.description} }/>*/
        return(
            <div className="div1">
            {this.state.js.map(
                x=><div id={x.title}className="div2">
                    <div className="Image">
                        <Image key={x.title} description={x.description} />
                    </div>
                    <div>
                        <div className="Title">
                            <Title key={x.title} title={x.title}/>
                        </div>
                        <div className="Date">
                            <Date key={x.title} date={x.date}/>
                        </div>
                    </div>
                   </div>
            )}
            </div>

            );
    }
}

export default Counter;
