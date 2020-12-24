import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsworkedComponent } from './projectsworked.component';

describe('ProjectsworkedComponent', () => {
  let component: ProjectsworkedComponent;
  let fixture: ComponentFixture<ProjectsworkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsworkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsworkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
