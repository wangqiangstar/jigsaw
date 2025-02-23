import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {JigsawButtonModule, JigsawHeaderModule} from "jigsaw/public_api";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {ThemePropertiesDemoComponent} from "./demo.component";

@NgModule({
    declarations: [ThemePropertiesDemoComponent],
    exports: [ ThemePropertiesDemoComponent ],
    imports: [JigsawButtonModule, JigsawDemoDescriptionModule, JigsawHeaderModule, CommonModule]
})
export class ThemePropertiesDemoModule {
}
