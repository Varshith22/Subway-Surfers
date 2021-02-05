function initDog(gl) {

    // Create a buffer for the cube's vertex positions.
  
    const positionBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer);
  
    // Now create an array of positions for the cube.

    var width = DOG_TORSO_WIDTH;
    var length = DOG_TORSO_LENGTH;
    var height = DOG_TORSO_HEIGHT;
  
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

    var width = DOG_HEAD_WIDTH;
    var length = DOG_HEAD_LENGTH;
    var height = DOG_HEAD_HEIGHT;
    var y_offset = DOG_HEAD_HEIGHT + DOG_TORSO_HEIGHT;
    var z_offset = DOG_HEAD_LENGTH + DOG_TORSO_LENGTH;
  
    const head_array = [
      // Front face
    
        width,  height + y_offset, length - z_offset,
        width, -height + y_offset, length - z_offset,
       -width,  height + y_offset, length - z_offset,
       -width, -height + y_offset, length - z_offset,

        width,  height + y_offset, -length - z_offset,
        width, -height + y_offset, -length - z_offset,
       -width,  height + y_offset, -length - z_offset,
       -width, -height + y_offset, -length - z_offset,

       width,   height + y_offset,  length - z_offset,
       width,  -height + y_offset,  length - z_offset,
       width,   height + y_offset, -length - z_offset,
       width,  -height + y_offset, -length - z_offset,

       -width,   height + y_offset,  length - z_offset,
       -width,  -height + y_offset,  length - z_offset,
       -width,   height + y_offset, -length - z_offset,
       -width,  -height + y_offset, -length - z_offset,

        width,   height + y_offset,  length - z_offset,
       -width,   height + y_offset,  length - z_offset,
        width,   height + y_offset, -length - z_offset,
       -width,   height + y_offset, -length - z_offset,

        width,   -height + y_offset,  length - z_offset,
       -width,   -height + y_offset,  length - z_offset,
        width,   -height + y_offset, -length - z_offset,
       -width,   -height + y_offset, -length - z_offset,
  
    ];
  
    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(head_array), gl.STATIC_DRAW);

    const legBuffer_1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer_1);

    var width = DOG_LEG_WIDTH;
    var length = DOG_LEG_LENGTH;
    var height = DOG_LEG_HEIGHT;

    var x_offset = DOG_TORSO_WIDTH - DOG_LEG_WIDTH;
    var y_offset = -(DOG_TORSO_HEIGHT + DOG_LEG_HEIGHT);
    var z_offset = DOG_TORSO_LENGTH - DOG_LEG_LENGTH;

    var leg_array_1 = position_arr_maker(width, length, height, x_offset, y_offset, z_offset);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(leg_array_1), gl.STATIC_DRAW);


    const legBuffer_2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer_2);

    var width = DOG_LEG_WIDTH;
    var length = DOG_LEG_LENGTH;
    var height = DOG_LEG_HEIGHT;

    var x_offset = -(DOG_TORSO_WIDTH - DOG_LEG_WIDTH);
    var y_offset = -(DOG_TORSO_HEIGHT + DOG_LEG_HEIGHT);
    var z_offset = DOG_TORSO_LENGTH - DOG_LEG_LENGTH;

    var leg_array_2 = position_arr_maker(width, length, height, x_offset, y_offset, z_offset);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(leg_array_2), gl.STATIC_DRAW);

    const legBuffer_3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer_3);

    var width = DOG_LEG_WIDTH;
    var length = DOG_LEG_LENGTH;
    var height = DOG_LEG_HEIGHT;

    var x_offset = DOG_TORSO_WIDTH - DOG_LEG_WIDTH;
    var y_offset = -(DOG_TORSO_HEIGHT + DOG_LEG_HEIGHT);
    var z_offset = -(DOG_TORSO_LENGTH - DOG_LEG_LENGTH);

    var leg_array_3 = position_arr_maker(width, length, height, x_offset, y_offset, z_offset);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(leg_array_3), gl.STATIC_DRAW);

    const legBuffer_4 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, legBuffer_4);

    var width = DOG_LEG_WIDTH;
    var length = DOG_LEG_LENGTH;
    var height = DOG_LEG_HEIGHT;

    var x_offset = -(DOG_TORSO_WIDTH - DOG_LEG_WIDTH);
    var y_offset = -(DOG_TORSO_HEIGHT + DOG_LEG_HEIGHT);
    var z_offset = -(DOG_TORSO_LENGTH - DOG_LEG_LENGTH);

    var leg_array_4 = position_arr_maker(width, length, height, x_offset, y_offset, z_offset);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(leg_array_4), gl.STATIC_DRAW);
    

    const earsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, earsBuffer);

    var width = DOG_EAR_WIDTH;
    var length = DOG_EAR_LENGTH;
    var height = DOG_EAR_HEIGHT;

    var x_offset = -(DOG_HEAD_WIDTH - DOG_EAR_WIDTH/2.0);
    var y_offset = DOG_TORSO_HEIGHT + 3*DOG_EAR_HEIGHT + DOG_HEAD_HEIGHT;
    var z_offset = (DOG_TORSO_LENGTH + DOG_EAR_LENGTH);

    var temp_1 = position_arr_maker(width, length, height, x_offset, y_offset, z_offset);

    var x_offset = DOG_HEAD_WIDTH - DOG_EAR_WIDTH/2.0;
    var y_offset = DOG_TORSO_HEIGHT + 3*DOG_EAR_HEIGHT + DOG_HEAD_HEIGHT;
    var z_offset = (DOG_TORSO_LENGTH + DOG_EAR_LENGTH);

    var temp_2 = position_arr_maker(width, length, height, x_offset, y_offset, z_offset);

    var ears = [];
    ears = ears.concat(...temp_1)
    ears = ears.concat(...temp_2)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ears), gl.STATIC_DRAW);

  
    // Now set up the colors for the faces. We'll use solid colors
    // for each face.
  
    var faceColors = [];
    var faceColors_leg_1 = [];
    var faceColors_leg_2 = [];
    var faceColors_leg_3 = [];
    var faceColors_leg_4 = [];
    var faceColors_head = [];
    var faceColors_ears = [];

    for(var i=0; i<6; i++){
        faceColors.push(skin_color);
    }

    for(var i=0; i<6; i++){
      faceColors_head.push(skin_color);
    }

    for(var i=0; i<6; i++){
      faceColors_leg_1.push(brown);
    }

    for(var i=0; i<6; i++){
      faceColors_leg_2.push(brown);
    }

    for(var i=0; i<6; i++){
      faceColors_leg_3.push(brown);
    }

    for(var i=0; i<6; i++){
      faceColors_leg_4.push(brown);
    }

    for(var i=0; i<12; i++){
        faceColors_ears.push(brown);
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

    var colors_ears = [];
  
    for (var j = 0; j < faceColors_ears.length; ++j) {
      const c = faceColors_ears[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_ears = colors_ears.concat(c, c1, c, c1);
    }

    var colors_leg_1 = [];
  
    for (var j = 0; j < faceColors_leg_1.length; ++j) {
      const c = faceColors_leg_1[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_leg_1 = colors_leg_1.concat(c, c1, c, c1);
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

    var colors_leg_3 = [];
  
    for (var j = 0; j < faceColors_leg_3.length; ++j) {
      const c = faceColors_leg_3[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_leg_3 = colors_leg_3.concat(c, c1, c, c1);
    }

    var colors_leg_4 = [];
  
    for (var j = 0; j < faceColors_leg_4.length; ++j) {
      const c = faceColors_leg_4[j];

      var c1 = [];
      for(var k=0; k<c.length-1; k++){
          c1.push(c[k]/1.5);
      }

      c1.push(c[c.length - 1]);
  
      // Repeat each color four times for the four vertices of the face
      colors_leg_4 = colors_leg_4.concat(c, c1, c, c1);
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

    const colorBuffer_ears = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_ears);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_ears), gl.STATIC_DRAW);

    const colorBuffer_leg_1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_leg_1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_leg_1), gl.STATIC_DRAW);

    const colorBuffer_leg_2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_leg_2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_leg_2), gl.STATIC_DRAW);

    const colorBuffer_leg_3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_leg_3);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_leg_3), gl.STATIC_DRAW);

    const colorBuffer_leg_4 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer_leg_4);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_leg_4), gl.STATIC_DRAW);

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

    const indexBuffer_ears = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_ears);
    
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_ears.length; i++){
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

    const indexBuffer_leg_1 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_leg_1);

    
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_leg_1.length; i++){
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

    const indexBuffer_leg_3 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_leg_3);

    
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_leg_3.length; i++){
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

    const indexBuffer_leg_4 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer_leg_4);
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    var indices = [];

    for(var i=0; i<faceColors_leg_4.length; i++){
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
      ears: earsBuffer,
      color_ears: colorBuffer_ears,
      indices_ears: indexBuffer_ears,
      leg_1: legBuffer_1,
      color_leg_1 : colorBuffer_leg_1,
      indices_leg_1 : indexBuffer_leg_1,
      leg_2: legBuffer_2,
      color_leg_2 : colorBuffer_leg_2,
      indices_leg_2 : indexBuffer_leg_2,
      leg_3: legBuffer_3,
      color_leg_3 : colorBuffer_leg_3,
      indices_leg_3 : indexBuffer_leg_3,
      leg_4: legBuffer_4,
      color_leg_4 : colorBuffer_leg_4,
      indices_leg_4 : indexBuffer_leg_4,
      head: headBuffer,
      color_head : colorBuffer_head,
      indices_head : indexBuffer_head,
    };
  }

  function drawDog(gl, programInfo, dog, player, deltaTime, projectionMatrix, texture){
    
    var seconds = new Date().getTime() / 1000;
    
    rotation_angle = Math.PI/3.0 * Math.sin(seconds * 10);

    if(!in_sky){
        dog.position[0] = player.position[0] + DOG_X_OFFSET;
        dog.position[1] = player.position[1];
        dog.position[2] = player.position[2] + DOG_Z_OFFSET;
    }

    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.position, dog.buffer.color, dog.buffer.indices, 36, null)
    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.leg_1, dog.buffer.color_leg_1, dog.buffer.indices_leg_1, 36, [-1.0,0.0,0.0])
    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.ears, dog.buffer.color_ears, dog.buffer.indices_ears, 72, null)
    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.leg_2, dog.buffer.color_leg_2, dog.buffer.indices_leg_2, 36, [1.0,0.0,0.0])
    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.leg_3, dog.buffer.color_leg_3, dog.buffer.indices_leg_3, 36, [-1.0,0.0,0.0])
    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.leg_4, dog.buffer.color_leg_4, dog.buffer.indices_leg_4, 36, [1.0,0.0,0.0])
    draw_parts_dog(gl, programInfo, projectionMatrix, dog.position, dog.buffer.head, dog.buffer.color_head, dog.buffer.indices_head, 36, null)
  
  }


  function draw_parts_dog(gl, programInfo, projectionMatrix, translate_position, vertices, colors, indices, vertex_count, rotation_axis){
    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    mat4.translate(modelViewMatrix,     // destination matrix
                  modelViewMatrix,     // matrix to translate
                  translate_position);  // amount to translate

    if(rotation_axis)
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

function position_arr_maker(w,l,h,x,y,z){

    var width = w;
    var length = l;
    var height = h;
    var x_offset = x;
    var y_offset = y;
    var z_offset = z;
  
    var position = [
      // Front face
    
        width + x_offset,  height + y_offset, length - z_offset,
        width + x_offset, -height + y_offset, length - z_offset,
       -width + x_offset,  height + y_offset, length - z_offset,
       -width + x_offset, -height + y_offset, length - z_offset,

        width + x_offset,  height + y_offset, -length - z_offset,
        width + x_offset, -height + y_offset, -length - z_offset,
       -width + x_offset,  height + y_offset, -length - z_offset,
       -width + x_offset, -height + y_offset, -length - z_offset,

       width + x_offset,   height + y_offset,  length - z_offset,
       width + x_offset,  -height + y_offset,  length - z_offset,
       width + x_offset,   height + y_offset, -length - z_offset,
       width + x_offset,  -height + y_offset, -length - z_offset,

       -width + x_offset,   height + y_offset,  length - z_offset,
       -width + x_offset,  -height + y_offset,  length - z_offset,
       -width + x_offset,   height + y_offset, -length - z_offset,
       -width + x_offset,  -height + y_offset, -length - z_offset,

        width + x_offset,   height + y_offset,  length - z_offset,
       -width + x_offset,   height + y_offset,  length - z_offset,
        width + x_offset,   height + y_offset, -length - z_offset,
       -width + x_offset,   height + y_offset, -length - z_offset,

        width + x_offset,   -height + y_offset,  length - z_offset,
       -width + x_offset,   -height + y_offset,  length - z_offset,
        width + x_offset,   -height + y_offset, -length - z_offset,
       -width + x_offset,   -height + y_offset, -length - z_offset,
  
    ];

    return position;
}