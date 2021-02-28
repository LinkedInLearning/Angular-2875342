import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h2').textContent;
    expect(title).toBe('Active Users');
  });
});