if (versions.hasOwnProperty('input-api')) {
  ig.lang.labels.sc.gui.options.controls.keys.slowmotion =
    'Activate slowmotion';
  ig.lang.labels.sc.gui.options.headers.slowmotion = 'slowmotion';
} else {
  ig.input.bind(ig.KEY.X, 'slowmotion');
}
