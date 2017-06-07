/* außen */

var entity = document.querySelector('#camera');

$('#tabakladenTUERa').on('click', function doorClick() {
    'use strict';
    var innen = "indemladen.html";
    setTimeout(function timoutFadeOut() {
        $('#außen').fadeOut("slow", function timeoutSlow() {
            window.location = innen;
        });
    }, 1500);
});

$('#triggerBaeume').on('click', function triggerBaeume() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -5, y: 5.8, z: -10.11});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 90, z: 0});
});

$('#triggerBaeckerei').on('click', function triggerBaeckerei() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -10.71, y: 5.8, z: -50.20});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerTabakladenDefault').on('click', function triggerTabakladenDefault() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 0.00, y: 5.8, z: 0.00});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0, z: 0});
});

$('#triggerTeppichladen').on('click', function triggerTeppichladen() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -27.5, y: 5.8, z: -10});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0, z: 0});
});

//Regen-Funktion

$('#brunnen').on('click', function triggerBrunnen (){

	var attr = $('a-scene').attr('rain');
	if (attr) { //es fängt an zu regnen
	$('a-scene').removeAttr('rain');

	}
	else{AFRAME.registerComponent('rain', {
	  schema: {
		color: {type: 'color', default: '#ddf'},
		count: {type: 'int', default: 50000},
		depthDensity: {type: 'number', default: 0.05},
		dropHeight: {type: 'number', default: 1.0},
		dropRadius: {type: 'number', default: 0.005},
		height: {type: 'number', default: 30.0},
		opacity: {type: 'number', default: 0.4},
		splash: {type: 'boolean', default: true},
		splashBounce: {type: 'number', default: 4.0},
		splashGravity: {type: 'number', default: 9.8 * 4.0},
		vector: {type: 'vec3', default: '0, -40.0 0'},
		width: {type: 'number', default: 150.0}
	  },
	  

	  init: function () {
		this.model = null;
	  },

	  update: function () {
		this.remove();
		this.initMeshes();
	  },

	  remove: function () {
		if (this.model === null) { return; }
		this.el.removeObject3D('mesh');
	  },

	  tick: function(time, delta) {
		if (this.model === null) { return; }
		this.model.material.uniforms.time.value += delta / 1000;
	  },

	  initMeshes: function() {
		var el = this.el;
		var data = this.data;

		function createDropGeometry() {
		  var geometry = new THREE.InstancedBufferGeometry();

		  var topMesh = new THREE.Mesh(
			new THREE.CylinderGeometry(0, data.dropRadius,
			  data.dropHeight, undefined, undefined, true));

		  var bottomMesh = new THREE.Mesh(
			new THREE.SphereGeometry(data.dropRadius, undefined,
			  undefined, undefined, undefined, Math.PI / 2, Math.PI / 2));

		  bottomMesh.position.y = -data.dropHeight * 0.5;

		  var fallingVector = new THREE.Vector3(0, -1, 0);
		  var vector = new THREE.Vector3(
			data.vector.x, data.vector.y, data.vector.z);

		  topMesh.geometry.mergeMesh(bottomMesh);
		  topMesh.geometry.lookAt(fallingVector.sub(vector.normalize()));

		  geometry.copy(
			new THREE.BufferGeometry().fromGeometry(topMesh.geometry));

		  return geometry;
		}

		function getDropDuration() {
		  return data.height / -data.vector.y;
		}

		function initDropGeometry(geometry) {
		  var positionArray = geometry.attributes.position.array;
		  var count = data.count;
		  var vector = data.vector;
		  var width = data.width;
		  var height = data.height;

		  var translateArray = new Float32Array(count * 3);
		  var vectorArray = new Float32Array(count * 3);
		  var timeOffsetArray = new Float32Array(count);
		  var opacityArray = new Float32Array(positionArray.length / 3);

		  var duration = getDropDuration();
		  for (var i = 0; i < count; i++) {
			vectorArray[i * 3 + 0] = vector.x + (Math.max(1.0, vector.x) *
												  (Math.random() - 0.5) * 0.1);
			vectorArray[i * 3 + 1] = vector.y * (1.0 + Math.random() * 0.2);
			vectorArray[i * 3 + 2] = vector.z + (Math.max(1.0, vector.z) *
												  (Math.random() - 0.5) * 0.1);

			translateArray[i * 3 + 0] = (Math.random() - 0.5) * width;
			translateArray[i * 3 + 1] = height;
			translateArray[i * 3 + 2] = (Math.random() - 0.5) * width;

			timeOffsetArray[i] = duration * Math.random();
		  }

		  var minY = positionArray[1];
		  var maxY = positionArray[1];
		  for (var i = 1, il = positionArray.length / 3; i < il; i++) {
			var y = positionArray[i * 3 + 1];
			minY = Math.min(y, minY);
			maxY = Math.max(y, maxY);
		  }

		  var baseOpacity = 0.0;
		  for (var i = 0, il = positionArray.length / 3; i < il; i++) {
			var y = positionArray[i * 3 + 1];
			opacityArray[i] = baseOpacity +
			  (maxY - y) / (maxY - minY) * (1.0 - baseOpacity);
		  }

		  geometry.addAttribute('translate',
			new THREE.InstancedBufferAttribute(translateArray, 3, 1));
		  geometry.addAttribute('vector',
			new THREE.InstancedBufferAttribute(vectorArray, 3, 1));
		  geometry.addAttribute('timeOffset',
			new THREE.InstancedBufferAttribute(timeOffsetArray, 1, 1));
		  geometry.addAttribute('opacity2',
			new THREE.BufferAttribute(opacityArray, 1, 1));
		}

		function createSplashGeometry() {
		  var geometry = new THREE.InstancedBufferGeometry();
		  geometry.copy(new THREE.SphereBufferGeometry(data.dropRadius));
		  return geometry;
		}

		function getSplashDuration() {
		  return data.splashBounce / (0.5 * data.splashGravity) * 2.3;
		}

		function initSplashGeometry(geometry) {
		  var count = data.count;
		  var width = data.width;
		  var vector = data.vector;

		  var vectorArray = new Float32Array(count*3);
		  var translateArray = new Float32Array(count*3);
		  var timeOffsetArray = new Float32Array(count);

		  for (var i = 0; i < count; i++) {
			var angle = Math.random() * 2.0 * Math.PI;
			vectorArray[i*3+0] = Math.sin(angle);
			vectorArray[i*3+1] = data.splashBounce * (1.0 + Math.random() * 0.2);
			vectorArray[i*3+2] = Math.cos(angle);
		  }

		  var translateX, translateZ, timeOffset;
		  var countPerGroup = 1;
		  var dropDuration = getDropDuration();
		  var duration = getSplashDuration();
		  for (var i = 0; i < count; i++) {
			if (i % countPerGroup === 0) {
			  translateX = dropDuration * vector.x + (Math.random() - 0.5) * width;
			  translateZ = dropDuration * vector.z + (Math.random() - 0.5) * width;
			  timeOffset = duration * Math.random();
			}
			translateArray[i*3+0] = translateX;
			translateArray[i*3+1] = 0.0;
			translateArray[i*3+2] = translateZ;
			timeOffsetArray[i] = timeOffset;
		  }

		  geometry.addAttribute('vector',
			new THREE.InstancedBufferAttribute(vectorArray, 3, 1));
		  geometry.addAttribute('translate',
			new THREE.InstancedBufferAttribute(translateArray, 3, 1));
		  geometry.addAttribute('timeOffset',
			new THREE.InstancedBufferAttribute(timeOffsetArray, 1, 1));
		}

		var dropGeometry = createDropGeometry();
		var splashGeometry = createSplashGeometry();

		initDropGeometry(dropGeometry);
		initSplashGeometry(splashGeometry);

		var dropUniforms = {
			time: {value: 0},
			color: {value: new THREE.Color(data.color)},
			opacity: {value: data.opacity}
		};

		var dropVertexShader = [
		  '#define LOG2 1.442695',
		  'attribute float opacity2;',
		  'attribute vec3 translate;',
		  'attribute vec3 vector;',
		  'attribute float timeOffset;',
		  'uniform float time;',
		  'varying float vOpacity;',
		  'varying float vDepthFactor;',
		  'varying float vPositionY;',
		  'const float duration = float(' + getDropDuration() + ');',
		  'const float depthDensity = float(' + data.depthDensity + ');',
		  'const float depthDensity2 = depthDensity * depthDensity;',
		  'void main() {',
		  '  float time2 = mod(time + timeOffset, duration);',
		  '  vec3 offset = vector * time2;',
		  '  vec3 pos = position + translate + offset;',
		  '  vec3 pCenter = translate + offset;',
		  '  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);',
		  '  float depth = mvPosition.z;',
		  '  //float depth = length(mvPosition.xyz);',
		  '  float depthFactor = clamp(exp2(-depthDensity2 * depth * depth * LOG2), 0.0, 1.0);',
		  '  float sizeFactor = 1.0 - depthFactor * 0.5;',
		  '  pos.y = pos.y * sizeFactor + pCenter.y * (1.0 - sizeFactor);',
		  '  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);',
		  '  vOpacity = opacity2;',
		  '  vDepthFactor = depthFactor;',
		  '  vPositionY = pos.y;',
		  '}'
		].join('\n');

		// TODO: light
		var dropFragmentShader = [
		  'uniform vec3 color;',
		  'uniform float opacity;',
		  'varying float vOpacity;',
		  'varying float vDepthFactor;',
		  'varying float vPositionY;',
		  'void main() {',
		  '  if (vPositionY < 0.0) { discard; }',
		  '  float transparentFactor = 0.5 + vDepthFactor * 0.5;',
		  '  gl_FragColor = vec4(color, opacity * vOpacity * transparentFactor);',
		  '}'
		].join('\n');

		var splashUniforms =  {
		  time: dropUniforms.time,
		  color: dropUniforms.color,
		  opacity: {value: data.opacity * 0.8}
		};

		var splashVertexShader = [
		  'attribute vec3 vector;',
		  'attribute vec3 translate;',
		  'attribute float timeOffset;',
		  'uniform float time;',
		  'varying float vPositionY;',
		  'const float g = float(' + data.splashGravity + ');',
		  'const float duration = float(' + getSplashDuration() + ');',
		  'void main() {',
		  '  float time2 = mod(time + timeOffset, duration);',
		  '  vec3 offset;',
		  '  offset.xz = vector.xz * time2;',
		  '  offset.y = vector.y * time2 - 0.5 * g * time2 * time2;',
		  '  vec3 pos = vec3(position.x * 2.0, position.y, position.z * 2.0) + offset + translate;',
		  '  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);',
		  '  vPositionY = pos.y;',
		  '}'
		].join('\n');

		// TODO: light
		var splashFragmentShader = [
		  'uniform vec3 color;',
		  'uniform float opacity;',
		  'varying float vPositionY;',
		  'void main() {',
		  '  if (vPositionY < 0.0) { discard; }',
		  '  gl_FragColor = vec4(color, opacity);',
		  '}'
		].join('\n');

		var dropMaterial = new THREE.ShaderMaterial({
		  uniforms: dropUniforms,
		  vertexShader: dropVertexShader,
		  fragmentShader: dropFragmentShader,
		  transparent: true
		});

		var splashMaterial = new THREE.ShaderMaterial({
		  uniforms: splashUniforms,
		  vertexShader: splashVertexShader,
		  fragmentShader: splashFragmentShader,
		  transparent: true
		});

		var dropMesh = new THREE.Mesh(dropGeometry, dropMaterial);
		var splashMesh = new THREE.Mesh(splashGeometry, splashMaterial);
		dropMesh.add(splashMesh);

		// TODO: set appropriate boundingSphere instead of setting frustumCulled false
		//       for the optimization
		dropMesh.frustumCulled = false;
		splashMesh.frustumCulled = false;

		splashMesh.visible = data.splash;

		this.model = dropMesh;
		el.setObject3D('mesh', dropMesh);
		el.emit('model-loaded', {format:'mesh', model: dropMesh});
		 
	  }
	});
	$('a-scene').attr('rain', '');
		$('a-scene').play;
		
	}

});
