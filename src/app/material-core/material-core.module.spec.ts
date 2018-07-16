import { MaterialCoreModule } from './material-core.module';

describe('MaterialCoreModule', () => {
  let materialCoreModule: MaterialCoreModule;

  beforeEach(() => {
    materialCoreModule = new MaterialCoreModule();
  });

  it('should create an instance', () => {
    expect(materialCoreModule).toBeTruthy();
  });
});
