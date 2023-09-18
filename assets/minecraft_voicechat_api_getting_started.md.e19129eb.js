import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.8adf7a9a.js";const h=JSON.parse('{"title":"Getting Started","titleTemplate":"Simple Voice Chat","description":"","frontmatter":{"titleTemplate":"Simple Voice Chat","outline":"deep"},"headers":[],"relativePath":"minecraft/voicechat/api/getting_started.md","filePath":"minecraft/voicechat/api/getting_started.md"}'),p={name:"minecraft/voicechat/api/getting_started.md"},e=l(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="starting-from-scratch" tabindex="-1">Starting From Scratch <a class="header-anchor" href="#starting-from-scratch" aria-label="Permalink to &quot;Starting From Scratch&quot;">​</a></h2><p>If you are starting your project from scratch, you can use one of the provided project templates:</p><ul><li><a href="https://github.com/henkelmax/voicechat-api-fabric" target="_blank" rel="noreferrer">Fabric Template</a></li><li><a href="https://github.com/henkelmax/voicechat-api-forge" target="_blank" rel="noreferrer">Forge Template</a></li><li><a href="https://github.com/henkelmax/voicechat-api-bukkit" target="_blank" rel="noreferrer">Bukkit Template</a></li></ul><h2 id="with-existing-mods-plugins" tabindex="-1">With Existing Mods/Plugins <a class="header-anchor" href="#with-existing-mods-plugins" aria-label="Permalink to &quot;With Existing Mods/Plugins&quot;">​</a></h2><p>If you already have a project, that you want to integrate Simple Voice Chat into, follow the steps below.</p><h3 id="fabric" tabindex="-1">Fabric <a class="header-anchor" href="#fabric" aria-label="Permalink to &quot;Fabric&quot;">​</a></h3><p>To add the API dependency to your Fabric mod, add the following maven repository to your project.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven { url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven { url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>In the <code>dependencies</code> section add the following maven dependency. Make sure <code>voicechat_api_version</code> is set to the voice chat API version you want to target. Available API versions can be found <a href="https://maven.maxhenkel.de/#/releases/de/maxhenkel/voicechat/voicechat-api" target="_blank" rel="noreferrer">here</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    implementation </span><span style="color:#9ECBFF;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    implementation </span><span style="color:#032F62;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To avoid crashes due to outdated voice chat versions, make sure to add <code>voicechat</code> to the <code>depends</code> section in the <code>fabric.mod.json</code>. This prevents your mod from loading if versions of the voice chat are installed, that are older than the API version you are targeting.</p><p><em>fabric.mod.json</em></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;schemaVersion&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;depends&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;voicechat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&gt;=\${minecraft_version}-\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;schemaVersion&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;depends&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;voicechat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&gt;=\${minecraft_version}-\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To register the voice chat plugin for a Fabric mod, you need to create a class that implements <code>de.maxhenkel.voicechat.api.VoicechatPlugin</code>.</p><p><em>TestPlugin.java</em></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VoicechatPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VoicechatPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Additionally, you need to add a <code>voicechat</code> entrypoint in your <code>fabric.mod.json</code>, that refers to the class you just created.</p><p><em>fabric.mod.json</em></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;schemaVersion&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;entrypoints&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;voicechat&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;com.example.yourmod.TestPlugin&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;schemaVersion&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;entrypoints&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;voicechat&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;com.example.yourmod.TestPlugin&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To have <em>Simple Voice Chat</em> installed in your development environment, use the <a href="https://docs.modrinth.com/docs/tutorials/maven/" target="_blank" rel="noreferrer">Modrinth Maven Repository</a>. Alternatively use <a href="https://www.cursemaven.com/" target="_blank" rel="noreferrer">Cursemaven</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Modrinth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://api.modrinth.com/maven&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            includeGroup </span><span style="color:#9ECBFF;">&quot;maven.modrinth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    modRuntimeOnly </span><span style="color:#9ECBFF;">&quot;maven.modrinth:simple-voice-chat:fabric-\${voicechat_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven {</span></span>
<span class="line"><span style="color:#24292E;">        name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Modrinth&quot;</span></span>
<span class="line"><span style="color:#24292E;">        url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://api.modrinth.com/maven&quot;</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">            includeGroup </span><span style="color:#032F62;">&quot;maven.modrinth&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    modRuntimeOnly </span><span style="color:#032F62;">&quot;maven.modrinth:simple-voice-chat:fabric-\${voicechat_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="forge" tabindex="-1">Forge <a class="header-anchor" href="#forge" aria-label="Permalink to &quot;Forge&quot;">​</a></h3><p>To add the API dependency to your Forge mod, add the following maven repository to your project.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven { url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven { url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>In the <code>dependencies</code> section add the following maven dependency. Make sure <code>voicechat_api_version</code> is set to the voice chat API version you want to target. Available API versions can be found <a href="https://maven.maxhenkel.de/#/releases/de/maxhenkel/voicechat/voicechat-api" target="_blank" rel="noreferrer">here</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    implementation </span><span style="color:#9ECBFF;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    implementation </span><span style="color:#032F62;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To avoid crashes due to outdated voice chat versions, make sure to add <code>voicechat</code> to the <code>dependencies</code> section in the <code>mods.toml</code>. This prevents your mod from loading if versions of the voice chat are installed, that are older than the API version you are targeting.</p><p><em>mods.toml</em></p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">modLoader=</span><span style="color:#9ECBFF;">&quot;javafml&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">[[</span><span style="color:#B392F0;">mods</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">[[</span><span style="color:#B392F0;">dependencies</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">yourmod</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#E1E4E8;">    modId=</span><span style="color:#9ECBFF;">&quot;voicechat&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    mandatory=</span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    versionRange=</span><span style="color:#9ECBFF;">&quot;[\${minecraft_version}-\${voicechat_api_version},)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ordering=</span><span style="color:#9ECBFF;">&quot;AFTER&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    side=</span><span style="color:#9ECBFF;">&quot;BOTH&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">modLoader=</span><span style="color:#032F62;">&quot;javafml&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">[[</span><span style="color:#6F42C1;">mods</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">[[</span><span style="color:#6F42C1;">dependencies</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">yourmod</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#24292E;">    modId=</span><span style="color:#032F62;">&quot;voicechat&quot;</span></span>
<span class="line"><span style="color:#24292E;">    mandatory=</span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    versionRange=</span><span style="color:#032F62;">&quot;[\${minecraft_version}-\${voicechat_api_version},)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ordering=</span><span style="color:#032F62;">&quot;AFTER&quot;</span></span>
<span class="line"><span style="color:#24292E;">    side=</span><span style="color:#032F62;">&quot;BOTH&quot;</span></span></code></pre></div><p>To register the voice chat plugin for a Forge mod, you need to create a class that implements <code>de.maxhenkel.voicechat.api.VoicechatPlugin</code> and has the annotation <code>de.maxhenkel.voicechat.api.ForgeVoicechatPlugin</code>.</p><p><em>TestPlugin.java</em></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> de.maxhenkel.voicechat.api.ForgeVoicechatPlugin;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">ForgeVoicechatPlugin</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VoicechatPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> de.maxhenkel.voicechat.api.ForgeVoicechatPlugin;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">ForgeVoicechatPlugin</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VoicechatPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To have <em>Simple Voice Chat</em> installed in your development environment, use the <a href="https://docs.modrinth.com/docs/tutorials/maven/" target="_blank" rel="noreferrer">Modrinth Maven Repository</a>. Alternatively use <a href="https://www.cursemaven.com/" target="_blank" rel="noreferrer">Cursemaven</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Modrinth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://api.modrinth.com/maven&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            includeGroup </span><span style="color:#9ECBFF;">&quot;maven.modrinth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    runtimeOnly fg</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">deobf(</span><span style="color:#9ECBFF;">&quot;maven.modrinth:simple-voice-chat:forge-\${voicechat_version}&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven {</span></span>
<span class="line"><span style="color:#24292E;">        name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Modrinth&quot;</span></span>
<span class="line"><span style="color:#24292E;">        url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://api.modrinth.com/maven&quot;</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">            includeGroup </span><span style="color:#032F62;">&quot;maven.modrinth&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    runtimeOnly fg</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">deobf(</span><span style="color:#032F62;">&quot;maven.modrinth:simple-voice-chat:forge-\${voicechat_version}&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="bukkit-spigot-paper" tabindex="-1">Bukkit/Spigot/Paper <a class="header-anchor" href="#bukkit-spigot-paper" aria-label="Permalink to &quot;Bukkit/Spigot/Paper&quot;">​</a></h3><p>To add the API dependency to your Bukkit/Spigot/Paper plugin add the following maven repository to your project.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven { url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven { url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>In the <code>dependencies</code> section add the following maven dependency. Make sure <code>voicechat_api_version</code> is set to the voice chat API version you want to target. Available API versions can be found <a href="https://maven.maxhenkel.de/#/releases/de/maxhenkel/voicechat/voicechat-api" target="_blank" rel="noreferrer">here</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    implementation </span><span style="color:#9ECBFF;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    implementation </span><span style="color:#032F62;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To make your plugin depend on the voice chat plugin add the following to your <code>plugin.yml</code>.</p><p><em>plugin.yml</em></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">...</span></span>
<span class="line"><span style="color:#85E89D;">depend</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">voicechat</span><span style="color:#E1E4E8;"> ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">...</span></span>
<span class="line"><span style="color:#22863A;">depend</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">voicechat</span><span style="color:#24292E;"> ]</span></span></code></pre></div><p>To register the voice chat plugin for a Bukkit/Spigot/Paper plugin, you need to create a class that implements <code>de.maxhenkel.voicechat.api.VoicechatPlugin</code>.</p><p><em>TestPlugin.java</em></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.example.yourplugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VoicechatPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.example.yourplugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VoicechatPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Additionally, you need to register it in the <code>BukkitVoicechatService</code>.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.example.yourplugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> de.maxhenkel.voicechat.api.BukkitVoicechatService;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.bukkit.plugin.java.JavaPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JavaPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onEnable</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        BukkitVoicechatService service </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getServer</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getServicesManager</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(BukkitVoicechatService.class);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (service </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            service.</span><span style="color:#B392F0;">registerPlugin</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestPlugin</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.example.yourplugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> de.maxhenkel.voicechat.api.BukkitVoicechatService;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.bukkit.plugin.java.JavaPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JavaPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onEnable</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        BukkitVoicechatService service </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getServer</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getServicesManager</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(BukkitVoicechatService.class);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (service </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            service.</span><span style="color:#6F42C1;">registerPlugin</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestPlugin</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="quilt" tabindex="-1">Quilt <a class="header-anchor" href="#quilt" aria-label="Permalink to &quot;Quilt&quot;">​</a></h3><p>To add the API dependency to your Quilt mod, add the following maven repository to your project.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven { url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven { url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://maven.maxhenkel.de/repository/public&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>In the <code>dependencies</code> section add the following maven dependency. Make sure <code>voicechat_api_version</code> is set to the voice chat API version you want to target. Available API versions can be found <a href="https://maven.maxhenkel.de/#artifact/de.maxhenkel.voicechat/voicechat-api" target="_blank" rel="noreferrer">here</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    implementation </span><span style="color:#9ECBFF;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    implementation </span><span style="color:#032F62;">&quot;de.maxhenkel.voicechat:voicechat-api:\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To avoid crashes due to outdated voice chat versions, make sure to add <code>voicechat</code> to the <code>depends</code> section in the <code>quilt.mod.json</code>. This prevents your mod from loading if versions of the voice chat are installed, that are older than the API version you are targeting.</p><p><em>quilt.mod.json</em></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;schemaVersion&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;depends&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;voicechat&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&gt;=\${minecraft_version}-\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;schemaVersion&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;depends&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;voicechat&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&gt;=\${minecraft_version}-\${voicechat_api_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To register the voice chat plugin for a Quilt mod, you need to create a class that implements <code>de.maxhenkel.voicechat.api.VoicechatPlugin</code>.</p><p><em>TestPlugin.java</em></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VoicechatPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.example.yourmod;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> de.maxhenkel.voicechat.api.VoicechatPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VoicechatPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Additionally, you need to add a <code>voicechat</code> entrypoint in your <code>quilt.mod.json</code>, that refers to the class you just created.</p><p><em>quilt.mod.json</em></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;schemaVersion&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;entrypoints&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;init&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;voicechat&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;com.example.yourmod.TestPlugin&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;schemaVersion&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;entrypoints&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;init&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;voicechat&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;com.example.yourmod.TestPlugin&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>To have <em>Simple Voice Chat</em> installed in your development environment, use the <a href="https://docs.modrinth.com/docs/tutorials/maven/" target="_blank" rel="noreferrer">Modrinth Maven Repository</a>. Alternatively use <a href="https://www.cursemaven.com/" target="_blank" rel="noreferrer">Cursemaven</a>.</p><p><em>build.gradle</em></p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">repositories {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    maven {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Modrinth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://api.modrinth.com/maven&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            includeGroup </span><span style="color:#9ECBFF;">&quot;maven.modrinth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">dependencies {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    modRuntimeOnly </span><span style="color:#9ECBFF;">&quot;maven.modrinth:simple-voice-chat:quilt-\${voicechat_version}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">repositories {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    maven {</span></span>
<span class="line"><span style="color:#24292E;">        name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Modrinth&quot;</span></span>
<span class="line"><span style="color:#24292E;">        url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://api.modrinth.com/maven&quot;</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">            includeGroup </span><span style="color:#032F62;">&quot;maven.modrinth&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">    modRuntimeOnly </span><span style="color:#032F62;">&quot;maven.modrinth:simple-voice-chat:quilt-\${voicechat_version}&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,75),o=[e];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const v=s(p,[["render",t]]);export{h as __pageData,v as default};
