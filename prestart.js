if (versions.hasOwnProperty('input-api')) {
  sc.OPTIONS_DEFINITION['keys-slowmotion'] = {
    type: 'CONTROLS',
    init: { key1: ig.KEY.X },
    cat: sc.OPTION_CATEGORY.CONTROLS,
    hasDivider: true,
    header: 'slowmotion',
  };
}

const TIME_FACTOR = 0.5;

ig.SlowMotion.inject({
  onPostUpdate(...args) {
    if (ig.input.pressed('slowmotion')) {
      if (this.hasSlowMotion('userTriggered')) {
        this.clearNamed('userTriggered', 0);
      } else {
        this.add(TIME_FACTOR, 0, 'userTriggered');
      }
    }
    return this.parent(...args);
  },
});
