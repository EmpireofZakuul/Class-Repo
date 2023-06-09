import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddstudentPage } from './addstudent.page';

describe('AddstudentPage', () => {
  let component: AddstudentPage;
  let fixture: ComponentFixture<AddstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
