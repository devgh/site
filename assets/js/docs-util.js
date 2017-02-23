$(document).ready(function() {

	$( ".language-command, .language-command-linux" ).each(function( index ) {
		var content = $(this).text();
		var copyBtn = "<nav class='command-nav'><i class='fa fa-terminal' aria-hidden='true'> <span class='nav-filename'>Terminal</span> </i><button class='btn' data-clipboard-text='" + content + "'><img class='clippy' width='13' src='/assets/images/clippy.svg' alt='Copy to clipboard'> Copy</button></nav>"
		$(copyBtn).insertBefore(this);
	});

	var clipboard = new Clipboard('.btn');

	clipboard.on('success',function(e){e.clearSelection();console.info('Action:',e.action);console.info('Text:',e.text);console.info('Trigger:',e.trigger);showTooltip(e.trigger,'Copied!');});clipboardDemos.on('error',function(e){console.error('Action:',e.action);console.error('Trigger:',e.trigger);showTooltip(e.trigger,fallbackMessage(e.action));});
	clipboard.destroy();

	('#install-mac').addClass('hidden');
	if (navigator.platform.indexOf('Win') > -1) {
		$('#install-windows').removeClass('hidden')
		$('#install-mac').addClass('hidden')
		$('#install-linux').addClass('hidden')
	}

	if (navigator.platform.indexOf('Linux') > -1) {
		$('#install-linux').removeClass('hidden')
		$('#install-mac').addClass('hidden')
		$('#install-windows').addClass('hidden')
	}
});