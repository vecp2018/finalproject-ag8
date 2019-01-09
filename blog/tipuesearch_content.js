var tipuesearch = {"pages":[{"title":"About","text":"2018 Fall Python-Course 倉儲: https://github.com/mdecourse/python-course 課程投影片: https://mdecourse.github.io/python-course/reveal/ 課程網誌: https://mdecourse.github.io/python-course/blog/","tags":"misc","url":"https://mdecourse.github.io/python-course/blog/pages/about/"},{"title":"在 Github 線上編輯網誌","text":"2018 Fall 起, 結合 Travis CI , 可以讓使用者直接在 Github 倉儲中編輯網誌. 設定步驟 . 從 Travis CI 以 Github 帳號登入後, 設定要使用 Travis CI 的倉儲. . 準備 .travis.yml 與 Makefile .travis.yml 檔案: language: python python: - 3.7-dev branches: only: - gh-pages install: - pip install pelican Pygments Markdown beautifulsoup4 script: - make publish html Makefile 檔案: PY=python PELICAN=pelican PELICANOPTS= BASEDIR=$(CURDIR) INPUTDIR=$(BASEDIR)/markdown OUTPUTDIR=$(BASEDIR)/blog CONFFILE=$(BASEDIR)/pelicanconf.py PUBLISHCONF=$(BASEDIR)/publishconf.py DEBUG ?= 0 ifeq ($(DEBUG), 1) PELICANOPTS += -D endif html: $(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) clean: [ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR) regenerate: $(PELICAN) -r $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) serve: ifdef PORT cd $(OUTPUTDIR) && $(PY) -m pelican.server $(PORT) else cd $(OUTPUTDIR) && $(PY) -m pelican.server endif devserver: ifdef PORT $(BASEDIR)/develop_server.sh restart $(PORT) else $(BASEDIR)/develop_server.sh restart endif stopserver: kill -9 `cat pelican.pid` kill -9 `cat srv.pid` @echo 'Stopped Pelican and SimpleHTTPServer processes running in background.' publish: $(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF)","tags":"Misc","url":"https://mdecourse.github.io/python-course/blog/2018-Edit-Blog-Markdown-Online.html"},{"title":"協同設計室test","text":"2018 年春天, 在電腦輔助設計室旁一間約十坪大小的空間, 成立了所謂的協同設計室, 希望透過多人協力一同, 解決與電腦及網路軟硬體相關問題. Windows 10 的更新之罪 Windows 10 自推出以來, 每一次的更新都掀起論戰, 連最近的 1803 升級, 也不 例外 . 許多網站更教導使用者如何阻止 Windows 10 更新, 因為微軟多多少少藉著更新, 強力放送自家相關產品與服務. 儘管這些置入性行銷不怎麼討喜, 但是從 Windows 7 到目前的 Windows 10, 微軟加諸在這一系列產品的用心, 令人印象深刻, 因此在這個階段, 協同設計室反而建議大家照單全收 Windows 10 的各項網路服務, 再過一段時間, 當大家都明確感受到 AI 人工智慧組態設定的貼心之後, 應該對於 Windows 10 緊密透過網路提供的各項置入性行銷, 就不會再有排拒之想了. 如何與還原卡共存 一旦決定與 Windows 10 的密集更新政策和好, 接下來電腦輔助設計室所面臨的問題是: 該如何與還原卡共存? 理論上, 作為每一學年有將近千人入學的機械工程群, 在新生報到時直接發給一台完整裝載合法套件, 並且至少保用四年的 17 吋筆電, 應該是最理想的規劃, 因為如此, 每一門課都可以沉浸在數位整合環境之中 (意思是學生除了上課滑手機之餘, 還可以滑筆電:-), 只是事與願違, 這個理想與貼在四週牆上的\"禁止使用非法軟體\"標語一樣, 超級與現實脫節 (這一定是玩笑話了). 在無法每位學員人手一台筆電的情況下, 幾乎每一時段都有兩門至四門的必修電腦課程時, 一個系所就必須維護大約 180 台 Windows 10, 總共四間 電腦教室, 而這些電腦都分別使用群準 EVOsys Pro v6 與 UEFI v8 還原卡, 因此接下來的議題是, 為數不少的 Windows 10 電腦該如何與還原卡共存? 除了勤作網路拷貝之外, 目前還找不到答案, 大家不要忘記: 我們已經決定舉雙手, 完全接受微軟 Windows 10 操作系統的各種密集更新! 電腦分類 目前電腦輔助設計室所使用的還原卡為 Evo Pro v6, 採 MBR (Master Boot Record) 分割硬碟, 而協同設計室則使用 Evo UEFI v8, 採用 GPT (GUID Partition Table) 格式分割硬碟. 其中, 電腦輔助設計室的電腦皆為 client, 而協同設計室則有 client 與 Virtualbox 上的 Ubuntu 18.04 LTS (Long Term Support) Server + ubuntu-desktop. 電腦輔助設計室共 65 台電腦的規格為: 華碩 Skylake MD790/I7-6700, Intel 第六代 Core i7/3.4GHz/8M CPU, 採用 Intel Q170 晶片組, 搭載 16GB DDR4/2133/288 Pin 記憶體 (8 GBx2), 2 TB-SATA3 硬碟, Asus MINI-GTX950-2G 顯示卡 (支援 PCIE 3.0, OpenGL 4.5, 768 個CUDA 核心數), 500瓦電源供應器, USB 3.1x2 (10GB/s) , USB 3.0x6 (5GB/s), USB 2.0x2 (480MB/s), 以及 群準的 EVOsys PRO v6 還原卡, 可同時支援 D-sub、HDMI 及 DisplayPort 三台獨立顯示器多工作業. 這批華碩電腦在安裝群準的 EVOsys PRO v6 還原卡之前, 必須先將 Asus UEFI BIOS Utility 中 Boot 功能表下的 secure boot 中的 OS Type, 由內建的 Windows UTFI OS 改為 Other OS, 否則無法在開機後導引到 EVOsys PRO v6 還原卡功能選項. 進入 EVOsys PRO v6 還原卡選項後, 以全新安裝分割硬碟, 一般 Windows 7 與 10 操作系統的資料類別為 A, Ubuntu 選 B, 而 swap 磁區則選擇 P, 分割完成後, 透過 EVOsys 所規劃的開機表單, 選擇 Windows 10 後按下 Enter, 可以進入該硬碟分隔磁區, 但是尚未安裝操作系統, 因此會出現無法開機提示, 這時以 Ctrl+Alt+Del 重新開機後, 可以透過 F8 導引到光碟機開機後進行 Windows 10 操作系統安裝, 這點與 EVOsys UEFI v8 版本功能有明顯差異, 因為 EVOsys UEFI v8 版本提供選擇開機表單中的操作系統選項後, 可以透過 Ctrl+i 執行操作系統安裝, 系統會直接導引到光碟機或 USB 開機選項. 至於協同設計室中的 CD06 電腦充作伺服器使用, 實體操作系統為 Windows 10, 內部則有兩台 Virtualbox 虛擬 Ubuntu 18.04 server + ubuntu-desktop, 虛擬主機與 Windows 10 同步啟動服務採用 vboxvmservice , /etc/netplan 中 IPv6 固定 IP YAML 檔案設定如下: network: ethernets: enp0s3: addresses: - 2001:288:6004:17:0811::cd06/64 gateway6: 2001:288:6004:17::254 nameservers: addresses: - 2001:b000:168::1 version: 2 虛擬 Ubuntu 18.04 中的 Fossil SCM Stunnel 與 Fossil SCM 安裝 sudo apt update sudo apt install stunnel4 -y sudo apt install fossil 環境變數與開機啟動設定 /etc/environment 設定: HTTPS=on /etc/default/stunnel4 檔案設定: ENABLED=1 Stunnel 設定並執行 fossil http 指令 首先在 /etc/stunnel 目錄中建立 localhost.key 與 localhost.crt: sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt /etc/stunnel/stunnel.conf 設定檔案, 可同時支援 IPv4 與 IPv6 協定: [https] accept = your_IPv4_ip:443 accept = :::443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/cdlab/repository/cdlab.fossil --https --nojail 其中 --nojail 目的在 drop the root privilege but do not enter the chroot jail 重新啟動 stunnel4 則使用 /etc/init.d/stunnel4 restart 建立 cdlab.fossil 則進入 /home/cdlab/repository 目錄後, 執行 fossil init cdlab.fossil 上述設定完成後, 重新開機即可以 https://[2001:288:6004:17:0811::cd06] 連結至 cdlab.fossil 網際管理介面.","tags":"Misc","url":"https://mdecourse.github.io/python-course/blog/Collaborative-Design-Laboratory.html"},{"title":"軟硬體設置","text":"紀錄電腦與網路的軟硬體相關設置 Github, Bitbucket 與 Fossil SCM Github 目前提供的免費帳號, 允許多人協同提交推送版本, 唯一的限制就是單一檔案不能大於 50 MB. Bitbucket 則允許免費使用非公開的倉儲, 但是至多只允許五個帳號協同. Fossil SCM 則適合在近端或區域網路中使用, 目前 KMOLab 希望在區網中導入作為與 Github Pages 配合的工具, 使用者可以將 Fossil SCM 的 working directory 限縮在 Github 近端倉儲的特定目錄下, 且在 .gitignore 中排除 FOSSIL (under Windows) 的版次管理, 但是相關的 fossil update 與 fossil server 功能仍然必須依照特定的流程進行操作, 以避免兩套版次管理系統內容的不同步導致資料覆蓋流失. github 倉儲與 bitbucket 倉儲, 則可以利用 git remote add 同步. Leo Editor, Pelican 與 Reveal.js Leo Editor 是一套能夠以程式方法有效管理多元資料的文字資料編輯器, 以下就是用來管理 KMOLab Pelican 靜態網誌有關內容的畫面, 其中的 @button local-blog 是用來產生靜態網誌的指令按鈕, @button github-blog 則是用來產生嵌入 Disqus 留言系統的 Github Pages 網誌對應指令, 兩個指令的差別在於使用不同的設定檔案, 使用者可以先利用近端的按鈕, 建立網誌後在近端以另一個 https-server 按鈕建立 https 伺服, 用瀏覽器檢查所產生的網誌內容, 一旦要送到 Github 倉儲, 必須再利用遠端按鈕產生另外一組網誌與搜尋用 .json 檔案後, 再提交推送到倉儲. 在這個過程中, 使用者依照 Pelican 的特定 Markdown 檔案編寫網誌內容外, Leo Editor 專案檔中也可以放入其他有關的註記與設定檔案編輯用的節點. 若需要在 Pelican 的環境中修改設定, 都可以全部在一個 Leo Editor 專案檔中完成. Leo Editor 另外一項有用的特定就是能夠利用從屬節點關係與內文指令來表示複雜的 html 檔案, 如下圖所示, 各段落的超文件標註可以利用節點加以切割, 使用者在編寫 reveal.js 投影片時, 可以只集中在特定簡報內容的編寫, 並且透過節點的複製與搬移, 甚至使用 Leo Editor 的節點 clone 功能, 同步相同內容但是同時出現在不同位置的節點. Pelican Blog 共用設定檔案: pelicanconf.py #!/usr/bin/env python # -*- coding: utf-8 -*- # from __future__ import unicode_literals AUTHOR = 'KMOL' SITENAME = 'KMOLab 機械設計工程' # 不要用文章所在目錄作為類別 USE_FOLDER_AS_CATEGORY = False #PATH = 'content' #OUTPUT_PATH = 'output' TIMEZONE = 'Asia/Taipei' DEFAULT_LANG = 'en' # Feed generation is usually not desired when developing FEED_ALL_ATOM = None CATEGORY_FEED_ATOM = None TRANSLATION_FEED_ATOM = None AUTHOR_FEED_ATOM = None AUTHOR_FEED_RSS = None # Blogroll LINKS = (('Pelican', 'http://getpelican.com/'), ('pelican-bootstrap3', 'https://github.com/DandyDev/pelican-bootstrap3/'), ('pelican-plugins', 'https://github.com/getpelican/pelican-plugins'), ('Tipue search', 'https://github.com/Tipue/Tipue-Search'),) # Social widget #SOCIAL = (('You can add links in your config file', '#'),('Another social link', '#'),) DEFAULT_PAGINATION = 10 # Uncomment following line if you want document-relative URLs when developing #RELATIVE_URLS = True # 必須絕對目錄或相對於設定檔案所在目錄 PLUGIN_PATHS = ['plugin'] PLUGINS = ['summary', 'tipue_search', 'sitemap'] # for sitemap plugin SITEMAP = { 'format': 'xml', 'priorities': { 'articles': 0.5, 'indexes': 0.5, 'pages': 0.5 }, 'changefreqs': { 'articles': 'monthly', 'indexes': 'daily', 'pages': 'monthly' } } # search is for Tipue search DIRECT_TEMPLATES = (('index', 'tags', 'categories', 'authors', 'archives', 'search')) # for pelican-bootstrap3 theme settings #TAG_CLOUD_MAX_ITEMS = 50 DISPLAY_CATEGORIES_ON_SIDEBAR = True DISPLAY_RECENT_POSTS_ON_SIDEBAR = True DISPLAY_TAGS_ON_SIDEBAR = True DISPLAY_TAGS_INLINE = True TAGS_URL = \"tags.html\" CATEGORIES_URL = \"categories.html\" MENUITEMS = [('About', '/blog/pages/about/')] #SHOW_ARTICLE_AUTHOR = True #MENUITEMS = [('Home', '/'), ('Archives', '/archives.html'), ('Search', '/search.html')] 遠端 publishconf.py #!/usr/bin/env python # -*- coding: utf-8 -*- # from __future__ import unicode_literals # This file is only used if you use `make publish` or # explicitly specify it as your config file. import os import sys sys.path.append(os.curdir) from pelicanconf import * # 因為 publishconf.py 在 pelicanconf.py 之後, 因此若兩處有相同變數的設定, 將以較後讀入的 publishconf.py 中的設定為主. # 將所有靜態 html 檔案移到 blog 子目錄 SITEURL = 'https://kmolab.github.io/blog' # 此設定用於將資料送到 gh-pages, 因此使用絕對 URL 設定 RELATIVE_URLS = False # 為了要讓 local 與 gh-pages 上都能夠使用 Tipue search, 可能要採用不同的 theme THEME = 'theme/pelican-bootstrap3' #BOOTSTRAP_THEME = 'readable' #BOOTSTRAP_THEME = 'readable-old' BOOTSTRAP_THEME = 'united' #PYGMENTS_STYLE = 'paraiso-drak' #PYGMENTS_STYLE = 'fruity' # 為了同時兼容 render_math, 必須放棄 fruity PYGMENTS_STYLE = 'monokai' FEED_ALL_ATOM = 'feeds/all.atom.xml' CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml' DELETE_OUTPUT_DIRECTORY = True # Following items are often useful when publishing DISQUS_SITENAME = \"kmolabmde\" #GOOGLE_ANALYTICS = \"\" # 設定網誌以 md 檔案建立的 file system date 為準, 無需自行設定 DEFAULT_DATE = 'fs' # 遠端的 code hightlight #MD_EXTENSIONS = ['fenced_code', 'extra', 'codehilite(linenums=True)'] MARKDOWN = { 'extension_configs': { 'markdown.extensions.codehilite': {'css_class': 'highlight'}, 'markdown.extensions.extra': {}, 'markdown.extensions.meta': {}, }, 'output_format': 'html5', } # 若要依照日期存檔呼叫 #ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/' #ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html' PAGE_URL = 'pages/{slug}/' PAGE_SAVE_AS = 'pages/{slug}/index.html' SHOW_ARTICLE_AUTHOR = True local_publishconf.py #!/usr/bin/env python # -*- coding: utf-8 -*- # from __future__ import unicode_literals # This file is only used if you use `make publish` or # explicitly specify it as your config file. import os import sys sys.path.append(os.curdir) from pelicanconf import * # 因為 publishconf.py 在 pelicanconf.py 之後, 因此若兩處有相同變數的設定, 將以較後讀入的 publishconf.py 中的設定為主. # 請注意, 為了在近端讓 Tipue search 傳回的搜尋結果連結正確, 必須使用 ./ SITEURL = './' # 此設定用於近端靜態網頁查驗, 因此使用相對 URL RELATIVE_URLS = True # 為了要讓 local 與 gh-pages 上都能夠使用 Tipue search, 可能要採用不同的 theme THEME = 'theme/pelican-bootstrap3_local' #BOOTSTRAP_THEME = 'readable' #BOOTSTRAP_THEME = 'readable-old' BOOTSTRAP_THEME = 'united' #PYGMENTS_STYLE = 'paraiso-drak' #PYGMENTS_STYLE = 'fruity' # 為了同時兼容 render_math, 必須放棄 fruity PYGMENTS_STYLE = 'monokai' FEED_ALL_ATOM = 'feeds/all.atom.xml' CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml' DELETE_OUTPUT_DIRECTORY = True # Following items are often useful when publishing #DISQUS_SITENAME = \"kmolabmde\" #GOOGLE_ANALYTICS = \"\" # 設定網誌以 md 檔案建立的 file system date 為準, 無需自行設定 DEFAULT_DATE = 'fs' # 近端的 code hightlight #MD_EXTENSIONS = ['fenced_code', 'extra', 'codehilite(linenums=True)'] MARKDOWN = { 'extension_configs': { 'markdown.extensions.codehilite': {'css_class': 'highlight'}, 'markdown.extensions.extra': {}, 'markdown.extensions.meta': {}, }, 'output_format': 'html5', } # 若要依照日期存檔呼叫 #ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html' #ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html' PAGE_URL = 'pages/{slug}/' PAGE_SAVE_AS = 'pages/{slug}/index.html' SHOW_ARTICLE_AUTHOR = True 區網中的 IPv4 與 IPv6 WWW Server Pelican 在近端產生 weblog 後, 若要在近端以 https 檢視結果, 就必須同時建立 https Server. 近端 IPv4 WWW 伺服器程式: import os import subprocess import threading import http.server, ssl def domake(): # build directory os.chdir(\"./../\") server_address = ('localhost', 5443) httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler) httpd.socket = ssl.wrap_socket(httpd.socket, server_side=True, certfile='localhost.crt', keyfile='localhost.key', ssl_version=ssl.PROTOCOL_TLSv1) print(os.getcwd()) print(\"5443 https server started\") httpd.serve_forever() # 利用執行緒執行 https 伺服器 make = threading.Thread(target=domake) make.start() 近端 IPv6 ＷＷＷ 伺服器程式: import os import subprocess import threading import socket import http.server, ssl class HTTPServerV6(http.server.HTTPServer): address_family = socket.AF_INET6 def domake(): # build directory os.chdir(\"./../\") ipv6_address = '::1' server_address = (ipv6_address, 6443) #httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler) httpd = HTTPServerV6(server_address, http.server.SimpleHTTPRequestHandler) httpd.socket = ssl.wrap_socket(httpd.socket, server_side=True, certfile='localhost.crt', keyfile='localhost.key', ssl_version=ssl.PROTOCOL_TLSv1) print(\"6443 https server started\") httpd.serve_forever() # 利用執行緒執行 https 伺服器 make = threading.Thread(target=domake) make.start()","tags":"Research","url":"https://mdecourse.github.io/python-course/blog/first-setup-blog.html"}]};