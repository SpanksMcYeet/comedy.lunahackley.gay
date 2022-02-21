<!DOCTYPE html>
<html>
	<head>
		<title>scenexe.io</title>
		<meta http-equiv="Content-Security-Policy" script-src="unsafe-inline" ; />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<link rel="shortcut icon" href="/assets/icon32.png" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
		<meta property="description" content="diep.io but bad" />
		<meta property="og:title" content="scenexe.io" />
		<meta property="og:description" content="diep.io but bad" />
		<meta property="og:image" content="/assets/icon1280bkg.png" />
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-58664433-3"></script>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-M40N9KDZZ5"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag("js", new Date());

			gtag("config", "G-M40N9KDZZ5");
		</script>
		<!-- AdinPlay Ads -->
		<script>
			var aiptag = aiptag || {};
			aiptag.cmd = aiptag.cmd || [];
			aiptag.cmd.display = aiptag.cmd.display || [];
			aiptag.cmd.player = aiptag.cmd.player || [];

			//CMP tool settings
			aiptag.cmp = {
				show: true,
				position: "centered", //centered or bottom
				button: false,
				buttonText: "Privacy settings",
				buttonPosition: "bottom-left", //bottom-left, bottom-right, top-left, top-right
			};
		</script>
		<script async src="//api.adinplay.com/libs/aiptag/pub/SXE/scenexe.io/tag.min.js"></script>
	<link href="scenexe.3ca543687ec232a29c58.css" rel="stylesheet"></head>
	<body oncontextmenu="return false;">
		<canvas style="z-index: -5" id="render-canvas" class="hidden" width="1024" height="1024"></canvas>
		<canvas style="z-index: -4" id="game-canvas"></canvas>
		<canvas style="pointer-events: none; z-index: -2" id="darkness-canvas"></canvas>

		<canvas id="hud-canvas" class="hud" style="pointer-events: none; z-index: -3"></canvas>
		<canvas id="ui-canvas" class="hud" style="pointer-events: none; z-index: -1"></canvas>
		<div id="chat" class="hud">
			<input autocomplete="off" id="chat-input" placeholder="Click or press ENTER" autocomplete="nope" />
		</div>
		<div id="debug-mode" style="pointer-events: none" class="hide hud">
			<p id="ping">Ping: 0ms</p>
			<p id="fps">FPS: 60</p>
			<p id="server-tick-time">Server Tick Time: 0ms</p>
			<p id="client-tick-time">Client Tick Time: 0ms</p>
			<p id="player-count">Player Count: 0</p>
			<p id="total-players">Global Player Count: 0</p>
			<p id="server-name">Server Name: -</p>
			<p id="position">Position: 0, 0</p>
			<p id="extra-performance-info">Extra Performance Info: P:0/0, B:0, S:0, T:0</p>
			<!-- <p id="server-speed">Server Speed: 100%</p> -->
		</div>
		<div id="tank-editor" class="hidden">
			<div id="buttons">
				<div id="left-buttons">
					<button id="button-edit">
						<span class="tooltip">Tank Editor (WIP)</span><img src="/assets/button_edit.png" alt="Tank Editor" />
					</button>
				</div>
			</div>

			<div id="tank-editor-menu" class="hide">
				<div class="tank-editor-left">
					<div id="tank-editor-title">Tank</div>
					<div id="tank-editor-text">
						<input id="tank-name" autocomplete="off" class="wide tank-editor-input" placeholder="Name" />
						&emsp;Override Tank Name
					</div>
					<div id="tank-editor-text">
						<select id="tank-team" class="tank-editor-dropdown"></select>
						&emsp;Team
					</div>
					<div id="tank-editor-text">
						<select id="visual-tank-team" class="tank-editor-dropdown"></select>
						&emsp;Visual Team
					</div>
					<div id="tank-editor-text">
						<select id="tank-type" class="tank-editor-dropdown">
							<option value="0">Normal</option>
							<option value="1">Celestial</option>
						</select>
						&emsp;Tank Type
					</div>
					<div id="tank-editor-text">
						<input id="radiant" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Radiant Amount
					</div>
					<div id="tank-editor-text">
						<input id="tank-level" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Level
					</div>
					<!-- weapon -->
					<div id="tank-editor-subtitle">Weapon</div>

					<div id="tank-editor-text">
						<input id="weapon-name" autocomplete="off" class="wide tank-editor-input" placeholder="Name" />
						&emsp;Weapon Upgrade Name
					</div>
					<hr />
					<div id="tank-editor-text">
						<input id="weapon-camera-size-multiplier" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Weapon Camera Size Multiplier
					</div>
					<div id="tank-editor-text">
						<input id="weapon-max-drones" autocomplete="off" class="tank-editor-input" placeholder="3" />
						&emsp;Max Weapon Drones
					</div>
					<br />

					<button type="button" id="barrels-text" class="tank-editor-collapsible">Barrels (0)</button>
					<div id="barrels-content" class="tank-editor-collapsible-content"></div>
					<br />
					<br />

					<!-- body -->
					<div id="tank-editor-subtitle">Body</div>

					<div id="tank-editor-text">
						<input id="body-name" autocomplete="off" class="wide tank-editor-input" placeholder="Name" />
						&emsp;Body Upgrade Name
					</div>
					<hr />
					<div id="tank-editor-text">
						<input id="body-camera-size-multiplier" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Body Camera Size Multiplier
					</div>
					<div id="tank-editor-text">
						<input id="body-max-drones" autocomplete="off" class="tank-editor-input" placeholder="3" />
						&emsp;Max Body Drones
					</div>
					<hr />
					<div id="tank-editor-text">
						<input id="sides" autocomplete="off" class="tank-editor-input" placeholder="0" />
						&emsp;Sides
					</div>
					<div id="tank-editor-text">
						<input id="outersides" autocomplete="off" class="tank-editor-input" placeholder="0" />
						&emsp;Outer Sides
					</div>
					<div id="tank-editor-text">
						<input id="outersize" autocomplete="off" class="tank-editor-input" placeholder="0" />
						&emsp;Outer Size
					</div>
					<hr />
					<div id="tank-editor-text">
						<input id="health" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Health Multiplier
					</div>
					<div id="tank-editor-text">
						<input id="bodydamage" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Body Damage Multiplier
					</div>
					<div id="tank-editor-text">
						<input id="speed" autocomplete="off" class="tank-editor-input" placeholder="1" />
						&emsp;Speed Multiplier
					</div>
					<br />

					<button type="button" id="gadgets-text" class="tank-editor-collapsible">Gadgets (0)</button>
					<div id="gadgets-content" class="tank-editor-collapsible-content">
						<p>s</p>
					</div>
					<br />
					<br />

					<button type="button" id="layers-text" class="tank-editor-collapsible">Layers (0)</button>
					<div id="layers-content" class="tank-editor-collapsible-content">
						<p>s</p>
					</div>
					<!-- <br />
					<br /> -->
				</div>

				<div class="tank-editor-right" id="tank-editor-main">
					<div id="tank-editor-title">Import/Export</div>

					<textarea id="code-area" class="tank-editor-input-large" spellcheck="false" placeholder="Paste tank codes here"></textarea>

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />

					<div id="tank-editor-text">
						<select id="import-or-export" class="tank-editor-dropdown">
							<option value="0">Import</option>
							<option value="1">Export</option>
						</select>
						&ensp;as a&ensp;
						<select id="import-export-type" class="tank-editor-dropdown">
							<option value="0">Full Tank</option>
							<option value="1">Weapon Upgrade</option>
							<option value="2">Body Upgrade</option>
						</select>
						<button id="import-export-button" class="tank-editor-button">GO</button>
					</div>

					<br />
					<br />

					<div id="tank-editor-text">
						Load from weapon upgrade&emsp;
						<input id="load-weapon-upgrade-area" autocomplete="off" class="wide tank-editor-input" placeholder="upgrade id" />
						<button id="load-weapon-upgrade" class="tank-editor-button">LOAD</button>
					</div>
					<div id="tank-editor-text">
						Load from body upgrade&emsp;
						<input id="load-body-upgrade-area" autocomplete="off" class="wide tank-editor-input" placeholder="upgrade id" />
						<button id="load-body-upgrade" class="tank-editor-button">LOAD</button>
					</div>
					<br />
					<br />
					<div id="tank-editor-text">
						Download image of tank as&ensp;
						<input id="save-as-png-area" autocomplete="off" class="wide tank-editor-input" placeholder="file name" />
						.png&ensp;
						<button id="save-as-png" class="tank-editor-button">DOWNLOAD</button>
					</div>
				</div>

				<div class="tank-editor-right" id="tank-editor-selection">
					<div id="tank-editor-title">hi</div>
				</div>
			</div>
		</div>
		<div id="background" style="pointer-events: none" class="hide"></div>
		<canvas id="overlay-canvas" style="pointer-events: none" class="hide"></canvas>
		<div id="game-over" class="hide">
			<p id="game-over-title">You died!</p>
			<p id="game-over-killer">jk you're just looking into the code, aren't you</p>
			<p id="game-over-stats">
				Level 0 nothing
				<br />
				Time Played: 00:00:00
				<br />
				Score: a lot
				<br />
				Kills: none
				<br />
				Level: 0
			</p>
			<button id="main-menu-button">MAIN MENU</button>
		</div>
		<div id="main-menu" class="hidden">
			<div id="title">scenexe.io</div>
			<div id="subtitle" class="hide">?.?.?</div>
			<div id="changelog" class="hide">
				<p>
					CHANGELOG - ?.?.?
					<br />
					- Loading changelog...
				</p>
				<p>you can view the full changelog <a id="full-changelog-link" href="#">here</a></p>
			</div>
			<div id="play-menu-wrapper" class="hide">
				<div id="play-menu">
					<select id="server-select"></select>

					<input type="text" id="username-input" placeholder="Username" maxlength="50" />
					<button id="play-button">PLAY</button>
				</div>
				<div id="respawn-text">You will respawn at level 60</div>
			</div>
			<div id="connecting">Connecting...</div>
			<div id="buttons">
				<div id="left-buttons">
					<button onclick="window.open('https://www.reddit.com/r/scenexeio/','_blank')" id="button-reddit">
						<span class="tooltip">Subreddit</span> <img src="/assets/button_reddit.png" alt="Subreddit" />
					</button>
					<button onclick="window.open('https://discord.gg/jpkeqAQkz9','_blank')" id="button-discord">
						<span class="tooltip">Discord Server</span> <img src="/assets/button_discord.png" alt="Discord Server" />
					</button>
				</div>
				<div id="right-buttons">
					<button id="button-feedback">Submit Feedback</button>
					<button id="button-bugs">Report Bugs</button>
				</div>
				<div id="top-buttons">
					<button id="button-settings">
						<span class="tooltip">Settings</span><img src="/assets/button_settings.png" alt="Settings" />
					</button>
					<!-- <button id="button-account"><span class="tooltip">Account</span><img src="/assets/button_account.png" alt="Account" /></button> -->
				</div>
			</div>
			<div id="popup" class="hide modal">
				<div>
					<h1 id="popup-title">Submit Feedback</h1>
					<hr />
					<h2 id="popup-subtitle">Feedback:</h2>
					<textarea id="popup-input" placeholder="1500 character limit" maxlength="1500"></textarea>
					<h2>Other Info:</h2>
					<input autocomplete="off" type="text" id="popup-input-small" placeholder="(username, optional)" maxlength="150" />
					<br />
					<br />
					<hr />
					<button id="submit">SUBMIT</button>
					<button id="cancel">CANCEL</button>
				</div>
			</div>
			<div id="full-changelog" class="hide modal">
				<div>
					<h1>Changelog</h1>
					<hr />
					<p style="overflow: auto; height: 70vh; width: 50vw; text-align: left; font-size: 2vmin">
						- Something has also gone horribly wrong if you're seeing this.
					</p>
					<hr />
					<button id="exit-changelog">BACK</button>
				</div>
			</div>
		</div>
		<div id="ads">
			<div id="scenexe-io_970x250" class="970x250-bottom ad-bottom ad">
				<script type="text/javascript">
					aiptag.cmd.display.push(function () {
						aipDisplayTag.display("scenexe-io_970x250");
					});
				</script>
			</div>
			<div id="scenexe-io_300x600" class="300x600-right ad-right ad">
				<script type="text/javascript">
					aiptag.cmd.display.push(function () {
						aipDisplayTag.display("scenexe-io_300x600");
					});
				</script>
			</div>
		</div>
		<div id="settings" class="hide modal">
			<div>
				<h1>Settings</h1>
				<hr />

				<div id="settings-scroll" style="overflow: scroll; overflow-x: hidden; height: 70vmin"></div>

				<br />
				<hr />
				<button id="apply-settings">APPLY</button>
				<button id="cancel-settings">CANCEL</button>
			</div>
		</div>
		<div id="message-popup" class="hide modal">
			<div>
				<h1 id="message-popup-title">Sample Popup</h1>
				<hr />
				<p id="message-popup-text">Sample Text</p>
				<hr />
				<button id="ok-button">OK</button>
			</div>
		</div>
		<div id="disconnect-modal" class="hide modal">
			<div>
				<h1>Disconnected</h1>
				<hr />
				<button id="reconnect-button">RECONNECT</button>
			</div>
		</div>
	<script type="text/javascript" src="scenexe.2594cb55a95b1e4342a4.js"></script></body>
</html>
