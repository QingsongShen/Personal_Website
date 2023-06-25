<?php

$header = <<<A
<div class="menu-btn">
	<div class="menu-container" id="toggle">
	  <a href="#" class="canvas-menu" >
		<i class="fa fa-times fa-bars" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="overlay" id="overlay">
	  <nav class="overlay-menu">
		<ul class="offcanvas-menu">
			<li>
				<a href="index.html" title="">简历主页</a>
			</li>
			<li>
				<a href="education.html" title="">学历信息</a>
			</li>
			<li>
				<a href="technology.html" title="">技术能力</a>
			</li>
			<li>
				<a href="https://www.cnblogs.com/sqsgoodluck/" title="" target="_blank">博客</a>
			</li>
			<!-- <li class="menu-item-has-children">
				<a href="#" title="">Blog</a>
				<ul>
					<li><a href="blog.html" title="">blog</a></li>
					<li><a href="blog-classic.html" title="">blog Classic</a></li>
					<li><a href="blog-detail.html" title="">blog post detail</a></li>
				</ul>
			</li> -->
			<li>
				<a href="project.html" title="">项目经历</a>
			</li>
			<li>
				<a href="contact.html" title="">与我联系</a>
			</li>
			<!-- <li class="menu-item-has-children">
				<a href="#" title="">Features & Tools</a>
				<ul>
					<li><a href="reviews.html" title="">Reviews</a></li>
					<li><a href="typography.html" title="">Typography</a></li>
					<li><a href="404.html" title="">404 Error page</a></li>
					<li><a href="coming-soon.html" title="">Coming Soon</a></li>
				</ul>
			</li> -->
		</ul>
	  </nav>
	</div>
</div>
<div class="contact-info">
	<span><i class="fa fa-phone"></i> +8615236763890</span>
	<span><i class="fa fa-envelope-o"></i> <a href="mailto:sqsgoodluck@qq.com" class="__cf_email__" data-cfemail="aad9cbc7dac6cfeacdc7cbc3c684c9c5c7">sqsgoodluck@qq.com</a></span>
</div>
<div class="logo">
	<!--<a href="index.html" data-fill="Steve Jason">Steve Jason</a>-->
	<!--<a href="index.html" title=""><img src="images/resources/logo.png" alt=""></a>-->
	<div class="person-photo">
		<img src="images/resources/person.jpg" alt="">
	</div>
</div>
<div class="head-social">
	<button type="submit" class="butn butn-bg"><a href="pdf/web/viewer.html?file=resume.pdf" target="_blank">简历下载</a></button>
	<!-- <div class="language-area">
		<a href="https://wpkixx.com/html/manal-rtl-html/" title="">RTL</a>
		<a href="https://wpkixx.com/html/manal-html/index.html" title="">ENG</a>
	</div> -->
</div>
	<!-- topbar -->
A; 


$footer = <<<B
<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<div class="bottom-side bottom-30">
						<div class="left-data">
							<div class="desc">
								<p>
									" Always believe something wonderful will happen soon!!!"
								</p>
							</div>
						</div>
						<div class="right-data">
							<div class="multimedia">
								<ul class="social-share">


									<div class="bshare-custom"><a title="分享到" class="bshare-more" id="bshare-shareto" href="http://www.bShare.cn/">分享到</a><a title="分享到微信" class="bshare-weixin">微信</a><a title="分享到QQ好友" class="bshare-qqim">QQ好友</a><a title="分享到QQ空间" class="bshare-qzone">QQ空间</a><a title="分享到新浪微博" class="bshare-sinaminiblog">新浪微博</a><a title="更多平台" class="bshare-more bshare-more-icon more-style-sharethis"></a></div><script src="http://static.bshare.cn/b/button.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh" type="text/javascript" charset="utf-8"></script><a class="bshareDiv" onclick="javascript:return false;"></a><script src="http://static.bshare.cn/b/bshareC0.js" type="text/javascript" charset="utf-8"></script>

									<!-- <li><a href="#" title=""><i class="fa fa-facebook"></i> facebook</a></li>
									<li><a href="#" title=""><i class="fa fa-twitter"></i> twitter</a></li>
									<li><a href="#" title=""><i class="fa fa-instagram"></i> instagram</a></li> -->
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

B;

$footer_1 = <<<C
<div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bottom-side bottom-30">
                            <div class="left-data">
                                <div class="desc">
                                    <p>
                                        " Always believe something wonderful will happen soon!!!"
                                    </p>
                                </div>
                            </div>
                            <div class="right-data">
                                <div class="multimedia">
                                    <p><i class="fa fa-copyright"></i>&nbsp;S_梦痕 2020-2023<span> &emsp;测试浏览器：Chrome：104.0.5112.101</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

C;


$typer = <<<D
<h3 class="ah-headline">
	<span class="font-weight-300">Hi There ! I'm</span>
	<span class="ah-words-wrapper">
		<b class="is-visible">ShenQingsong</b>
		<b>a Biotechnology Learner</b>
		<b>Web Developer</b>
		<b>a Graphic designer</b>
	</span>
</h3>

D;

$html = array(
	"header" => $header,
	"footer" => $footer_1,
	"typer" => $typer
);

// echo $header;

// if ($_GET = ""){
// 	return false;
// }elseif ($_GET[]) {
// 	// code...
// }
echo json_encode($html);