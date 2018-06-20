import { MenuPlannerAppPage } from './app.po';

describe('menu-planner-app App', () => {
  let page: MenuPlannerAppPage;

  beforeEach(() => {
    page = new MenuPlannerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
