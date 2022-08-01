import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" xmlSpace="preserve" {...props}><g><path id="Shape" d="M26.5,15c0,1.5-0.3,3.1-1,4.5c-1.2,2.8-3.3,4.9-6.1,6.1c-2.9,1.2-6.1,1.2-8.9,0c-2.7-1.2-4.9-3.3-6.1-6.1 c-1.2-2.9-1.2-6.1,0-8.9c1.2-2.9,3.4-5,6.1-6.2c2.9-1.2,6.1-1.2,8.9,0s4.9,3.3,6.1,6.1C26.3,12,26.5,13.5,26.5,15z M18.8,20.3 l1.9-8.9c0.1-0.3,0-0.5-0.1-0.9c-0.2-0.2-0.4-0.2-0.6-0.1L8.9,14.7c-0.2,0.1-0.3,0.2-0.5,0.3c-0.1,0.1-0.1,0.2,0,0.3 c0.1,0.1,0.2,0.2,0.4,0.2l2.8,0.9l6.5-4.2c0.2-0.1,0.3-0.1,0.4-0.1s0,0.1,0,0.2l-5.4,4.8L13,20c0.2,0,0.4-0.1,0.5-0.3l1.4-1.4 l2.9,2.1C18.3,21.1,18.7,20.9,18.8,20.3L18.8,20.3z" /></g></svg>;

export default SvgComponent;