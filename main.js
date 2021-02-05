// var cubeRotation = 0.0;

count = 120;

var cube = [];

var player = [];
var police = [];
var dog = [];

var ground = [];
var track = [];
var wall = [];
var train = [];
var coin = [];
var boot = [];
var jetpack = [];
var speed_powerup = [];
var back_jet = [];
var obstacle_1 = [];
var obstacle_2 = [];
var obstacle_3 = [];
var finish_banner = [];

var no_ground = 0;
var no_track = 0;
var no_wall = 0;
var no_train = 0;
var no_coin = 0;
var no_boot = 0;
var no_jetpack = 0;
var no_speed_powerup = 0;
var no_obstacle_1 = 0;
var no_obstacle_2 = 0;
var no_obstacle_3 = 0;

var player_y_coord = INIT_PLAYER_Y;
var police_z_coord = POLICE_Z_1;
var in_sky = false;
var grayscale = false;
var blink = false;

var score = 0;

var theme = document.getElementById("theme");
var coin_audio = document.getElementById("coin");
var guard_catch = document.getElementById("guard_catch");
var jetpack_audio = document.getElementById("jetpack");
var crash = document.getElementById("crash");
var stumble_bush = document.getElementById("stumble_bush");
var intro = document.getElementById("intro");

function playAudio(audio_tag) {
  audio_tag.play();
}

function stopAudio(audio_tag) {
  audio_tag.stop();
}

setInterval(playAudio,13700,theme);
playAudio(intro);
main();

//
// Start here
//
function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  ground_texture = loadTexture(gl,'./textures/ground.jpg');
  grass_texture = loadTexture(gl,'./textures/grass.jpg');
  brick_texture = loadTexture(gl,'./textures/brick.jpg');
  gravel_texture = loadTexture(gl,'./textures/gravel.jpg');
  leather_texture = loadTexture(gl,'./textures/white_leather.jpg');
  steel_texture = loadTexture(gl,'./textures/steel.jpg');
  finish_line = loadTexture(gl,'./textures/finish.jpg');
  train_front = loadTexture(gl,'./textures/train_front.jpg');
  train_front_2 = loadTexture(gl,'./textures/train_front_2.jpg');
  train_front_3 = loadTexture(gl,'./textures/train_front_3.jpg');
  obstacle_1_texture = loadTexture(gl,'./textures/obstacle_1.jpg');
  speedometer = loadTexture(gl,'./textures/speedometer.jpeg');
  wallpaper_1 = loadTexture(gl,'./textures/wallpaper_1.jpg');
  wallpaper_2 = loadTexture(gl,'./textures/wallpaper_2.jpg');
  wallpaper_3 = loadTexture(gl,'./textures/wallpaper_3.jpg');
  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;

  // Vertex Texture Shader program
  const vsSource_Texture = `
  attribute vec4 aVertexPosition;
  attribute vec3 aVertexNormal;
  attribute vec2 aTextureCoord;
  uniform mat4 uNormalMatrix;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;
  void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vTextureCoord = aTextureCoord;
    // Apply lighting effect
    highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
    highp vec3 directionalLightColor = vec3(1, 1, 1);
    highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));
    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
`;

  // Fragment shader program

  const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;

  // Fragment Texture Shader program
  const fsSource_Texture = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;

  const fsSourceTexBlink = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;
    uniform sampler2D uSampler;
    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
       gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
      
      gl_FragColor.r+=0.4;
      gl_FragColor.g+=0.4;
      gl_FragColor.b+=0.4;
    }
  `;

    const fsSourcebw = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    varying lowp vec4 vColor;
    void main(void) {
        float gray = (vColor.r + vColor.g + vColor.b) / 3.0;
        vec3 grayscale = vec3(gray);
        gl_FragColor = vec4(grayscale, vColor.a);
    }
  `;

  const fsSourceTexbw = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;
  uniform sampler2D uSampler;
  void main(void) {
    highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
    
    vec3 color = texelColor.rgb;
    float gray = (color.r + color.g + color.b) / 3.0;
    vec3 grayscale = vec3(gray);
    gl_FragColor = vec4(grayscale , texelColor.a);
  }
`;


  const fsSourceTexBlinkbw = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;
    uniform sampler2D uSampler;
    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
      
      vec3 color = texelColor.rgb;
        float gray = (color.r + color.g + color.b) / 3.0;
        vec3 grayscale = vec3(gray);
      gl_FragColor = vec4(grayscale * vLighting, texelColor.a);
      gl_FragColor.r+=0.4;
      gl_FragColor.g+=0.4;
      gl_FragColor.b+=0.4;
      
    }
  `;

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  const shaderProgrambw = initShaderProgram(gl, vsSource, fsSourcebw);
  const shaderProgram_Texture = initShaderProgram(gl, vsSource_Texture, fsSource_Texture);
  const shaderProgramTexBlink = initShaderProgram(gl, vsSource_Texture, fsSourceTexBlink);
  const shaderProgramTexbw = initShaderProgram(gl, vsSource_Texture, fsSourceTexbw);
  const shaderProgramTexBlinkbw = initShaderProgram(gl, vsSource_Texture, fsSourceTexBlinkbw);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  const programInfobw = {
    program: shaderProgrambw,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgrambw, 'aVertexPosition'),
        vertexColor: gl.getAttribLocation(shaderProgrambw, 'aVertexColor'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgrambw, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgrambw, 'uModelViewMatrix'),
    },
  };

  const programInfo_Texture = {
    program: shaderProgram_Texture,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram_Texture, 'aVertexPosition'),
        textureCoord: gl.getAttribLocation(shaderProgram_Texture, 'aTextureCoord'),
        vertexNormal: gl.getAttribLocation(shaderProgram_Texture, 'aVertexNormal'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram_Texture, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgram_Texture, 'uModelViewMatrix'),
        uSampler: gl.getUniformLocation(shaderProgram_Texture, 'uSampler'),
        normalMatrix: gl.getUniformLocation(shaderProgram_Texture, 'uNormalMatrix'),
    },
  };

  const programInfoTexbw = {
    program: shaderProgramTexbw,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgramTexbw, 'aVertexPosition'),
        textureCoord: gl.getAttribLocation(shaderProgramTexbw, 'aTextureCoord'),
        vertexNormal: gl.getAttribLocation(shaderProgramTexbw, 'aVertexNormal'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgramTexbw, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgramTexbw, 'uModelViewMatrix'),
        uSampler: gl.getUniformLocation(shaderProgramTexbw, 'uSampler'),
        normalMatrix: gl.getUniformLocation(shaderProgramTexbw, 'uNormalMatrix'),
    },
  };

  const programInfoTexBlink = {
    program: shaderProgramTexBlink,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgramTexBlink, 'aVertexPosition'),
        textureCoord: gl.getAttribLocation(shaderProgramTexBlink, 'aTextureCoord'),
        vertexNormal: gl.getAttribLocation(shaderProgramTexBlink, 'aVertexNormal'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgramTexBlink, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgramTexBlink, 'uModelViewMatrix'),
        uSampler: gl.getUniformLocation(shaderProgramTexBlink, 'uSampler'),
        normalMatrix: gl.getUniformLocation(shaderProgramTexBlink, 'uNormalMatrix'),
    },
};

  const programInfoTexBlinkbw = {
    program: shaderProgramTexBlinkbw,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgramTexBlinkbw, 'aVertexPosition'),
        textureCoord: gl.getAttribLocation(shaderProgramTexBlinkbw, 'aTextureCoord'),
        vertexNormal: gl.getAttribLocation(shaderProgramTexBlinkbw, 'aVertexNormal'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgramTexBlinkbw, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgramTexBlinkbw, 'uModelViewMatrix'),
        uSampler: gl.getUniformLocation(shaderProgramTexBlinkbw, 'uSampler'),
        normalMatrix: gl.getUniformLocation(shaderProgramTexBlinkbw, 'uNormalMatrix'),
    },
  };



  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  function init_elements(){
    z_coord = 0;
    for(var k=0; k<TOTAL_GROUND; k++){
      ground.push({
        buffer: initGround(gl),
        draw: drawGround,
        position: [0,-1, z_coord],
      });
      no_ground++;

      var x_offset = -2 * GROUND_WIDTH / 3.0;

      for(var i=0; i<3 ;i++){

        track.push({
        buffer: initTrack(gl),
        draw: drawTrack,
        position: [x_offset,-1 + GROUND_HEIGHT + TRACK_HEIGHT,z_coord],
        });

        x_offset = x_offset + DIST_TRACK;
        no_track++;
      }
      z_coord -= 2*GROUND_LENGTH;
    }

      if(ground.length > TOTAL_GROUND && track.length > 3 * TOTAL_GROUND){
        ground.splice(0, TOTAL_GROUND);
        no_ground -= TOTAL_GROUND;

        track.splice(0, 3*TOTAL_GROUND);
        no_track -= 3*TOTAL_GROUND;
        
      }
  }

  function init_wall(){
    var z_coord = -5;
    for(var k=0; k < TOTAL_WALL; k+=2){


      var rand = getRandomInt(0,2);
      var texture;
      if(rand == 0){
        texture = wallpaper_1;
      } else if (rand == 1){
        texture = wallpaper_1;
      } else if (rand == 2){
        texture = wallpaper_3;
      }

      var x_coord = WALL_OFFSET;
      wall.push({
        buffer: initWall(gl),
        draw: drawWall,
        position: [x_coord,-1 + GROUND_HEIGHT + WALL_HEIGHT ,z_coord],
        visible: true,
        texture: texture,
        });
        no_wall++;

      rand = getRandomInt(0,2);
      texture;
        if(rand == 0){
          texture = wallpaper_1;
        } else if (rand == 1){
          texture = wallpaper_1;
        } else if (rand == 2){
          texture = wallpaper_3;
        }

      var x_coord = -WALL_OFFSET;
      wall.push({
        buffer: initWall(gl),
        draw: drawWall,
        position: [x_coord,-1 + GROUND_HEIGHT + WALL_HEIGHT ,z_coord],
        visible: true,
        texture: texture,

        });
        no_wall++;        

        z_coord -= DIST_WALL;
    }

    if( wall.length > TOTAL_WALL){
      wall.splice(0, TOTAL_WALL);
      no_wall -= TOTAL_WALL;
    }
  }

  function init_train(){
    var z_coord = -20;
    for(var k=0; k < TOTAL_TRAIN; k++){
      var rand = getRandomInt(0,2);
      var texture;
      if(rand == 0){
        texture = train_front;
      } else if (rand == 1){
        texture = train_front_2;
      } else if (rand == 2){
        texture = train_front_3;
      }

      var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];
      train.push({
        buffer: initTrain(gl),
        draw: drawTrain,
        position: [x_coord,-1 + GROUND_HEIGHT + TRACK_HEIGHT + TRAIN_HEIGHT ,z_coord],
        visible: true,
        texture: texture,
        });
        z_coord -= DIST_TRAIN;
        no_train++;
    }

    if( train.length > TOTAL_TRAIN){
      train.splice(0, TOTAL_TRAIN);
      no_train -= TOTAL_TRAIN;
    }
  }

  function init_obstacle_1(){
    var z_coord = -30;
    for(var k=0; k < TOTAL_OBSTACLE_1; k++){
      var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];
      obstacle_1.push({
        buffer: initObstacle_1(gl),
        draw: drawObstacle_1,
        position: [x_coord,-1 + GROUND_HEIGHT + TRACK_HEIGHT + OBSTACLE_1_HEIGHT ,z_coord],
        visible: true,
        });
        z_coord -= DIST_OBSTACLE_1;
        no_obstacle_1++;
    }

    if( obstacle_1.length > TOTAL_OBSTACLE_1){
      obstacle_1.splice(0, TOTAL_OBSTACLE_1);
      no_obstacle_1 -= TOTAL_OBSTACLE_1;
    }
  }

  function init_obstacle_2(){
    var z_coord = -20;
    for(var k=0; k < TOTAL_OBSTACLE_2; k++){
      var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];
      obstacle_2.push({
        buffer: initObstacle_2(gl),
        draw: drawObstacle_2,
        position: [x_coord,-1 + GROUND_HEIGHT + TRACK_HEIGHT + OBSTACLE_2_HEIGHT ,z_coord],
        visible: true,
        });
        z_coord -= DIST_OBSTACLE_2;
        no_obstacle_2++;
    }

    if( obstacle_2.length > TOTAL_OBSTACLE_2){
      obstacle_2.splice(0, TOTAL_OBSTACLE_2);
      no_obstacle_2 -= TOTAL_OBSTACLE_2;
    }
  }

  function init_obstacle_3(){
    var z_coord = -10;
    for(var k=0; k < TOTAL_OBSTACLE_3; k++){
      var x_coord = 0;
      obstacle_3.push({
        buffer: initObstacle_3(gl),
        draw: drawObstacle_3,
        position: [x_coord,-1 + GROUND_HEIGHT + TRACK_HEIGHT + OBSTACLE_3_HEIGHT + 0.1, z_coord],
        visible: true,
        });
        z_coord -= DIST_OBSTACLE_3;
        no_obstacle_3++;
    }

    if( obstacle_3.length > TOTAL_OBSTACLE_3){
      obstacle_3.splice(0, TOTAL_OBSTACLE_3);
      no_obstacle_3 -= TOTAL_OBSTACLE_3;
    }
  }

  function init_coin(){
  
    var z_coord = -5;
    for(var k=0; k<TOTAL_COIN; k+=COIN_CLUSTER_SIZE){
      var rand = getRandomInt(1,4);

      var y_coord;

      if(in_sky){
        y_coord = SKY_LEVEL;
      } else if (!in_sky){
        y_coord = COIN_GROUND_LEVEL;
      }

      if(rand == 4){
        if( TOTAL_COIN - k >= 15){
          var arr = coin_pattern_4(gl, y_coord, z_coord);
          k+=10;
        } else {
          rand = 3;
        }
      }
      if (rand == 3){
        var arr = coin_pattern_3(gl, y_coord, z_coord);
      }
      if (rand == 2){
        var arr = coin_pattern_2(gl, y_coord, z_coord);
      }
      if (rand == 1){
        var arr = coin_pattern_1(gl, y_coord, z_coord);
      }
      

      coin = coin.concat(arr);
      z_coord -= DIST_COIN_CLUSTER;
    }

    if(coin.length > TOTAL_COIN){
      coin.splice(0, TOTAL_COIN);
      no_coin -= TOTAL_COIN;
    }
    // console.log(no_coin);

  }

  function init_boot(){
    var z_coord = -30;
    for(var k=0; k < TOTAL_BOOT; k++){
      var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];
      boot.push({
        buffer: initBoot(gl),
        draw: drawBoot,
        position: [x_coord, -0.75 + GROUND_HEIGHT + TRACK_HEIGHT + BOOT_HEIGHT ,z_coord],
        visible: true,
        });
        z_coord -= DIST_BOOT;
        no_boot++;
    }

    if( boot.length > TOTAL_BOOT){
      boot.splice(0, TOTAL_BOOT);
      no_boot -= TOTAL_BOOT;
    }
  }

  function init_speed_powerup(){
    var z_coord = -10;
    for(var k=0; k < TOTAL_SPEED_POWERUP; k++){
      var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];
      speed_powerup.push({
        buffer: initSpeed(gl),
        draw: drawSpeed,
        position: [x_coord, -0.75 + GROUND_HEIGHT + TRACK_HEIGHT + SPEED_POWERUP_HEIGHT ,z_coord],
        visible: true,
        });
        z_coord -= DIST_SPEED_POWERUP;
        no_speed_powerup++;
    }

    if( speed_powerup.length > TOTAL_SPEED_POWERUP){
      speed_powerup.splice(0, TOTAL_SPEED_POWERUP);
      no_speed_powerup -= TOTAL_SPEED_POWERUP;
    }
  }

  function init_jetpack(){
    var z_coord = -75;
    for(var k=0; k < TOTAL_JETPACK; k++){
      // console.log(k)
      var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];
      jetpack.push({
        buffer: initJetpack(gl),
        draw: drawJetpack,
        position: [x_coord, -0.85 + GROUND_HEIGHT + TRACK_HEIGHT + JETPACK_HEIGHT ,z_coord],
        visible: true,
        rotation: true,
        });
        z_coord -= DIST_JETPACK;
        no_jetpack++;
    }
    // console.log(jetpack)

    if( jetpack.length > TOTAL_JETPACK){
      jetpack.splice(0, TOTAL_JETPACK);
      no_jetpack -= TOTAL_JETPACK;
    }
  }

  setInterval(init_elements, TOTAL_GROUND*GROUND_LENGTH/GAME_SPEED * 8);
  init_elements();

  setInterval(init_wall, TOTAL_WALL*WALL_LENGTH/GAME_SPEED * 8);
  init_wall();
  
  setInterval(init_train, TOTAL_TRAIN*DIST_TRAIN/GAME_SPEED * 8);
  init_train();

  setInterval(init_obstacle_1, TOTAL_OBSTACLE_1*DIST_OBSTACLE_1/GAME_SPEED * 32);
  init_obstacle_1();

  setInterval(init_obstacle_2, TOTAL_OBSTACLE_2*DIST_OBSTACLE_2/GAME_SPEED * 32);
  init_obstacle_2();

  setInterval(init_obstacle_3, TOTAL_OBSTACLE_3*DIST_OBSTACLE_3/GAME_SPEED * 32);
  init_obstacle_3();

  setInterval(init_coin, (TOTAL_COIN/COIN_CLUSTER_SIZE) * DIST_COIN_CLUSTER / GAME_SPEED * 4);
  init_coin();

  setInterval(init_boot, (TOTAL_BOOT) * DIST_BOOT / GAME_SPEED * 32);
  init_boot();

  setInterval(init_speed_powerup, (TOTAL_SPEED_POWERUP) * DIST_SPEED_POWERUP / GAME_SPEED * 32);
  init_speed_powerup();

  setInterval(init_jetpack, (TOTAL_JETPACK) * DIST_JETPACK / GAME_SPEED * 32);
  init_jetpack();


  cube.push({
    buffer: initCube(gl),
    draw: drawCube,
    position: [0,1,-6],
  });

  player.push({
    buffer: initPlayer(gl),
    draw: drawPlayer,
    position: [0, INIT_PLAYER_Y, -4.0],
    velocity: [0,0,0],
  });

  dog.push({
    buffer: initDog(gl),
    draw: drawDog,
    position: [DOG_X_OFFSET, INIT_PLAYER_Y, -3.0],
    velocity: [0,0,0],
  });

  police.push({
    buffer: initPolice(gl),
    draw: drawPolice,
    position: [0, INIT_PLAYER_Y, police_z_coord],
    velocity: [0,0,-0.008],
  });

  back_jet.push({
    buffer: initJetpack(gl),
    draw: drawJetpack,
    position: [0,0,0],
    visible: true,
    rotation: false,
    });

  finish_banner.push({
    buffer: initBanner(gl),
    draw: drawBanner,
    position: [0,BANNER_Y,BANNER_Z],
    visible: true,
    });

  var then = 0;

  setInterval(update_score, 1000);
  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    gl.clearColor(...sky_blue);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    tick();
    drawScene(gl, programInfo, programInfo_Texture, programInfoTexBlink, programInfobw, programInfoTexbw, programInfoTexBlinkbw, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

//
// Draw the scene.
//
function tick() {

    if(player[0].position[2] <= finish_banner[0].position[2]){
      win();
    }

    finish_banner[0].position[2] += GAME_SPEED;

    for(var i=0; i< no_ground; i++){
      ground[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_wall; i++){
      wall[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_train; i++){
      train[i].position[2] += 3*GAME_SPEED;
    }
    
    for(var i=0; i< no_track; i++){
      track[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_obstacle_1; i++){
      obstacle_1[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_obstacle_2; i++){
      obstacle_2[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_obstacle_3; i++){
      obstacle_3[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_coin; i++){
      coin[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_boot; i++){
      boot[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_speed_powerup; i++){
      speed_powerup[i].position[2] += GAME_SPEED;
    }

    for(var i=0; i< no_jetpack; i++){
      jetpack[i].position[2] += GAME_SPEED;
    }

    back_jet[0].position[0] = player[0].position[0];
    back_jet[0].position[1] = player[0].position[1];
    back_jet[0].position[2] = player[0].position[2] + BODY_LENGTH + JETPACK_RADIUS;

    detect_collision();

    if(!in_sky){
      detect_ground();
      gravity_action();
      player_move_y();
    }

    police_move_back();
     
}

function detect_collision() {
  // for(var i=0; i< no_train; i++){
  //   train[i].position[2] += 3*GAME_SPEED;
  // }

  

  for(var i=0; i< no_train; i++){
    if(train[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - train[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - train[i].position[1]) <TORSO_HEIGHT + LEG_HEIGHT + TRAIN_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - train[i].position[2]) < BODY_LENGTH + TRAIN_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Train");
        playAudio(crash);
        lose();
        train[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_obstacle_1; i++){
    if(obstacle_1[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - obstacle_1[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - obstacle_1[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + OBSTACLE_1_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - obstacle_1[i].position[2]) < BODY_LENGTH + OBSTACLE_1_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Obstacle_Stop");
        lose();
        obstacle_1[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_obstacle_2; i++){
    if(obstacle_2[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - obstacle_2[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - obstacle_2[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + OBSTACLE_2_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - obstacle_2[i].position[2]) < BODY_LENGTH + OBSTACLE_2_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Obstacle_Bush");
        police_move_close();
        playAudio(stumble_bush);
        obstacle_2[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_obstacle_3; i++){
    if(obstacle_3[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - obstacle_3[i].position[0]) <= TORSO_WIDTH + OBSTACLE_3_WIDTH);
      collision_y = ( Math.abs(player[0].position[1] - obstacle_3[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + OBSTACLE_3_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - obstacle_3[i].position[2]) < BODY_LENGTH + OBSTACLE_3_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Obstacle_Beam");
        police_move_close();
        obstacle_3[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_coin; i++){
    if(coin[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - coin[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - coin[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + COIN_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - coin[i].position[2]) < BODY_LENGTH + COIN_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Coin");
        playAudio(coin_audio);
        score += 10;
        coin[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_boot; i++){
    if(boot[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - boot[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - boot[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + BOOT_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - boot[i].position[2]) < BODY_LENGTH + BOOT_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Boot");
        inc_velocity();
        setTimeout(restore_velocity, 20000);
        boot[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_speed_powerup; i++){
    if(speed_powerup[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - speed_powerup[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - speed_powerup[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + SPEED_POWERUP_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - speed_powerup[i].position[2]) < BODY_LENGTH + SPEED_POWERUP_LENGTH );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Speed Powerup");
        inc_game_speed();
        setTimeout(restore_game_speed, 20000);
        speed_powerup[i].visible = false;
      }
    }
  }

  for(var i=0; i< no_jetpack; i++){
    if(jetpack[i].visible == true){
      collision_x = ( Math.abs(player[0].position[0] - jetpack[i].position[0]) <= 0.0001 );
      collision_y = ( Math.abs(player[0].position[1] - jetpack[i].position[1]) < TORSO_HEIGHT + LEG_HEIGHT + JETPACK_HEIGHT );
      collision_z = ( Math.abs(player[0].position[2] - jetpack[i].position[2]) < BODY_LENGTH + JETPACK_RADIUS );
      
      if(collision_x && collision_y && collision_z){
        console.log("Collided with Jetpack");
        fly();
        playAudio(jetpack_audio);
        setTimeout(get_down, 20000);
        jetpack[i].visible = false;
      }
    }
  }
}

function detect_ground(){ 
  on_train = false;
  for(var i=0; i< no_train; i++){  
      collision_x = ( Math.abs(player[0].position[0] - train[i].position[0]) <= 0.0001 );
      collision_y = ( player[0].position[1] >= TRAIN_LEVEL );
      collision_z = ( Math.abs(player[0].position[2] - train[i].position[2]) < BODY_LENGTH + TRAIN_LENGTH );
      
      // console.log(collision_x, collision_y, collision_z);
      if(collision_x && collision_y && collision_z){
        on_train = true;
        break;
      }
  }
  if(on_train){
    // console.log("On Train"); 
    player_y_coord = TRAIN_LEVEL;
  } else {
    // console.log("On Ground"); 
    player_y_coord = INIT_PLAYER_Y;
  }

}

function gravity_action(){
  player[0].velocity[1] -= GRAVITY;
}

function player_move_y(){
  player[0].position[1] += player[0].velocity[1];

  if(player[0].position[1] <= player_y_coord){
    player[0].position[1] = player_y_coord;
  }
}


function drawScene(gl, programInfo, programInfo_Texture, programInfoTexBlink, programInfobw, programInfoTexbw, programInfoTexBlinkbw,deltaTime) {

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 1000 units away from the camera.

  fieldOfView = 45 * Math.PI / 180;   // in radians
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    zNear = 0.1;
    zFar = 1000.0;
    projectionMatrix = mat4.create();
    modelViewMatrix = mat4.create();

  
    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
                     fieldOfView,
                     aspect,
                     zNear,
                     zFar);
    if(!in_sky){
      var cameraEye = [ 0, 1, 2 ];
    } else {
      var cameraEye = [ 0, 1.5 + SKY_LEVEL, 2 ];
    }
    var cameraTarget = [ 0, 0, -100 ];
    var up = [0, 1, 0];
    
    mat4.lookAt(modelViewMatrix, cameraEye, cameraTarget, up);
    mat4.multiply(projectionMatrix, projectionMatrix, modelViewMatrix);
    
  
  // Update the rotation for the next draw
  // drawBuildings(gl, programInfo, buildings[0], deltaTime);
  if(grayscale){
    drawElementsColor(programInfobw);
    drawElementsTexture(programInfoTexbw, programInfoTexBlinkbw);
  } else {
    drawElementsColor(programInfo);
    drawElementsTexture(programInfo_Texture, programInfoTexBlink);
  }

  function drawElementsColor(program){
    drawPlayer(gl, program, player[0], deltaTime, projectionMatrix);
    drawPolice(gl, program, police[0], deltaTime, projectionMatrix);
    drawDog(gl, program, dog[0], player[0], deltaTime, projectionMatrix);
    
    for(var i=0; i< no_obstacle_3; i++){
        drawObstacle_3(gl, program, obstacle_3[i], deltaTime, projectionMatrix);
    }

    for(var i=0; i< no_coin; i++){
      if(coin[i].visible){
        drawCoin(gl, program, coin[i], deltaTime, projectionMatrix);
      }
    }

    for(var i=0; i< no_jetpack; i++){
      if(jetpack[i].visible){
        // console.log(jetpack[i])
        drawJetpack(gl, program, jetpack[i], deltaTime, projectionMatrix);
      }
    }

    if(in_sky){
      drawJetpack(gl, program, back_jet[0], deltaTime, projectionMatrix);
    }
  }

  function drawElementsTexture(program, program_blink){

    if(player[0].position[2] - finish_banner[0].position[2] <= 100){
      drawBanner(gl, program, finish_banner[0], deltaTime, projectionMatrix, finish_line);
    }

    for(var i=0; i<no_ground; i++){
      drawGround(gl, program, ground[i], deltaTime, projectionMatrix, ground_texture);
    }

    for(var i=0; i<no_wall; i++){
      
      if(count < 0 && blink){
        drawWallBlink(gl, program_blink, wall[i], deltaTime, projectionMatrix, wall[i].texture);
      } else {
        drawWall(gl, program, wall[i], deltaTime, projectionMatrix, wall[i].texture);
      }
    }
    // drawCube(gl, program, cube[0], deltaTime, projectionMatrix);
    
    for(var i=0; i< no_train; i++){
      if(count < 0 && blink){
        drawTrainBlink(gl, program_blink, train[i], deltaTime, projectionMatrix, train[i].texture);
      } else {
        drawTrain(gl, program, train[i], deltaTime, projectionMatrix, train[i].texture);
      }
    }

    for(var i=0; i< no_track; i++){
      drawTrack(gl, program, track[i], deltaTime, projectionMatrix, steel_texture);
    }

    for(var i=0; i< no_obstacle_1; i++){
      drawObstacle_1(gl, program, obstacle_1[i], deltaTime, projectionMatrix, obstacle_1_texture);
    }

    for(var i=0; i< no_obstacle_2; i++){
      drawObstacle_2(gl, program, obstacle_2[i], deltaTime, projectionMatrix, grass_texture);
    }

    for(var i=0; i< no_boot; i++){
      if(boot[i].visible){
        drawBoot(gl, program, boot[i], deltaTime, projectionMatrix, leather_texture);
      }
    }

    for(var i=0; i< no_speed_powerup; i++){
      if(speed_powerup[i].visible){
        drawSpeed(gl, program, speed_powerup[i], deltaTime, projectionMatrix, speedometer);
      }
    }
  }
  

  count--;
  if (count < -5){
    count = 120;
  }
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function coin_pattern_1(gl, y_coord, z_coord){
  var coin_array = [];

  for(var i=0; i< COIN_CLUSTER_SIZE;i++){
    if(i >= DIFF_X.length){
      j = i % (DIFF_X.length - 1);
    } else {
      j = i;
    }
    var x_coord = DIFF_X[j];
    coin_array.push({
      buffer: initCoin(gl),
      draw: drawCoin,
      position: [x_coord, y_coord, z_coord],
      visible: true,
      });
      z_coord -= DIST_COIN;
      no_coin++;
  }

  return coin_array;
}

function coin_pattern_2(gl, y_coord, z_coord){
  var coin_array = [];

  for(var i=0; i< COIN_CLUSTER_SIZE;i++){
    if(i >= DIFF_X.length){
      j = (DIFF_X.length - 1) - (i % (DIFF_X.length - 1));
    } else {
      j = (DIFF_X.length - 1) - i;
    }
    var x_coord = DIFF_X[j];
    coin_array.push({
      buffer: initCoin(gl),
      draw: drawCoin,
      position: [x_coord, y_coord, z_coord],
      visible: true,
      });
      z_coord -= DIST_COIN;
      no_coin++;
  }

  return coin_array;
}

function coin_pattern_3(gl, y_coord, z_coord){
  var coin_array = [];
  var x_coord = DIFF_X[Math.floor(Math.random()*DIFF_X.length)];

  for(var i=0; i< COIN_CLUSTER_SIZE;i++){
  
    coin_array.push({
      buffer: initCoin(gl),
      draw: drawCoin,
      position: [x_coord, y_coord, z_coord],
      visible: true,
      });
      z_coord -= DIST_COIN;
      no_coin++;
  }

  return coin_array;
}

function coin_pattern_4(gl, y_coord, z_coord){
  var coin_array = [];
  
  for(var i=0; i< COIN_CLUSTER_SIZE;i++){
    
    var x_coord = DIFF_X[0];
    coin_array.push({
      buffer: initCoin(gl),
      draw: drawCoin,
      position: [x_coord, y_coord, z_coord],
      visible: true,
      });
      no_coin++;

    var x_coord = DIFF_X[1];
    coin_array.push({
      buffer: initCoin(gl),
      draw: drawCoin,
      position: [x_coord, y_coord, z_coord],
      visible: true,
      });
      no_coin++;

    var x_coord = DIFF_X[2];
    coin_array.push({
      buffer: initCoin(gl),
      draw: drawCoin,
      position: [x_coord, y_coord, z_coord],
      visible: true,
      });
      no_coin++;

      z_coord -= DIST_COIN;
  }

  return coin_array;
}

function restore_game_speed(){
  GAME_SPEED = NORMAL_GAME_SPEED;
}

function inc_game_speed(){
  GAME_SPEED = MEDIUM_GAME_SPEED;
}

function inc_velocity(){
  JUMP_VELOCITY = BOOST_VELOCITY;
}

function restore_velocity(){
  JUMP_VELOCITY = NORMAL_VELOCITY;
}

function fly(){
  in_sky = true;
  player[0].position[1] = SKY_LEVEL;
  GAME_SPEED = FAST_GAME_SPEED;
  // main();
}

function get_down(){
  in_sky = false;
  player[0].velocity[1] = JUMP_VELOCITY;
  GAME_SPEED = NORMAL_GAME_SPEED;
}

function police_move_close(){
  if (police[0].position[2] < POLICE_Z_1){
    police[0].position[2] = POLICE_Z_3;
    police_z_coord = POLICE_Z_2;
    playAudio(guard_catch);
    lose();
  } else if(police[0].position[2] > POLICE_Z_2){
    police[0].position[2] = POLICE_Z_2;
    police_z_coord = POLICE_Z_1;
  }
}

function police_move_back(){
  if(police[0].position[2] < POLICE_Z_1){
    police[0].position[2] -= police[0].velocity[2];
  }
}

function update_score(){
  document.getElementById("score").innerHTML = score;
}

function lose(){
  alert('You have lost the game.\n Your score:' + score);
  window.location.reload()
  stopAudio(theme);
}

function win(){
  alert('You have won the game.\n Your score:' + score);
  window.location.reload()
  stopAudio(theme);
}