import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawBoxModule, JigsawHeaderModule} from "jigsaw/public_api";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {BoxLayoutDemoComponent} from "./demo.component";

@NgModule({
    declarations: [BoxLayoutDemoComponent],
    exports: [BoxLayoutDemoComponent],
    imports: [JigsawDemoDescriptionModule, JigsawBoxModule, CommonModule, JigsawHeaderModule]
})
export class BoxLayoutDemoModule {

}
