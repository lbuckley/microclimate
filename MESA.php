<!DOCTYPE html>
<html>
	<head>
		<title>MESA - Mapping Environment Stress on Animals</title>
		<link href="MESAStylesheet.css" type ="text/css" rel="stylesheet">
		    <script src="MapScript.js"></script>


	</head>
	<body>
		<div id = "LeftBanner">Data Retrieval Portal</div>
		<div id = "RightBanner">Options</div>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA62PL-EwmhYiiYu9A2Rl_O_jF6uCHe2mI&libraries=drawing&callback=initMap"
     async defer></script>
		<div id = "right">
			<div id = "Settings">
				<form action = "MESASubmission.php"  onsubmit="return validateMyForm();">
					<div id = "Data Layers" class = "labels">
						<p>Data Layers</p>
						<label for="SurfaceTemperature"><input type="checkbox" id="SurfaceTemp" /> <span>Surface Temperature</span></label><br />
						<label for="WGAP"><input type="checkbox" id="WGAP" /> <span>WGAP</span></label><br />
						<label for="SolarRadiation"><input type="checkbox" id="SolarRad" /> <span>Solar Radiation</span></label><br />
					</div>
					<div id = "Data Intervals" class = "labels">
						<p>Data Intervals</p>
						<label for="SurfaceTemperature"><input type="radio" id="SurfaceTemp" /> <span>Surface Temperature</span></label><br />
						<label for="WGAP"><input type="radio" id="WGAP" /> <span>WGAP</span></label><br />
						<label for="SolarRadiation"><input type="radio" id="SolarRad" /> <span>Solar Radiation</span></label><br />
					</div>
					<div class = "TextQ">
						<p>Time Period</p>
						<div class = "TextInput">&nbsp&nbsp&nbspStart Date <input type="date" name="date-start" id = "date_start"/> </div>
						<div class = "TextInput">&nbsp&nbsp&nbspEnd Date <input type="date" name="end" id = "date_end" />  </div>
					</div>
					<div class = "TextQ">
						<p>Geographic Bounding Box <input type="button" value="Draw Coordinates" onclick="DrawBox()"/></p>
						<div class = "TextInput">&nbsp&nbsp&nbspNorthwest Corner<input type="text" name="start" id = "NW"/> </div>
						<div class = "TextInput">&nbsp&nbsp&nbspSoutheast Corner<input type="text" name="end" id = "SE"/>  </div>

					</br>				</br>				</br>
					</div>
					
					<div class = "TextLong1">
						Output File Format</br></br>
						 <div class = "TextInputLong">Choose a format for the resulting output</div>
					</div>

						 <select name = "filetype" id = "outtype">
						 <option>netCDF</option>
						 <option>CSV</option>
						 <option>JSON</option>
						 <option>TEXT</option></SELECT>
					
					<div class = "TextQ"><p></p><p></p><p></p>
						Email Address</br></br>
						<div class = "TextInputLong">results will be sent to this address when complete</br></div>
						<input type="email" name="start" class="EmailInput" id = "email" />
						
					</div>
				
				</div>
				<div id = "Generate"><input type="submit" value="GENERATE RESULTS"></div>
			</form>
		</div>
	</body>
</html> 