
function initJetpack(gl) {

    // Create a buffer for the cube's vertex positions.
  
    const positionBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    // Now create an array of positions for the cube.

    var pi = Math.PI;
    var radius = JETPACK_RADIUS;
    var height = JETPACK_HEIGHT;
    var rect = TOTAL_RECT;
    var offset = JETPACK_OFFSET;
  
    var positions = [];

    for(var i=0; i<TOTAL_RECT; i++){

        var angle_1 = (2*pi/rect)*(i);
        var angle_2 = (2*pi/rect)*(i+1);

        // positions.push(radius*Math.sin(angle_2), -height, radius*Math.cos(angle_2));
        // positions.push(radius*Math.sin(angle_1), -height, radius*Math.cos(angle_1));
        // positions.push(radius*Math.sin(angle_1), height, radius*Math.cos(angle_1));
        
        // positions.push(radius*Math.sin(angle_2), height, radius*Math.cos(angle_2));
        // positions.push(radius*Math.sin(angle_1), height, radius*Math.cos(angle_1));
        // positions.push(radius*Math.sin(angle_1), -height, radius*Math.cos(angle_1));

        positions.push(radius*Math.sin(angle_1) - offset, height, radius*Math.cos(angle_1));
        positions.push(radius*Math.sin(angle_1) - offset, -height, radius*Math.cos(angle_1));
        positions.push(radius*Math.sin(angle_2) - offset, height, radius*Math.cos(angle_2));
        positions.push(radius*Math.sin(angle_2) - offset, -height, radius*Math.cos(angle_2));

    }

    for(var i=0; i<TOTAL_RECT; i++){

        var angle_1 = (2*pi/rect)*(i);
        var angle_2 = (2*pi/rect)*(i+1);

        // positions.push(radius*Math.sin(angle_2), -height, radius*Math.cos(angle_2));
        // positions.push(radius*Math.sin(angle_1), -height, radius*Math.cos(angle_1));
        // positions.push(radius*Math.sin(angle_1), height, radius*Math.cos(angle_1));
        
        // positions.push(radius*Math.sin(angle_2), height, radius*Math.cos(angle_2));
        // positions.push(radius*Math.sin(angle_1), height, radius*Math.cos(angle_1));
        // positions.push(radius*Math.sin(angle_1), -height, radius*Math.cos(angle_1));

        positions.push(radius*Math.sin(angle_1) + offset, height, radius*Math.cos(angle_1));
        positions.push(radius*Math.sin(angle_1) + offset, -height, radius*Math.cos(angle_1));
        positions.push(radius*Math.sin(angle_2) + offset, height, radius*Math.cos(angle_2));
        positions.push(radius*Math.sin(angle_2) + offset, -height, radius*Math.cos(angle_2));

    }

    var width = JETPACK_HANDLE_WIDTH;
    var length = JETPACK_HANDLE_LENGTH;
    var height = JETPACK_HANDLE_HEIGHT;
  
    var handle_positions = [
      // Front face
    
        width - offset,  height, length + radius,
        width - offset, -height, length + radius,
       -width - offset,  height, length + radius,
       -width - offset, -height, length + radius,

        width - offset,  height, -length + radius,
        width - offset, -height, -length + radius,
       -width - offset,  height, -length + radius,
       -width - offset, -height, -length + radius,

       width - offset,   height,  length + radius,
       width - offset,  -height,  length + radius,
       width - offset,   height, -length + radius,
       width - offset,  -height, -length + radius,

       -width - offset,   height,  length + radius,
       -width - offset,  -height,  length + radius,
       -width - offset,   height, -length + radius,
       -width - offset,  -height, -length + radius,

        width - offset,   height,  length + radius,
       -width - offset,   height,  length + radius,
        width - offset,   height, -length + radius,
       -width - offset,   height, -length + radius,

        width - offset,   -height,  length + radius,
       -width - offset,   -height,  length + radius,
        width - offset,   -height, -length + radius,
       -width - offset,   -height, -length + radius,

       width + offset,  height, length + radius,
        width + offset, -height, length + radius,
       -width + offset,  height, length + radius,
       -width + offset, -height, length + radius,

        width + offset,  height, -length + radius,
        width + offset, -height, -length + radius,
       -width + offset,  height, -length + radius,
       -width + offset, -height, -length + radius,

       width + offset,   height,  length + radius,
       width + offset,  -height,  length + radius,
       width + offset,   height, -length + radius,
       width + offset,  -height, -length + radius,

       -width + offset,   height,  length + radius,
       -width + offset,  -height,  length + radius,
       -width + offset,   height, -length + radius,
       -width + offset,  -height, -length + radius,

        width + offset,   height,  length + radius,
       -width + offset,   height,  length + radius,
        width + offset,   height, -length + radius,
       -width + offset,   height, -length + radius,

        width + offset,   -height,  length + radius,
       -width + offset,   -height,  length + radius,
        width + offset,   -height, -length + radius,
       -width + offset,   -height, -length + radius,
  
    ];

    positions = positions.concat(...handle_positions);

    
    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  
    // // Now set up the colors for the faces. We'll use solid colors
    // // for each face.
  
    var faceColors = [];

    for(var i=0; i<TOTAL_RECT * 2; i++){
        faceColors.push(light_green);
    }

    for(var i=0; i< 12; i++){
        faceColors.push(yellow);
    }
  
    // Convert the array of colors into a table for all the vertices.
  
    var colors = [];
  
    for(var j = 0;j<faceColors.length;j++)
    {
        const c = faceColors[j];
      
        var c1 = [];
        for(var k=0; k<c.length-1; k++){
            c1.push(c[k]/1.5);
        }

        c1.push(c[c.length - 1]);
        // Repeat each color four times for the four vertices of the face
        colors = colors.concat(c, c1, c, c1);
    }
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    // Build the element array buffer; this specifies the indices
    // into the vertex arrays for each face's vertices.

    const textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

      var textureCoordinates = [
        // Front
        4.0,  0.0,
        4.0,  4.0,
        0.0,  0.0,
        0.0,  4.0,
        // Back
        0.0,  0.0,
        4.0,  0.0,
        4.0,  4.0,
        0.0,  4.0,
        // Top
        0.0,  0.0,
        4.0,  0.0,
        4.0,  4.0,
        0.0,  4.0,
        // Bottom
        0.0,  0.0,
        4.0,  0.0,
        4.0,  4.0,
        0.0,  4.0,
        // Right
        0.0,  0.0,
        4.0,  0.0,
        4.0,  4.0,
        0.0,  4.0,
        // Left
        0.0,  0.0,
        4.0,  0.0,
        4.0,  4.0,
        0.0,  4.0,
      ];

      textureCoordinates = textureCoordinates.concat(...textureCoordinates);

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                    gl.STATIC_DRAW);

  
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

  function drawJetpack(gl, programInfo, jetpack, deltaTime, projectionMatrix, texture){

    var seconds = new Date().getTime() / 1000;
    
    rotation_angle = seconds * 2;
    
  
    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    modelViewMatrix = mat4.create();
  
    // Now move the drawing position a bit to where we want to
    // start drawing the square.
  
    mat4.translate(modelViewMatrix,     // destination matrix
                   modelViewMatrix,     // matrix to translate
                   jetpack.position);  // amount to translate

    if(jetpack.rotation){
        mat4.rotate(modelViewMatrix,     // destination matrix
                        modelViewMatrix,     // matrix to rotate
                        rotation_angle,
                        [0.0,1.0,0.0]);
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
      // console.log(jetpack.buffer.position)
      gl.bindBuffer(gl.ARRAY_BUFFER, jetpack.buffer.position);
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

    // {
    //   const numComponents = 2;
    //   const type = gl.FLOAT;
    //   const normalize = false;
    //   const stride = 0;
    //   const offset = 0;
    //   gl.bindBuffer(gl.ARRAY_BUFFER, jetpack.buffer.texture);
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
  
    // Tell WebGL how to pull out the colors from the color buffer
    // into the vertexColor attribute.
    {
      numComponents = 4;
      type = gl.FLOAT;
      normalize = false;
      stride = 0;
      offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, jetpack.buffer.color);
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
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, jetpack.buffer.indices);
  
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

      // Specify the texture to map onto the faces.

      // Tell WebGL we want to affect texture unit 0
    //   gl.activeTexture(gl.TEXTURE0);

    //   // Bind the texture to texture unit 0
    //   gl.bindTexture(gl.TEXTURE_2D, texture);
    //   gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
      // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

      // Tell the shader we bound the texture to texture unit 0
  
    {
      vertexCount = 6 * TOTAL_RECT * 2 + 36 * 2;
      type = gl.UNSIGNED_SHORT;
      offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
  
    // cubeRotation+=deltaTime;
  }