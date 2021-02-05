function initPlayer(gl) {

    // Create a buffer for the cube's vertex positions.
  
    const positionBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer);
  
    // Now create an array of positions for the cube.

    var width = TORSO_WIDTH;
    var length = BODY_LENGTH;
    var height = TORSO_HEIGHT;
  
    const positions = [
      // Front face
    
        width,  height, length,
        width, -height, length,
       -width,  height, length,
       -width, -height, length,

        width,  height, -length,
        width, -height, -length,
       -width,  height, -length,
       -width, -height, -length,

       width,   height,  length,
       width,  -height,  length,
       width,   height, -length,
       width,  -height, -length,

       -width,   height,  length,
       -width,  -height,  length,
       -width,   height, -length,
       -width,  -height, -length,

        width,   height,  length,
       -width,   height,  length,
        width,   height, -length,
       -width,   height, -length,

        width,   -height,  length,
       -width,   -height,  length,
        width,   -height, -length,
       -width,   -height, -length,
  
    ];
  
    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const headBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
  
    gl.bindBuffer(gl.ARRAY_BUFFER, headBuffer);
    // gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer);
  
    // Now create an array of positions for the cube.

    var width = HEAD_WIDTH;
    var length = BODY_LENGTH;
    var height = HEAD_HEIGHT;
  
    const head_array = [
      // Front face
    
        width,  height + TORSO_HEIGHT + HEAD_HEIGHT, length,
        width, -height + TORSO_HEIGHT + HEAD_HEIGHT, length,
       -width,  height + TORSO_HEIGHT + HEAD_HEIGHT, length,
       -width, -height + TORSO_HEIGHT + HEAD_HEIGHT, length,

        width,  height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
        width, -height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
       -width,  height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
       -width, -height + TORSO_HEIGHT + HEAD_HEIGHT, -length,

       width,   height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
       width,  -height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
       width,   height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
       width,  -height + TORSO_HEIGHT + HEAD_HEIGHT, -length,

       -width,   height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
       -width,  -height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
       -width,   height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
       -width,  -height + TORSO_HEIGHT + HEAD_HEIGHT, -length,

        width,   height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
       -width,   height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
        width,   height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
       -width,   height + TORSO_HEIGHT + HEAD_HEIGHT, -length,

        width,   -height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
       -width,   -height + TORSO_HEIGHT + HEAD_HEIGHT,  length,
        width,   -height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
       -width,   -height + TORSO_HEIGHT + HEAD_HEIGHT, -length,
  
    ];
  
    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(head_array), gl.STATIC_DRAW);

    const handBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, handBuffer);

    var width = HAND_WIDTH;
    var length = BODY_LENGTH/3.0;
    var height = HAND_HEIGHT;

    var hand_array = [
      // Front face
    
        width - HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, length,
        width - HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, length,
       -width - HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, length,
       -width - HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, length,

        width - HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, -length,
        width - HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width - HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width - HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, -length,

       width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       width - HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       width - HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT, -length,

       -width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width - HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width - HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT, -length,

        width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
        width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width - HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,

        width - HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width - HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
        width - HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width - HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT, -length,
  
    ];


    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hand_array), gl.STATIC_DRAW);

    const handBuffer_2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, handBuffer_2);

    var width = HAND_WIDTH;
    var length = BODY_LENGTH/3.0;
    var height = HAND_HEIGHT;

    var hand_array = [
      // Front face
    
        width + HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, length,
        width + HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, length,
       -width + HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, length,
       -width + HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, length,

        width + HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, -length,
        width + HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width + HAND_SHIFT,  height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width + HAND_SHIFT, -height + TORSO_HEIGHT - HAND_HEIGHT, -length,

       width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       width + HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       width + HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT, -length,

       -width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width + HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width + HAND_SHIFT,  -height + TORSO_HEIGHT - HAND_HEIGHT, -length,

        width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT,  length,
        width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width + HAND_SHIFT,   height + TORSO_HEIGHT - HAND_HEIGHT, -length,

        width + HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
       -width + HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT,  length,
        width + HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT, -length,
       -width + HAND_SHIFT,   -height + TORSO_HEIGHT - HAND_HEIGHT, -length,
  
    ];


    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hand_array), gl.STATIC_DRAW);

    const legBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer);

    var width = LEG_WIDTH;
    var length = BODY_LENGTH/2.0;
    var height = LEG_HEIGHT;

    var leg_array = [
      // Front face
    
        width - LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, length,
        width - LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, length,
       -width - LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, length,
       -width - LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, length,

        width - LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, -length,
        width - LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width - LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width - LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, -length,

       width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       width - LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       width - LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT, -length,

       -width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width - LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width - LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT, -length,

        width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
        width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width - LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,

        width - LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width - LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
        width - LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width - LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT, -length,
  
    ];


    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(leg_array), gl.STATIC_DRAW);

    const legBuffer_2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer_2);

    var width = LEG_WIDTH;
    var length = BODY_LENGTH/2.0;
    var height = LEG_HEIGHT;

    var leg_array_2 = [
      // Front face
    
        width + LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, length,
        width + LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, length,
       -width + LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, length,
       -width + LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, length,

        width + LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, -length,
        width + LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width + LEG_SHIFT,  height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width + LEG_SHIFT, -height - TORSO_HEIGHT - LEG_HEIGHT, -length,

       width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       width + LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       width + LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT, -length,

       -width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width + LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width + LEG_SHIFT,  -height - TORSO_HEIGHT - LEG_HEIGHT, -length,

        width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT,  length,
        width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width + LEG_SHIFT,   height - TORSO_HEIGHT - LEG_HEIGHT, -length,

        width + LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
       -width + LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT,  length,
        width + LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT, -length,
       -width + LEG_SHIFT,   -height - TORSO_HEIGHT - LEG_HEIGHT, -length,
  
    ];


    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(leg_array_2), gl.STATIC_DRAW);


  
    // Now set up the colors for the faces. We'll use solid colors
    // for each face.
  
    var faceColors = [];
    var faceColors_leg = [];
    var faceColors_leg_2 = [];
    var faceColors_hand = [];
    var faceColors_hand_2 = [];
    var faceColors_head = [];

    for(var i=0; i<6; i++){
        faceColors.push(red);
    }

    for(var i=0; i<6; i++){
      faceColors_leg.push(blue);
    }

    for(var i=0; i<6; i++){
      faceColors_leg_2.push(blue);
    }

    for(var i=0; i<6; i++){
      faceColors_head.push(skin_color);
    }

    for(var i=0; i<6; i++){
      faceColors_hand.push(skin_color);
    }

    for(var i=0; i<6; i++){
      faceColors_hand_2.push(skin_color);
    }
  
    // Convert the array of colors into a table for all the vertices.
  
    var colors = [];
  
    for (var j = 0; j < faceColors.length; ++j) {
      const c = faceColors[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors = colors.concat(c, c1, c, c1);
    }

    var colors_hand = [];
  
    for (var j = 0; j < faceColors_hand.length; ++j) {
      const c = faceColors_hand[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_hand = colors_hand.concat(c, c1, c, c1);
    }

    var colors_hand_2 = [];
  
    for (var j = 0; j < faceColors_hand_2.length; ++j) {
      const c = faceColors_hand_2[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_hand_2 = colors_hand_2.concat(c, c1, c, c1);
    }

    var colors_leg = [];
  
    for (var j = 0; j < faceColors_leg.length; ++j) {
      const c = faceColors_leg[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_leg = colors_leg.concat(c, c1, c, c1);
    }

    var colors_leg_2 = [];
  
    for (var j = 0; j < faceColors_leg_2.length; ++j) {
      const c = faceColors_leg_2[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_leg_2 = colors_leg_2.concat(c, c1, c, c1);
    }

    var colors_head = [];
  
    for (var j = 0; j < faceColors_head.length; ++j) {
      const c = faceColors_head[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_head = colors_head.concat(c, c1, c, c1);
    }
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    const colorBuffer_hand = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_hand);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_hand), gl.STATIC_DRAW);

    const colorBuffer_hand_2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_hand_2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_hand_2), gl.STATIC_DRAW);

    const colorBuffer_leg = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_leg);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_leg), gl.STATIC_DRAW);

    const colorBuffer_leg_2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_leg_2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_leg_2), gl.STATIC_DRAW);

    const colorBuffer_head = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_head);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_head), gl.STATIC_DRAW);
  
    // Build the element array buffer; this specifies the indices
    // into the vertex arrays for each face's vertices.
  
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors.length; i++){
        indices.push(4*i);
        indices.push(4*i+1);
        indices.push(4*i+2);

        indices.push(4*i+1);
        indices.push(4*i+2);
        indices.push(4*i+3);
    }
  
    // Now send the element array to GL
  
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);

    const indexBuffer_hand = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_hand);

    
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_hand.length; i++){
        indices.push(4*i);
        indices.push(4*i+1);
        indices.push(4*i+2);

        indices.push(4*i+1);
        indices.push(4*i+2);
        indices.push(4*i+3);
    }
  
    // Now send the element array to GL
  
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices), gl.STATIC_DRAW);

    const indexBuffer_hand_2 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_hand_2);
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_hand_2.length; i++){
        indices.push(4*i);
        indices.push(4*i+1);
        indices.push(4*i+2);

        indices.push(4*i+1);
        indices.push(4*i+2);
        indices.push(4*i+3);
    }
  
    // Now send the element array to GL
  
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);    

    const indexBuffer_leg = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_leg);

    
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_leg.length; i++){
        indices.push(4*i);
        indices.push(4*i+1);
        indices.push(4*i+2);

        indices.push(4*i+1);
        indices.push(4*i+2);
        indices.push(4*i+3);
    }
  
    // Now send the element array to GL
  
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices), gl.STATIC_DRAW);

    const indexBuffer_leg_2 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_leg_2);
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_leg_2.length; i++){
        indices.push(4*i);
        indices.push(4*i+1);
        indices.push(4*i+2);

        indices.push(4*i+1);
        indices.push(4*i+2);
        indices.push(4*i+3);
    }
  
    // Now send the element array to GL
  
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);

    const indexBuffer_head = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_head);
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_head.length; i++){
        indices.push(4*i);
        indices.push(4*i+1);
        indices.push(4*i+2);

        indices.push(4*i+1);
        indices.push(4*i+2);
        indices.push(4*i+3);
    }
  
    // Now send the element array to GL
  
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);
  
    return {
      position: positionBuffer,
      color: colorBuffer,
      indices: indexBuffer,
      hand: handBuffer,
      color_hand : colorBuffer_hand,
      indices_hand : indexBuffer_hand,
      hand_2: handBuffer_2,
      color_hand_2 : colorBuffer_hand_2,
      indices_hand_2 : indexBuffer_hand_2,
      leg: legBuffer,
      color_leg : colorBuffer_leg,
      indices_leg : indexBuffer_leg,
      leg_2: legBuffer_2,
      color_leg_2 : colorBuffer_leg_2,
      indices_leg_2 : indexBuffer_leg_2,
      head: headBuffer,
      color_head : colorBuffer_head,
      indices_head : indexBuffer_head,
    };
  }

  function drawPlayer(gl, programInfo, player, deltaTime, projectionMatrix, texture){
    
    var seconds = new Date().getTime() / 1000;
    
    rotation_angle = Math.PI/2.0 * Math.sin(seconds * 10);

    draw_parts(gl, programInfo, projectionMatrix, player.position, player.buffer.position, player.buffer.color, player.buffer.indices, 36, null)
    draw_parts(gl, programInfo, projectionMatrix, player.position, player.buffer.hand, player.buffer.color_hand, player.buffer.indices_hand, 36, [-1.0,1.0,0.0])
    draw_parts(gl, programInfo, projectionMatrix, player.position, player.buffer.hand_2, player.buffer.color_hand_2, player.buffer.indices_hand_2, 36, [1.0,1.0,0.0])
    draw_parts(gl, programInfo, projectionMatrix, player.position, player.buffer.leg, player.buffer.color_leg, player.buffer.indices_leg, 36, [1.0,0.0,0.0])
    draw_parts(gl, programInfo, projectionMatrix, player.position, player.buffer.leg_2, player.buffer.color_leg_2, player.buffer.indices_leg_2, 36, [-1.0,0.0,0.0])
    draw_parts(gl, programInfo, projectionMatrix, player.position, player.buffer.head, player.buffer.color_head, player.buffer.indices_head, 36, null)
  
  }


  function draw_parts(gl, programInfo, projectionMatrix, translate_position, vertices, colors, indices, vertex_count, rotation_axis){
    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    mat4.translate(modelViewMatrix,     // destination matrix
                  modelViewMatrix,     // matrix to translate
                  translate_position);  // amount to translate

    if(rotation_axis && !in_sky)
    {
      mat4.rotate(modelViewMatrix,     // destination matrix
                    modelViewMatrix,     // matrix to rotate
                    rotation_angle,
                    rotation_axis);
    }
        

    //Write your code to Rotate the cube here//


    // mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation, [0,1,1]);

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute
    {
      numComponents = 3;
      type = gl.FLOAT;
      normalize = false;
      stride = 0;
      offset = 0;
      // console.log(player.buffer.position)
      gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexPosition);
    }

    // Tell WebGL how to pull out the colors from the color buffer
    // into the vertexColor attribute.
    {
      numComponents = 4;
      type = gl.FLOAT;
      normalize = false;
      stride = 0;
      offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, colors);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexColor,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexColor);
    }

    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);

    // Tell WebGL to use our program when drawing

    gl.useProgram(programInfo.program);

    // Set the shader uniforms

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);

    {
      vertexCount =vertex_count;
      type = gl.UNSIGNED_SHORT;
      offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
}
