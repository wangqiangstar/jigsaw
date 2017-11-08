import {NgModule} from '@angular/core';
import {JigsawTableModule} from "jigsaw/component/table/table";
import {JigsawButtonModule} from "jigsaw/component/button/button";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {TableHideHeadDemoComponent} from './app.component';

@NgModule({
    imports: [JigsawTableModule, JigsawButtonModule, JigsawDemoDescriptionModule],
    declarations: [TableHideHeadDemoComponent],
    bootstrap: [TableHideHeadDemoComponent]
})
export class TableHideHeadDemoModule {
}
