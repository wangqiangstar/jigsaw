import { NgModule } from "@angular/core";
import {JigsawTransferModule, JigsawButtonModule, JigsawHeaderModule, JigsawButtonBarModule} from "jigsaw/public_api";
import { JigsawDemoDescriptionModule } from "app/demo-description/demo-description";
import { TransferTableDemoComponent } from "./demo.component";

@NgModule({
    declarations: [TransferTableDemoComponent],
    exports: [TransferTableDemoComponent],
    imports: [
        JigsawDemoDescriptionModule, JigsawTransferModule, JigsawHeaderModule, JigsawButtonModule,
        JigsawButtonBarModule
    ]
})
export class TransferTableDemoModule {

}
