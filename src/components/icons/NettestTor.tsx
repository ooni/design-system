import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => <svg baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" xmlSpace="preserve" {...props}><g><path id="tor-glyph" d="M15,24.4V23c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8V5.6 c5.2,0,9.4,4.2,9.4,9.4C24.4,20.2,20.2,24.4,15,24.4z M15,19.5c2.5,0,4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5V9.1c3.3,0,5.9,2.7,5.9,5.9 c0,3.3-2.6,5.9-5.9,5.9V19.5z M15,12.6c1.3,0,2.4,1.1,2.4,2.4c0,1.3-1.1,2.4-2.4,2.4V12.6z M3.5,15c0,6.4,5.1,11.5,11.5,11.5 c6.4,0,11.5-5.1,11.5-11.5c0-6.4-5.1-11.5-11.5-11.5C8.6,3.5,3.5,8.6,3.5,15z" /></g></svg>;

export default SvgComponent;