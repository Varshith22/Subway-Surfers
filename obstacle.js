function initObstacle_3(gl) {

  // Create a buffer for the cube's vertex positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.

  var width = OBSTACLE_3_WIDTH;
  var length = OBSTACLE_3_LENGTH;
  var height = OBSTACLE_3_HEIGHT;

  var handle_width = OBSTACLE_3_HANDLE_WIDTH;
  var handle_length = OBSTACLE_3_HANDLE_LENGTH;
  var handle_height = OBSTACLE_3_HANDLE_HEIGHT;
  var offset = OBSTACLE_3_WIDTH;

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

     handle_width + offset,  handle_height, handle_length,
      handle_width + offset, -handle_height, handle_length,
     -handle_width + offset,  handle_height, handle_length,
     -handle_width + offset, -handle_height, handle_length,

      handle_width + offset,  handle_height, -handle_length,
      handle_width + offset, -handle_height, -handle_length,
     -handle_width + offset,  handle_height, -handle_length,
     -handle_width + offset, -handle_height, -handle_length,

     handle_width + offset,   handle_height,  handle_length,
     handle_width + offset,  -handle_height,  handle_length,
     handle_width + offset,   handle_height, -handle_length,
     handle_width + offset,  -handle_height, -handle_length,

     -handle_width + offset,   handle_height,  handle_length,
     -handle_width + offset,  -handle_height,  handle_length,
     -handle_width + offset,   handle_height, -handle_length,
     -handle_width + offset,  -handle_height, -handle_length,

      handle_width + offset,   handle_height,  handle_length,
     -handle_width + offset,   handle_height,  handle_length,
      handle_width + offset,   handle_height, -handle_length,
     -handle_width + offset,   handle_height, -handle_length,

      handle_width + offset,   -handle_height,  handle_length,
     -handle_width + offset,   -handle_height,  handle_length,
      handle_width + offset,   -handle_height, -handle_length,
     -handle_width + offset,   -handle_height, -handle_length,

     handle_width - offset,  handle_height, handle_length,
      handle_width - offset, -handle_height, handle_length,
     -handle_width - offset,  handle_height, handle_length,
     -handle_width - offset, -handle_height, handle_length,

      handle_width - offset,  handle_height, -handle_length,
      handle_width - offset, -handle_height, -handle_length,
     -handle_width - offset,  handle_height, -handle_length,
     -handle_width - offset, -handle_height, -handle_length,

     handle_width - offset,   handle_height,  handle_length,
     handle_width - offset,  -handle_height,  handle_length,
     handle_width - offset,   handle_height, -handle_length,
     handle_width - offset,  -handle_height, -handle_length,

     -handle_width - offset,   handle_height,  handle_length,
     -handle_width - offset,  -handle_height,  handle_length,
     -handle_width - offset,   handle_height, -handle_length,
     -handle_width - offset,  -handle_height, -handle_length,

      handle_width - offset,   handle_height,  handle_length,
     -handle_width - offset,   handle_height,  handle_length,
      handle_width - offset,   handle_height, -handle_length,
     -handle_width - offset,   handle_height, -handle_length,

      handle_width - offset,   -handle_height,  handle_length,
     -handle_width - offset,   -handle_height,  handle_length,
      handle_width - offset,   -handle_height, -handle_length,
     -handle_width - offset,   -handle_height, -handle_length,

  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.

  var faceColors = [];

  var item = train_color[Math.floor(Math.random()*train_color.length)];
  for(var i=0; i<6; i++){
      faceColors.push(item);
  }

  var item = train_color[Math.floor(Math.random()*train_color.length)];
  for(var i=0; i<12; i++){
    faceColors.push(item);
}


  //for the glass on the obstacle
  // for(var i=0; i<6; i++){
  //     faceColors.push(glass_color);
  // }

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
    colors = colors.concat(c, c, c1, c1);
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // Front TEXTURE
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  var textureCoordinates = [];
  textureCoordinates = textureCoordinates.concat(texture_front_and_sides);
  textureCoordinates = textureCoordinates.concat(texture_front_and_sides);
  textureCoordinates = textureCoordinates.concat(texture_front_and_sides);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);


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

  return {
    position: positionBuffer,
    color: colorBuffer,
    texture: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function drawObstacle_3(gl, programInfo, obstacle, deltaTime, projectionMatrix, texture){
  
  var seconds = new Date().getTime() / 1000;
    
  obstacle.position[0] = STRIDE * Math.sin(seconds * 3);
  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 obstacle.position);  // amount to translate

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
    gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.position);
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
    gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.color);
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

  // {
  //   const numComponents = 2;
  //   const type = gl.FLOAT;
  //   const normalize = false;
  //   const stride = 0;
  //   const offset = 0;
  //   gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.texture);
  //   gl.vertexAttribPointer(
  //       programInfo.attribLocations.textureCoord,
  //       numComponents,
  //       type,
  //       normalize,
  //       stride,
  //       offset);
  //   gl.enableVertexAttribArray(
  //       programInfo.attribLocations.textureCoord);
  // }

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, obstacle.buffer.indices);

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
    
      // gl.activeTexture(gl.TEXTURE0);

      // // Bind the texture to texture unit 0
      // gl.bindTexture(gl.TEXTURE_2D, texture);
      // gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  {
    vertexCount = 36 * 3;
    type = gl.UNSIGNED_SHORT;
    offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // cubeRotation+=deltaTime;
}

function initObstacle_2(gl) {

  // Create a buffer for the cube's vertex positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.

  var width = OBSTACLE_2_WIDTH;
  var length = OBSTACLE_2_LENGTH;
  var height = OBSTACLE_2_HEIGHT;
  var offset = OBSTACLE_2_OFFSET + OBSTACLE_2_WIDTH;

  const positions = [
    // Front face
      // RIGHT BUSH //
      width + offset,  height, length,
      width + offset, -height, length,
     -width + offset,  height, length,
     -width + offset, -height, length,

      width + offset,  height, -length,
      width + offset, -height, -length,
     -width + offset,  height, -length,
     -width + offset, -height, -length,

     width + offset,   height,  length,
     width + offset,  -height,  length,
     width + offset,   height, -length,
     width + offset,  -height, -length,

     -width + offset,   height,  length,
     -width + offset,  -height,  length,
     -width + offset,   height, -length,
     -width + offset,  -height, -length,

      width + offset,   height,  length,
     -width + offset,   height,  length,
      width + offset,   height, -length,
     -width + offset,   height, -length,

      width + offset,   -height,  length,
     -width + offset,   -height,  length,
      width + offset,   -height, -length,
     -width + offset,   -height, -length,

    // LEFT BUSH //
     width - offset,  height, length,
      width - offset, -height, length,
     -width - offset,  height, length,
     -width - offset, -height, length,

      width - offset,  height, -length,
      width - offset, -height, -length,
     -width - offset,  height, -length,
     -width - offset, -height, -length,

     width - offset,   height,  length,
     width - offset,  -height,  length,
     width - offset,   height, -length,
     width - offset,  -height, -length,

     -width - offset,   height,  length,
     -width - offset,  -height,  length,
     -width - offset,   height, -length,
     -width - offset,  -height, -length,

      width - offset,   height,  length,
     -width - offset,   height,  length,
      width - offset,   height, -length,
     -width - offset,   height, -length,

      width - offset,   -height,  length,
     -width - offset,   -height,  length,
      width - offset,   -height, -length,
     -width - offset,   -height, -length,

     // FORWARD BUSH //
     width,  height, length - offset,
      width, -height, length - offset,
     -width,  height, length - offset,
     -width, -height, length - offset,

      width,  height, -length - offset,
      width, -height, -length - offset,
     -width,  height, -length - offset,
     -width, -height, -length - offset,

     width,   height,  length - offset,
     width,  -height,  length - offset,
     width,   height, -length - offset,
     width,  -height, -length - offset,

     -width,   height,  length - offset,
     -width,  -height,  length - offset,
     -width,   height, -length - offset,
     -width,  -height, -length - offset,

      width,   height,  length - offset,
     -width,   height,  length - offset,
      width,   height, -length - offset,
     -width,   height, -length - offset,

      width,   -height,  length - offset,
     -width,   -height,  length - offset,
      width,   -height, -length - offset,
     -width,   -height, -length - offset,

  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.

  var faceColors = [];

  for(var i=0; i<6 * 3; i++){
      faceColors.push(light_green);
  }

  //for the glass on the obstacle
  // for(var i=0; i<6; i++){
  //     faceColors.push(glass_color);
  // }

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
    colors = colors.concat(c1, c, c, c1);
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // Front TEXTURE
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  var textureCoordinates = [];
  textureCoordinates = textureCoordinates.concat(texture_front_and_sides);
  textureCoordinates = textureCoordinates.concat(texture_front_and_sides);
  textureCoordinates = textureCoordinates.concat(texture_front_and_sides);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);


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

  return {
    position: positionBuffer,
    color: colorBuffer,
    texture: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function drawObstacle_2(gl, programInfo, obstacle, deltaTime, projectionMatrix, texture){
  

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 obstacle.position);  // amount to translate

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
    gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.position);
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
  // {
  //   numComponents = 4;
  //   type = gl.FLOAT;
  //   normalize = false;
  //   stride = 0;
  //   offset = 0;
  //   gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.color);
  //   gl.vertexAttribPointer(
  //       programInfo.attribLocations.vertexColor,
  //       numComponents,
  //       type,
  //       normalize,
  //       stride,
  //       offset);
  //   gl.enableVertexAttribArray(
  //       programInfo.attribLocations.vertexColor);
  // }

  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.texture);
    gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoord,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.textureCoord);
  }

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, obstacle.buffer.indices);

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
    
      gl.activeTexture(gl.TEXTURE0);

      // Bind the texture to texture unit 0
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  {
    vertexCount = 36 * 3;
    type = gl.UNSIGNED_SHORT;
    offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // cubeRotation+=deltaTime;
}

function initObstacle_1(gl) {

    // Create a buffer for the cube's vertex positions.
  
    const positionBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    // Now create an array of positions for the cube.

    var width = OBSTACLE_1_WIDTH;
    var length = OBSTACLE_1_LENGTH;
    var height = OBSTACLE_1_HEIGHT;
  
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
  
    // Now set up the colors for the faces. We'll use solid colors
    // for each face.
  
    var faceColors = [];

    var item = train_color[Math.floor(Math.random()*train_color.length)];
    for(var i=0; i<6; i++){
        faceColors.push(item);
    }

    //for the glass on the obstacle
    // for(var i=0; i<6; i++){
    //     faceColors.push(glass_color);
    // }
  
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
      colors = colors.concat(c1, c, c, c1);
    }
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // Front TEXTURE
    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

    var textureCoordinates = [];
    textureCoordinates = textureCoordinates.concat(texture_front_and_sides);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                  gl.STATIC_DRAW);
  
  
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
  
    return {
      position: positionBuffer,
      color: colorBuffer,
      texture: textureCoordBuffer,
      indices: indexBuffer,
    };
  }

  function drawObstacle_1(gl, programInfo, obstacle, deltaTime, projectionMatrix, texture){
    
  
    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    modelViewMatrix = mat4.create();
  
    // Now move the drawing position a bit to where we want to
    // start drawing the square.
  
    mat4.translate(modelViewMatrix,     // destination matrix
                   modelViewMatrix,     // matrix to translate
                   obstacle.position);  // amount to translate
  
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
      gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.position);
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
    // {
    //   numComponents = 4;
    //   type = gl.FLOAT;
    //   normalize = false;
    //   stride = 0;
    //   offset = 0;
    //   gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.color);
    //   gl.vertexAttribPointer(
    //       programInfo.attribLocations.vertexColor,
    //       numComponents,
    //       type,
    //       normalize,
    //       stride,
    //       offset);
    //   gl.enableVertexAttribArray(
    //       programInfo.attribLocations.vertexColor);
    // }

    {
      const numComponents = 2;
      const type = gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, obstacle.buffer.texture);
      gl.vertexAttribPointer(
          programInfo.attribLocations.textureCoord,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.textureCoord);
    }
  
    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, obstacle.buffer.indices);
  
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
      
        gl.activeTexture(gl.TEXTURE0);

        // Bind the texture to texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

    {
      vertexCount = 36 ;
      type = gl.UNSIGNED_SHORT;
      offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
  
    // cubeRotation+=deltaTime;
  }