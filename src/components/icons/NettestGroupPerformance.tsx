import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" {...props}><defs><clipPath id="clip-path"><rect width={30} height={30} style={{
        fill: "none"
      }} /></clipPath></defs><title>{"Performance"}</title><g style={{
    clipPath: "url(#clip-path)"
  }}><polygon points="9.61 4.234 21.196 4.234 16.573 13.499 21.196 13.499 13.091 27.387 13.091 16.961 9.61 16.961 9.61 4.234" /></g></svg>;

export default SvgComponent;