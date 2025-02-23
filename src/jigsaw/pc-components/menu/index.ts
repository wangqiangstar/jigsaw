import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {JigsawListModule} from "../list-and-tile/list";
import {JigsawMenu, JigsawMenuHelper} from "./menu";
import {JigsawNavigationMenu} from "./navigation-menu";
import {JigsawCascadingMenu} from "../../common/directive/menu/cascading-menu";
import { JigsawTooltipModule } from '../../common/directive/tooltip/tooltip';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { InternalUtils } from '../../common/core/utils/internal-utils';
import { JigsawBadgeModule } from '../../common/directive/badge/index';

@NgModule({
    declarations: [JigsawMenu, JigsawCascadingMenu, JigsawMenuHelper, JigsawNavigationMenu],
    exports: [JigsawMenu, JigsawCascadingMenu, JigsawNavigationMenu],
    imports: [JigsawListModule, CommonModule, PerfectScrollbarModule, JigsawTooltipModule, JigsawBadgeModule, TranslateModule.forChild()],
    providers: [TranslateService]
})
export class JigsawMenuModule {
    constructor(translateService: TranslateService) {
        InternalUtils.initI18n(translateService, 'navigation', {
            zh: {
                hide: "收起"
            },
            en: {
                hide: "Dismiss"
            }
        });
        translateService.setDefaultLang(translateService.getBrowserLang());
    }
}

export * from "../../common/directive/menu/cascading-menu";
export * from "./menu";
export * from "./navigation-menu";
