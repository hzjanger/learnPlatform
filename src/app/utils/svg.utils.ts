import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
export const loadSvgResource = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {

  const imgUrl = 'assets/img/svg';
  //搜索图标
  iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-search-24px.svg`))
  //星星图标(实心)
  iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-star-24px.svg`));
  //星星图标(空心)
  iconRegistry.addSvgIcon('star-border', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-star_border-24px.svg`));
  //用户图标
  iconRegistry.addSvgIcon('person-outline', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-person_outline-24px.svg`));
  //上一页图标
  iconRegistry.addSvgIcon('navigate-before', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-navigate_before-24px.svg`));
  //下一页图标
  iconRegistry.addSvgIcon('navigate-next', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-navigate_next-24px.svg`))


}
