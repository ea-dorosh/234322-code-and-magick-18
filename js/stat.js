'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 160;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 80;
var BAR_MAX_HEIGHT = 130;
var TEXT_HEIGHT = 20;
var COLUMN_PADDING = 80;
var BAR_WIDTH = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  arr.forEach(function (el) {
    if (el > maxElement) {
      maxElement = el;
    }
  });

  return maxElement;
};

var getRandomNumber = function (maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!  ', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  names.forEach(function (currentEl, index) {

    var barHeight = (BAR_MAX_HEIGHT * times[index]) / maxTime;
    if (currentEl === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(246, ' + getRandomNumber(100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + COLUMN_GAP * (index + 1), (CLOUD_Y + COLUMN_PADDING) + (BAR_MAX_HEIGHT - barHeight), BAR_WIDTH, barHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[index]), CLOUD_X + COLUMN_GAP * (index + 1), (CLOUD_Y + TEXT_HEIGHT * 3 + GAP) + (BAR_MAX_HEIGHT - barHeight));
    ctx.fillText(currentEl, CLOUD_X + COLUMN_GAP * (index + 1), CLOUD_Y + BAR_MAX_HEIGHT + TEXT_HEIGHT * 5);
  });
};
