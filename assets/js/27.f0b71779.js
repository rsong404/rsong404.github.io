(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{527:function(v,_,t){"use strict";t.r(_);var s=t(2),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[v._v("此文用于学习，原文链接：")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/zhenghongcs/article/details/104285577",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://blog.csdn.net/zhenghongcs/article/details/104285577"),t("OutboundLink")],1)])]),t("h2",{attrs:{id:"前提理解-重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提理解-重要"}},[v._v("#")]),v._v(" ✔️前提理解(重要)")]),v._v(" "),t("p",[v._v("当我们向服务第三方的服务存储资源是并非只存储在一部服务器，第三方的大公司会在多个地点部署多个服务器备份存储用户的资源，这就给 CDN 实现有了基础，当用户在请求资源的时候 CDN 能分析出离你最近的那个服务器，然后把资源返给你，因为进响应资源的速度自然就快了，否则如没用 用CDN技术的话解析出来的 服务IP地址就不一定是离你最近的了。所以所谓 CDN，就是帮你找到那台离你最近的且有你所需资源的服务器 的这么一个技术。")]),v._v(" "),t("h2",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[v._v("#")]),v._v(" CDN")]),v._v(" "),t("p",[v._v("CDN 全称叫做 “Content Delivery Network”，中文叫"),t("strong",[v._v("内容分发网络")]),v._v("。")]),v._v(" "),t("p",[v._v("实际上 CDN 这个概念是在 1996 年由美国麻省理工学院的一个研究小组为"),t("strong",[v._v("改善互联网的服务质量")]),v._v("而提出的。那么它到底是怎么改善互联网服务质量的呢？")]),v._v(" "),t("h3",{attrs:{id:"原理分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理分析"}},[v._v("#")]),v._v(" 原理分析")]),v._v(" "),t("p",[v._v("我们知道，当我们使用域名访问某一个网站时，实际上就是将请求包（以 Http 请求为例）通过网络传输给某台服务器，比如访问 “www.baidu.com” 时：")]),v._v(" "),t("p",[v._v("💥1.  首先解析出该域名所对应的 IP 地址 (DNS 域名解析)")]),v._v(" "),t("p",[v._v("💥2.  然后将 Http 请求包通过网络路由到 IP 地址所对应的服务器")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[v._v("我们通常说 “服务器的 IP 地址”，这其实不太准确，IP 地址是和网卡绑定的，一个服务器可以有多个网卡，也就是可能有多个 IP 地址。")])]),t("p",[v._v("我们先来看第一步：域名解析")]),v._v(" "),t("h3",{attrs:{id:"域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[v._v("#")]),v._v(" 域名解析")]),v._v(" "),t("p",[v._v("解析域名分为两种：")]),v._v(" "),t("p",[v._v("💥1. 将一个域名解析为一个 IP 地址")]),v._v(" "),t("p",[v._v("💥2. 将一个域名解析为另外一个域名")]),v._v(" "),t("p",[v._v("其实解析思路不难，我们在域名服务商购买了一个域名之后，需要去映射一个 IP 地址，可以用 Map 来表示这个关系： {域名：IP} 。")]),v._v(" "),t("p",[v._v("同时我们也可以给某个域名取一个别名，比如 “www.baidu.com” 取一个别名 “test.baidu.com”，这种关系也可以用 Map 来表示： {域名：别名} 。这里的别名专业一点叫做 "),t("strong",[v._v("CNAME")]),v._v("，相信大家对这个词有点眼熟，它就是这个意思。")]),v._v(" "),t("p",[v._v("而"),t("strong",[v._v("域名解析")]),v._v("，实际上就是解析出指定域名所对应的 IP 地址，或者该域名的一个 CNAME。")]),v._v(" "),t("p",[v._v("而域名解析是由 DNS 系统来负责的，DNS 服务接受外部请求，从请求里提取域名，")]),v._v(" "),t("p",[v._v("💥  如果这个域名对应的是 IP 地址，则返回这个 IP 地址，")]),v._v(" "),t("p",[v._v("💥  如果这个域名对应的是 CNAME，则继续查找 CNAME 域名的 IP 地址，然后将该地址返回给请求发送者。")]),v._v(" "),t("p",[v._v("请求发送者拿到 IP 地址之后，完成真正的请求调用。")]),v._v(" "),t("p",[v._v("实际上 DNS 系统是非常庞大的，这里不去多将，大家把它当作一个黑盒子，这个盒子的作用就是上文所描述的，这里用一个简单的图来表示一下。")]),v._v(" "),t("p",[v._v("没有 CNAME 的情况："),t("br"),v._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/rsong404/vuepress_img@master/images/cdn1.png",alt:""}})]),v._v(" "),t("p",[v._v("有 CNAME 的情况："),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/rsong404/vuepress_img@master/images/cdn2.png",alt:""}})]),v._v(" "),t("p",[t("strong",[v._v("特别注意：在有 CNAME 的情况下，我们可以发现，CNAME 实际上在域名解析的过程中承担了中间人（或者说代理）的角色，这是 CDN 实现的关键。")])]),v._v(" "),t("h3",{attrs:{id:"cdn-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn-原理"}},[v._v("#")]),v._v(" CDN 原理")]),v._v(" "),t("p",[v._v("首先 "),t("strong",[v._v("CDN")]),v._v(" 是为了"),t("strong",[v._v("改善互联网的服务质量")]),v._v("的。通俗一点说其实就是提高访问速度。")]),v._v(" "),t("p",[v._v("假设百度网站现在只有一台服务器，现在有一个人在上海访问百度，如果该服务器也在上海，那么通常来说访问比较快，如果该服务器在拉萨，那么相对而言访问就比较慢了。那么这个问题的根本原因是网络传输是依赖于网线的，网线越长，那么时间肯定就越久。")]),v._v(" "),t("p",[v._v("那么怎么解决这个问题呢？其实思路很简单，"),t("strong",[v._v("百度在全国各地都部署一模一样的服务器就行了，专业一点叫冗余。")])]),v._v(" "),t("p",[v._v("思路很简单，但实现还是比较麻烦的，服务器上的资源分为两种："),t("strong",[v._v("静态资源")]),v._v("与"),t("strong",[v._v("动态资源")]),v._v("。")]),v._v(" "),t("p",[v._v("💥 静态资源：这种资源通常是很少变动的，比如图片，视频，css，javascript 等等")]),v._v(" "),t("p",[v._v("💥 动态资源：这种资源不同用户不同时刻访问通常是不一样的，比如 ftl，jsp 等等。")]),v._v(" "),t("p",[v._v("那么如果百度要在全国各地都部署服务器，如果说每个服务器上都有相同的动态资源，那么可能还需要配置相应的数据库，因为动态资源所记录的信息通常会存储在数据库中，那么这就涉及到了数据同步等等问题，这会导致成本很高，这种做法专业一点其实就是集群，"),t("strong",[v._v("而目前来说集群架构最多是")]),v._v("三地五中心，不是说全国多地集群不可能，主要是成本太高。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[v._v("大家想了解三地五中心的，可以看 https://mp.weixin.qq.com/s/uGyGldbwmShDDPDau5pAPw 这篇文章，也是本人写的。")])]),t("p",[v._v("那么有没有成本比较低的方式呢，有，就是在每个服务器上只部署静态资源，静态资源通常不涉及到数据库，所以成本也比较低，而且也能提高用户的访问速度。")]),v._v(" "),t("p",[v._v("到这里，介绍了 CDN 想要达到的目的，那么怎么达到这个目的呢？")]),v._v(" "),t("p",[v._v("现在如果要比较 CDN 系统，我们可以考虑两点：")]),v._v(" "),t("p",[v._v("💥1.  CDN 系统中存储静态资源服务器的性能以及网速怎么样。")]),v._v(" "),t("p",[v._v("💥2.  CDN 系统中全国甚至全球范围内服务器节点的数量以及部署情况。")]),v._v(" "),t("p",[v._v("第一点很好理解，第二点大家应该也能理解了，如果静态资源的服务器节点很多，能够让每个用户在访问这些静态资源时都不用 “跑很远的路程” 才能获取到，那么自然这是 CDN 系统的优点。")]),v._v(" "),t("p",[v._v("有公司看到了这种需求，所以现在其实有很多 CDN 供应商，比如阿里，腾讯等等都有自己的 CDN 服务。只要你自己的系统接入了这些大厂所提供的 CDN 服务，你把自己的静态资源传给 CDN 服务，那么这些静态资源将自动的分布到全世界各地去。")]),v._v(" "),t("p",[v._v("好，那么现在的问题是，用户在访问静态资源时也是通过域名来访问的，域名会被解析成"),t("strong",[v._v("某一个")]),v._v(" IP 地址，关键的问题就是，"),t("strong",[v._v("DNS 系统怎么在做域名解析时，解析出来一个离用户最近的一个 IP 地址呢")]),v._v("。")]),v._v(" "),t("p",[v._v("普通的 DNS 系统是做不到的，需要一个特殊的 DNS 服务器，这个特殊 DNS 需要知道")]),v._v(" "),t("p",[v._v("💥1.  用户当前所在位置")]),v._v(" "),t("p",[v._v("💥2.  还需要知道用户现在访问的这个域名对应哪些 IP 地址，以及这个 IP 地址分别在哪？")]),v._v(" "),t("p",[v._v("对于第一个问题好解决，直接从用户请求里提取出用户的 ip 地址，比如这个 ip 地址被解析为北京电信、上海移动等等。")]),v._v(" "),t("p",[v._v("第二个问题由谁来解决，我们现在考虑的是 CDN，CDN 提供商肯定知道他们公司在哪些地方部署了机器以及它们的 IP 地址，所以这个问题只能有 CDN 提供商来解决，"),t("strong",[v._v("CDN 提供商会提供这个特殊的 DNS 服务器，我们叫做 CDN 专用 DNS 服务器")]),v._v("。")]),v._v(" "),t("p",[v._v("这样的话，只要用户在使用某个域名访问静态资源时，如果用户直接配置自己电脑的 "),t("strong",[v._v("DNS 地址为 CDN 专用 DNS 服务器")]),v._v("。那么自然解决了问题，但是我们需要考虑的时，我们不能要求世界上所有的用户都去修改自己电脑的 DNS 地址。所以这个时候就要利用 DNS 中的 CNAME 了。")]),v._v(" "),t("p",[v._v("用户使用某个域名来访问静态资源时（这个域名在阿里 CDN 服务中叫做 “加速域名”），比如这个域名为 “image.baidu.com”，它对应一个 CNAME，叫做 “cdn.ali.com”，那么普通 DNS 服务器（区别 "),t("strong",[v._v("CDN 专用 DNS 服务器")]),v._v("）在解析 “image.baidu.com” 时，会先解析成 “cdn.ali.com”，普通 DNS 服务器发现该域名对应的也是一个 DNS 服务器，那么会将域名解析工作转交给该 DNS 服务器，该 DNS 服务器就是 "),t("strong",[v._v("CDN 专用 DNS 服务器。CDN 专用 DNS 服务器")]),v._v("对 “cdn.ali.com” 进行解析，然后依据服务器上记录的所有 CDN 服务器地址信息，选出一个离用户最近的一个 CDN 服务器地址，并返回给用户，用户即可访问离自己最近的一台 CDN 服务器了。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/rsong404/vuepress_img@master/images/cdn3.png",alt:""}})])])}),[],!1,null,null,null);_.default=a.exports}}]);