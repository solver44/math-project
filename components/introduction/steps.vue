<script>
export default {
  functional: true,
  render(createElement, { props, data, children })
  {

    let classT = props.setClass;
    let delay = props.delay || 0;
    let tag = props.tag || "span";
    let animation = props.animation || "entranceFromRight";
    const wait = props.wait != null;

    if(props.fromTop != undefined) animation = 'entranceFromTop'
    if(props.fromRight != undefined) animation = 'entranceFromRight'
    if(props.fromBottom != undefined) animation = 'entranceFromBottom'
    if(props.fromLeft != undefined) animation = 'entranceFromLeft'

    if (children) {
      let delaySecond = 0;
      let duration = 0;

      children.forEach(async (child, index) => {
        if(!child.tag)
        return;
        delaySecond += child.data.attrs.dly || delay;
        if(wait)
          duration = child.data.attrs.drt || 1000;
        const hide = child.data.attrs.hide != null;
        child.data.staticStyle = {
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: delaySecond + "ms",
        };
        delaySecond += duration;
        if(hide){
          setTimeout(async () => {
            var newone = child.elm.cloneNode(true);
            newone.classList.add('reverse-entrance');
            child.elm.parentNode.replaceChild(newone, child.elm);
            if((children.length-1) == index)
              props.lastHide();
          }, delaySecond );
        }
        
        child.data.staticClass += " " + animation;
      });
    }
    return createElement(tag,{
        attrs: { class: classT}
      },children);
  }
}
</script>