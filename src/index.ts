import {FrameworkConfiguration} from 'aurelia-framework';
import { ShowTextCustomElement } from "./show-text";

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(["./show-text"]);  //aurelia-cli dep tracer will not pick up on requiring this unless it's also imported (and used)
    
    //amd compile will fail with an unused import.. 
    ShowTextCustomElement;
}