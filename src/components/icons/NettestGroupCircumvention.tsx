import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" xmlSpace="preserve" {...props}><path id="circumvention" d="M21,17.1h-4v-4.5h4V9.3l6,5.4l-6,5.4V17.1z M3,12.6h4.6v4.5H3V12.6z M10,3h4.6v24H10V3z" /></svg>;

export default SvgComponent;