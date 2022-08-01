import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" {...props}><defs><clipPath id="clip-path"><rect width={30} height={30} style={{
        fill: "none"
      }} /></clipPath></defs><title>{"Middle Boxes"}</title><g style={{
    clipPath: "url(#clip-path)"
  }}><polygon points="22.232 6.653 10.382 12.578 10.382 17.022 7.419 15.541 7.419 11.097 19.269 5.172 14.826 2.95 2.976 8.875 2.976 20.725 14.826 26.65 26.676 20.725 26.676 8.875 22.232 6.653" /></g></svg>;

export default SvgComponent;