<script>
export default {
    functional: true,

    props: {
    icon: {
      type: String,
      default: ''
    },
  },

  render(createElement, { props }) {
    let svgHTML = '';
    try {
      svgHTML = require(`!html-loader!@/assets/svg/icon-${props.icon}.svg`);
    } catch(e) {
      console.warn(`Unable to load "icon-${props.icon}.svg" icon. Verify it exists in the icons directory.`, e);
    }
    return createElement(
      'span',
      {
        class:'icon',
        domProps: {
        innerHTML: svgHTML
        }
      }
    );
  }
};
</script>
}
</script>