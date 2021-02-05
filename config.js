var GAME_SPEED = 0.05;
var NORMAL_GAME_SPEED = 0.05;
var MEDIUM_GAME_SPEED = 0.10;
var FAST_GAME_SPEED = 0.15;

var GRAVITY = 0.0040;

var GROUND_WIDTH = 3;
var GROUND_LENGTH = 10.0;
var GROUND_HEIGHT = 0.25;
var GROUND_LEVEL = GROUND_HEIGHT;
var SKY_LEVEL = 2.0;
var TOTAL_GROUND = 5;

var LEFT = -2 * GROUND_WIDTH / 3.0;
var RIGHT = 2 * GROUND_WIDTH / 3.0;
var STRIDE = 2 * GROUND_WIDTH / 3.0;

var TRAIN_WIDTH = GROUND_WIDTH/5.0;
var TRAIN_LENGTH = 3.0;
var TRAIN_HEIGHT = 0.6;

var TRACK_WIDTH = GROUND_WIDTH/6.0;
var TRACK_HEIGHT = 0.015;
var RAIL_WIDTH = 0.015;
var TOTAL_RAIL = 15;

var OBSTACLE_1_WIDTH = TRACK_WIDTH;
var OBSTACLE_1_LENGTH = 0.05;
var OBSTACLE_1_HEIGHT = 0.39;
var TOTAL_OBSTACLE_1 = 5;
var DIST_OBSTACLE_1 = 15.0;

var OBSTACLE_2_WIDTH = TRACK_WIDTH/2.0;
var OBSTACLE_2_LENGTH = 0.08;
var OBSTACLE_2_HEIGHT = 0.15;
var OBSTACLE_2_OFFSET = 0.08;
var TOTAL_OBSTACLE_2 = 5;
var DIST_OBSTACLE_2 = 25.0;

var OBSTACLE_3_WIDTH = TRACK_WIDTH;
var OBSTACLE_3_LENGTH = 0.08;
var OBSTACLE_3_HEIGHT = 0.05;
var OBSTACLE_3_HANDLE_WIDTH = 0.06;
var OBSTACLE_3_HANDLE_LENGTH = 0.1;
var OBSTACLE_3_HANDLE_HEIGHT = 0.06;
var TOTAL_OBSTACLE_3 = 5;
var DIST_OBSTACLE_3 = 45.0;

var BOOT_WIDTH = 0.1;
var BOOT_HEIGHT = 0.10;
var BOOT_LENGTH = 0.05;
var BOOT_OFFSET = 0.075;
var DIST_BOOT = 100.0;
var TOTAL_BOOT = 2;

var BANNER_WIDTH = 2*GROUND_WIDTH;
var BANNER_HEIGHT = 1.0;
var BANNER_LENGTH = 0.05;
var BANNER_Z = -500;
var BANNER_Y = 2.25;

var SPEED_POWERUP_WIDTH = 0.15;
var SPEED_POWERUP_HEIGHT = 0.15;
var SPEED_POWERUP_LENGTH = 0.01;
var DIST_SPEED_POWERUP = 100.0;
var TOTAL_SPEED_POWERUP = 2;

var TOTAL_RECT = 50;
var JETPACK_OFFSET = 0.075;
var JETPACK_RADIUS = 0.075/2;
var JETPACK_HEIGHT = 0.2/2;
var JETPACK_HANDLE_HEIGHT = 0.01/2;
var JETPACK_HANDLE_WIDTH = 0.01/2;
var JETPACK_HANDLE_LENGTH = 0.2/2;
var DIST_JETPACK = 100.0;
var TOTAL_JETPACK = 2;

var WALL_WIDTH = 1.0;
var WALL_HEIGHT = 1.0;
var WALL_LENGTH = 5.0;
var WALL_OFFSET = WALL_WIDTH + GROUND_WIDTH;
var DIST_WALL = 12.0; + 2 * WALL_LENGTH;
var TOTAL_WALL = 10;

var DIST_TRACK = 2 * GROUND_WIDTH / 3.0;
var DIST_RAIL = GROUND_LENGTH / 8.0;

var DIFF_X = [ -2 * GROUND_WIDTH / 3.0, 0, 2 * GROUND_WIDTH / 3.0 ];
var DIST_TRAIN = 15.0;
var TOTAL_TRAIN = 5;

var GLASS_WIDTH = GROUND_WIDTH/6.0;
var GLASS_LENGTH = 0.01;
var GLASS_HEIGHT = 0.15;

var POLICE_Z_1 = -1.0;
var POLICE_Z_2 = -3.0;
var POLICE_Z_3 = -4.0;

var BODY_LENGTH = 0.05;

var TORSO_WIDTH = 0.10;
var TORSO_HEIGHT = 0.10;

var HEAD_WIDTH = 0.05;
var HEAD_HEIGHT = 0.05;
var CAP_HEIGHT = 0.025;

var LEG_WIDTH = 0.02;
var LEG_HEIGHT = 0.10;
var LEG_SHIFT = 0.035;

var HAND_WIDTH = 0.02;
var HAND_HEIGHT = 0.10;
var HAND_SHIFT = HAND_WIDTH + TORSO_WIDTH;

var DOG_X_OFFSET = 0.25;
var DOG_Z_OFFSET = 1.0;
var DOG_TORSO_LENGTH = 0.10;
var DOG_TORSO_WIDTH = 0.08;
var DOG_TORSO_HEIGHT = 0.08;

var DOG_HEAD_LENGTH = 0.06;
var DOG_HEAD_WIDTH = 0.04;
var DOG_HEAD_HEIGHT = 0.04;

var DOG_LEG_LENGTH = 0.025;
var DOG_LEG_WIDTH = 0.025;
var DOG_LEG_HEIGHT = 0.075;

var DOG_EAR_LENGTH = 0.02;
var DOG_EAR_WIDTH = 0.01;
var DOG_EAR_HEIGHT = 0.02;

var COIN_WIDTH = 0.10;
var COIN_HEIGHT = 0.10;
var COIN_LENGTH = 0.03;
var TOTAL_COIN = 15;
var COIN_CLUSTER_SIZE = 5;
var DIST_COIN = 2.0;
var DIST_COIN_CLUSTER = 20.0;
var COIN_GROUND_LEVEL = -0.95 + GROUND_HEIGHT + TRACK_HEIGHT + COIN_HEIGHT;

var NORMAL_VELOCITY = 0.070;
var BOOST_VELOCITY = 0.135;
var JUMP_VELOCITY = NORMAL_VELOCITY;

var PLAYER_CENTER = GROUND_HEIGHT + TRACK_HEIGHT + TORSO_HEIGHT + 2*LEG_HEIGHT;
var INIT_PLAYER_Y = -1.05 + PLAYER_CENTER;
var TRAIN_LEVEL = INIT_PLAYER_Y + 2 * TRAIN_HEIGHT;

const ground_color = [ 255.0/255.0, 222.0/255.0, 173.0/255.0, 1.0 ];
const glass_color = [ 168.0/255.0, 204.0/255.0, 215.0/255.0, 0.1 ];
const skin_color = [ 255.0/255.0, 224.0/255.0, 189.0/255.0, 1.0 ];
const brown = [ 139.0/255.0, 69.0/255.0, 19.0/255.0, 1.0 ];
const black = [ 0.0/255.0, 0.0/255.0, 0.0/255.0, 1.0 ];
const red = [ 255.0/255.0, 0.0/255.0, 0.0/255.0, 1.0 ];
const green = [ 0.0/255.0, 255.0/255.0, 0.0/255.0, 1.0 ];
const blue = [ 0.0/255.0, 0.0/255.0, 255.0/255.0, 1.0 ];
const sky_blue = [ 135/256, 206/256, 235/256, 1.0 ];
const purple = [ 189.0/255.0, 0.0/255.0, 255.0/255.0, 1.0 ];
const yellow = [ 227.0/255.0, 255.0/255.0, 0.0/255.0, 1.0 ];
const orange = [ 255.0/255.0, 154.0/255.0, 0.0/255.0, 1.0 ];
const light_blue = [ 51.0/255.0, 51.0/255.0, 255.0/255.0, 1.0 ];
const light_green = [ 0.0/255.0, 255.0/255.0, 128.0/255.0, 1.0 ];
const light_red = [ 255.0/255.0, 51.0/255.0, 51.0/255.0, 1.0 ];

var ground_texture, grass_texture, finish_line, speedometer, brick_texture, gravel_texture, leather_texture, steel_texture, train_front, train_front_2, train_front_3, obstacle_1_texture;
var wallpaper_1, wallpaper_2, wallpaper_3;
var train_color = [light_blue, light_green, light_red, purple, orange, yellow];



var texture_front_and_sides = [
    // Front
    1.0,  0.0,
    1.0,  1.0,
    0.0,  0.0,
    0.0,  1.0,
    // Back
    0.0,  0.0,
    0.0,  0.0,
    0.0,  0.0,
    0.0,  0.0,
    // Right
    2.0,  0.0,
    2.0,  1.0,
    0.0,  0.0,
    0.0,  1.0,
    // Left
    2.0,  0.0,
    2.0,  1.0,
    0.0,  0.0,
    0.0,  1.0,
    // Top
    0.0,  0.0,
    0.0,  0.0,
    0.0,  0.0,
    0.0,  0.0,
    // Bottom
    0.0,  0.0,
    0.0,  0.0,
    0.0,  0.0,
    0.0,  0.0,
  ];


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}