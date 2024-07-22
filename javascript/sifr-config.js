
     var georgia = {
      src: 'georgia.swf'
    };
    sIFR.activate(georgia);
	 
	 var artscript = {
      src: 'ArtScript.swf'
    };
    sIFR.activate(artscript);
	sIFR.replace(georgia,{
		selector: 'h2.subheader', wmode:'transparent'
		,css:[
		'.sIFR-root {font-size:16px; display: block; color: #433d36; font-weight: bold; font-style: italic;}'
		]
		
	});
    sIFR.replace(georgia,{
		selector: 'h1.heading1', wmode:'transparent'
		,css:[
		'.sIFR-root {font-size:16px; color: #433d36; text-align: center;font-weight: bold; font-style: italic;}'
		]
	});
	sIFR.replace(georgia,{
		selector: 'h2.footerHeader',wmode:'transparent'
		,css:[
		'.sIFR-root {font-size:12px; display: block; color: #433d36;font-weight: bold; font-style: italic;}'
		]
	});
	sIFR.replace(georgia,{
		selector: 'h2.pricetitle',wmode:'transparent'
		,css:[
		'.sIFR-root {font-size:14px; color: #433d36; font-weight: bold; font-style: italic;}'
		]
	});
	sIFR.replace(georgia,{
		selector: 'h5.reserve_now',wmode:'transparent'
		,css:[
		'.sIFR-root {font-size:12px; display: block; color: #433d36; font-weight: bold; font-style: italic; text-align: center;}'
		,'a:link {text-decoration: none; color: #433d36;}'
		,'a:hover {text-decoration: none; color: #433d36;}'
		]
	});
