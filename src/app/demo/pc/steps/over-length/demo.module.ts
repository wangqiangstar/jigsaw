import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JigsawDemoDescriptionModule } from "app/demo-description/demo-description";
import { JigsawStepOverLengthDemoComponent } from "./demo.component";
import { JigsawStepsModule, JigsawHeaderModule } from "jigsaw/public_api";

@NgModule({
    imports: [
        JigsawStepsModule,
        CommonModule,
        JigsawDemoDescriptionModule,
        JigsawHeaderModule
    ],
    declarations: [JigsawStepOverLengthDemoComponent],
    exports: [JigsawStepOverLengthDemoComponent]
})
export class JigsawStepOverLengthDemoModule {}
